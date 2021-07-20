'use strict';

const btnAgregar = document.querySelector('#btn-agregar');

const inputNombreMascota = document.querySelector('#registro-nombre');
const edadMascota = document.querySelector('#registro-edad');
const selectRaza = document.querySelector('#slt-raza');
const selectPadecimientos = document.querySelector('#slt-padecimientos');
const selectVacunas = document.querySelector('#slt-vacunas');
const selectTipo = document.querySelector('#slt-tipo');
const petPhoto = document.querySelector('#pet-photo')



// Validaciones
const validar = () => {
    let error = false;

    let regexFormato = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let formatoEdad = /^\d{1,2}$/;


    if (regexFormato.test(inputNombreMascota.value) == false) {
        error = true;
        inputNombreMascota.classList.add('error');
    } else {
        inputNombreMascota.classList.remove('error');

    }
    if (formatoEdad.test(edadMascota.value) == false) {
        error = true;
        edadMascota.classList.add('error');
    } else {
        edadMascota.classList.remove('error');

    }
    if (regexFormato.test(selectRaza.value) == false) {
        error = true;
        selectRaza.classList.add('error');
    } else {
        selectRaza.classList.remove('error');

    }
    if (regexFormato.test(selectPadecimientos.value) == false) {
        error = true;
        selectPadecimientos.classList.add('error');
    } else {
        selectPadecimientos.classList.remove('error');

    }
    if (regexFormato.test(selectVacunas.value) == false) {
        error = true;
        selectVacunas.classList.add('error');
    } else {
        selectVacunas.classList.remove('error');

    }
    if (regexFormato.test(selectTipo.value) == false) {
        error = true;
        selectTipo.classList.add('error');
    } else {
        selectTipo.classList.remove('error');

    }


    if (error == false) {

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar su mascota',
            'text': 'Por favor revise los campos correctamente.',
            'confirmButtonText': 'ok'
        });

    }


};

//Limpiar Formulario
const limpiar = () => {

    inputNombreMascota.value = "";
    edadMascota.value = "";
    selectRaza.value = "";
    selectPadecimientos.value = "";
    selectVacunas.value = "";
    selectTipo.value = "";
    petPhoto.src = "";

};



// Agarra todos los selects de padecimientos por ejemplo
// const selects = document.querySelectorAll('.contenedorP select');


// selects.forEach(select => {
//     arregloResultados.push(select.value);
// });
// const arregloResultados = [];

// console.log(arregloResultados);


btnAgregar.addEventListener('click', validar);