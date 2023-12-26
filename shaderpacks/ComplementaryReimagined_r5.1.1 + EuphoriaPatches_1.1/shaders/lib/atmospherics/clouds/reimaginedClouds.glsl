#ifndef INCLUDE_CLOUD_COORD
    #include "/lib/atmospherics/clouds/cloudCoord.glsl"
    #define INCLUDE_CLOUD_COORD
#endif

const float cloudStretch = CLOUD_STRETCH;
const float cloudHeightShader  = cloudStretch * 2.0;

bool GetCloudNoise(vec3 tracePos, inout vec3 tracePosM, int cloudAltitude) {
    tracePosM = ModifyTracePos(tracePos, cloudAltitude);
    vec2 coord = GetRoundedCloudCoord(tracePosM.xz, CLOUD_ROUNDNESS);

    #ifdef DEFERRED1
        float noise = texture2D(colortex3, coord).b;
    #elif defined GBUFFERS_WATER
        float noise = texture2D(gaux4, coord).b;
    #endif

    float threshold = clamp(abs(cloudAltitude - tracePos.y) / cloudStretch, 0.001, 0.999);
    threshold = pow2(pow2(pow2(threshold)));
    return noise > threshold * 0.5 + 0.25;
}

vec4 GetVolumetricClouds(int cloudAltitude, float distanceThreshold, inout float cloudLinearDepth, float skyFade, float skyMult0, vec3 cameraPos, vec3 nPlayerPos, float lViewPosM, float VdotS, float VdotU, float dither) {
    vec4 volumetricClouds = vec4(0.0);

    float higherPlaneAltitude = cloudAltitude + cloudStretch;
    float lowerPlaneAltitude  = cloudAltitude - cloudStretch;

    float lowerPlaneDistance  = (lowerPlaneAltitude - cameraPos.y) / nPlayerPos.y;
    float higherPlaneDistance = (higherPlaneAltitude - cameraPos.y) / nPlayerPos.y;
    float minPlaneDistance = min(lowerPlaneDistance, higherPlaneDistance);
          minPlaneDistance = max(minPlaneDistance, 0.0);
    float maxPlaneDistance = max(lowerPlaneDistance, higherPlaneDistance);
    if (maxPlaneDistance < 0.0) return vec4(0.0);
    float planeDistanceDif = maxPlaneDistance - minPlaneDistance;

    #if CLOUD_QUALITY == 1 || defined GBUFFERS_WATER
        int sampleCount = max(int(planeDistanceDif) / 16, 6);
    #elif CLOUD_QUALITY == 2
        int sampleCount = max(int(planeDistanceDif) / 8, 12);
    #elif CLOUD_QUALITY == 3
        int sampleCount = max(int(planeDistanceDif), 12);
    #endif

    float stepMult = planeDistanceDif / sampleCount;
    vec3 traceAdd = nPlayerPos * stepMult;
    vec3 tracePos = cameraPos + minPlaneDistance * nPlayerPos;
    tracePos += traceAdd * dither;
    tracePos.y -= traceAdd.y;

    for (int i = 0; i < sampleCount; i++) {
        tracePos += traceAdd;

        vec3 cloudPlayerPos = tracePos - cameraPos;
        float lTracePos = length(cloudPlayerPos);
        float lTracePosXZ = length(cloudPlayerPos.xz);
        float cloudMult = 1.0;
        if (lTracePosXZ > distanceThreshold) break;
        if (lTracePos > lViewPosM) {
            if (skyFade < 0.7) continue;
            else cloudMult = skyMult0;
        }

        vec3 tracePosM;
        if (GetCloudNoise(tracePos, tracePosM, cloudAltitude)) {
            float lightMult = 1.0;

            #ifdef REALTIME_SHADOWS
                if (GetShadowOnCloud(tracePos, cameraPos, cloudAltitude, lowerPlaneAltitude, higherPlaneAltitude)) {
                    #ifdef CLOUD_CLOSED_AREA_CHECK
                        if (eyeBrightness.y != 240) continue;
                        else
                    #endif
                    lightMult = 0.25;
                }
            #endif

            float cloudShading = 1.0 - (higherPlaneAltitude - tracePos.y) / cloudHeightShader;
            float VdotSM1 = max0(sunVisibility > 0.5 ? VdotS : - VdotS);

            #if CLOUD_QUALITY >= 2
                #ifndef GBUFFERS_WATER
                    float cloudShadingM = 1.0 - pow2(cloudShading);
                #else
                    float cloudShadingM = 1.0 - cloudShading;
                #endif

                float gradientNoise = InterleavedGradientNoiseForClouds();

                vec3 cLightPos = tracePosM;
                vec3 cLightPosAdd = normalize(ViewToPlayer(lightVec * 1000000000.0)) * vec3(0.08);
                cLightPosAdd *= shadowTime;

                float light = 2.0;
                cLightPos += (1.0 + gradientNoise) * cLightPosAdd;
                #ifdef DEFERRED1
                    light -= texture2D(colortex3, GetRoundedCloudCoord(cLightPos.xz, CLOUD_ROUNDNESS)).b * cloudShadingM;
                #elif defined GBUFFERS_WATER
                    light -= texture2D(gaux4, GetRoundedCloudCoord(cLightPos.xz, CLOUD_ROUNDNESS)).b * cloudShadingM;
                #endif
                cLightPos += gradientNoise * cLightPosAdd;
                #ifdef DEFERRED1
                    light -= texture2D(colortex3, GetRoundedCloudCoord(cLightPos.xz, CLOUD_ROUNDNESS)).b * cloudShadingM;
                #elif defined GBUFFERS_WATER
                    light -= texture2D(gaux4, GetRoundedCloudCoord(cLightPos.xz, CLOUD_ROUNDNESS)).b * cloudShadingM;
                #endif

                float VdotSM2 = VdotSM1 * shadowTime * 0.25;
                    VdotSM2 += 0.5 * cloudShading + 0.08;
                cloudShading = VdotSM2 * light * lightMult;
            #endif

            vec3 colorSample = cloudAmbientColor + cloudLightColor * (0.07 + cloudShading);
            #ifdef EPIC_THUNDERSTORM
                #ifdef IS_IRIS
                    vec2 lightningAdd = lightningFlashEffect(tracePos - cameraPosition, lightningBoltPosition.xyz, vec3(1.0), 450.0) * lightningBoltPosition.w * 10.0;
                    colorSample += lightningAdd.y;
                #else
                    vec2 lightningAdd = lightningFlashEffect(tracePos - cameraPosition, vec3(0.0, exp(1.0) - 1000.0, 0.0), vec3(1.0), 450.0) * lightningFlashOptifine * 10.0;
                    colorSample += lightningAdd.y;
                #endif
            #endif
            vec3 cloudSkyColor = GetSky(VdotU, VdotS, dither, true, false);
            float cloudFogFactor = clamp((distanceThreshold - lTracePosXZ) / distanceThreshold, 0.0, 0.75) * CLOUD_TRANSPARENCY;
            float skyMult1 = 1.0 - 0.2 * (1.0 - skyFade) * max(sunVisibility2, nightFactor);
            float skyMult2 = 1.0 - 0.33333 * skyFade;
            colorSample = mix(cloudSkyColor, colorSample * skyMult1, cloudFogFactor * skyMult2);
            colorSample *= pow2(1.0 - max(blindness, darknessFactor));

            cloudLinearDepth = sqrt(lTracePos / far);
            volumetricClouds.a = pow(cloudFogFactor * 1.33333, 0.5 + 10.0 * pow(abs(VdotSM1), 90.0)) * cloudMult;
            volumetricClouds.rgb = colorSample;
            break;
        }
    }

    return volumetricClouds;
}
