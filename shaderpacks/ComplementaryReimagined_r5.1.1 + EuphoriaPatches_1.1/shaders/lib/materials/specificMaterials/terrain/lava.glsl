// Tweak to prevent the animation of lava causing brightness pulsing
vec3 avgColor = vec3(0.0);
ivec2 itexCoordC = ivec2(midCoord * atlasSize + 0.0001);
for (int x = -8; x < 8; x += 2) {
    for (int y = -8; y < 8; y += 2) {
        avgColor += texelFetch(tex, itexCoordC + ivec2(x, y), 0).rgb;
    }
}
color.rgb /= max(GetLuminance(avgColor) * 0.0390625, 0.001);
noDirectionalShading = true;
lmCoordM = vec2(0.0);
emission = GetLuminance(color.rgb) * 6.5;

vec3 worldPos = playerPos + cameraPosition;
vec2 lavaPos = (floor(worldPos.xz * 16.0) + worldPos.y * 32.0) * 0.000666;
vec2 wind = vec2(frameTimeCounter * 0.012, 0.0);

#ifdef NETHER
    float noiseSample = texture2D(noisetex, lavaPos + wind).g;
    noiseSample = noiseSample - 0.5;
    noiseSample *= 0.1;
    color.rgb = pow(color.rgb, vec3(1.0 + noiseSample));
#endif

#if LAVA_VARIATION > 0
    if (mat == 10068 || mat == 10069){
        #include "/lib/materials/specificMaterials/terrain/lavaNoise.glsl"
    }
#else
    maRecolor = vec3(clamp(pow2(pow2(pow2(smoothstep1(emission * 0.28)))), 0.12, 0.4) * 1.3) * vec3(1.0, vec2(0.7));
    if (LAVA_TEMPERATURE != 0.0) maRecolor += LAVA_TEMPERATURE * 0.5 - 0.2;
#endif

#if RAIN_PUDDLES >= 1 || defined SPOOKY_RAIN_PUDDLE_OVERRIDE
    noPuddles = 1.0;
#endif

emission *= LAVA_EMISSION;

#if defined SOUL_SAND_VALLEY_OVERHAUL && defined NETHER
    color.rgb = fireColor(color.rgb, 2.0, colorSoul, inSoulValley);
#endif
#if defined PURPLE_END_FIRE && defined END
    color.rgb = fireColor(color.rgb, 2.0, colorEndBreath, 1.0);
#endif

color.rgb = max(color.rgb, 0.023); // so black spots still have some textures and aren't fully black