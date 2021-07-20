
const addButton = document.querySelector("#btn-modificar");
const configSection = document.querySelector("#config-user");
const configSectionDog = document.querySelector('#config-pet');

const btnMetodos = document.querySelector("#btn-metodos");

// $objeto principal Local de usuarios.
let usuario = {
    nombre: 'Jose Canario',
    cedula: 119300657,
    correo: 'marco@gmail.com',
    genero: 'Masculino',
    nacimiento: '1993-02-12',
    telefono: 65433455,
    provincia: 3,
    canton: 3,
    distrito: 4,
    calificacion: 4,
}

let USUARIOACTUAL = `6087d19c23749e3308ed49a3`;


const updateUsuarioActual = async() => {
    if (window.sessionStorage.getItem('loggedUser')) {
        loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
        USUARIOACTUAL = loggedUser._id;
    }
}

updateUsuarioActual();


// !Para tener el registro de la mascota que se esta mostrando
let mascotaMostrada = 0;
let ultimaMascotaEliminada = [];


// $objeto principal Local de mascotas.
let mascota = [
    /* {
            nombre: 'Scrapy',
            raza: 'American Standford',
            edad: '3',
            padecimientos: ['Rabia', 'Osteoporosis'],
            vacunas: ['Hepatitis canina', 'Parvovirus canino'],
            imagen: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
        } */
    /* , {

        nombre: 'Letty',
        raza: 'Labrador',
        edad: '4',
        padecimientos: ['Cancer', 'Colitis'],
        vacunas: ['Distemper', 'Leptospirosis'],
        imagen:'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'

    } */
];




function arrayRemove(arr, value) {

    return arr.filter(function(ele) {
        return ele != value;
    });
}


let idsMascotas = [];

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

//-----------------------------
//@ obtiene el usuario segun el ID, de la base de datos.
//-----------------------------
const obtener_usuario = () => {
    return fetch(`http://localhost:8080/users/get-user/${USUARIOACTUAL}`, {}).then(response => response.json())
        .then((json) => json);
};

//-----------------------------
//@ obtiene las mascotas segun el ID, del usuario de la base de datos.
//-----------------------------
const obtener_mascotas = () => {
    return fetch(`http://localhost:8080/pets/get-user-pets/${USUARIOACTUAL}`, {}).then(response => response.json())
        .then((json) => json);
};




//-----------------------------
//@ obtiene una mascota segun el ID, del usuario de la base de datos.
//-----------------------------
const buscar_mascota = (id) => {
    return fetch(`http://localhost:8080/pets/get-pet/${id}`, {}).then(response => response.json())
        .then((json) => json);
};

//-----------------------------
//@ obtiene los tipos de mascotas
//-----------------------------
const obtener_tipos_mascotas = () => {
    return fetch('http://localhost:8080/pet_types/get-pet_types', {}).then(response => response.json())
        .then((json) => json);
};

const insertarTiposDeMascota = async() => {
    const tipos = await obtener_tipos_mascotas();
}

insertarTiposDeMascota();

// ---------------
// $para insertar la info obtenida de DB a Usuarios.
// --------------
const insertarDatosUsuario = async() => {
    try {
        const data = await obtener_usuario();
        usuario.nombre = data.name;
        usuario.cedula = data.id;
        usuario.correo = data.email;
        usuario.genero = data.sex;
        usuario.nacimiento = data.birthdate.slice(0, 10);
        usuario.provincia = data.province;
        usuario.canton = data.cant;
        usuario.distrito = data.distr;
        usuario.telefono = data.phoneNumber;
        usuario.calificacion = data.qualification;
    } catch (err) {
        console.error(err);
    }

    cargarInfoCliente();
}


