////////////////////////////////////////
// Complementary Reimagined by EminGT with Euphoria Patches by isuewo and SpacEagle17 //
////////////////////////////////////////

//Common//
#include "/lib/common.glsl"

//////////Fragment Shader//////////Fragment Shader//////////Fragment Shader//////////
#ifdef FRAGMENT_SHADER

noperspective in vec2 texCoord;

//Pipeline Constants//
#include "/lib/pipelineSettings.glsl"

//Common Variables//

//Common Functions//
#if IMAGE_SHARPENING > 0
    vec2 viewD = 1.0 / vec2(viewWidth, viewHeight);

    vec2 sharpenOffsets[4] = vec2[4](
        vec2( viewD.x,  0.0),
        vec2( 0.0,  viewD.x),
        vec2(-viewD.x,  0.0),
        vec2( 0.0, -viewD.x)
    );

    void SharpenImage(inout vec3 color, vec2 texCoordM) {
        float mult = 0.0125 * IMAGE_SHARPENING;
        color *= 1.0 + 0.05 * IMAGE_SHARPENING;

        for (int i = 0; i < 4; i++) {
            color -= texture2D(colortex3, texCoordM + sharpenOffsets[i]).rgb * mult;
        }
    }
#endif

float retroNoise (vec2 noise){
    return fract(sin(dot(noise.xy,vec2(10.998,98.233)))*12433.14159265359);
}

vec2 curveDisplay(vec2 texCoord) {
    texCoord = texCoord * 2.0 - 1.0;
    vec2 offset = abs(texCoord.yx) * CURVATURE_AMOUNT * 0.5;
    #if SCREEN_ROUNDNESS == 1
        offset *= offset;
    #elif SCREEN_ROUNDNESS == 2
        offset *= pow2(offset);
    #elif SCREEN_ROUNDNESS == 3
        offset *= pow3(offset);
    #endif
    texCoord += texCoord * offset;
    return texCoord * 0.5 + 0.5;
}

vec2 border(vec2 texCoord) {
    const float borderAmount = 2.0 + BORDER_AMOUNT * 0.1;
    texCoord = texCoord * borderAmount - borderAmount * 0.5;
    return texCoord * 0.5 + 0.5;
}

vec3 scanline(vec2 texCoord, vec3 color){
    const float frequency = SCANLINE_FREQUENCY;
    const float intensity = SCANLINE * 0.1;
    const float speed = SCANLINE_SPEED;
    const float amount = SCANLINE_AMOUNT;
    #if SCANLINE_DIRECTION == 1
        texCoord = texCoord.yx;
    #endif

    float count = viewHeight * amount;
    vec2 scanlineColor = vec2(sin(mod(texCoord.y + frameTimeCounter * 0.2 * speed, frequency) * count), cos(mod(texCoord.y + frameTimeCounter * 0.5 * speed, 0.7 * frequency) * count));
    #ifdef SCANLINE_MONOCHROME
        vec3 scanlines = vec3(scanlineColor.y + scanlineColor.x * 0.2);
    #else
        vec3 scanlines = vec3(scanlineColor.x * SCANLINE_R, scanlineColor.y * SCANLINE_G, scanlineColor.x * SCANLINE_B);
    #endif

    return color += color * scanlines * intensity;
}

vec4 samplePixelatedBuffer(sampler2D tex, vec2 coords, int size) { // thanks to belmu for the code (mine had edge artifacts) https://github.com/BelmuTM/Noble/tree/master
    vec2 aspectCorrectedSize = size * vec2(aspectRatio, 1.0);
    return texelFetch(tex, ivec2((floor(coords * aspectCorrectedSize) / aspectCorrectedSize) * viewSize), 0);
}

float halftones(vec2 texCoord, float angle, float scale) { // Thanks to https://www.shadertoy.com/view/4sBBDK by starea
    vec2 coord = texCoord * viewSize;
    vec2 dots = rotate(angle) * coord * scale;
    return sin(dots.x) * sin(dots.y) * 4.0;
}

float noiseSpeedLines(float a, float p, float s) {
    float p1 = hash11(mod(floor(a), p), s);
    float p2 = hash11(mod(floor(a) + 2.0, p), s);
    return smoothstep(0.0, 0.1, mix(p1, p2, smoothstep(0.0, 1.0, fract(a))) - 0.3);
}

float layeredNoiseSpeedLines(float a, float s) {
    return noiseSpeedLines(a, 20.0, s) + noiseSpeedLines(a * 5.0, 20.0 * 5.0, s);
}

