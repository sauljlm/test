const addButton = document.querySelector("#btn-modificar");
const configSection = document.querySelector("#config-user");
const configSectionDog = document.querySelector('#config-pet');
const profileName = document.querySelector('.js-profile__name');
const profilePhoto = document.querySelector('#profile-photo-user');
const profileTypeUser = document.querySelector('.js-profile__user-type');
const profileAge = document.querySelector('.js-profile__age');
const profileLocation = document.querySelector('.js-profile__location');
const profileEmail = document.querySelector('.js-profile__email');
const profileNumber = document.querySelector('.js-profile__phone-number');
const profileBusiness = document.querySelector('.js-profile__business');
const profileServiceType = document.querySelector('.js-profile__service-type');
const servicesContainer = document.querySelector('.js-services-container');

const btnMetodos = document.querySelector("#btn-metodos");


// $objeto principal Local de usuarios.
let usuario = false;

let loggedUser = false;
let activeUser = null;

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    ciudad: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    localidad: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    edad: /^\d{2,3}$/,
    edadMascota: /^\d{1,2}$/,
    cedula: /\d{9,10}/,
    numero: /\d{8,9}/,
    email: /^[a-zA-Z.0-9_]+\@{1}[a-zA-Z.]+$/
}

// ---------------
// $para enviar modificaciones a la base de datos.
// --------------
const modificarDatosUsuario = async(propiedad, valor) => {

    let datos = {};

    datos[propiedad] = valor;

    const modificacion = await fetch(`http://localhost:8080/users/update-data/${usuario._id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

    return modificacion;

}

// ---------------
// $para enviar a pantalla de metodos
// --------------
btnMetodos.addEventListener("click", () => {
    window.location.href = 'listar-metodos.html';
})

function vaciarMascotaAndIds() {
    mascota.length = 0;
    idsMascotas.length = 0;
}

// ---------------
// $Todas las acciones de los botones en configuración.
// --------------
const onBtnClicked = async(btnId) => {
    console.log(usuario)
    if (btnId == 'confirm') {
        swal.clickConfirm();
    }

    if (btnId == 'modifyUser') {

        // !para guardar la fecha externamente
        let fechaAux;
        let currentProvince = 0;
        let currentCant = 0;
        let currentDistr = 0;

        // !alerta de encuestas

        Swal.mixin({
            input: 'text',

            confirmButtonText: 'Siguiente &rarr;',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: 'firebrick',
            html: `<button class="btn btn-primary swal2-styled omitir" onclick="onBtnClicked('confirm')">Omitir</button>`,
            showCancelButton: true,
            progressSteps: ['1', '2', '3', '4', '5', '6', '7', '8'],
            customClass: {
                popup: 'popup-class',
                title: 'popup-title',
                input: 'steps',
                content: 'popup-content',
            },

        }).queue([{
                title: '1. Ingrese el Nombre',
                inputValue: usuario.name,

                inputValidator: (value) => {
                    if (!expresiones.nombre.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }
            },
            {
                title: '2. Ingrese la Cédula',
                inputValue: usuario.id,
                inputValidator: (value) => {
                    if (!expresiones.cedula.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }
            },
            {
                title: '3. Ingrese el Correo',
                inputValue: usuario.email,
                inputValidator: (value) => {
                    if (!expresiones.email.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }
            },
            {
                title: '4. Ingrese el Género',
                input: 'select',
                inputOptions: {
                    Masculino: 'Masculino',
                    Femenino: 'Femenino',
                    Otro: 'Otro',
                },
                inputValue: usuario.sex,
                inputValidator: (value) => {
                    if (!expresiones.nombre.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }
            },
            {
                title: '5. Ingrese el Teléfono',
                inputValue: usuario.phoneNumber,
                inputValidator: (value) => {
                    if (!expresiones.numero.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }
            },
            {
                title: '6. Ingrese la Provincia',
                input: 'select',
                inputValue: usuario.province,
                inputOptions: {
                    1: 'San José',
                    2: 'Alajuela',
                    3: 'Cartago',
                    4: 'Heredia',
                    5: 'Guanacaste',
                    6: 'Puntarenas',
                    7: 'Limón',
                },

                // %ejecuta esto cuando ya se abrio
                didOpen: async() => {
                    const selectProvince = Swal.getInput();
                    currentProvince = selectProvince.value;
                    selectProvince.addEventListener('change', () => {
                        currentProvince = selectProvince.value;
                    });
                }
            },
            {
                title: '7. Ingrese el Cantón',
                input: 'select',
                inputValue: () => {
                    if (parseInt(currentProvince) == usuario.province) {
                        return usuario.cant;
                    } else {
                        return 0;
                    }
                },

                inputValidator: (value) => {
                    if (value == 0) {
                        return 'No ha seleccionado su cantón.';
                    }
                },
                didOpen: () => {
                    const selectCant = Swal.getInput();

                    currentCant = usuario.cant;

                    selectCant.value = usuario.cant;
                    selectCant.addEventListener('change', () => {
                        currentCant = selectCant.value;
                    });

                    fetch(`https://ubicaciones.paginasweb.cr/provincia/${currentProvince}/cantones.json`)
                        .then(response => response.json())
                        .then(data => {
                            for (const property in data) {
                                const option = document.createElement('option');
                                if (property == usuario.cant && parseInt(currentProvince) == usuario.province) {
                                    option.setAttribute('selected', property);
                                }
                                option.setAttribute('value', property);
                                option.innerHTML = `${data[property]}`;
                                selectCant.appendChild(option);
                            }
                        });
                }


            },
            {

                title: '8. Ingrese el Distrito',
                input: 'select',
                inputValue: usuario.distr,

                inputValidator: (value) => {
                    if (value == 0) {
                        return 'No ha seleccionado su Distrito.';
                    }
                },

                didOpen: () => {
                    const selectDistrito = Swal.getInput();

                    currentDistr = usuario.distr;

                    selectDistrito.value = currentDistr;

                    selectDistrito.addEventListener('change', () => {
                        currentDistr = selectDistrito.value;
                    });

                    fetch(`https://ubicaciones.paginasweb.cr/provincia/${currentProvince}/canton/${currentCant}/distritos.json`)
                        .then(response => response.json())
                        .then(data => {
                            for (const property in data) {
                                const option = document.createElement('option');
                                if (property == usuario.distr && parseInt(currentProvince) == usuario.province) {
                                    option.setAttribute('selected', property);
                                }
                                option.setAttribute('value', property);
                                option.innerHTML = `${data[property]}`;
                                selectDistrito.appendChild(option);
                            }
                        });
                }

            },


        ]).then((result) => {

            // @RESULTADOS

            const respuestas = result;
            // @guardo los resultados de aca en una variable
            // @para que se evaluen abajo

            //! (No es necesario o relevante)
            // @copia de seguridad del objeto antes de ser modificado
            // @para devolverlo a su estado anterior
            const copiaObjetoActual = usuario;

            if (result.value) {
                Swal.fire({
                    title: 'Está seguro de que desea Guardar los cambios?',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: `Si`,
                    denyButtonText: `No`,
                    icon: 'warning'
                }).then((result) => {
                    if (result.isConfirmed) {

                        // #esto deja los campos a el valor inicial si el campo viene vacio.
                        // #si el valor es distinto lo actualiza en la BD
                        // -----------------------------

                        // !si el valor es diferente al actual y no es vacio...
                        if (respuestas.value[0] != usuario.nombre && respuestas.value[0] != '') {
                            modificarDatosUsuario('name', respuestas.value[0]);
                        }
                        // -----------------------------
                        if (respuestas.value[1] != usuario.cedula && respuestas.value[1] != '') {
                            modificarDatosUsuario('id', respuestas.value[1]);
                        }
                        // -----------------------------
                        if (respuestas.value[2] != usuario.correo && respuestas.value[2] != '') {
                            modificarDatosUsuario('email', respuestas.value[2]);
                        }
                        // -----------------------------
                        if (respuestas.value[3] != usuario.genero && respuestas.value[3] != '') {
                            modificarDatosUsuario('sex', respuestas.value[3]);
                        }

                        // -----------------------------
                        if (respuestas.value[4] != usuario.telefono && respuestas.value[5] != '') {
                            modificarDatosUsuario('phoneNumber', respuestas.value[5]);
                        }
                        // -----------------------------

                        if (parseInt(currentProvince) != usuario.provincia && currentProvince != '') {
                            modificarDatosUsuario('province', currentProvince);
                        }
                        // -----------------------------

                        if (parseInt(currentCant) != usuario.canton && currentCant != '') {
                            modificarDatosUsuario('cant', currentCant);
                        }
                        // -----------------------------

                        if (parseInt(currentDistr) != usuario.distrito && currentDistr != '') {
                            modificarDatosUsuario('distr', currentDistr);
                        }
                        // -----------------------------  

                        Swal.fire({
                            title: '¡Guardado!',
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonText: 'ok',
                            showLoaderOnConfirm: true,
                            preConfirm: () => {
                                updateCurrentUser();
                            },
                            allowOutsideClick: () => !Swal.isLoading()
                        });

                    } else if (result.isDenied) {
                        Swal.fire('Cambios no guardados.', '', 'error')
                        usuario = copiaObjetoActual;
                    }
                });
            }
        });
    }

    if (btnId == 'userImage') {
        const {
            value: file
        } = await Swal.fire({
            title: 'Seleccione una foto de Perfil',
            input: 'file',
            inputAttributes: {
                'accept': 'image/*',
                'aria-label': 'Sube una imagen'
            }
        });

        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                Swal.fire({
                    title: 'La nueva foto de perfil',
                    imageUrl: e.target.result,
                    imageAlt: 'new'
                })
            }
            reader.readAsDataURL(file)
        }
    }
    if (btnId == "cancel") Swal.fire("you choosed: " + btnId);

};


