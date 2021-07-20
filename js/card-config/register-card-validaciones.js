const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    tarjeta: /^(\d{4}([\- ])?)+$/, // 12 a 16 numeros.
    cvv: /^\d{3,4}$/, // de 3 a 4 digitos.
    date: /^\d{1,4}$/ // fechas
}


const campos = {
    numero: false,
    nombre: false,
    mes: false,
    year: false,
    cvv: false,
}

let USUARIOACTUAL = `6087d19c23749e3308ed49a3`;

const updateUsuarioActual = async() => {
    if (window.sessionStorage.getItem('loggedUser')) {
        loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
        USUARIOACTUAL = loggedUser._id;
    }
}

updateUsuarioActual();


const registrar_tarjeta = async(number, name, month, year, ccv) => {

    let datos = {
        number: number,
        name: name,
        date: `${month}/${year}`,
        ccv: ccv,
    };

    const agregado = await fetch(`http://localhost:8080/cards/create-card/${USUARIOACTUAL}`, {
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


const actualizar_tarjeta = async(number, name, month, year, ccv, id) => {

    let datos = {
        number: number,
        name: name,
        date: `${month}/${year}`,
        ccv: ccv,
        // usuario:USUARIOACTUAL,
    };

    // datos[propiedad] = valor;
    const actualizado = await fetch(`http://localhost:8080/cards/update-card/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

    return actualizado;

}


const inputsForm = document.querySelectorAll('#formulario-tarjeta input:not(#inputSelect)');
const selectsForm = document.querySelectorAll('.formulario-tarjeta .grupo-select select');

const formularioTarjeta = document.getElementById('formulario-tarjeta');


formularioTarjeta.addEventListener('submit', (e) => {

    e.preventDefault();

    const contenedorMensajes = document.getElementById('formulario-mensaje');
    const parrafoError = document.querySelector('#formulario-mensaje p');
    const fragment = document.createDocumentFragment();
    // creo el elemento
    const mensajeExito = document.createElement('P');


    if (MODOGLOBAL = 1) {
        campos.numero = true,
            campos.nombre = true,
            campos.mes = true,
            campos.year = true;
        campos.cvv = true;
    }

    if (
        campos.numero &&
        campos.nombre &&
        campos.mes &&
        campos.year &&
        campos.cvv
    ) {


        let valueNumber = document.querySelector('#inputNumero').value;
        const valueNombre = document.querySelector('#inputNombre').value;

        const valueMonth = document.querySelector('#selectMes').value;
        const valueYear = document.querySelector('#selectYear').value;

        let valueCCV = document.querySelector('#inputCCV').value;


        debugger
        if (IDTARJETAGLOBAL != "") {

            actualizar_tarjeta(valueNumber, valueNombre, valueMonth, valueYear, valueCCV, IDTARJETAGLOBAL)
                .then(() => {

                });
        } else {

            registrar_tarjeta(valueNumber, valueNombre, valueMonth, valueYear, valueCCV);

        }




        Swal.fire({
            icon: 'success',
            title: '¡Exito!',
            text: '¡Fomulario enviado correctamente!',
        });

        const cardNumber = document.querySelector("#numero > p.numero");
        const cardName = document.querySelector("#nombre > p.nombre");
        const cardMonth = document.querySelector("#expiracion > p.expiracion > span.mes");
        const cardYear = document.querySelector("#expiracion > p.expiracion > span.year");
        const cardSignature = document.querySelector("#firma > div > p");
        const cardCCV = document.querySelector("#ccv > p.ccv");

        cardNumber.innerText = "#### #### #### ####";
        cardName.innerText = "Mascotas";
        cardMonth.innerText = "MM";
        cardYear.innerText = "AA";
        cardSignature.innerText = "";
        cardCCV.innerText = "";


        inputsForm.forEach((input) => {
            input.classList.remove('active');
        });

        selectsForm.forEach((select) => {
            select.classList.remove('active');
        });

        formulario.reset();



        campos.nombre = false;
        campos.numero = false;
        campos.cvv = false;


        setTimeout(() => {
            window.close();
            window.location.href = 'listar-metodos.html';
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

        case 'numero':
            validarInput(expresiones.tarjeta, e.target, 'numero');
            break;

        case 'nombre':
            validarInput(expresiones.nombre, e.target, 'nombre');
            break;

        case 'ccv':
            validarInput(expresiones.cvv, e.target, 'cvv');
            break;

        case 'mes':
            validarInput(expresiones.date, e.target, 'mes');
            break;

        case 'year':
            validarInput(expresiones.date, e.target, 'year');
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






inputsForm.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    //  # cuando seleccionan afuera
    input.addEventListener('blur', validarFormulario);
});


selectsForm.forEach((select) => {
    select.addEventListener('change', validarFormulario);
});