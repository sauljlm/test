'use strict';

console.log(listaRazas)

const tablaRazas = document.querySelector('#customers tbody');

const mostrarTablaRazas = () => {
    listaRazas.forEach(raza => {
        let fila = tablaRazas.insertRow();
        fila.insertCell().innerHTML = raza.tipoMascota;
        fila.insertCell().innerHTML = raza.raza;
        fila.insertCell().innerHTML = "<button>...</button>";
        
    });
};

mostrarTablaRazas();