// ---------------
// $menú principal de configuración Usuarios
// --------------
configSection.addEventListener("click", () => {

    Swal.fire({
        imageUrl: 'https://res.cloudinary.com/proyects/image/upload/v1618471322/edit_k4kwsw.png',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        title: '¿Qué desea modificar?',
        input: null,
        backdrop: true,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: 'firebrick',
        customClass: {
            popup: 'popup-class',
            title: 'popup-title',
            input: 'steps',
            content: 'popup-content',
        },
        html: `<br><button class="btn btn-primary swal2-styled general" onclick="onBtnClicked('modifyUser')">Información General</button>
        <br><button class="btn btn-primary swal2-styled image" onclick="onBtnClicked('userImage')">Foto de Perfil</button><br>`,
    });
});


// ---------------
// $valida si existe la mascota.
// --------------
const verificarExistencias = (array) => {
    if (array.length !== 0 || typeof array !== 'undefined') {
        return true;
    }
    return false;
}

// ---------------
// $para acentuar los titulos de las propiedades de cada objeto.
// --------------
const diccionario = {
        cedula: 'Cédula',
        genero: 'Género',
        telefono: 'Teléfono',
        canton: 'Cantón',
        calificacion: 'Calificación'
    }
    // ---------------
    // $para capitalizar los titulos de las propiedades de cada objeto.
    // --------------
