#include "/lib/colors/skyColors.glsl"

float GetStarNoise(vec2 pos) {
    return fract(sin(dot(pos, vec2(12.9898, 4.1414))) * 43758.54953);
}

vec2 GetStarCoord(vec3 viewPos, float sphereness) {
    vec3 wpos = normalize((gbufferModelViewInverse * vec4(viewPos * 1000.0, 1.0)).xyz);
    vec3 starCoord = wpos / (wpos.y + length(wpos.xz) * sphereness);
    vec3 moonPos = vec3(gbufferModelViewInverse * vec4(- sunVec * 70.0, 1.0));
    vec3 moonCoord = moonPos / (moonPos.y + length(moonPos.xz) * sphereness);
    return starCoord.xz - moonCoord.xz;
}

vec3 GetStars(vec2 starCoord, float VdotU, float VdotS) {
    if (VdotU < 0.0) return vec3(0.0);

    float spookyStarSize = 10000.0;
    #ifdef SPOOKY
        spookyStarSize = 0.5;
    #endif

    starCoord *= 0.25 / min(STAR_SIZE, spookyStarSize);
    float starFactor = 1024.0;
    starCoord = floor(starCoord * starFactor) / starFactor;

    float star = 1.0;
    star *= GetStarNoise(starCoord.xy);
    star *= GetStarNoise(starCoord.xy+0.1);
    star *= GetStarNoise(starCoord.xy+0.23);

    #if defined MORE_STARS_OVERWORLD || defined SPOOKY
        star -= 0.5;
        star *= 0.55;
    #elif NIGHT_STAR_AMOUNT == 2
        star -= 0.7;
    #else
        star -= 0.6;
        star *= 0.65;
    #endif

    star = max0(star);
    star *= star;

    float starFogFactor = min1(VdotU * 3.0);
    star *= starFogFactor * (1.0 - sunVisibility);
    star *= max0(1.0 - pow(abs(VdotS) * 1.002, 100.0));

    float spookyStarMult = 0.0;
    #ifdef SPOOKY
        spookyStarMult = 2.0;
    #endif

    vec3 stars = 40.0 * star * vec3(0.38, 0.4, 0.5) * max(STAR_BRIGHTNESS, spookyStarMult);

    #if defined CLEAR_SKY_WHEN_RAINING || defined NO_RAIN_ABOVE_CLOUDS
        #ifndef CLEAR_SKY_WHEN_RAINING
            stars *= mix(1.0, invRainFactor, heightRelativeToCloud);
        #else
            stars *= mix(1.0, invRainFactor * 0.8 + 0.2, heightRelativeToCloud);
        #endif
    #else
        stars *= invRainFactor;
    #endif

    #if defined TWINKLING_STARS || defined SPOOKY
        stars *= clamp(abs(texture2D(noisetex, starCoord + frameTimeCounter * 0.004).r - 0.5) * 10, 0.5, 1.0);
    #endif

    return stars;
}
