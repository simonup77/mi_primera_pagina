
/**
 * Variable en JS------------------------------------------------------------------------------------------
 */


let numero = 2;
let number = 77;

    console.log(number + numero );
    console.log(number - numero );
    console.log(number * numero );
    console.log(number / numero );
    console.log(number % numero );



//------------------------------------------------------------------------------------------------------


/**
 * String
 * Number
 * Bigint
 * Boolean
 * Undefined
 * Null
 * Symbol // DESPUES
 * Object // DESPUES
 */
let palabra = "string";
let numero2 = 50;
let bigint = 1421242525125;
//---------------------------
// Boolean
let verdadero = true;
let falso = false;
//-------------------
let indefinido = undefined;
let nulo = null;
//-------------------

let deportes = [
    ['basketball',"doble ritmo", "triple", "tiro"," pase", "dribling"], 
    'tennis', 
    'natación', 
    'futbol', 
    'lucha', 
    2, 
    true
];

//------------------------------------------------------------------------------------------------------

/**
 * Validaciones - estructuras de control ------------------------------------------------------------------------------------------------
 */

/**
 * Simón necesita ir a comprar café a la tienda. Pero Simón debe ser mayor de edad, si no es mayor de edad, el vendedor le vende agua
 * 
 * En el primer caso Simón tiene 18, puede comprar café? true 
 * En el segundo caso Simón tiene 13, puede comprar café? false 
 */
    let si = "simon compro cafe";
    let no = "simon no pudo comprar cafe😥";

    let edad = 20;

        if (edad >= 18) {
            console.log(si);
        } else {
            console.log(no);
        }
/**
 * Validación - determinar si un número es par o impar, usando estructuras de control
 * 
 * Si el número es par, mostrar un mensaje que diga que es par
 * Si el número es impar, mostrar un mensaje que diga que es impar.
 */

    let numero_prueba = 20;

    let par = "el numero si es par😁";
    let impar = "el numero es impar😡";


        if (numero_prueba % 2 == 0) { 
         
            console.log(par);
        } else if(numero_prueba % 2 != 0){
            console.log(impar);
        }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Ejercicios con Javascript
 */
    // let primer_numero = parseFloat(prompt("Ingresa el primer número:"));
    // console.log(primer_numero);

    // let segundo_numero = parseFloat(prompt("ingresa el segundo numero"));
    // console.log(segundo_numero);

    // let operacion = prompt("¿que operacion deseas suma o resta o multiplicar o dividir?");
    // console.log(operacion);

    // if(operacion == "resta"){
    //     console.log(primer_numero - segundo_numero); 

    // }else if("suma"== operacion){

    //     console.log(primer_numero + segundo_numero);
    // }else if(operacion == "multiplicar"){

    //     console.log(primer_numero * segundo_numero);
    // }else if(operacion == "dividir"){

    //     console.log(primer_numero / segundo_numero);
    // }


// let precio = parseFloat(prompt("precio del producto"));

// let promocion = parseFloat(prompt("cual es el porcentaje % de la promo"));
    
// let descuento = precio * (promocion / 100); // = 400. precio - descuento = 600

// console.log("El valor final es: ", precio - descuento);



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Arays o arreglos (listas)

let negocios = [ 
    "trading",
    ["velas", "mercado","alsista", "bajista", "compra", "venta"],
    "ecommerce",
    "dropshiping",
    "hotmart",
    "compra y venta"
];

console.log(negocios);

negocios.push("coaching");

console.log(negocios);


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Ciclos
// For, While, Do while, for each

let videogames = [
    "fornite",
    "rocket league",
    "cod",
    "gta5",
    "ark",
    "among us"
];

for (let index = 0; index < videogames.length; index++) {
    console.log(videogames[index]);
}

// Ejercicio for - contar del 1 al 10

for (let index = 1; index <= 10; index++)  {
    console.log(index);
}

// let numero_t = parseFloat(prompt('ingresa la tabla para ejecutar'));


    // console.log(numero_t + " x " + index + " = " + numero_t * index); 
    // console.log(numero_t + " x " + index + " = " + numero_t * index); 
  
//   for (let indice = 1; indice <= 100000; indice++)  {
    
//         for (let index = 1; index <= 10; index++)  {
//             // console.log(numero_t + " x " + index + " = " + numero_t * index); 
//             console.log(`${indice} x ${index} = ${indice * index}`);
//         }
//     }
// While
let escala = '_';
let espacio = "&nbsp;";
let escalera = '';
for (let index = 1; index <= 50; index++) {

    escala = escala + "_";
    espacio = espacio + "&nbsp;";
    escalera = escalera + escala + "<br>" + espacio + "|";
    console.log(escala + "\n" + espacio + "|");

}

let escaleraHtml = document.getElementById('77');
escaleraHtml.innerHTML = escalera;
 
// 10 <= 10
//[1, 2, 3, ]

//tipos de datos, validaciones, arrays (arreglos), ciclos, fun


