const capitalizar = (campos) => {
    let arreglo = [];
    campos.forEach(function capit(campo, i) {
        let minuscula;
        let mayuscula = campo.substring(0, 1).toUpperCase();
        //si la palabra tiene más de una letra almacenamos las minúsculas
        if (campo.length > 0) {
            minuscula = campo.substring(1).toLowerCase();
        }
        //escribimos la palabra con la primera letra mayuscula
        arreglo[i] = mayuscula.concat(minuscula);

        if (campo == 'cedula') {
            arreglo[i] = diccionario.cedula
        } else if (campo == 'genero') {
            arreglo[i] = diccionario.genero
        } else if (campo == 'telefono') {
            arreglo[i] = diccionario.telefono
        } else if (campo == 'canton') {
            arreglo[i] = diccionario.canton
        } else if (campo == 'calificacion') {
            arreglo[i] = diccionario.calificacion
        }
    });
    return arreglo;
}

// ---------------
// $para cargar la información del cliente
// ^Se reutiliza varias veces.
// --------------
const cargarInfoCliente = async() => {
    if (verificarExistencias(usuario)) {
        profileName.innerHTML = usuario.name;
        profilePhoto.setAttribute('src', usuario.imageURL);
        profileAge.innerHTML = calculateAge(usuario.birthdate);
        profileBusiness.innerHTML = usuario.nameCompany;
        profileServiceType.innerHTML = usuario.serviceType;
        profileTypeUser.innerHTML = 'Proveedor de servicio';
        profileLocation.innerHTML = `${await getProvinceName(usuario.province)}, ${await getCantName(usuario.province, usuario.cant)}`;
        profileEmail.innerHTML = usuario.email;
        profileNumber.innerHTML = usuario.phoneNumber;
        // end New
    }
}

// ---------------
// $para cargar visualmente la puntuación.
// --------------
const desplegarPatitas = (index, estado) => {
    const patitas = document.querySelectorAll('.contenedor-calificacion svg');
    if (estado) {
        patitas[index].style.display = 'block';
    } else {
        patitas[index].style.display = 'none';
    }
}

// ---------------
// $para cargar visualmente la puntuación.
// --------------
const cargarCalificacionCliente = () => {

    if (verificarExistencias(usuario)) {
        const patitas = document.querySelectorAll('.contenedor-calificacion svg');
        for (let i = 0; i < usuario.qualification; i++) {
            desplegarPatitas(i, true);
        }
    }
}

const renderServices = (services) => {
    console.log(services)
    services.forEach(element => {
        const service = document.createElement('li');
        service.setAttribute('class', 'profile-items__item profile-item-service');
        service.innerHTML = `
            <div class="profile-item__body-left">
                <p class="profile-item__header">${element.name}</p>
                <p class="profile-item__description">${element.description}</p>
            </div>
            <div class="profile-item__body-right">
                <div class="button-service-container">
                    <button class="profile-item__button primary-button js-edit-service-btn">Modificar</button>
                    <button class="profile-item__button secundary-button js-delete-service-btn">Eliminar</button>
                </div>
                <p class="profile-item__schedule">De ${element.startTime} a ${element.endTime}</p>
                <p class="profile-item__price">₡${element.price}</p>
            </div>
        `;
        servicesContainer.appendChild(service);
    });
}

const updateCurrentUser = async() => {
    loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
    fetch(`http://localhost:8080/services/get-user-services/${loggedUser._id}`)
        .then(response => response.json())
        .then(data => renderServices(data));
    usuario = loggedUser;
    cargarInfoCliente();
}

window.onload = async function() {
    await updateCurrentUser();

    if (loggedUser) {
        startHeader();
        cargarCalificacionCliente();
    }
};