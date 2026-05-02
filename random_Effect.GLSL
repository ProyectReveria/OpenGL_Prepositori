
#ifdef GL_ES
precision mediump float; 
#endif 

float pi = 3.14; 

uniform float u_time; 
uniform vec2 u_resolution; 
uniform vec2 u_mouse; 



void main(){

    //Curva 
    const float pi = 3.14; 
    float x = (0.0 + u_time) * pi; 

    float sin_x = sin(x) + 1.0; 
    float cos_x = cos(x) + 1.0; 
    float abs_cin_x = abs(sin_x);
    float abs_cos_x = abs(cos_x); 
    float frac_cin_x = fract(sin_x); 
    float frac_cons_x = fract(cos_x);
    float cin_cin_x = ceil(sin_x);
    float flot_cin_x = floor(sin_x); 
    float cin_cos_x = ceil(cos_x);
    float clamp_x = clamp(sin_x,0.0,1.0); 

    vec2 st = gl_FragCoord.xy/u_resolution; 

    float test = smoothstep(sin_x,cos_x, st.x) - smoothstep(frac_cons_x,frac_cin_x,st.y); 




    gl_FragColor = vec4(test,0,0,1); 
    
}
