#ifdef GL_ES
precision mediump float; 
#endif 

uniform float u_time; 
uniform vec2 u_resolution; 
uniform vec2 u_mouse; 

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution; 
    vec2 mp = u_mouse.x / u_resolution.xy; 
    gl_FragColor = vec4(st.x,st.y,mp.x,1.0); 
}
