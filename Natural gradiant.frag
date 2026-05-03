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

#ifdef GL_ES
precision mediump float; 
#endif 

float pi = 3.14; 

uniform float u_time; 
uniform vec2 u_resolution; 
uniform vec2 u_mouse; 

vec3 gradiant_color = vec3(0.13,0.14,0.0);
vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

void main(){

    //plane color 
    vec3 color = vec3(0.0); 
    //color frag
    float coolor_Partisanx = gl_FragColor.x / gradiant_color.x; 
    float coolor_Partixany = gl_FragColor.y / gradiant_color.y; 
    vec2 coolor_partisan_vec2 = vec2(coolor_Partisanx,coolor_Partixany);
    //Time Partitions
    vec2 Coor_Partisan= gl_FragCoord.xy / u_resolution; 
    float Time_SlowVersion = u_time / 7.0; 
    vec2 Coor_Partisan2 = gl_FragColor.xy / u_mouse.xy; 
    vec2 TimePartisan = Coor_Partisan.xy / Time_SlowVersion;

    vec3 pct = vec3(Coor_Partisan.x);

    color = mix (color,vec3(0.0863, 0.0549, 0.5333),colorB);
    color = mix (color,vec3(0.1765, 0.0235, 0.4275),colorB);
    color = mix (color,vec3(0.4784, 0.502, 0.1373),pct);
    color = mix (color, gradiant_color, coolor_Partisanx);




    gl_FragColor = vec4(log(log(TimePartisan.x))*0.9,color.y,sqrt(Coor_Partisan.y),fract(sin( Time_SlowVersion)));
    
}
