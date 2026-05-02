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



void main(){

    //Time Partitions
    vec2 Coor_Partisan= gl_FragCoord.xy / u_resolution; 
    vec2 Coor_Partisan2 = gl_FragColor.xy / u_mouse.xy; 
    vec2 TimePartisan = Coor_Partisan.xy / u_time;
    float Time_Diferencial = sin(u_time); 

    vec3 colorA = vec3(0.149,0.144,0.912);
    vec3 colorB = vec3(0.7137, 0.1059, 0.3412);

    //seno
    colorA = sin(colorA);



    vec3 color = vec3(0,0,0);

    float pct = abs(sin(u_time));
    float pct_seno = sin(pct / fract(TimePartisan.x)); 
    float pct_coseno = cos(pct / fract(TimePartisan.x)); 
    float alturax = pct_seno; 
    float alturay = pct_coseno; 

    float distanciax = abs(Coor_Partisan.y - alturax);

    float Distanciay = abs(Coor_Partisan.x - alturay);

    float curva = smoothstep(color.x, 0.5, distanciax) - smoothstep(pct_coseno, 0.5, Distanciay);
    

    color = mix(tan(colorA * distanciax),sqrt(colorB),curva);

        gl_FragColor = vec4(color,1.0);
    
}
