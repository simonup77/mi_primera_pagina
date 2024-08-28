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

const GANO = "gano";
const EMPATO = "empato";
const PERDIO = "perdio";
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

    let jugada_humano = '';

    papel.addEventListener("click", function(){
        jugada_humano = PAPEL;
         partida(jugada_humano);
    });

    piedra.addEventListener("click", function(){
        jugada_humano = PIEDRA;
         partida(jugada_humano);
    });


    tijera.addEventListener("click", function(){
        jugada_humano = TIJERA  
          partida(jugada_humano);
    });

    // Crear un valor aleatorio que elija para el bot, lo guardamos en una variable y luego de que elijamos nosotros
    // Este selecciona la opción del bot y despues nos dice quien ganó. Esto se repite 3 veces

    // El bot inicia
                                                    
}
 const partida = (eleccion_humano) => {
    let jugada_robot = jugadaBot();

    console.log(jugada_robot, eleccion_humano);
    let resultado = ganador(jugada_robot,eleccion_humano);
             alert (resultado); 

 }
 const ganador = (eleccion_bot, eleccion_humano) => {
   
    if(eleccion_bot == PAPEL){

        switch (eleccion_humano) {
            case TIJERA:
                return GANO;
                break;
            case PIEDRA:
                return PERDIO
                break;
            case PAPEL:
                return EMPATO
            default:
                break;
        }

    } else if (eleccion_bot == PIEDRA){

        let resultado = {
            [TIJERA] : PERDIO,
            [PIEDRA] : EMPATO,
            [PAPEL]  : GANO
        };

        return resultado[eleccion_humano]


    } else if (eleccion_bot == TIJERA){

        let resultado = {
            [TIJERA] : EMPATO,
            [PIEDRA] : GANO,
            [PAPEL]  : PERDIO
        };

        return resultado[eleccion_humano]

    }

    
 }

const jugadaBot =() => {                                   

    let jugadas = {
        1 : PIEDRA,
        2 : TIJERA,
        3 : PAPEL
    }
    console.log('aleatorio numero',randomNumber(1, 3))
    return jugadas[randomNumber(1, 3)];
}

/**
 * Esta función los da un numero aleatorio dependiendo del rango de numeros que le demos
 */
const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}



 (ganador(TIJERA,TIJERA));





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