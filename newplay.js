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

let boton_inicio = document.getElementById("boton_inicio")

boton_inicio.addEventListener("click",function(){
    alert("                                                INICIO EL JUEGO");
    this.classList.remove("is-success");
    this.classList.add("is-disabled");
    this.disabled = true;
});



//https://nostalgic-css.github.io/NES.css/