// ---------------
// $para insertar la info obtenida de DB a Mascotas.
// --------------
const insertarDatosMascota = async(valor = 0) => {

    try {
        const data = await obtener_mascotas();

        // !por cada mascota en arreglo.
        // # creo un objeto nuevo

        // TODO INSERTAR IMAGEN ACA
        for (objetoMascota in data) {

            let encontrado = idsMascotas.find(id => id == data[objetoMascota]._id);

            if (!encontrado) {
                idsMascotas.push(data[objetoMascota]._id);
            }

            let mascotaRepetida = mascota.find(mascota => mascota.nombre == data[objetoMascota].name);

            if (!mascotaRepetida) {

                let mascotaNueva = {
                    nombre: data[objetoMascota].name,
                    raza: data[objetoMascota].race,
                    edad: data[objetoMascota].age,
                    tipo: data[objetoMascota].petType,
                    padecimientos: [],
                    vacunas: [],
                    imagen: 'https://picsum.photos/200/300'
                }

                // !extraigo la lista de padecimientos de la mascota
                const lista_padecimientos = data[objetoMascota].ailments;
                // $la recorro
                lista_padecimientos.forEach((padecimiento, index) => {
                    const {
                        name
                    } = data[objetoMascota].ailments[index];
                    mascotaNueva.padecimientos.push(name);
                });

                // !extraigo la lista de padecimientos de la mascota
                const lista_vacunas = data[objetoMascota].vaccines;
                // $la recorro
                lista_vacunas.forEach((vacuna, index) => {
                    const {
                        name
                    } = data[objetoMascota].vaccines[index];
                    mascotaNueva.vacunas.push(name);
                });

                mascota.push(mascotaNueva);

            }

        }

        if (valor == 0) {
            cargarValoresArrow();
            cargarInfoMascota(mascotaMostrada);
            rellenarSelects(mascotaMostrada);
            aparecerDesaparecerMascota();
            DetectarStatusMascota();

            // $POR ELIMINACION
        } else if (valor == 1) {

            mascotaMostrada = 0;
            cargarValoresArrow();
            cargarInfoMascota(mascotaMostrada);
            rellenarSelects(mascotaMostrada);
            aparecerDesaparecerMascota();
            DetectarStatusMascota();
            cargarValoresArrow();
        }

    } catch (err) {
        console.error(err);
    }

}

