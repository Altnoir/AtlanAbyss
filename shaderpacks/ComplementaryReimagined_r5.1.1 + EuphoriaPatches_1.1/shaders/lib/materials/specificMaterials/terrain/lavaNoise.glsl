#ifdef GBUFFERS_TERRAIN
    #ifdef LAVA_COLUMN_NOISE
        float columnNoise = 1.0;
    #else
        float columnNoise = 0.0;
    #endif
    float noise = -1.0 * LAVA_NOISE_AMOUNT;
    vec3 lavaNoiseColor = color.rgb;
    float lavaNoiseEmission = emission;
    if (mat == 10069){
        lavaPos += wind.x * 0.75;
    }
    #if LAVA_VARIATION == 1 // Adaptive Noise
        lavaNoiseColor += min(pow2(pow2(lavaNoiseEmission * 0.50)), 0.2) * LAVA_TEMPERATURE * 0.65 + 0.1;
        if (mat == 10068 || columnNoise == 1.0) {
            #ifdef NETHER
                if (worldPos.y > 30 && worldPos.y < 32) {
                    noise += texture2D(noisetex, lavaPos * 0.2 + wind * 0.1).r;
                    noise += texture2D(noisetex, lavaPos * 0.8 + wind * 0.04).r * 0.5;
                    noise *= texture2D(noisetex, lavaPos * 0.1 + wind * 0.02).r * 0.5;
                    lavaNoiseEmission *= 1.6;
                    lavaNoiseColor *= smoothstep(0.00, 0.50, noise);
                    lavaNoiseColor.r *= 1.2;
                }
                else {
                    noise += texture2D(noisetex, lavaPos * 0.05 + wind * 0.01).r;
                    noise -= texture2D(noisetex, lavaPos * 1.5 + wind * 0.05).r * 0.3;
                    noise += texture2D(noisetex, lavaPos * 0.1).r * 0.7;
                    lavaNoiseColor *= smoothstep(0.00, 0.70, noise);
                    lavaNoiseColor.r *= 1.5;
                }
            #else
                noise += texture2D(noisetex, lavaPos * 0.2 + wind * 0.01).g;
                noise -= texture2D(noisetex, lavaPos * 2.0 + wind * 0.05).g * 0.3;
                noise += texture2D(noisetex, lavaPos * 0.1).g * 0.3;
                lavaNoiseColor *= smoothstep(0.00, 0.70, noise);
                lavaNoiseColor.r *= 1.25;
                lavaNoiseEmission *= 1.1;
            #endif
        }
    #elif LAVA_VARIATION == 2 // Blushing Hotness
        noise += texture2D(noisetex, lavaPos * 0.05 + wind * 0.1).r;
        lavaNoiseColor -= vec3(0.03) * noise * 8.0;
        lavaNoiseColor += min(pow2(pow2(lavaNoiseEmission * 0.50)), 0.2) * LAVA_TEMPERATURE * 0.65 - 0.05;

    #elif LAVA_VARIATION == 3 // Molten Cheese
        lavaNoiseColor += vec3(min(pow2(pow2(pow2(smoothstep1(lavaNoiseEmission * 0.5)))), 0.25)) * LAVA_TEMPERATURE * 0.65 + 0.1;
        if (mat == 10068 || columnNoise == 1.0) {
            noise += texture2D(noisetex, lavaPos * 0.01 + wind * 0.01).g;
            noise -= texture2D(noisetex, lavaPos * 2.0 + wind * 0.05).g * 0.3;
            noise += texture2D(noisetex, lavaPos * 0.1).g * 0.3;
            lavaNoiseColor *= smoothstep(0.00, 0.70, noise);
        }
    #elif LAVA_VARIATION == 4 // Dark Islands
        lavaNoiseColor += vec3(min(pow2(pow2(pow2(smoothstep1(lavaNoiseEmission * 0.5)))), 0.25)) * LAVA_TEMPERATURE * 0.65 + 0.1;
        if (mat == 10068 || columnNoise == 1.0) {
            noise += texture2D(noisetex, lavaPos * 0.01 + wind * 0.01).r;
            noise -= texture2D(noisetex, lavaPos * 1.1 + wind * 0.05).r * 0.3;
            noise += texture2D(noisetex, lavaPos * 0.1).r * 0.7;
            lavaNoiseColor *= smoothstep(0.00, 0.70, noise);
        }
    #endif

    color.rgb = mix(color.rgb, lavaNoiseColor, lavaNoiseIntensity);
    emission = mix(emission, lavaNoiseEmission, lavaNoiseIntensity);
#endif