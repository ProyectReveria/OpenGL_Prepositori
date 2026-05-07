//Si haces una funcion esta tiene que hacer: func(type(data))

//declaraciones
//xy //ambas cordendas cardenales dentro de dos dimensions

//vectors
//vec2 // x,y 
//vec3 // x,y,z
//vec4 // x,y,z,a 

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
//gl_FragColor //colores en una pantalla usando pixeles (n(4) o bin n(16) bits)(recibe vector 4 (R,G,B,intensidad))
//smoothstep() //hace un degradado
//step() //corta de golpe una parte de la pantalla para que se renderice distinto

//puntos polares
//length() //Devuelve radios, longitudes y distancias, usualmenmte desde el centro
//atan() //recibe valores x,y en vec2, son angulos.
//distance() //Define la distancia de un objeto dentro del espacio, por tanto una figura se posiciona usando este, also es la distancia entre dos puntos
//lessThan()
//lessThanEqual()
//greaterThan()
//greaterThenEqual()
//equal() 
//notEqual()

#ifdef GL_ES
precision mediump float; 
#endif 
uniform float u_time; 
uniform vec2 u_resolution; 
uniform vec2 u_mouse; 


const float pi = 3.14; 
const float Two_pi = 6.28; //el doble de pi o TWO PI



//caracter here to restart:2

void main(){
    ///<Do NOT errase>// 
    vec2 Cardinal_Partician = gl_FragCoord.xy / u_resolution; 
    ///<Do NOT errase>//  





    ///code///

    vec3 color_Base = vec3(0.0);   
    float CenterCardinalPosition = 0.0; 
    CenterCardinalPosition = distance(Cardinal_Partician,vec2(0.5,0.5 * (abs(sin(u_time))))); 
    float CenterCardinalPosition2 = distance(Cardinal_Partician,vec2(0.5,0.5 / (abs(sin(u_time)))));


    color_Base = vec3(CenterCardinalPosition); 
    float color_Distance_3DX = step(color_Base.x, 0.1); 
    float color_Distance_3DZ = step(color_Base.z, 0.7); 

    ///code///





    ///<Clean definition, not the entire line>//
    gl_FragColor = vec4(1,color_Distance_3DX,CenterCardinalPosition2,1.0); 
    //Return gl_FragColor// 

}
