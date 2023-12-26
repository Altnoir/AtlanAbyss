#ifndef GBUFFERS_HAND
    vec3 oldColor = color.rgb;  // Needed for entities

    #include "/lib/materials/seasonsTime.glsl"

    #if SEASONS != 2 && SEASONS != 5
        // Color Desaturation
        vec3 desaturatedColor = color.rgb;
        if (SEASON_COLOR_DESATURATION > 0.0) {
            float desaturation = SEASON_COLOR_DESATURATION;

            #if SEASONS == 1 || SEASONS == 4
                if (winterTime > 0) {
                    // snow conditions
                    #if SNOW_CONDITION != 2
                        desaturation *= inSnowy; // make only appear in cold biomes
                    #elif SNOW_CONDITION == 0
                        desaturation *= rainFactor; // make only appear in rain
                    #endif
                }
            #endif

            desaturatedColor = mix(color.rgb, vec3(GetLuminance(color.rgb)), clamp01(desaturation - lmCoord.x));
        }
        float snowSide = 0.0;
        #if !defined GBUFFERS_ENTITIES && defined GBUFFERS_TERRAIN
            // specific materials
            if (mat == 10000 || mat == 10003 || mat == 10004 || mat == 10020 || mat == 10021 || mat == 10348 || mat == 10628 || mat == 10472) snowSide = mix(1.0, 0.0, (color.r + color.g + color.b) * 0.3); // vegetation check
            if (mat == 10005 && color.g * 1.5 > color.r + color.b) snowSide = mix(1.0, 0.0, 1 / (color.g * color.g) * 0.01); //wither rose
            if (mat == 10007 || mat == 10008) snowSide = mix(1.0, 0.0, 1 / (color.g * color.g) * 0.033); //leaves
            if (mat == 10016 || mat == 10752 || mat == 10017 || mat == 10018 || mat == 10019) snowSide = mix(1.0, 0.0, 1 / (color.g * color.g) * 0.09); // sugar cane, bamboo, propagule
            if (mat == 10012) snowSide = mix(1.0, 0.0, 1 / (color.g * color.g) * 0.04); // vine
            if ((mat == 10132 && glColor.b < 0.999) || (mat == 10129 && color.b + color.g < color.r * 2.0 && color.b > 0.3 && color.g < 0.45) || (mat == 10492 && color.r > 0.52 && color.b < 0.30 && color.g > 0.41 && color.g + color.b * 0.95 > color.r * 1.2)) {
                snowSide = mix(0.0, 1.0, pow(blockUV.y, 3.0));
                #if defined SSS_SEASON_SNOW && (SEASONS == 1 || SEASONS == 4)
                    #if SNOW_CONDITION == 0
                        if (rainFactor > 0 && inSnowy > 0) subsurfaceMode = 1, noSmoothLighting = true, noDirectionalShading = true; // SSS
                    #elif SNOW_CONDITION == 1
                        if (inSnowy > 0) subsurfaceMode = 1, noSmoothLighting = true, noDirectionalShading = true;
                    #else
                        subsurfaceMode = 1, noSmoothLighting = true, noDirectionalShading = true;
                    #endif
                #endif
            } // add to the side of grass, mycelium, path blocks; in that order. Use blockUV to increase transparency the the further down the block it goes
            if (mat == 10132 && glColor.b < 0.999) snowSide += abs(color.g - color.g * 0.5); // mute the grass colors a bit
        #endif
    #endif

    #if SEASONS == 1 || SEASONS == 2
        vec3 summerColor = color.rgb;
    #endif

    #if SEASONS == 1 || SEASONS == 3
        vec3 autumnColor;

        if (autumnTime > 0) {
            autumnColor = mix(color.rgb, desaturatedColor, 0.5);

            #ifndef GBUFFERS_ENTITIES
                autumnColor = mix(autumnColor, autumnColor * vec3(1.0, 0.7, 0.5), snowSide);
            #endif
        }
    #endif

    #if SEASONS == 1 || SEASONS == 5
        vec3 springColor = color.rgb;
    #endif

    #if SEASONS == 1 || SEASONS == 4
        vec3 winterColor;

        if (winterTime > 0) {
            winterColor = desaturatedColor;

            #ifdef GBUFFERS_ENTITIES
                oldColor = mix(color.rgb, winterColor, winterTime);
            #else
                float winterAlpha = color.a;

                vec3 snowColor = vec3(0.9713, 0.9691, 0.9891);

                vec2 snowVec = getOverlayNoise(snowSide, false, false, MELTING_RADIUS, SNOW_SIZE, worldPos, SNOW_TRANSPARENCY, SNOW_NOISE_REMOVE_INTENSITY * 1.2);

                float snowNoise = snowVec.y;
                float snowVariable = snowVec.x;

                snowColor *= 1.1;
                snowColor += 0.13 * snowNoise * SNOW_NOISE_INTENSITY; // make the noise less noticeable & configurable with option

                // snow conditions
                #if SNOW_CONDITION != 2
                    snowVariable *= inSnowy; // make only appear in cold biomes
                #endif
                #if SNOW_CONDITION == 0
                    snowVariable *= rainFactor; // make only appear in rain
                #endif

                #if SNOW_CONDITION == 0
                    highlightMult = mix(highlightMult, 2.3 - subsurfaceMode * 0.1, snowVariable * IPBRMult * winterTime * rainFactor * inSnowy * overlayNoiseIntensity);
                    smoothnessG = mix(smoothnessG, 0.45 + 0.1 * snowNoise, snowVariable * IPBRMult * winterTime * rainFactor * inSnowy * overlayNoiseIntensity);
                #elif SNOW_CONDITION == 1
                    highlightMult = mix(highlightMult, 2.3 - subsurfaceMode * 0.1, snowVariable * IPBRMult * winterTime * inSnowy * overlayNoiseIntensity);
                    smoothnessG = mix(smoothnessG, 0.45 + 0.1 * snowNoise, snowVariable * IPBRMult * winterTime * inSnowy * overlayNoiseIntensity);
                #else
                    highlightMult = mix(highlightMult, 2.3 - subsurfaceMode * 0.1, snowVariable * IPBRMult * winterTime * overlayNoiseIntensity);
                    smoothnessG = mix(smoothnessG, 0.45 + 0.1 * snowNoise, snowVariable * IPBRMult * winterTime * overlayNoiseIntensity);
                #endif

                #ifdef SSS_SEASON_SNOW
                    if (dot(normal, upVec) > 0.99) {
                        #if SNOW_CONDITION == 0
                            if (rainFactor > 0 && inSnowy > 0) subsurfaceMode = 1, noSmoothLighting = true, noDirectionalShading = true;
                        #elif SNOW_CONDITION == 1
                            if (inSnowy > 0) subsurfaceMode = 1, noSmoothLighting = true, noDirectionalShading = true;
                        #else
                            subsurfaceMode = 1, noSmoothLighting = true, noDirectionalShading = true;
                        #endif
                    }
                #endif

                #ifdef GBUFFERS_TERRAIN
                    if (dot(normal, upVec) > 0.99) {
                        #if SNOW_CONDITION == 0
                            emission = mix(emission, emission * overlayNoiseEmission, rainFactor * inSnowy * winterTime * overlayNoiseIntensity); // make only appear in rain
                            smoothnessD = mix(smoothnessD, 0.0, snowVariable * rainFactor * inSnowy * winterTime * overlayNoiseIntensity);
                        #elif SNOW_CONDITION == 1
                            emission = mix(emission, emission * overlayNoiseEmission, inSnowy * winterTime * overlayNoiseIntensity); // make only appear in cold biomes
                            smoothnessD = mix(smoothnessD, 0.0, snowVariable * inSnowy * winterTime * overlayNoiseIntensity);
                        #else
                            emission = mix(emission, emission * overlayNoiseEmission, winterTime * overlayNoiseIntensity);
                            smoothnessD = mix(smoothnessD, 0.0, snowVariable * winterTime * overlayNoiseIntensity);
                        #endif
                    }
                #endif

                #ifdef GBUFFERS_WATER
                    if (dot(normal, upVec) > 0.99) {
                        #if SNOW_CONDITION == 0
                            overlayNoiseTransparentOverwrite = mix(overlayNoiseTransparentOverwrite, overlayNoiseAlpha, rainFactor * inSnowy * winterTime);
                            fresnel = mix(fresnel, 0.01, snowVariable * overlayNoiseFresnelMult * winterTime * rainFactor * inSnowy);
                        #elif SNOW_CONDITION == 1
                            overlayNoiseTransparentOverwrite = mix(overlayNoiseTransparentOverwrite, overlayNoiseAlpha, inSnowy * winterTime);
                            fresnel = mix(fresnel, 0.01, snowVariable * overlayNoiseFresnelMult * winterTime * inSnowy);
                        #else
                            overlayNoiseTransparentOverwrite = mix(1.0, overlayNoiseAlpha, winterTime);
                            fresnel = mix(fresnel, 0.01, snowVariable * overlayNoiseFresnelMult * winterTime);
                        #endif
                    }
                #endif

                // final mix
                winterColor = mix(winterColor, snowColor, snowVariable * overlayNoiseIntensity);
                winterAlpha = mix(color.a, 1.0, clamp(overlayNoiseTransparentOverwrite * snowVariable, 0.0, 1.0));
                color.a = mix(color.a, winterAlpha, winterTime * overlayNoiseIntensity);
            #endif
        }
    #endif

    #if SEASONS == 1
        vec3 summerToAutumn = mix(summerColor, autumnColor, summer);
        vec3 autumnToWinter = mix(summerToAutumn, winterColor, autumn);
        vec3 winterToSpring = mix(autumnToWinter, springColor, winter);
        vec3 springToSummer = mix(winterToSpring, summerColor, spring);

        #ifndef GBUFFERS_ENTITIES
            color.rgb = springToSummer;
        #endif

    #elif SEASONS == 2
        color.rgb = summerColor;

    #elif SEASONS == 3
        color.rgb = autumnColor;

    #elif SEASONS == 4
        color.rgb = winterColor;

    #elif SEASONS == 5
        color.rgb = springColor;
    #endif

    #ifdef GBUFFERS_ENTITIES
        color.rgb = oldColor;
    #endif
#endif