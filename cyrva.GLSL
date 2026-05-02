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
    vec2 st = gl_FragCoord.xy/u_resolution; 
    float x = (st.x + u_time) * pi; 
    float y = (st.y + u_time) * pi; 

    float sin_y = sin(y) + 1.0; 
    float cos_y = cos(y) + 1.0; 

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

    float altura = sin_x;
    float distancia = abs(st.y - altura); 

    float curva = smoothstep(0.1,0.0, distancia); // ESTA ES LA CURVA
    float test =  smoothstep(cos_x,sin_x, st.x) - smoothstep(cos_x,sin_x,st.y)  ;



    gl_FragColor = vec4(curva,0,0.3,1); 
    
}
