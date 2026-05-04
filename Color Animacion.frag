//Si haces una funcion esta tiene que hacer: func(type(data))

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

//mix() // Mescla Colores
//gl_FragCoord //Cordenadas en pantalla  (recibe coordenadas), permite partir la pantalla (es solo lectura para la GPU)
//gl_FragColor //colores en una pantalla (recibe vector 4 (R,G,B,intensidad))
//smoothstep() //hace un degradado
//step() //corta de golpe una parte de la pantalla para que se renderice distinto

//puntos polares
//length() //Devuelve radios, longitudes y distancias
//atan() //recibe valores x,y en vec2, son angulos
//lessThan()
//lessThanEqual()
//greaterThan()
//greaterThenEqual()
//equal() 
//notEqual()

#ifdef GL_ES
precision mediump float; 
#endif 

const float pi = 3.14; 
const float Two_pi = 6.28; //el doble de pi o TWO PI

uniform float u_time; 
uniform vec2 u_resolution; 
uniform vec2 u_mouse; 

//caracter here to restart:1

void main(){

    vec2 st = gl_FragCoord.xy/ u_resolution.xy; 
    vec3 color = vec3(0.502, 0.0039, 0.0039); 
    //top
    vec2 bl = step(vec2(0.1),1.0 - st); 
    
    //down 
    vec2 tr = step(vec2(0.1), st); 
    float pct = bl.x * bl.y * tr.x *  tr.y;
    vec2 pctSmoth = smoothstep((vec2(0.1) * u_time)* cos(u_time),sqrt(1.0 - st),tr) - smoothstep(vec2(0.1) * sqrt(pow(sin(u_time),2.0) + floor(pow(sin(u_resolution.x),2.0))) ,1.0 - st,tr); 
    color = vec3(pctSmoth,0);

    gl_FragColor = vec4(abs(color),1.0); 

}
