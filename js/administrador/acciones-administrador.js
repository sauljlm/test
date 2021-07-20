'use strict';


const btnAgregarTipoMascota = document.querySelector('#btn-agregar');

const selectTipoMascota = document.querySelector('#slt-tipomascota');

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
            title: 'Agrega la nueva Raza de',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
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
                    'title': 'la raza se ha agregado correctamente',
                })
            }
        }).then(() => { window.location.href = 'acciones-administradorRazas.html'})

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