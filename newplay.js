//-------------bot---------------------------------
let papel_bot = document.getElementById("papel_bot");
let piedra_bot = document.getElementById("piedra_bot");
let tijera_bot = document.getElementById("tijera_bot");
//-----------humano-----------------------------------
let papel = document.getElementById("papel");
let piedra = document.getElementById("piedra");
let tijera = document.getElementById("tijera");
//-------------------------------------------------
papel_bot.addEventListener("click", function(){

});

//----------------------------------------------------------
// Constantes piedra, papel o tijera
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";
//----------------------------------------------------------


let boton_inicio = document.getElementById("boton_inicio")

boton_inicio.addEventListener("click",function(){
    alert("                                                INICIO EL JUEGO");
    this.classList.remove("is-success");
    this.classList.add("is-disabled");
    this.disabled = true

    // Llamamos función de iniciar juego
    startGame();
    
});


const startGame = () => {
    iniciarCartas();
}

const iniciarCartas = () => {

    papel.addEventListener("click", function(){
        alert("esto funciona?");
    });

    piedra.addEventListener("click", function(){

    });

    tijera.addEventListener("click", function(){

    });
}

 const ganador = () => {
    // Acá irá la logica de quien gana, segun el bot o uno
    
 }









// Recordatorio de por qué usamos const para las funciones hoy en día. Para que no se repitan
// ---------------------------------------------
// juegos.js
// const startGame = () => {
//     console.log("estoy jugando");
// }

// //----------------------------------------------
// // games.js
// const startGame2 = () => {
//     console.log("estoy jugando");
// }


//https://nostalgic-css.github.io/NES.css/