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

#ifdef GL_ES
precision mediump float; 
#endif 

const float pi = 3.14; 
const float Two_pi = 6.28; //el doble de pi o TWO PI

uniform float u_time; 
uniform vec2 u_resolution; 
uniform vec2 u_mouse; 

//caracter here to restart:2

vec3 calculation_hsb2rgb(in vec3 c){
    vec3 rgb = clamp(abs(mod(c.x*6.0 + vec3(1.0,2.0,4.0), 6.0) -3.0)-1.0,0.0,1.0);
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix( vec3(1.0), rgb, c.y);
}

void main(){

    vec2 st = gl_FragCoord.xy / u_resolution; 

    float pct = distance(st,vec2(0.5));
    float Apct = pct * sin(u_time);
    vec3 define_color = vec3(0.4941, 0.2078, 0.2078); 

    vec3 color = vec3(Apct); //color = distance * utime
    float  partisan_a = smoothstep(color.x,gl_FragColor.x,cos(u_time)); 
    vec3 tempData = color; 
    color = tempData / abs(partisan_a); 
    float partisan_b = partisan_a - smoothstep(color.x,color.y,u_resolution. x);
    color = tempData / abs(partisan_b); 
    float partisan_c = sqrt(fract(partisan_b ))- (smoothstep(color.x,color.y,u_resolution. x) + smoothstep(partisan_a,partisan_b,st.x));
    color = tempData / abs(partisan_c); 
    float partisan_d = smoothstep(sqrt(abs(pow(partisan_a,2.0) + pow(partisan_b,2.0)+ pow(partisan_c,2.0) )),sqrt(abs(pow(st.x,2.0)+ pow(st.y,2.0))), Apct);
    color = tempData / abs(partisan_d);

    vec2 tocener = vec2(partisan_a,partisan_b) - st; 
    float angle = atan(tocener.x,tocener.y); 
    float Radio = length(tocener) * pi; 

    float circunferencia = tan(angle); 

    color = calculation_hsb2rgb(vec3((circunferencia),1.0,1.0));


    gl_FragColor = vec4(color,1.0);
}
