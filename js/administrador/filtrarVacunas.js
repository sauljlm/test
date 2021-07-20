'use strict';

console.log(listaVacunas)

const tablaVacunas = document.querySelector('#customers tbody');
const inputFiltro = document.querySelector('#txt-filtro');


const mostrarTablaVacunas = () => {
    tablaVacunas.innerHTML = '';
    listaVacunas.forEach(vacuna => {
        if (vacuna.tipoMascota.toLowerCase().includes(filtro) || vacuna.vacuna.toLowerCase().includes(filtro)) {
            let fila = tablaVacunas.insertRow();
            fila.insertCell().innerHTML = vacuna.tipoMascota;
            fila.insertCell().innerHTML = vacuna.vacuna;

            let celdaAcciones = fila.insertCell();

            let botonEditar = document.createElement('button');
            botonEditar.innerText = '• • •';
            botonEditar.classList.add('content-button');



            botonEditar.addEventListener('click', () => {
                sessionStorage.setItem('vacunaSeleccionada', JSON.stringify(vacuna));

            });
            celdaAcciones.appendChild(botonEditar);
        };
    });
};



mostrarTablaVacunas();
inputFiltro.addEventListener('keyup', mostrarTablaVacunas);