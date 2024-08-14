//juego de adivinar el numero
let limite = 20 ;
let numero_secreto = Math.floor(Math.random() * limite + 1);

// console.log(numero_secreto);

let adivina_numero;

// while (numero_secreto != adivina_numero) {
//    adivina_numero = prompt("adivinar un numero del 0 al " + limite);


// }

// alert("win🥳🎉");


function saludo() {
    alert('Holaaa, te saludo');
}

function sumar(num, num2) {
    console.log(num + num2);
}

function restar(num,num2 ){

    console.log(num - num2);
} 

function multiplicar(num,num2){

    console.log(num * num2);
}

function dividir(num,num2){ 
    if (num2 > 0) {
        console.log(num / num2);
    }else{ 

        alert("NO PUEDES DIVIDIR POR 0 PENDEJO INSERVIBLE POR ESO TE DIERON EN ADOPCION MAS BIEN DEDICATE A VENDER VIVE100");
    }


    
}









saludo();

sumar(6,4);
dividir(2,0);
multiplicar(0,7)