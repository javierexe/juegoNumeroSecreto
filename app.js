let numeroSecreto = 0;
let intentos = 0;
let numerosSecretos = [];
let numMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroAleatorio = parseInt(Math.random()*numMaximo+1);
    
    console.log(numeroAleatorio);
    console.log(numerosSecretos);

    if (numerosSecretos.length == numMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (numerosSecretos.includes(numeroAleatorio)) {
            return generarNumeroSecreto();
        } else {
            numerosSecretos.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }
}



function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorIngresado').value);
    if (numeroUsuario === numeroSecreto) { 
        asignarTextoElemento('p',`Felicitaciones... Acertaste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroSecreto > numeroUsuario ) {
            asignarTextoElemento('p', 'No!. El número secreto es mayor')
            } else { 
                asignarTextoElemento('p', 'No!. El número secreto es menor')
            }
            intentos++;
            limpiarCaja();
    return;
}

function limpiarCaja() {
    document.querySelector('#valorIngresado').value = '';
}

function condicionesInciales() {
    asignarTextoElemento('h1', 'Adivina el número secreto');
    asignarTextoElemento('p', `Elige un número del 1 al ${numMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function nuevoJuego() {
    limpiarCaja();
    condicionesInciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesInciales();
