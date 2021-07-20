'use strict';


const btnAgregarTipoMascota = document.querySelector('#btn-agregar');

const selectTipoMascota = document.querySelector('#slt-tipomascota');

const inputVacuna = document.querySelector('#text');

const validar = () => {
    let error = false;

    if (selectTipoMascota.value == '') {
        error = true;
        selectTipoMascota.classList.add('error');
    } else {
        selectTipoMascota.classList.remove('error');
    }

    if (error == false) {

        Swal.fire({
            title: 'Agrega el nuevo Padecimiento',
            input: 'text',
            inputLabel: 'Favor ingresa el nombre del padecimiento',
            inputPlaceholder: 'ingresa Padecimiento',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                return fetch(`/}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.value) {
                Swal.fire({

                    'icon': 'success',
                    'title': 'el Padecimiento se ha agregado correctamente',
                })
            }
        })

    } else {

        Swal.fire({
            'icon': 'warning',
            'title': 'Favor escoge el "Tipo de Mascota"',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
}


btnAgregarTipoMascota.addEventListener('click', () => {
    validar('registrar');
});