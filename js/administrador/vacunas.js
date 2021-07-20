'use strict';

const tablaVacunas = document.querySelector('#customers tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaVacunas = [];

const llenarListaVacunas = async() => {
    listaVacunas = await obtenerVacunas();
    mostrarTablaVacunas();
};

const mostrarTablaVacunas = async() => {

    listaVacunas.forEach(vacuna => {
        console.log(vacuna)
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

    });
};

llenarListaVacunas();

inputFiltro.addEventListener('keyup', mostrarTablaVacunas);