//#import OpenGL_Lenguaje_Data; 

vectors
vec2 // x,y 
vec3 // x,y,z
vec4 // x,y,z,a 

//Declaraciones 
#ifdef 
precision 
mediump
#endif

//Declaracion de tipos 
uniform 
//declaracion de variables
u_time //Delta time para Shaders (o "en tiempo real")
u_resolution //La resolucion actual
u_mouse // El raton o mejor dicho el "mouse" y su posicion

//Funciones:

mix() // Mescla Colores
gl_FragCoord //Cordenadas en pantalla  (recibe coordenadas), permite partir la pantalla (es solo lectura para la GPU)
gl_FragColor //colores en una pantalla (recibe vector 4 (R,G,B,intensidad))
smoothstep
step() //corta de golpe una parte de la pantalla para que se renderice distinto

//Si haces una funcion esta tiene que hacer: func(type(data))

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
//gl_FragColor //colores en una pantalla (recibe vector 4 (R,G,B,intensidad))
//smoothstep() //hace un degradado
//step() //corta de golpe una parte de la pantalla para que se renderice distinto

//puntos polares
//length() //Devuelve radios, longitudes y distancias
//atan() //recibe valores x,y en vec2, son angulos
//distance() 
//lessThan()
//lessThanEqual()
//greaterThan()
//greaterThenEqual()
//equal() 
//notEqual()
