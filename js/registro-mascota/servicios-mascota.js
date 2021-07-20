'use strict';

//--------------------Ready---------------
const obtener_tipos_mascotas = () => {
    return fetch('http://localhost:8080/pet_types/get-pet_types', {}).then(response => response.json())
        .then((json) => json);
};
const rellenarSelect = async() => {
        const selectTipo = document.querySelector('#slt-tipo');
        const valores = await obtener_tipos_mascotas();
        try {
            // debugger
            for (const valor of valores) {
                const option = document.createElement('option');
                option.setAttribute('value', valor.name);
                option.innerHTML = ` <option>${valor.name}</option>`;
                selectTipo.appendChild(option);
            }

        } catch (error) {
            console.log(error);
        }

    }
    //--------------------Ready---------------



let USUARIOACTUAL = `6087de725f74172bedc1bc3d`;



const updateUsuarioActual = async() => {
    if (window.sessionStorage.getItem('loggedUser')) {
        loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
        USUARIOACTUAL = loggedUser._id;
    }
}

updateUsuarioActual();


// INPUTS DE DEMAS INFO GENERAL
// EXTRAER....
const formulario = document.querySelector('#forms');
const inputNombre = document.querySelector("#registro-nombre");
const inputTipo = document.querySelector("#slt-tipo");
const inputEdad = document.querySelector("#registro-edad");
const inputRaza = document.querySelector("#slt-raza");
const image = document.querySelector('#pet-photo');
// const fileInput = document.querySelector("#file");
// const form = document.querySelector('#forms');


// Agregar mas:
const btnVacunas = document.querySelector('#btn-vacunas');
const btnPadecimientos = document.querySelector('#btn-padecimientos');

const contenedorPadecimientos = document.querySelector('#wrapper-ailments');
const contenedorVacunas = document.querySelector('#wrapper-vaccines');



// INPUTS DE PADECIMIENTOS Y VACUNAS


const contenedorP = document.querySelector(".contenedorP");
const contenedorV = document.querySelector(".contenedorV");


// BOTON PARA AÑADIR ACCIÒN DE SUBMIT Y QUE ENVIE LA INFO
const btnSubmit = document.querySelector("#btn-agregar");

// SOLO DEFINE LA FUNCION (NO LA USA AUN, LA USA EN EL METODO PRINCIPAL)
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

// SOLO DEFINE LA FUNCION (NO LA USA AUN, LA USA EN EL METODO PRINCIPAL)
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

// SOLO DEFINE LA FUNCION (NO LA USA AUN, LA USA EN EL METODO PRINCIPAL)
const registrar_mascota = async(name, petType, race, age, imageURL) => {
    debugger
    let datos = {
        name: name,
        petType: petType,
        race: race,
        age: age,
        imageURL: imageURL || '',
        _id: USUARIOACTUAL
    }
    return await fetch(`http://localhost:8080/pets/register-pet/`, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => response);

}

// METODO PRINCIPAL.
// REGISTRA PRIMERO LA MASCOTA
// DESPUES A ESA MASCOTA QUE REGISTRO LE
// AGREGA LOS PADECIMIENTOS Y VACUNAS
const registrarInfoMascota = async(name, petType, race, age, imageURL) => {

    const mascotaRegistrada = await registrar_mascota(name, petType, race, age, imageURL).then((mascota) => {
        // debugger
        if (mascota) {
            const inputsPadecimientos = document.querySelectorAll("#wrapper-ailments select");
            if (inputsPadecimientos) {
                inputsPadecimientos.forEach(input => {
                    if (input.value != "") {
                        //   valor a agregar / id de la mascota / tipo de Mascota
                        agregar_padecimientos_mascota(input.value, mascota._id, mascota.race);
                    }
                });
            }
            const inputsVacunas = document.querySelectorAll("#wrapper-vaccines select");
            if (inputsVacunas) {
                inputsVacunas.forEach(input => {
                    if (input.value != "") {
                        //   valor a agregar / id de la mascota / tipo de Mascota
                        agregar_vacunas_mascota(input.value, mascota._id, mascota.race);
                    }
                });
            }
        } else {
            Swal.fire({
                'icon': 'error',
                'title': '¡Error!',
                'text': 'No se pudo registrar la mascota correctamente.',
                'confirmButtonText': 'ok'
            });

        }


    });

}

// agrega el evento de envio de datos (funcion principal) al boton.
btnSubmit.addEventListener("click", async() => {
    const nombre = inputNombre.value;
    const tipo = inputTipo.value;
    const edad = inputEdad.value;
    const raza = inputRaza.value;
    const imageURL = image.src || '';
    if (nombre != "" && tipo != "" && edad != "" && raza != "") {
        await registrarInfoMascota(nombre, tipo, raza, Number(edad), imageURL).then(() => {
            formulario.reset();
            image.src = `https://res.cloudinary.com/proyects/image/upload/v1618355034/dashboard/animation_500_knglo4me_amsorz.gif`

            Swal.fire({
                'icon': 'success',
                'title': '¡Exito!',
                'text': 'Mascota registrada correctamente.',
                'confirmButtonText': 'ok'
            }).then(() => {
                limpiar();
            });
        });

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar su mascota',
            'text': 'Por favor revise los campos correctamente.',
            'confirmButtonText': 'ok'
        });
    }
});



rellenarSelect();

window.onload = function() {

    btnPadecimientos.addEventListener('click', () => {

        const select = document.createElement('select');

        select.innerHTML = `<option value="">---Seleccione---</option>
        <option value="Moquillo">Moquillo</option>
        <option value="Hepatitis Canina">Hepatitis Canina</option>
        <option value="Rabia">Rabia</option>
        <option value="Parvovirus">Parvovirus</option>
        <option value="Distemper">Distemper</option>
        <option value="Leptostirosis">Leptostirosis</option>`;

        contenedorPadecimientos.appendChild(select);

    });


    btnVacunas.addEventListener('click', () => {

        const select = document.createElement('select');

        select.innerHTML = ` <option value="">---Seleccione---</option>
        <option value="Contra el Parvovirus">Contra el Parvovirus</option>
        <option value="Contra la Rabia">Contra la Rabia</option>
        <option value="Contra el distemper">Contra el Distemper</option>
        <option value="Contra la leptostirosis">Contra la Leptostirosis</option>
        <option value="Contra el Moquillo">Contra el Moquillo</option>`;
        contenedorVacunas.appendChild(select);

    });
}