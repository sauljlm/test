'use strict';
const tablaPadecimientos = document.querySelector('#customers tbody');

const mostrarTablaPadecimientos = () => {
    listaPadecimientos.forEach(padecimiento => {
        let fila = tablaPadecimientos.insertRow();
        fila.insertCell().innerHTML = padecimiento.tipoMascota;
        fila.insertCell().innerHTML = padecimiento.padecimiento;
        fila.insertCell().innerHTML = "<button>...</button>";

    });
};

mostrarTablaPadecimientos();