float speedLines(vec2 uv) { // Thanks to https://www.shadertoy.com/view/NldyDn by HalbFettKaese - modified a bit
    uv = uv * 2.0 - 1.0;
    float a = atan(uv.x, uv.y) / pi;
    float value = layeredNoiseSpeedLines((a * 17 + velocity * 7.0) * SPEED_LINE_THICKNESS * 1.5, (floor(frameTimeCounter * 10.0 * SPEED_LINES_SPEED) / 10.0 + velocity * 0.1) * 2.0);
    value -= 1.0 / length(uv) * 0.9 * (1.0 - clamp(velocity, 0.0, 0.4));
    return clamp(value, 0.0, 0.1);
}

float randomNoiseOverlay1(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float grid(float uv) {
    float mainLine = smoothstep(0.9995 * (1.0 - MAIN_GRID_INTERVAL * 0.00005), 1.0, cos(uv * tau / (1.0 / MAIN_GRID_INTERVAL))) * 0.3;
    float subLine = smoothstep(0.9998 * (1.0 - SUB_GRID_INTERVAL * 0.00075), 1.0, cos(uv * tau * SUB_GRID_INTERVAL / (1.0 / MAIN_GRID_INTERVAL))) * 0.1;
      return mainLine + subLine;
}

//Includes//
#ifdef MC_ANISOTROPIC_FILTERING
    #include "/lib/util/textRendering.glsl"

    void beginTextM(int textSize, vec2 offset) {
        beginText(ivec2(vec2(viewWidth, viewHeight) * texCoord) / textSize, ivec2(0 + offset.x, viewHeight / textSize - offset.y));
        text.bgCol = vec4(0.0);
    }
#endif

//Program//
void main() {

    vec3 color = vec3(0.0);
    float viewWidthM = viewWidth;
    float viewHeightM = viewHeight;

    #if BORDER_AMOUNT != 0
        vec2 texCoordM = border(texCoord);
    #else
        vec2 texCoordM = texCoord;
    #endif

    #ifdef CURVE_DISPLAY
        texCoordM = curveDisplay(texCoordM);
    #endif

    vec2 texCoordBorder = texCoordM;

    #if CAMERA_NOISE_OVERLAY == 1
        texCoordM += vec2(randomNoiseOverlay1(texCoordM + vec2(0.0, 0.0)), randomNoiseOverlay1(texCoordM + vec2(1.0, 1.0))) * 0.01 * CAMERA_NOISE_OVERLAY_INTENSITY;
    #endif

    #if HORIZONTAL_NOISE > 0 && defined RETRO_ON
        float horizontalNoiseResolution = HORIZONTAL_NOISE * 100.0;
        float horizontalNoiseIntensity = HORIZONTAL_NOISE_INTENSITY * 0.002;
        float horizontalNoiseSpeed = HORIZONTAL_NOISE_SPEED * 0.0001;
        texCoordM.y *= horizontalNoiseResolution;
        texCoordM.y = int(texCoordM.y) * (1.0 / horizontalNoiseResolution);
        float noise = retroNoise(vec2(frameTimeCounter * horizontalNoiseSpeed, texCoordM.y));
        texCoordM.x += noise * horizontalNoiseIntensity;
    #endif

    #if (defined VERTICAL_SCREEN_DISPLACEMENT && defined RETRO_ON) || defined SPOOKY
        float displaceEffectOn = 1.0;
        #if defined SPOOKY && (!defined RETRO_ON || !defined VERTICAL_SCREEN_DISPLACEMENT)
            float randomShutterTime = 24000 * hash1(worldDay * 5); // Effect happens randomly throughout the day
            int displaceEffect = (int(hash1(worldDay / 2)) % (2 * 24000)) + int(randomShutterTime);
            displaceEffectOn = 0.0;
            if (worldTime > displaceEffect && worldTime < displaceEffect + 100) { // 100 in ticks - 5s, how long the effect will be on
                displaceEffectOn = 1.0;
            }
        #endif
        float scrollSpeed = VERTICAL_SCROLL_SPEED * 2.0;
        float stutterSpeed = VERTICAL_STUTTER_SPEED * 0.2;
        float scroll   = (1.0 - step(retroNoise(vec2(frameTimeCounter * 0.00002, 8.0)), 0.9 * (1.0 - VERTICAL_SCROLL_FREQUENCY * 0.3))) * scrollSpeed;
        float stutter  = (1.0 - step(retroNoise(vec2(frameTimeCounter * 0.00005, 9.0)), 0.8 * (1.0 - VERTICAL_STUTTER_FREQUENCY * 0.3))) * stutterSpeed;
        float stutter2 = (1.0 - step(retroNoise(vec2(frameTimeCounter * 0.00003, 5.0)), 0.7 * (1.0 - VERTICAL_STUTTER_FREQUENCY * 0.3))) * stutterSpeed;
        float verticalOffset = sin(frameTimeCounter) * scroll + stutter * stutter2;
        texCoordM.y = mix(texCoordM.y, mod(texCoordM.y + verticalOffset, VERTICAL_EDGE_GLITCH), displaceEffectOn);
    #endif

    #ifdef UNDERWATER_DISTORTION
        if (isEyeInWater == 1)
            texCoordM += WATER_REFRACTION_INTENSITY * 0.00035 * sin((texCoord.x + texCoord.y) * 25.0 + frameTimeCounter * UNDERWATER_DISTORTION_STRENGTH);
    #endif

    #if LETTERBOXING > 0
        #if BORDER_AMOUNT > 0
            viewWidthM = viewWidth - viewWidth * BORDER_AMOUNT * 0.04;
        #endif
        float margin = 0.5 - viewWidthM / (2 * viewHeightM * ASPECT_RATIO);
        #if LETTERBOXING == 2
            margin = mix(0.0, margin, isSneaking);
        #endif
    #endif

    #if defined PIXELATE_SCREEN && defined RETRO_ON
        color = samplePixelatedBuffer(colortex3, texCoordM, PIXEL_SIZE_SCREEN).rgb;
    #else
        color = texture2D(colortex3, texCoordM).rgb;
    #endif

    #if CHROMA_ABERRATION > 0 || defined SPOOKY
        vec2 scale = vec2(1.0, viewHeight / viewWidth);
        #ifdef SPOOKY
            float aberrationStrength = max(CHROMA_ABERRATION, playerMood * 10.0);
        #else
            float aberrationStrength = CHROMA_ABERRATION;
        #endif
        vec2 aberration = (texCoordM - 0.5) * (2.0 / vec2(viewWidth, viewHeight)) * scale * aberrationStrength;
        color.rb = vec2(texture2D(colortex3, texCoordM + aberration).r, texture2D(colortex3, texCoordM - aberration).b);
    #endif

    #if LETTERBOXING > 0
        if (texCoord.y > 1.0 - margin || texCoord.y < margin) {
            #ifdef EXCLUDE_ENTITIES
                if (int(texelFetch(colortex1, texelCoord, 0).g * 255.1) != 254) color *= 0.0;
            #else
                color *= mix(0.0, 1.0, LETTERBOXING_TRANSPARENCY);
            #endif
        }
    #endif

    #ifdef BAD_APPLE
        color = vec3((int(texelFetch(colortex1, texelCoord, 0).g * 255.1) != 254) ? 0.0 : 1.0);
    #endif

    #if IMAGE_SHARPENING > 0
        SharpenImage(color, texCoordM);
    #endif

    /*ivec2 boxOffsets[8] = ivec2[8](
        ivec2( 1, 0),
        ivec2( 0, 1),
        ivec2(-1, 0),
        ivec2( 0,-1),
        ivec2( 1, 1),
        ivec2( 1,-1),
        ivec2(-1, 1),
        ivec2(-1,-1)
    );

    for (int i = 0; i < 8; i++) {
        color = max(color, texelFetch(colortex3, texelCoord + boxOffsets[i], 0).rgb);
    }*/

    #ifdef MC_ANISOTROPIC_FILTERING
        color.rgb = mix(color.rgb, vec3(0.0), 0.75);

        beginTextM(8, vec2(6, 10));
        text.fgCol = vec4(1.0, 0.0, 0.0, 1.0);
        printString((_I, _m, _p, _o, _r, _t, _a, _n, _t, _space, _I, _s, _s, _u, _e, _space));
        endText(color.rgb);

        beginTextM(4, vec2(15, 30));
        printLine();
        text.fgCol = vec4(1.0, 1.0, 1.0, 1.0);
        printString((
            _P, _l, _e, _a, _s, _e, _space, _g, _o, _space, _t, _o, _space,
            _E, _S, _C, _space, _minus, _space, _O, _p, _t, _i, _o, _n, _s, _space, _minus, _space
        ));
        printLine();
        printString((
            _V, _i, _d, _e, _o, _space, _S, _e, _t, _t, _i, _n, _g, _s, _space, _minus, _space,
            _Q, _u, _a, _l, _i, _t, _y, _space, _minus, _space
        ));
        printLine();
        printString((
            _a, _n, _d, _space, _d, _i, _s, _a, _b, _l, _e, _space,
            _A, _n, _i, _s, _o, _t, _r, _o, _p, _i, _c, _space, _F, _i, _l, _t, _e, _r, _i, _n, _g, _dot
        ));
        endText(color.rgb);
    #endif

    #if WATERMARK == 1
        vec2 textCoord = vec2(0.05);    // margin
        const float a = (100/29);       // watermark aspectRatio

        if (aspectRatio < 3) textCoord += vec2(3 * texCoordM.x - 3, 1.0 - 3 * a * texCoordM.y / aspectRatio);
        else                 textCoord += vec2(texCoordM.x * aspectRatio - aspectRatio, 1.0 - a * texCoordM.y);

        vec4 EuphoriaPatchesText = texture2D(depthtex2, textCoord);
        if (textCoord.x > -1 && textCoord.x < 0 && textCoord.y > 0 && textCoord.y < 1)
            color.rgb = mix(color.rgb, EuphoriaPatchesText.rgb, EuphoriaPatchesText.a);
    #endif

    #ifdef LET_THERE_BE_COLORS
        color = hash33(color * frameTimeCounter);
    #endif

    #if (STATIC_NOISE > 0 && defined RETRO_ON) || defined SPOOKY // credit to arananderson https://www.shadertoy.com/view/tsX3RN
        float maxStrength = max(MIN_STATIC_STRENGTH, MAX_STATIC_STRENGTH);
        float minStrength = min(MIN_STATIC_STRENGTH, MAX_STATIC_STRENGTH);
        const float speed = STATIC_SPEED * 10.0;

        vec2 fractCoord = fract(texCoord * fract(sin(frameTimeCounter * speed)));

        maxStrength = clamp(sin(frameTimeCounter * 0.5), minStrength, maxStrength);

        vec3 staticColor = vec3(retroNoise(fractCoord)) * maxStrength;
        float staticIntensity = 0.0;
        #ifdef SPOOKY
            if (playerMood > 0.9) staticIntensity = (playerMood * 10.0 - 9.0) * 0.75;
        #else
            staticIntensity = STATIC_NOISE * 0.1;
        #endif
        color *= mix(vec3(1.0), color - staticColor, staticIntensity);
    #endif

    #if SCANLINE > 0 && defined RETRO_ON
        color = scanline(texCoord, color);
    #endif

    #ifdef HALFTONE
        #ifdef HALFTONE_MONOCHROME
            float colorOld = GetLuminance(color);
        #else
            vec3 colorOld = color;
        #endif
        const float dotAngle = HALFTONE_ANGLE * pi * 0.5;
        const float dotScale = HALFTONE_SCALE;
        const float dotBrightness = HALFTONE_BRIGHTNESS * 2.0;
        color = vec3(colorOld * dotBrightness * 5.0 - 5.0 + halftones(texCoordM, dotAngle, dotScale));
    #endif

    #ifdef SPOOKY
        color.rgb = mix(color.rgb, color.rgb * GetLuminance(color), 0.60);
    #endif

    #if SPEED_LINES > 0
        float speedLines = speedLines(texCoordM);
        speedLines = mix(0.0, speedLines, SPEED_LINES_TRANSPARENCY);
        #if SPEED_LINES == 1
            color += vec3(mix(0.0, speedLines, isSprinting));
        #else
            color += vec3(speedLines);
        #endif
    #endif

    #if MAIN_GRID_INTERVAL > 1
        float grid = max(grid(texCoordM.x), grid(texCoordM.y));
        #if GRID_CONDITION == 0
            color += grid;
        #elif GRID_CONDITION == 1
            color += mix(0.0, grid, isSneaking);
        #elif GRID_CONDITION == 2
            float isHoldingSpyglass = 0.0;
            if (heldItemId == 45013 || heldItemId2 == 45013) isHoldingSpyglass = 1.0; //holding spyglass
            color += mix(0.0, grid, isHoldingSpyglass);
        #endif
    #endif

    #if defined CURVE_DISPLAY || BORDER_AMOUNT != 0
        if(texCoordBorder.x < 0.0 || texCoordBorder.x > 1.0) color = vec3(0.0);
        if(texCoordBorder.y < 0.0 || texCoordBorder.y > 1.0) color = vec3(0.0);
    #endif

    //if (gl_FragCoord.x < 479 || gl_FragCoord.x > 1441) color = vec3(0.0);

    /* DRAWBUFFERS:0 */
    gl_FragData[0] = vec4(color, 1.0);
}

#endif

//////////Vertex Shader//////////Vertex Shader//////////Vertex Shader//////////
#ifdef VERTEX_SHADER

noperspective out vec2 texCoord;

//Uniforms//

//Attributes//

//Common Variables//

//Common Functions//

//Includes//

//Program//
void main() {
    gl_Position = ftransform();
    texCoord = (gl_TextureMatrix[0] * gl_MultiTexCoord0).xy;
}

#endif
