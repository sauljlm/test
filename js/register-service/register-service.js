const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    tarjeta: /^(\d{4}([\- ])?)+$/, // 12 a 16 numeros.
    cvv: /^\d{3,4}$/, // de 3 a 4 digitos.
    precio: /^\d{1,8}$/, // fechas
    descripcion: /^[A-Za-z0-9\s\.\$\₡\-\=\+\-\,]+$/
}


const campos = {
    precio: false,
    nombre: false,
    descripcion: false,
}



USUARIOACTUAL = `6087d19c23749e3308ed49a3`;

const updateUsuarioActual = async() => {
    if (window.sessionStorage.getItem('loggedUser')) {
        loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
        USUARIOACTUAL = loggedUser._id;
    }
}

updateUsuarioActual();




const obtener_tipos_servicios = () => {
    return fetch('http://localhost:8080/service_types/get-service_types', {}).then(response => response.json())
        .then((json) => json);
};


const registrar_servicio = async(name, type, description, price, startTime, endTime) => {

    let datos = {
        name: name,
        serviceType: type,
        description: description,
        price: price,
        startTime: startTime,
        endTime: endTime,
        status: "Activo",
    };

    // datos[propiedad] = valor;
    const agregado = await fetch(`http://localhost:8080/services/register-service/${USUARIOACTUAL}`, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

    return agregado;

}

const rellenarSelect = async() => {
    const selectTipo = document.querySelector('#selectTipo');
    const valores = await obtener_tipos_servicios();

    if (valores.list.length > 0) {
        for (const valor of valores.list) {
            const option = document.createElement('option');
            option.setAttribute('value', valor.name);
            option.innerHTML = ` <option>${valor.name}</option>`;
            selectTipo.appendChild(option);
        }

    }

}
rellenarSelect();


const inputsForm = document.querySelectorAll('#formulario-registro input');
const textAreaForm = document.querySelectorAll('.formulario-registro textarea');

const formularioRegistro = document.getElementById('formulario-registro');


formularioRegistro.addEventListener('submit', (e) => {

    e.preventDefault();

    const contenedorMensajes = document.getElementById('formulario-mensaje');
    const parrafoError = document.querySelector('#formulario-mensaje p');
    const fragment = document.createDocumentFragment();
    // creo el elemento
    const mensajeExito = document.createElement('P');

    if (
        campos.precio &&
        campos.nombre &&
        campos.descripcion
    ) {




        Swal.fire({
            icon: 'success',
            title: 'Excelente!',
            text: '¡Fomulario enviado correctamente!',
        });


        inputsForm.forEach((input) => {
            input.classList.remove('active');
        });

        textAreaForm.forEach((select) => {
            select.classList.remove('active');
        });


        // --------------carga de datos a objeto----------------------

        const nombreValue = document.querySelector("#inputNombre").value;

        const horarioInicioValue = document.querySelector("#inputHorarioInicio").value;

        const horarioFinValue = document.querySelector("#inputHorarioFin").value;

        const precioValue = document.querySelector("#inputPrecio").value;

        const descripcionValue = document.querySelector("#txtDescripcion").value;

        const selectTipoValue = document.querySelector("#selectTipo").value;


        registrar_servicio(nombreValue, selectTipoValue, descripcionValue, precioValue, horarioInicioValue, horarioFinValue);




        //---------------carga de datos a objeto--------------------



        formularioRegistro.reset();

        campos.nombre = false;
        campos.numero = false;
        campos.cvv = false;

        setTimeout(() => {
            contenedorMensajes.classList.remove('active');
            mensajeExito.style.display = 'none';
        }, 2000);



    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor rellene los campos resaltados correctamente.',
        });
    }


});


const validarFormulario = (e) => {

    switch (e.target.name) {

        case 'nombre':
            validarInput(expresiones.nombre, e.target, 'nombre');
            break;

        case 'precio':
            validarInput(expresiones.precio, e.target, 'precio');
            break;

        case 'descripcion':
            validarTextArea(expresiones.descripcion, e.target, 'descripcion');
            break;

        default:
            break;
    }
};


const validarInput = ((expresion, input, valorObjeto) => {

    const inputSelect = document.getElementById(`${input.id}`);

    if (expresion.test(input.value)) {
        // $CORRECTO

        inputSelect.classList.add('active');
        inputSelect.classList.remove('inactive');

        const padre = inputSelect.closest('div[class^="grupo"]');
        const texto = padre.querySelector('.form-error');
        texto.classList.remove('active');

        campos[valorObjeto] = true;



    } else {
        // %INCORRECTO

        inputSelect.classList.add('inactive');
        inputSelect.classList.remove('active');

        const padre = inputSelect.closest('div[class^="grupo"]');
        const texto = padre.querySelector('.form-error');
        texto.classList.add('active');

        campos[valorObjeto] = false;

    }
});


const validarTextArea = ((expresion, input, valorObjeto) => {

    const inputSelect = document.getElementById(`${input.id}`);

    if (expresion.test(input.value)) {
        // $CORRECTO


        inputSelect.classList.add('active');
        inputSelect.classList.remove('inactive');

        const padre = inputSelect.closest('div[class^="grupo"]');
        const texto = padre.querySelector('.form-error');
        texto.classList.remove('active');

        campos[valorObjeto] = true;

    } else {
        // %INCORRECTO

        inputSelect.classList.add('inactive');
        inputSelect.classList.remove('active');

        const padre = inputSelect.closest('div[class^="grupo"]');
        const texto = padre.querySelector('.form-error');
        texto.classList.add('active');

        campos[valorObjeto] = false;

    }
});


inputsForm.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    //  # cuando seleccionan afuera
    input.addEventListener('blur', validarFormulario);
});


textAreaForm.forEach((textArea) => {
    textArea.addEventListener('keyup', validarFormulario);
});