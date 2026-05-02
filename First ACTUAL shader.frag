//#import OpenGL_Lenguaje_Data; 
//Declaraciones 
//#ifdef 
//precision 
//mediump
//#endif

//Declaracion de tipos 
//uniform 
//declaracion de variables
//u_time //Delta time para Shaders (o "en tiempo real")
//u_resolution //La resolucion actual
//u_mouse // El raton o mejor dicho el "mouse" y su posicion

//Funciones:

//gl_FragCoord //Cordenadas en pantalla  (recibe coordenadas), permite partir la pantalla (es solo lectura para la GPU)
//gl_FragColor //colores en una pantalla (recibe vector 4 (R,G,B,intensidad))
//smoothstep()
//step() //corta de golpe una parte de la pantalla para que se renderice distinto

#ifdef GL_ES
precision mediump float; 
#endif 

float pi = 3.14; 

uniform float u_time; 
uniform vec2 u_resolution; 
uniform vec2 u_mouse; 


void main(){

    vec2 st = cos((gl_FragCoord.xy/u_resolution)); 
    vec2 st2 = cos((gl_FragCoord.xy)/u_mouse);
    vec2 mp = tan(u_mouse.x / u_resolution.xy); 

    float y1 = step(0.7,st.x); 
    float ysmoth = smoothstep(y1,0.9,st.x);

    float diagonal1 = step(sqrt((st.x * st.x) + (st.y * st.y)),mp.x);
    float diagonal2 = step(sin((st.y * st.y) + (st.x * st.x) ),mp.x);
    gl_FragColor = vec4(diagonal2,diagonal1,ysmoth, 1); 
    
}
