/*----------------------------------------------------------------------------------------------
        _____                                                                    _____
        ( ___ )                                                                  ( ___ )
        |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   |
        |   | ██╗   ██╗███╗   ██╗██╗███████╗ ██████╗ ██████╗ ███╗   ███╗███████╗ |   |
        |   | ██║   ██║████╗  ██║██║██╔════╝██╔═══██╗██╔══██╗████╗ ████║██╔════╝ |   |
        |   | ██║   ██║██╔██╗ ██║██║█████╗  ██║   ██║██████╔╝██╔████╔██║███████╗ |   |
        |   | ██║   ██║██║╚██╗██║██║██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║╚════██║ |   |
        |   | ╚██████╔╝██║ ╚████║██║██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████║ |   |
        |   |  ╚═════╝ ╚═╝  ╚═══╝╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝ |   |
        |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___|
        (_____)                                                                  (_____)

---------------------------------------------------------------------------------------------*/

uniform int blockEntityId;
uniform int currentRenderedItemId;
uniform int entityId;
uniform int frameCounter;
uniform int heldBlockLightValue;
uniform int heldBlockLightValue2;
uniform int heldItemId;
uniform int heldItemId2;
uniform int isEyeInWater;
uniform int moonPhase;
uniform int worldTime;
uniform int worldDay;

uniform float aspectRatio;
uniform float blindness;
uniform float centerDepthSmooth;
uniform float cloudHeight = 192.0;
uniform float darknessFactor;
uniform float darknessLightFactor;
uniform float eyeAltitude;
uniform float frameTime;
uniform float frameTimeCounter;
uniform float far;
uniform float near;
uniform float nightVision;
uniform float rainStrength;
uniform float screenBrightness;
uniform float viewHeight;
uniform float viewWidth;
uniform float wetness;
uniform float sunAngle;
uniform float playerMood;

uniform ivec2 atlasSize;
uniform ivec2 eyeBrightness;

uniform vec3 cameraPosition;
uniform vec3 fogColor;
uniform vec3 previousCameraPosition;
uniform vec3 skyColor;
uniform vec3 eyePosition;

uniform vec4 entityColor;
uniform vec4 lightningBoltPosition;

uniform mat4 gbufferModelView;
uniform mat4 gbufferModelViewInverse;
uniform mat4 gbufferPreviousModelView;
uniform mat4 gbufferPreviousProjection;
uniform mat4 gbufferProjection;
uniform mat4 gbufferProjectionInverse;
uniform mat4 shadowModelView;
uniform mat4 shadowModelViewInverse;
uniform mat4 shadowProjection;
uniform mat4 shadowProjectionInverse;

uniform sampler2D colortex0;
uniform sampler2D colortex1;
uniform sampler2D colortex2;
uniform sampler2D colortex3;
uniform sampler2D colortex4;
uniform sampler2D colortex5;
uniform sampler2D colortex6;
uniform sampler2D colortex7;
uniform sampler2D colortex8;
uniform sampler2D colortex9;
uniform sampler2D depthtex0;
uniform sampler2D depthtex1;
uniform sampler2D depthtex2;
uniform sampler2D gaux1;
uniform sampler2D gaux2;
uniform sampler2D gaux4;
uniform sampler2D normals;
uniform sampler2D noisetex;
uniform sampler2D specular;
uniform sampler2D tex;

#if defined REALTIME_SHADOWS || defined LIGHTSHAFTS_ACTIVE
    uniform sampler2D shadowcolor0;
    uniform sampler2D shadowcolor1;

    uniform sampler2DShadow shadowtex1;

    #ifdef COMPOSITE
        uniform sampler2D shadowtex0;
    #else
        uniform sampler2DShadow shadowtex0;
    #endif
#endif

/*-----------------------------------------------------------------------------
  ___ _   _ ___ _____ ___  __  __   _   _ _  _ ___ ___ ___  ___ __  __ ___
 / __| | | / __|_   _/ _ \|  \/  | | | | | \| |_ _| __/ _ \| _ \  \/  / __|
| (__| |_| \__ \ | || (_) | |\/| | | |_| | .` || || _| (_) |   / |\/| \__ \
 \___|\___/|___/ |_| \___/|_|  |_|  \___/|_|\_|___|_| \___/|_|_\_|  |_|___/

-----------------------------------------------------------------------------*/

uniform float framemod8;
uniform float isEyeInCave;
uniform float inDry;
uniform float inRainy;
uniform float inSnowy;
uniform float velocity;
uniform float starter;
uniform float frameTimeSmooth;
uniform float eyeBrightnessM;
uniform float rainFactor;
uniform float inBasaltDeltas;
uniform float inCrimsonForest;
uniform float inNetherWastes;
uniform float inSoulValley;
uniform float inWarpedForest;
uniform float lightning;
uniform float isSneaking;
uniform float isSprinting;
uniform float inLushCave;
uniform float inSand;
uniform float inRedSand;
uniform float lightningFlashOptifine;

uniform vec2 viewSize;
uniform vec2 texelSize;

uniform vec3 skyColorSmooth;
