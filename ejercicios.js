
// OPERADORES

// Binary operators, y esto es porque significa que están 2 operandos involucrado 

// de operación 

3 + 2
50 - 10
10 * 3
20 / 2

'Jesús ' + 'Daconte'

// Unary operator, aquí es porque hay solo 1 operando involucrado 

// Lógicos 

!false // operador not (no)

// Asignación 

var a = 1; 

// comparación 

3 == '3' // es igual

3 === '3' // es estrictamente igual 

5 < 3, 5 <= 3, 5 > 3, 5 >= 3 // menor, menor o igual, mayo, mayor o igual 

a && b // operador and (y), este operador genera una valicación siempe y cuando ambas variables sean verdad, "var 1 y var 2"

true || false // operador or (o), este operador genera una validacion siempre y cuando cuaquier de as variables sea verdad, "var 1 o var 2"


/* ================================================================ */ 

// Operador que solo se pueden utilizar con variables 

var edad = 40;

edad++;  // operador de incremento por 1
edad += 2; 

edad;










// CONDICIONALES


/* ================================================================ */ 

// Esto nos ayudará para poder hacer decisiones.

var esUsuario = true; 

if(esUsuario) {  // con el if validamos que la condición sea true
    console.log('Tiene acceso al contenido'); 
}

// Presentamos el else 

var esUsuario = false; 

if(esUsuario) {
    console.log('Tiene acceso al contenido'); 
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}

// Ejemplo de cómo haríamos una validación

var edad = 18; 
var accion; 

if(edad >= 18) {
    accion = 'Puede votar'
} else { // call back 
    accion = 'No puede votar'
}

console.log(accion);

// Ejemplo de cómo utilizaremos el else if

var edad = 18; 
var accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if(edad > 18) { 
    accion = 'Puede votar'
} else { // call back 
    accion = 'Aun no puede votar'
}

console.log(accion);



/* ================================================================ */ 

// Operador ternario 

var numero = 1; 
var resultado; 

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}

condition ? true : false; 

var numero = 1; 
var resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';

console.log(resultado);


// ==============================


// Ejercicio, reaizar un piedra, papel o tijeras VERSIÓN 1

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //el usuario GANO con Piedra```


// Ejercicio, reaizar un piedra, papel o tijeras VERSIÓN 2

var jugador;
var computador;

if (jugador == "tijeras"  && computador == "papel") 
{
    console.log("Ganaste");
}
else if (jugador == "Piedra"  && computador == "tijeras") 
{
    console.log("Ganaste");
}
else if (jugador == "papel"  && computador == "piedra") 
{
    console.log("Ganaste");
}
else if (jugador == computador ) 
{
    console.log("empate");
}
else {
    console.log("Perdiste")
}












// SWITCH


/* ================================================================ */ 

// Switch es una forma diferente de validar, está depende del caso que sea verdad. 

var numero = 1; 
var resultado; 

/* Switch compara con un === por esa razón los elementos tiene que ser idénticos */ 

switch (numero) {
    case 1: 
        resultado = "Sí es uno";
        break;
    case 10: 
        resultado = "Sí es diez";
        break;
    case 100:
        resultado = "Sí es cien";
        break;
    default:   
        resultado = "No soy nada"; 
}

console.log(resultado); 

// Ejercicio, reaizar un piedra, papel o tijeras VERSIÓN 3

<var tijeras = "tijeras";
var piedra = "piedra";
var papel = "papel";

function resultadoGanador(user, cpu) {
    switch (true) {
        case user === cpu :
            console.log("Empate")
        break;
        case user === "tijeras" && cpu === "papel" :
            console.log("Ganaste")
        break;
        case user === "piedra" && cpu === "tijeras" :
            console.log("Ganaste")
        break;
        case user === "papel" && cpu === "piedra" :
            console.log("Ganaste")
        break;
        default: 
            console.log("Perdiste")
    }
}>
