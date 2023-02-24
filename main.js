let puntosUsuario = 0;
let puntosPC = 0;
let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntosUsuario");
let contenedorPuntosPC = document.querySelector("#puntosPC");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#ganaPunto");
let elegiTuArma = document.querySelector("#elegirArma");
let contenedorEleccionUsuario = document.querySelector("#eleccionUsuario");
let contenedorEleccionPC = document.querySelector("#eleccionPC");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;
    // piedra => 0
    // papel => 1
    // tijera => 2
    if (eleccionPC === 0) {
        eleccionPC = "Piedra👊";
    } else if (eleccionPC === 1) {
        eleccionPC = "Papel📋"
    } else if (eleccionPC === 2) {
        eleccionPC = "Tijera✂️"
    }
    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate
    if (
        (eleccionUsuario === "Piedra👊" && eleccionPC === "Tijera✂️") ||
        (eleccionUsuario === "Tijera✂️" && eleccionPC === "Papel📋") ||
        (eleccionUsuario === "Papel📋" && eleccionPC === "Piedra👊")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "Piedra👊" && eleccionUsuario === "Tijera✂️") ||
        (eleccionPC === "Tijera✂️" && eleccionUsuario === "Papel📋") ||
        (eleccionPC === "Papel📋" && eleccionUsuario === "Piedra👊")
    ) {
        ganaPC();
    } else {
        empate();
    }
    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;
    if (puntosUsuario === 3 || puntosPC === 3) {
        if (puntosUsuario === 3) {
            instrucciones.innerText = "🤩 ¡Ganaste el juego! 🤩"
        }
        if (puntosPC === 3) {
            instrucciones.innerText = "😞 ¡La computadora ganó el juego! 😞"
        }
        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}
function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🤩"
}
function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😞"
}
function empate() {
    contenedorGanaPunto.innerText = "¡Empate! ⚔️"
}
function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");
    puntosUsuario = 0;
    puntosPC = 0;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;
    instrucciones.innerText = "El primero en llegar a 3 puntos gana."
}