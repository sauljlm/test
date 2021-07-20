const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector('#tarjeta .numero'),
    nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logo-marca'),
    firma = document.querySelector('#tarjeta .firma p'),
    mesExpiracion = document.querySelector('#tarjeta .mes'),
    yearExpiracion = document.querySelector('#tarjeta .year');
ccv = document.querySelector('#tarjeta .ccv');


objetoTarjeta = {
    numero: '3455566745564345',
    nombre: 'Pedro Peterson',
    mes: '3',
    year: '2021',
    ccv: 333
}



const cambiarLength = (element, length) => {
    document.querySelector(`${element}`).setAttribute("maxlength", `${length}`);

}

const cambiarTexto = (element, texto) => {

    if (element === 'ccv') {
        document.querySelector("#formulario-tarjeta > div.flexbox > div.grupo.ccv > p")
            .innerText = `${texto}`;
    }
    if (element === 'numero') {
        document.querySelector("#formulario-tarjeta > div.grupo.numero > p")
            .innerText = `${texto}`;
    }

}

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    if (i <= 9) {
        opcion.value = "0" + i;
        opcion.innerText = "0" + i;
    } else {
        opcion.value = i;
        opcion.innerText = i;
    }

    formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '')
        // Ponemos espacio cada cuatro numeros
        .replace(/([0-9]{4})/g, '$1 ')
        // Elimina el ultimo espaciado
        .trim();

    if (expresiones.tarjeta.test(valorInput)) {
        numeroTarjeta.textContent = valorInput;
    }

    if (valorInput == '') {
        numeroTarjeta.textContent = '#### #### #### ####';
        logoMarca.innerHTML = '';
    }


    identificarDatos(valorInput);

    // Volteamos la tarjeta para que el usuario vea el frente.
    mostrarFrente();
});


// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    if (expresiones.nombre.test(valorInput)) {
        nombreTarjeta.textContent = valorInput;
        firma.textContent = valorInput;
    }
    if (valorInput == '') {


    }

    mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
        // Eliminar los espacios
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '');

    if (expresiones.cvv.test(inputCCV.value)) {
        ccv.textContent = formulario.inputCCV.value;
    }
});


const identificarDatos = (valorInput) => {

    if (valorInput[0] == 4) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        const ruta = 'https://res.cloudinary.com/proyects/image/upload/v1616376667/card-config/logos/visa_ukts9c.png';
        imagen.src = ruta;
        logoMarca.appendChild(imagen);

        cambiarLength("#inputCCV", "3");
        cambiarTexto('ccv', 'El CCV debe tener 3 dígitos.');
        cambiarTexto('numero', 'La tarjeta debe tener 16 dígitos.');

        const cargaDatos = {
            id: '4',
            ruta: ruta
        }

        activarSelectbox(false, cargaDatos);

    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        const ruta = 'https://res.cloudinary.com/proyects/image/upload/v1616376668/card-config/logos/mastercard_ckm7jd.png';
        imagen.src = ruta;
        logoMarca.appendChild(imagen);

        cambiarLength("#inputCCV", "3");
        cambiarTexto('ccv', 'El CCV debe tener 3 dígitos.');
        cambiarTexto('numero', 'La tarjeta debe tener 16 dígitos.');

        const cargaDatos = {
            id: '5',
            ruta: ruta
        }

        activarSelectbox(false, cargaDatos);

    } else if (valorInput[0] == 3) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        const ruta = 'https://res.cloudinary.com/proyects/image/upload/v1616376668/card-config/logos/amex_slkuc2.png';
        imagen.src = ruta;
        logoMarca.appendChild(imagen);

        cambiarLength("#inputCCV", "4");
        cambiarTexto('ccv', 'El CCV debe tener 4 dígitos.');
        cambiarTexto('numero', 'La tarjeta American Express debe tener 15 dígitos.');

        const cargaDatos = {
            id: '3',
            ruta: ruta
        }

        activarSelectbox(false, cargaDatos);

    } else {
        logoMarca.innerHTML = '';
        cambiarTexto('numero', 'La tarjeta debe tener 16 dígitos.');
        cambiarTexto('ccv', 'El CCV debe tener 3 dígitos.');
        cambiarLength("#inputCCV", "3");
    }


}

const aplicarModo = (modo = 0) => {

    buttonSubmit = document.querySelector("#formulario-tarjeta > button");
    const inputNumero = document.querySelector("#inputNumero");
    const inputNombre = document.querySelector("#inputNombre");
    const inputMes = document.querySelector("#selectMes");
    const inputYear = document.querySelector("#selectYear");
    const inputHiddenSelect = document.querySelector("#inputSelect");
    const inputCcv = document.querySelector("#inputCCV");

    if (modo === 1) {

        //# datos en tarjeta fisica

        buttonSubmit.textContent = 'Modificar';
        const valorString = objetoTarjeta.numero.toString();
        numeroTarjeta.textContent = valorString /* .replace(/([0-9]{4})/g, '$1 ').trim(); */
        nombreTarjeta.textContent = objetoTarjeta.nombre;
        firma.textContent = objetoTarjeta.nombre;
        debugger
        mesExpiracion.textContent = objetoTarjeta.mes;
        yearExpiracion.textContent = objetoTarjeta.year;
        ccv.textContent = objetoTarjeta.ccv;

        //# inputs
        inputNumero.value = valorString /* .replace(/([0-9]{4})/g, '$1 ').trim(); */
        inputNombre.value = objetoTarjeta.nombre;
        inputMes.value = objetoTarjeta.mes;
        inputYear.value = objetoTarjeta.year;
        inputCcv.value = objetoTarjeta.ccv;

        identificarDatos(inputNumero.value);

    }

}

const obtenerTarjetaEspecifica = async(id) => {
    let res = await fetch(`http://localhost:8080/cards/get-card/${id}`, {});
    const tarjeta = await res.json();
    console.table(tarjeta);
    return tarjeta
}

const fromLocalStorage = async() => {

    if (localStorage.getItem("modifyMode")) {
        const idToSearch = localStorage.getItem("cardToModify");
        const mode = localStorage.getItem("modifyMode");
        localStorage.removeItem("cardToModify");
        localStorage.removeItem("modifyMode");
        if (mode) {

            const tarjetaEncontrada = await obtenerTarjetaEspecifica(idToSearch)
                .then((dataTarjeta) => {
                    MODOGLOBAL = 1;
                    IDTARJETAGLOBAL = `${idToSearch}`;
                    objetoTarjeta.numero = dataTarjeta.tarjeta.number;
                    objetoTarjeta.nombre = dataTarjeta.tarjeta.name,
                        objetoTarjeta.ccv = dataTarjeta.tarjeta.ccv;
                    objetoTarjeta.mes = dataTarjeta.tarjeta.date.slice(0, 2);
                    objetoTarjeta.year = dataTarjeta.tarjeta.date.slice(3, 7);

                    aplicarModo(1);
                });
        }

    } else {

        MODOGLOBAL = 0;

    }

}


const initAPP = async() => {
    await fromLocalStorage();
}


initAPP();