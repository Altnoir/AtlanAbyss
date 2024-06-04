#version 150

#moj_import <fog.glsl>

uniform sampler2D Sampler0;

uniform vec4 ColorModulator;
uniform float FogStart;
uniform float FogEnd;
uniform float GameTime;
uniform vec4 FogColor;

in float vertexDistance;
in vec4 vertexColor;
in vec2 texCoord0;
in vec2 texCoord1;
in vec4 normal;

out vec4 fragColor;

void main() {
    vec4 color = texture(Sampler0, texCoord0) * vertexColor * ColorModulator;
    if (color.a < 0.1) {discard;}

    float TrimAnimation = GameTime * 1000;
    float opacity = ceil(color.a * 255);

    if (opacity == 254) {color = mix(
						color,
						mix(  texture(Sampler0,texCoord0)/2  ,  texture(Sampler0,texCoord0)*2  ,  pow(sin(min(vertexDistance,20)),2)  ), 									pow(sin(TrimAnimation),2)
						);}

    fragColor = linear_fog(color, vertexDistance, FogStart, FogEnd, FogColor);
}

// Modifications made by ManuelXXVI