// ---------------
// $para enviar modificaciones a la base de datos.
// --------------
const modificarDatosUsuario = async(propiedad, valor) => {

    let datos = {};

    datos[propiedad] = valor;

    const modificacion = await fetch(`http://localhost:8080/users/update-data/${USUARIOACTUAL}`, {
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
// $para enviar modificaciones a la base de datos.
// --------------
const modificarDatosGeneralesMascota = async(propiedad, valor, id) => {

    let datos = {};

    datos[propiedad] = valor;

    const modificacion = await fetch(`http://localhost:8080/pets/update-pet/${id}`, {
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
// $para eliminar todos los padecimientos de la mascota
// --------------
const eliminar_padecimientos_mascota = async(id) => {

    const modificacion = await fetch(`http://localhost:8080/pets/delete-all-ailments/${id}`, {
            method: 'DELETE',
            /* body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            } */
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

    return modificacion;
}



const eliminar_vacunas_mascota = async(id) => {

    const modificacion = await fetch(`http://localhost:8080/pets/delete-all-vaccines/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

    return modificacion;
}



const agregar_padecimientos_mascota = async(valor, id, type) => {

    let datos = {
        name: valor,
        animalType: type
    };

    const modificacion = await fetch(`http://localhost:8080/pets/add-new-ailment/${id}`, {
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


const agregar_vacunas_mascota = async(valor, id, type) => {

    let datos = {
        name: valor,
        animalType: type
    };

    const modificacion = await fetch(`http://localhost:8080/pets/add-new-vaccine/${id}`, {
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




const eliminar_mascota = async(id) => {

    const modificacion = await fetch(`http://localhost:8080/pets/delete/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

    return modificacion;
}

const deshabilitar_mascota = async(id) => {

    const modificacion = await fetch(`http://localhost:8080/pets/inactive-status/${id}`, {
            method: 'PUT',
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

    return modificacion;
}


const habilitar_mascota = async(id) => {

    const modificacion = await fetch(`http://localhost:8080/pets/active-status/${id}`, {
            method: 'PUT',
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

    return modificacion;
}


// ---------------
// $para cargar la provincia en Configuración
// ---------------
const getProvinceName = (province) => {
    const currentProvince = fetch(`https://ubicaciones.paginasweb.cr/provincias.json`)
        .then(response => response.json())
        .then(data => {
            return data[province];
        });

    return currentProvince;
}

// ---------------
// $para cargar el cantón en Configuración
// ---------------
const getCantName = (province, cant) => {
    const currentCant = fetch(`https://ubicaciones.paginasweb.cr/provincia/${province}/cantones.json`)
        .then(response => response.json())
        .then(data => {
            return data[cant];
        });

    return currentCant;
}

// ---------------
// $para cargar el distrito en Configuración
// ---------------
const GetDistrName = (province, cant, distr) => {
    const currentDistr = fetch(`https://ubicaciones.paginasweb.cr/provincia/${province}/canton/${cant}/distritos.json`)
        .then(response => response.json())
        .then(data => {
            return data[distr];
        });
    return currentDistr;
}


// ---------------
// $para obtener el nombre de localización según número.
// ---------------
const cargarValoresLocalizacion = async() => {

    // -------------------Obtención---------------------
    const propiedadProvincia = document.querySelector('#provincia');
    const valorNumericoProvincia = propiedadProvincia.textContent;
    // ------------------Convertida----------------------
    const valorProvincia = await getProvinceName(propiedadProvincia.textContent);
    propiedadProvincia.textContent = valorProvincia;
    // ----------------------------------------
    // ######################################################################

    // -------------------Obtención---------------------
    const propiedadCanton = document.querySelector('#canton');
    const valorNumericoCanton = propiedadCanton.textContent;
    // ------------------Convertida----------------------
    const valorCanton = await getCantName(valorNumericoProvincia, propiedadCanton.textContent);
    propiedadCanton.textContent = valorCanton;

    // -------------------Obtención---------------------
    const propiedadDistrito = document.querySelector('#distrito');
    // ------------------Convertida----------------------
    const valorDistrito = await GetDistrName(valorNumericoProvincia, valorNumericoCanton, propiedadDistrito.textContent);
    propiedadDistrito.textContent = valorDistrito;
    // ----------------------------------------
}

// ---------------
// $para enviar a pantalla de registro
// ---------------
addButton.addEventListener("click", () => {
    window.location.href = 'registro-mascotas.html';
});


// ---------------
// $para enviar a pantalla de metodos
// --------------
btnMetodos.addEventListener("click", () => {
    window.location.href = 'listar-metodos.html';
})

// ---------------
// $para obtener el valor de padecimiento o vacuna en Configuración
// --------------
const obtenerValorActual = (currentStep, tipo) => {
    let valor = '';

    if (tipo === '1') {
        if (mascota[mascotaMostrada].padecimientos.length >= currentStep) {
            valor = mascota[mascotaMostrada].padecimientos[currentStep];
            return valor;
        } else {
            return '';
        }
    }

    if (tipo === '2') {
        if (mascota[mascotaMostrada].vacunas.length >= currentStep) {
            valor = mascota[mascotaMostrada].vacunas[currentStep];
            return valor;
        } else {
            return '';
        }
    }

}

// ---------------
// $para calcular edad según fecha en configuración y validarlo
// --------------
function calcularEdad(fecha) {
    const hoy = new Date();
    const bithday = new Date(fecha);
    let edad = hoy.getFullYear() - bithday.getFullYear();
    var m = hoy.getMonth() - bithday.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < bithday.getDate())) {
        edad--;
    }
    return edad;
}

function vaciarMascotaAndIds() {
    mascota.length = 0;
    idsMascotas.length = 0;
}

// ---------------
// $Todas las acciones de los botones en configuración.
// --------------
const onBtnClicked = async(btnId) => {
    if (btnId == 'confirm') {
        swal.clickConfirm();
    }

    if (btnId == 'padecimientos') {

        // #extrae el valor accept del sweetalert que es la cantidad
        const {
            value: accept

        } = await Swal.fire({
            title: 'Ingrese la cantidad de padecimientos totales.',
            input: 'text',
            inputPlaceholder: 'Cantidad de Padecimientos',
            confirmButtonText: 'Enviar',
            inputValidator: (result) => {
                if (!expresiones.edadMascota.test(result)) {
                    return 'Información con formato inválido.';
                }
            }
        });

        // #y con esa cantidad pregunta los valores necesarios.
        if (accept) {

            const pasos = [];

            for (let index = 0; index < accept; index++) {
                pasos.push([index + 1].toString());
            }

            // #crea la alerta aca como plantilla para usarla varias veces
            const consultaPadecimiento = Swal.mixin({
                confirmButtonText: 'Siguiente',
                cancelButtonText: 'Anterior',
                progressSteps: pasos,
                input: 'text',
                inputAttributes: {},
                reverseButtons: true,
                inputValidator: (value) => {
                    if (!expresiones.nombre.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }
            });

            // !para guardar resultados
            const values = [];

            let currentStep;

            let vueltas = parseInt(accept);

            for (currentStep = 0; currentStep < vueltas;) {
                let valorEnObjeto = obtenerValorActual(currentStep, '1');

                const {
                    value: result
                } = await consultaPadecimiento.fire({
                    title: `Padecimiento ${currentStep+1}`,
                    inputValue: valorEnObjeto,
                    currentProgressStep: currentStep,
                });

                if (result) {
                    values[currentStep] = result;
                    currentStep++
                } else if (currentStep < pasos.length) {
                    Swal.close();
                    break;
                } else {
                    Swal.close();
                }

                // !Si el paso actual es igual al final entonces paramos.
                if (currentStep === pasos.length) {
                    Swal.fire(JSON.stringify(values));

                    Swal.fire({
                        title: '¿Desea guardar los cambios?',
                        icon: 'warning',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: `Guardar`,
                        denyButtonText: `Cancelar`,
                    }).then((result) => {
                        // !si le da al boton confirmar cambios
                        if (result.isConfirmed) {
                            // $ segun la mascota mostrada los padecimientos seran
                            // $los del resultado
                            // @Conexión con base de datos
                            Swal.fire({
                                title: '¡Guardado!',
                                icon: 'success',
                                showCancelButton: false,
                                confirmButtonText: 'ok',
                                showLoaderOnConfirm: true,
                                preConfirm: () => {

                                    eliminar_padecimientos_mascota(idsMascotas[mascotaMostrada]);

                                    values.forEach((value, index) => {

                                        if (value[index] || value[index] !== '') {
                                            agregar_padecimientos_mascota(value, idsMascotas[mascotaMostrada], mascota[mascotaMostrada].tipo);
                                        }

                                    });

                                    mascota[mascotaMostrada].padecimientos = values;

                                    rellenarSelects(mascotaMostrada);

                                },
                                allowOutsideClick: () => !Swal.isLoading()
                            });

                        } else if (result.isDenied) {
                            Swal.fire('Cambios no guardados.', '', 'error')
                        }
                    })


                }


            }




        }

    }

    if (btnId == 'vacunas') {

        const {
            value: accept
        } = await Swal.fire({
            title: 'Ingrese la cantidad de vacunas totales.',
            input: 'text',
            inputPlaceholder: 'Cantidad de Vacunas',
            confirmButtonText: 'Enviar',
            inputValidator: (result) => {
                if (!expresiones.edadMascota.test(result)) {
                    return 'Información con formato inválido.';
                }

            }
        });

        if (accept) {

            const pasos = [];

            for (let index = 0; index < accept; index++) {
                pasos.push([index + 1].toString());
            }


            const consultaVacuna = Swal.mixin({
                confirmButtonText: 'Siguiente',
                cancelButtonText: 'Anterior',
                progressSteps: pasos,
                input: 'text',
                inputAttributes: {},
                reverseButtons: true,
                inputValidator: (value) => {
                    if (!expresiones.nombre.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }
            })

            const values = []
            let currentStep;

            let vueltas = parseInt(accept);

            for (currentStep = 0; currentStep < vueltas;) {

                let valorEnObjeto = obtenerValorActual(currentStep, '2');

                const {
                    value: result
                } = await consultaVacuna.fire({
                    title: `Vacuna ${currentStep+1}`,
                    inputValue: valorEnObjeto,
                    currentProgressStep: currentStep,
                });

                if (result) {
                    values[currentStep] = result;
                    currentStep++
                } else if (currentStep < pasos.length) {
                    Swal.close();
                    break;
                } else {
                    Swal.close();
                }

                if (currentStep === pasos.length) {
                    Swal.fire(JSON.stringify(values));


                    Swal.fire({
                        title: '¿Quieres guardar los cambios?',
                        icon: 'warning',
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: `Guardar`,
                        denyButtonText: `Cancelar`,
                    }).then((result) => {
                        if (result.isConfirmed) {


                            Swal.fire({
                                title: '¡Guardado!',
                                icon: 'success',
                                showCancelButton: false,
                                confirmButtonText: 'ok',
                                showLoaderOnConfirm: true,
                                preConfirm: () => {




                                    eliminar_vacunas_mascota(idsMascotas[mascotaMostrada]);

                                    values.forEach((value, index) => {

                                        if (value[index] || value[index] !== '') {
                                            agregar_vacunas_mascota(value, idsMascotas[mascotaMostrada], mascota[mascotaMostrada].tipo);
                                        }
                                    });


                                    mascota[mascotaMostrada].vacunas = values;
                                    rellenarSelects(mascotaMostrada);



                                },
                                allowOutsideClick: () => !Swal.isLoading()
                            });


                        } else if (result.isDenied) {
                            Swal.fire('Cambios no guardados.', '', 'error')
                        }
                    })


                }


            }




        }

    }

    if (btnId == 'modifyDog') {

        Swal.mixin({
            input: 'text',

            confirmButtonText: 'Siguiente &rarr;',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: 'firebrick',
            html: `<button class="btn btn-primary swal2-styled omitir" onclick="onBtnClicked('confirm')">Omitir</button>`,
            showCancelButton: true,
            progressSteps: ['1', '2', '3', '4'],
            customClass: {
                popup: 'popup-class',
                title: 'popup-title',
                input: 'steps',
                content: 'popup-content',
            },

        }).queue([{
                title: '1. Ingrese el nuevo nombre',
                inputValue: mascota[mascotaMostrada].nombre,


                inputValidator: (value) => {

                    if (!expresiones.nombre.test(value)) {
                        return 'Información con formato inválido.';
                    }


                }

            },
            {
                title: '2. Ingrese la nueva raza',
                inputValue: mascota[mascotaMostrada].raza,
                html: `<button class="btn btn-primary swal2-styled omitir" onclick="onBtnClicked('confirm')">Omitir</button>`,

                inputValidator: (value) => {

                    if (!expresiones.ciudad.test(value)) {
                        return 'Información con formato inválido.';
                    }


                }

            },
            {
                title: '3. Ingrese la nueva Edad',
                inputValue: mascota[mascotaMostrada].edad,
                inputValidator: (value) => {
                    if (!expresiones.edadMascota.test(value)) {
                        return 'Información con formato inválido.';
                    }


                }

            },
            {
                title: '4. Ingrese el tipo de Mascota',
                inputValue: mascota[mascotaMostrada].tipo,
                input: 'select',


                didOpen: async() => {
                    const selectTipo = Swal.getInput();

                    const valores = await obtener_tipos_mascotas();

                    for (const valor of valores) {
                        const option = document.createElement('option');
                        if (valor.name == mascota[mascotaMostrada].tipo) {
                            option.setAttribute('selected', '');
                        }
                        option.setAttribute('value', valor.name);
                        option.innerHTML = ` <option>${valor.name}</option>`;
                        selectTipo.appendChild(option);
                    }

                }


            }

        ]).then((result) => {

            if (result.value) {

                const resultados = result;


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



                        // @ si el valor no es vacio y es distinto al valor actual.

                        if (resultados.value[0] != '' && resultados.value[0] != mascota[mascotaMostrada].nombre) {
                            modificarDatosGeneralesMascota('name', resultados.value[0], idsMascotas[mascotaMostrada]);

                        } else if (resultados.value[1] != '' && resultados.value[1] != mascota[mascotaMostrada].raza) {
                            modificarDatosGeneralesMascota('race', resultados.value[1], idsMascotas[mascotaMostrada]);


                        } else if (resultados.value[2] != '' && resultados.value[2] != mascota[mascotaMostrada].edad) {
                            modificarDatosGeneralesMascota('age', parseInt(resultados.value[2]), idsMascotas[mascotaMostrada]);

                        } else if (resultados.value[3] != '' && resultados.value[3] != mascota[mascotaMostrada].tipo) {
                            modificarDatosGeneralesMascota('petType', resultados.value[3], idsMascotas[mascotaMostrada]);
                        }


                        Swal.fire({
                            title: '¡Guardado!',
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonText: 'ok',
                            showLoaderOnConfirm: true,
                            preConfirm: () => {
                                vaciarMascotaAndIds();
                                insertarDatosMascota();
                            },
                            allowOutsideClick: () => !Swal.isLoading()
                        });

                    } else if (result.isDenied) {
                        Swal.fire('Cambios no guardados.', '', 'error')
                    }
                });

            }
        });

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
            progressSteps: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            customClass: {
                popup: 'popup-class',
                title: 'popup-title',
                input: 'steps',
                content: 'popup-content',
            },

        }).queue([{
                title: '1. Ingrese el Nombre',
                inputValue: usuario.nombre,

                inputValidator: (value) => {
                    if (!expresiones.nombre.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }

            },
            {
                title: '2. Ingrese la Cédula',
                inputValue: usuario.cedula,
                inputValidator: (value) => {
                    if (!expresiones.cedula.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }


            },
            {
                title: '3. Ingrese el Correo',
                inputValue: usuario.correo,
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
                inputValue: usuario.genero,
                inputValidator: (value) => {
                    if (!expresiones.nombre.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }

            },
            {
                title: '5. Ingrese su Fecha de Nacimiento',
                input: 'text',
                html: `<input
                type="date"
                id="range-value" class="swal2-input">`,

                // $ejecuta esto antes de que se abra la ventana
                willOpen: () => {
                    const inputNormal = Swal.getInput();
                    inputNormal.style.display = "none";
                    const inputDate = Swal.getContent().querySelector('#range-value');
                    inputDate.value = `${usuario.nacimiento}`
                    inputDate.placeholder = `${usuario.nacimiento}`
                    inputDate.defaultValue = `${usuario.nacimiento}`
                },

                inputValidator: (fecha) => {
                    const inputDate = Swal.getContent().querySelector('#range-value')
                    const edad = calcularEdad(inputDate.value);
                    if (edad >= 18) {
                        fechaAux = inputDate.value;
                    } else {
                        return 'Fecha no es válida, debe ser mayor a 18 años.';
                    }

                },

            },
            {
                title: '6. Ingrese el Teléfono',
                inputValue: usuario.telefono,
                inputValidator: (value) => {
                    if (!expresiones.numero.test(value)) {
                        return 'Información con formato inválido.';
                    }
                }

            },
            {
                title: '7. Ingrese la Provincia',
                input: 'select',
                inputValue: usuario.provincia,
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
                title: '8. Ingrese el Cantón',
                input: 'select',
                inputValue: () => {
                    if (parseInt(currentProvince) == usuario.provincia) {
                        return usuario.canton;
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

                    currentCant = usuario.canton;


                    selectCant.value = usuario.canton;
                    selectCant.addEventListener('change', () => {
                        currentCant = selectCant.value;
                    });

                    fetch(`https://ubicaciones.paginasweb.cr/provincia/${currentProvince}/cantones.json`)
                        .then(response => response.json())
                        .then(data => {
                            for (const property in data) {
                                const option = document.createElement('option');
                                if (property == usuario.canton && parseInt(currentProvince) == usuario.provincia) {
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

                title: '9. Ingrese el Distrito',
                input: 'select',
                inputValue: usuario.distrito,

                inputValidator: (value) => {
                    if (value == 0) {
                        return 'No ha seleccionado su Distrito.';
                    }
                },

                didOpen: () => {
                    const selectDistrito = Swal.getInput();

                    currentDistr = usuario.distrito;

                    selectDistrito.value = currentDistr;

                    selectDistrito.addEventListener('change', () => {
                        currentDistr = selectDistrito.value;
                    });

                    fetch(`https://ubicaciones.paginasweb.cr/provincia/${currentProvince}/canton/${currentCant}/distritos.json`)
                        .then(response => response.json())
                        .then(data => {
                            for (const property in data) {
                                const option = document.createElement('option');
                                if (property == usuario.distrito && parseInt(currentProvince) == usuario.provincia) {
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

                        if (fechaAux != usuario.nacimiento && fechaAux != '') {
                            modificarDatosUsuario('birthdate', fechaAux);
                        }
                        // -----------------------------
                        if (respuestas.value[5] != usuario.telefono && respuestas.value[5] != '') {
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
                                insertarDatosUsuario();
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

    if (btnId == 'dogImage') {
        const {
            value: file
        } = await Swal.fire({
            title: 'Seleccione una foto de Perfil',
            input: 'file',
            inputAttributes: {
                'accept': 'image/*',
                'aria-label': 'Sube una imagen',
            }
        })

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


    if (btnId == "deleteDog") {
        Swal.fire({
            title: '¿Está seguro de que desea eliminar esta mascota?',
            showDenyButton: true,
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: `Si`,
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Guardado!',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonText: 'ok',
                    showLoaderOnConfirm: true,
                    preConfirm: () => {


                        eliminar_mascota(idsMascotas[mascotaMostrada]);

                        idsMascotas = arrayRemove(idsMascotas, idsMascotas[mascotaMostrada]);

                        MascotaEliminada = mascota.splice(mascotaMostrada, 1);

                        ultimaMascotaEliminada.push(MascotaEliminada[0].nombre);

                        insertarDatosMascota(1);
                        debugger
                        if (mascota.length == 0 || mascota.length == 1 || mascota.length == 2) {
                            aparecerDesaparecerMascota(1);
                        }




                    },
                    allowOutsideClick: () => !Swal.isLoading()
                });
            } else if (result.isDenied) {
                Swal.fire('Cambios no guardados.', '', 'error')
            }
        })
    }


    if (btnId == "disableDog") {
        Swal.fire({
            title: '¿Está seguro de que desea deshabilitar esta mascota?',
            showDenyButton: true,
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: `Si`,
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Guardado!',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonText: 'ok',
                    showLoaderOnConfirm: true,

                    preConfirm: () => {


                        deshabilitar_mascota(idsMascotas[mascotaMostrada]);

                        insertarDatosMascota();
                        DetectarStatusMascota();



                    },
                    allowOutsideClick: () => !Swal.isLoading()
                });
            } else if (result.isDenied) {
                Swal.fire('Cambios no guardados.', '', 'error')
            }
        })
    }




    if (btnId == "enableDog") {
        Swal.fire({
            title: '¿Está seguro de que desea habilitar esta mascota?',
            showDenyButton: true,
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: `Si`,
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Guardado!',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonText: 'ok',
                    showLoaderOnConfirm: true,
                    preConfirm: () => {

                        habilitar_mascota(idsMascotas[mascotaMostrada]);

                        insertarDatosMascota();
                        DetectarStatusMascota();
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                });
            } else if (result.isDenied) {
                Swal.fire('Cambios no guardados.', '', 'error')
            }
        })
    }
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
// $menú principal de configuración Mascotas
// --------------
configSectionDog.addEventListener("click", () => {

    Swal.fire({
        imageUrl: 'https://res.cloudinary.com/proyects/image/upload/v1618471322/edit_k4kwsw.png',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        title: '¿Qué desea modificar?',
        input: null,
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
        html: `<br><button class="btn btn-primary swal2-styled general" onclick="onBtnClicked('modifyDog')">Información General</button> <br>
        <div class="catalog-section">
        <button class="btn btn-primary swal2-styled agregar" onclick="onBtnClicked('padecimientos')">Padecimientos</button>
        <button class="btn btn-primary swal2-styled agregar" onclick="onBtnClicked('vacunas')">Vacunas</button>
        </div>
        <button class="btn btn-primary swal2-styled image" onclick="onBtnClicked('userImage')">Foto de Perfil</button><br>
        <button class="btn btn-primary swal2-styled delete" onclick="onBtnClicked('deleteDog')">Eliminar</button><br>
        <button class="btn btn-primary swal2-styled delete" onclick="onBtnClicked('enableDog')">Habilitar</button><br>
        <button class="btn btn-primary swal2-styled delete" onclick="onBtnClicked('disableDog')">Deshabilitar</button>`,
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
const cargarInfoCliente = () => {
    if (verificarExistencias(usuario)) {

        const camposUsuario = Object.keys(usuario);
        let capitalizados = capitalizar(camposUsuario);

        const valoresUsuario = Object.values(usuario);
        const titulosCliente = document.querySelectorAll('.contenedor-textos .texto span');
        const propiedadesCliente = document.querySelectorAll('.contenedor-textos .texto p');



        titulosCliente.forEach((titulo, index) => {
            titulo.textContent = capitalizados[index] + ':';

        });

        propiedadesCliente.forEach((propiedad, index) => {

            propiedad.textContent = valoresUsuario[index];

        });

        cargarValoresLocalizacion();
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

        for (let i = 0; i < usuario.calificacion; i++) {
            desplegarPatitas(i, true);
        }

    }
}


// ---------------
// $para cargar la información de la mascota
// ^Se reutiliza varias veces.
// --------------
const cargarInfoMascota = (numero = 0) => {

    const HTMLcontenedorInfoMascota = document.querySelector('.contenedor-info-mascota').innerHTML;
    const contenedorInfoMascota = document.querySelector('.contenedor-info-mascota');
    const contenedorImagenMascota = document.querySelector('.contenedor-mascota .contenedor-icon');
    const contenedorGeneral = document.querySelector('.contenedor-mascota');
    const botonConfig = document.querySelector('#config-pet');

    if (mascota.length > 0) {

        let i = 0;
        let y = 0;

        const camposMascota = Object.keys(mascota[numero]);
        let capitalizados = capitalizar(camposMascota);
        const valoresMascota = Object.values(mascota[numero]);
        const titulosMascota = document.querySelectorAll('.contenedor-info-mascota .texto span');
        const propiedadesMascota = document.querySelectorAll('.contenedor-info-mascota .texto p');

        titulosMascota.forEach(titulo => {

            titulo.textContent = capitalizados[y] + ':';

            y++;
        });

        propiedadesMascota.forEach(propiedad => {

            if ((propiedad.getAttribute('id') !== 'padecimientos')) {
                if ((propiedad.getAttribute('id') !== 'vacunas')) {
                    propiedad.textContent = valoresMascota[i];
                }

            }
            i++;
        });

        const imageElement = document.querySelector('.contenedor-mascota .contenedor-icon img');
        const rutaImagenMascota = mascota[numero].imagen;
        imageElement.src = rutaImagenMascota;

    }

}


const aparecerDesaparecerMascota = (modo = 0) => {

    const HTMLcontenedorInfoMascota = document.querySelector('.contenedor-info-mascota').innerHTML;
    const contenedorInfoMascota = document.querySelector('.contenedor-info-mascota');
    const contenedorImagenMascota = document.querySelector('.contenedor-mascota .contenedor-icon');
    const contenedorGeneral = document.querySelector('.contenedor-mascota');
    const botonConfig = document.querySelector('#config-pet');
    const padreContenedorLinks = document.querySelector('.dropdown');
    const contenedorLinks = document.querySelector('.links-box');
    const btnArrow = document.querySelector('.btn-arrow');
    const aviso = document.querySelector('.aviso');
    const contenedorWarning = document.querySelector('.contenedor-warning');


    if (modo == 0) {
        if (mascota.length > 0) {

            contenedorInfoMascota.style.opacity = '1';
            const contenedorLeyenda = document.querySelector('.contenedor-leyenda');
            contenedorLeyenda.style.display = 'none';

            contenedorGeneral.style.padding = '2.7em 0em 0em 0em';
            contenedorImagenMascota.style.display = 'block';
            botonConfig.style.display = 'block';

            btnArrow.style.display = 'block';

            padreContenedorLinks.style.display = 'inline-block';

            padreContenedorLinks.firstElementChild.style.display = 'inherit';


        } else {

            contenedorWarning.style.display = 'none';
            aviso.style.display = 'none';
            botonConfig.style.display = 'none';
            contenedorGeneral.style.padding = '7.5em 0em 0em 0em'
            contenedorImagenMascota.style.display = 'none';

            contenedorInfoMascota.style.opacity = '0';


            const contenedorLeyenda = document.querySelector('.contenedor-leyenda');
            contenedorLeyenda.style.display = 'flex';

            btnArrow.style.display = 'none';
            padreContenedorLinks.firstElementChild.style.display = 'none';

        }
    }


    if (modo == 1) {

        contenedorWarning.style.display = 'none';
        aviso.style.display = 'none';
        botonConfig.style.display = 'none';
        contenedorGeneral.style.padding = '7.5em 0em 0em 0em'
        contenedorImagenMascota.style.display = 'none';

        contenedorInfoMascota.style.opacity = '0';

        const contenedorLeyenda = document.querySelector('.contenedor-leyenda');
        contenedorLeyenda.style.display = 'flex';

        btnArrow.style.display = 'none';
        padreContenedorLinks.firstElementChild.style.display = 'none';

        window.location.reload();

    }




}



// ---------------
// $para cargar la navegación de las mascotas
// !Rellena los selects en si misma 
// !Carga la información de la mascota seleccionada.
// --------------
const cargarValoresArrow = () => {

    const padreContenedorLinks = document.querySelector('.dropdown');
    const contenedorLinks = document.querySelector('.links-box');
    const btnArrow = document.querySelector('.btn-arrow');

    contenedorLinks.innerHTML = ``;

    if (mascota.length > 0) {


        mascota.forEach(elemento => {
            if (ultimaMascotaEliminada.includes(elemento.nombre)) {

            } else {
                contenedorLinks.innerHTML += `
                <a href="#" class="link">${elemento.nombre}</a>
                                  `;
            }

        });



        const links = contenedorLinks.querySelectorAll('.link');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                let nombreObjeto = e.target.textContent.toString();

                const resultado = mascota.find(animal => animal.nombre === nombreObjeto);

                if (resultado) {
                    const valor = mascota.indexOf(resultado);
                    mascotaMostrada = valor;

                    DetectarStatusMascota();
                    cargarInfoMascota(valor);
                    rellenarSelects(valor);

                }
            });
        });

    }


}


//-----------------------------
//$ Rellena los selects de mascota padecimientos y vacunas leyendo objeto.
//-----------------------------
const rellenarSelects = (id = 0) => {

    if (mascota.length > 0) {

        const selectPadecimientos = document.querySelector('#selectPadecimientos');

        //#si tiene padecimientos
        if (mascota[id].padecimientos.length > 0) {

            selectPadecimientos.style.display = 'block';

            selectPadecimientos.innerHTML = '';

            for (let i = 0; i < mascota[id].padecimientos.length; i++) {
                let opcion = document.createElement('option');
                opcion.value = mascota[id].padecimientos[i];
                opcion.innerText = mascota[id].padecimientos[i];
                selectPadecimientos.append(opcion);
            }
        } else {

            if (selectPadecimientos) {
                selectPadecimientos.innerHTML = '<option disabled selected>No tiene registrados</option>';
            }
        }

        const selectVacunas = document.querySelector('#selectVacunas');


        if (mascota[id].vacunas.length > 0) {

            selectVacunas.innerHTML = '';

            for (let i = 0; i < mascota[id].vacunas.length; i++) {
                let opcion = document.createElement('option');
                opcion.value = mascota[id].vacunas[i];
                opcion.innerText = mascota[id].vacunas[i];
                selectVacunas.append(opcion);
            }

        } else {
            if (selectVacunas) {
                selectVacunas.innerHTML = '<option disabled selected>No tiene registrados</option>';
            }
        }

    }

}

const DetectarStatusMascota = async() => {
    const mascotaActual = await buscar_mascota(idsMascotas[mascotaMostrada]);
    const { status } = mascotaActual;
    const ContenedorDeMascota = document.querySelector('.contenedor-mascota');

    const aviso = document.querySelector('.contenedor-warning');


    if (status == 'Activo') {
        if (ContenedorDeMascota.children.length == 6) {
            aviso.style.display = 'none';
        }

    } else {

        aviso.style.display = 'block';
    }
}

// !va a llevar el detectar status para que la saque si cambiamos de mascota

const updateUserData = async() => {
    loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
    USUARIOACTUAL = loggedUser._id;
    insertarDatosUsuario();
    cargarCalificacionCliente();
    insertarDatosMascota();
    cargarValoresArrow();
    aparecerDesaparecerMascota();
}

// para que incialmente vea si hay mascotas registradas.
// !estara dentro de insertar Datos para verificar que de verdad no haya nada.
// aparecerDesaparecerMascota();
// este tendra dentro detectarEstatusMascota para desaparecer el select

window.onload = async function() {
    await updateUserData();

    if (loggedUser) {
        startHeader();
    }
    // cargarInfoCliente();
};