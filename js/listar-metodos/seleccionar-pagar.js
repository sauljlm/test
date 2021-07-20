const contenedorTarjeta = document.querySelector('#contenedor-tarjeta');
const cajaEmpty = document.createElement('DIV');
const HTMLVacio = `<p>No tiene tarjetas registradas.</p>`

// popup.classList.toggle("hide");
const popup = document.querySelector(".container-stars");

let modo = 1;

USUARIOACTUAL = `6087d19c23749e3308ed49a3`;


const updateUsuarioActual = async() => {
    if (window.sessionStorage.getItem('loggedUser')) {
        loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
        USUARIOACTUAL = loggedUser._id;
    }
}

updateUsuarioActual();


let tarjetas = [];

const regularLimpiarDigito = /[*]/g;
const addButton = document.querySelector(".addbtn");
const caja = document.createDocumentFragment();
const caja2 = document.createDocumentFragment();


let mostrado = false;


addButton.addEventListener("click", () => {
    window.location.href = 'card-config.html';
});


const toLocalStorage = (id) => {
    localStorage.setItem("cardToModify", id);
    localStorage.setItem("modifyMode", 1);
}



const eliminarTarjeta = async(id) => {
    const eliminacion = await fetch(`http://localhost:8080/cards/delete-card/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

    return eliminacion;
}

const capitalizar = (texto = '') => {


    let letter = texto[0].toLocaleUpperCase();
    let res = texto.substring(1);
    let result;

    if (texto !== 'amex') {

        result = `${letter}${res}`;

    } else {
        result = `American Express`;
    }



    return result;

}

// verifica el children del contenedor de tarjetas.
function verificarExistencias() {

    const tieneValor = contenedorTarjeta.children;

    if (contenedorTarjeta.children.length === 0) {
        cajaEmpty.style.display = 'block';
        cajaEmpty.innerHTML = HTMLVacio;
        cajaEmpty.classList.add('contenedorVacio');
        console.log(cajaEmpty);
        contenedorTarjeta.appendChild(cajaEmpty);
    } else {
        cajaEmpty.style.display = 'none';
    }
}

async function deleteInDB(e) {


    const buttonClicked = e.target;
    const contenedorTarjeta = buttonClicked.closest('.tarjeta');
    const contenido = contenedorTarjeta.querySelector('.contenido .numero .digito');
    const digito = Number(contenido.textContent.replace(regularLimpiarDigito, ''));


    const indexEncontrado = tarjetas.findIndex((tarjeta) => {

        let numeroTarjeta = Number(`${tarjeta.number.toString().slice(0,4)}`);
        return numeroTarjeta == digito
    })

    const id = tarjetas[indexEncontrado].id;


    try {

        await eliminarTarjeta(id);
    } catch (e) {
        console.log(`No se logro eliminar la tarjeta, error: ${e}`);
    }

    buttonClicked.closest('.tarjeta').remove();

    verificarExistencias();

}

function removeCard(e) {
    e.preventDefault();

    Swal.fire({
        'icon': 'warning',
        'text': '¿Está seguro que desea borrar la tarjeta?',
        'showCancelButton': true,
        'confirmButtonText': 'Estoy seguro',
        'cancelButtonColor': '#d33',
        'allowOutsideClick': false,
        'cancelButtonText': 'Cancelar',
        'reverseButtons': true,
        'width': 600,
        'confirmButtonColor': '#83B106',
        'padding': '3em',
        'showCloseButton': false,
        'focusConfirm': false,
        'focusCancel': true,

    }).then((result) => {
        if (result.isConfirmed) {

            Swal.fire({
                'confirmButtonText': 'Ok',
                'icon': 'success',
                'text': 'El método de pago ha sido eliminado.',
            })

            deleteInDB(e);


        }
    });


}


function modifyCard(e) {


    e.preventDefault();
    Swal.fire({
        'icon': 'warning',
        'text': '¿Desea modificar la tarjeta?',
        'showCancelButton': true,
        'confirmButtonText': 'Estoy seguro',
        'cancelButtonColor': '#d33',
        'allowOutsideClick': false,
        'cancelButtonText': 'Cancelar',
        'reverseButtons': true,
        'width': 600,
        'confirmButtonColor': '#83B106',
        'padding': '3em',
        'showCloseButton': false,
        'focusConfirm': false,
        'focusCancel': true,

    }).then((result) => {
        if (result.isConfirmed) {

            const buttonClicked = e.target;
            const contenedorTarjeta = buttonClicked.closest('.tarjeta');
            const contenido = contenedorTarjeta.querySelector('.contenido .numero .digito');
            const digito = Number(contenido.textContent);


            const indexEncontrado = tarjetas.findIndex((tarjeta) => {

                let numeroTarjeta = Number(`${tarjeta.number.toString().slice(0,4)}`);
                return numeroTarjeta == digito
            })

            const id = tarjetas[indexEncontrado].id;

            toLocalStorage(id);

            window.location.href = 'card-config.html';

        }
    });


}


const aplicarModo = (modo = 0) => {

    if (modo == 1) {
        const mainTitle = document.querySelector("#tituloSeccion");

        mainTitle.textContent = 'Seleccionar Método de Pago';

        const addTitle = document.querySelector("#textoAccion");

        addTitle.textContent = '';

        const addImageBox = document.querySelector(".agregar")

        addImageBox.style.display = 'none';

    }

}


const obtenerTarjetasUsuario = async() => {

    let res = await fetch(`http://localhost:8080/cards/get-user-cards/${USUARIOACTUAL}`, {});
    const tarjetas = await res.json();
    console.table(tarjetas);
    return tarjetas
}

const leerObjetosTarjeta = () => {

    if (typeof tarjetas !== 'undefined') {

        tarjetas.forEach((tarjeta, index) => {

            const divTarjeta = document.createElement('DIV');
            divTarjeta.classList.add('tarjeta');
            const contenedorImgTarjeta = document.createElement('DIV');
            contenedorImgTarjeta.classList.add('contenedor-img-tarjeta');
            const imagenTarjeta = document.createElement('IMG');
            imagenTarjeta.classList.add('cardImg');
            const contenido = document.createElement('DIV');
            contenido.classList.add('contenido');
            const titulo = document.createElement('H3');
            titulo.classList.add('titulo');
            const numero = document.createElement('P');
            numero.classList.add('numero');

            const tipo = document.createElement('SPAN');
            tipo.classList.add('tipo');

            const digito = document.createElement('SPAN');
            digito.classList.add('digito');


            const averiguarTipo = tarjeta.number.toString();
            const primerValor = Number(averiguarTipo.charAt(0));

            if (primerValor == 5) {
                imagenTarjeta.src = 'https://res.cloudinary.com/proyects/image/upload/v1616376217/list-payments/logos/master_ldnhiy.png';
                titulo.textContent = 'MasterCard';
            } else if (primerValor == 4) {
                imagenTarjeta.src = 'https://res.cloudinary.com/proyects/image/upload/v1616376220/list-payments/logos/visa_vpifwb.png';
                titulo.textContent = 'Visa';
            } else if (primerValor == 3) {
                imagenTarjeta.src = 'https://res.cloudinary.com/proyects/image/upload/v1616376217/list-payments/logos/amex_ffz3eh.png';
                titulo.textContent = 'American Express';
            } else {
                titulo.textContent = "No reconocido";
            }


            digito.textContent = tarjeta.number;

            contenedorImgTarjeta.appendChild(imagenTarjeta);
            contenido.appendChild(titulo);
            numero.appendChild(tipo);
            numero.appendChild(digito);
            contenido.appendChild(numero);

            divTarjeta.appendChild(contenedorImgTarjeta);
            divTarjeta.appendChild(contenido);
            // divTarjeta.appendChild(dropdown);

            caja.appendChild(divTarjeta);
        });

        contenedorTarjeta.appendChild(caja);


        const cajasTarjeta = document.querySelectorAll("#contenedor-tarjeta .tarjeta");

        cajasTarjeta.forEach(card => {

            const dropdown = document.createElement('DIV');
            dropdown.classList.add('dropdown');

            const boton = document.createElement('BUTTON');
            boton.classList.add('btn');

            const moreImg = document.createElement('IMG');
            moreImg.classList.add('icon');
            moreImg.src = 'https://res.cloudinary.com/proyects/image/upload/v1616376040/list-payments/icons/more_azil2n.svg';

            const linksBox = document.createElement('DIV');
            linksBox.classList.add('links-box');

            if (modo !== 1) {

                const link = document.createElement('A');
                link.classList.add('link');
                link.classList.add('modificar');
                link.textContent = 'Modificar';
                link.href = '#';

                const link2 = document.createElement('A');
                link2.classList.add('link');
                link2.classList.add('eliminar');
                link2.textContent = 'Eliminar';
                link2.href = '#';

                boton.appendChild(moreImg);
                linksBox.appendChild(link);
                linksBox.appendChild(link2);
                dropdown.appendChild(boton);
                dropdown.appendChild(linksBox);
                card.appendChild(dropdown);


            } else if (modo == 1) {

                const link3 = document.createElement('A');
                link3.classList.add('link');
                link3.classList.add('seleccionar');
                link3.textContent = 'Seleccionar';
                link3.href = '#';
                // link3.addEventListener.addEventListener("click", pagoRealizado);

                boton.appendChild(moreImg);
                linksBox.appendChild(link3);
                dropdown.appendChild(boton);
                dropdown.appendChild(linksBox);
                card.appendChild(dropdown);

                const selectOptions = document.querySelectorAll('.contenedor-tarjeta .tarjeta .links-box .seleccionar');

                selectOptions.forEach((option) => {
                    option.addEventListener("click", pagoRealizado);
                });


            }

        });

        // const seleccionar = document.querySelectorAll(".seleccionar");

        // seleccionar.addEventListener("click", pagoRealizado);

    } else {
        verificarExistencias();
    }

}



const initAPP = async() => {

    try {

        const tarjetasInDB = await obtenerTarjetasUsuario()
            .then((tarjetasDB) => {
                // tarjetas.length = 0;
                tarjetas = tarjetasDB.map((tarjeta) => ({
                    id: tarjeta._id,
                    number: Number(`${tarjeta.number.toString().slice(0,4)}`)
                }));

            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se ha podido obtener la información de sus tarjetas.',
                })

                verificarExistencias();
            });

        leerObjetosTarjeta();

    } catch (e) {


    }


}


function pagoRealizado(e) {

    if (!mostrado) {

        Swal.fire({
            'icon': 'warning',
            'text': '¿Está seguro de pagar con esta tarjeta?',
            'showCancelButton': true,
            'confirmButtonText': 'Estoy seguro',
            'cancelButtonColor': '#d33',
            'allowOutsideClick': false,
            'cancelButtonText': 'Cancelar',
            'reverseButtons': true,
            'width': 600,
            'confirmButtonColor': '#83B106',
            'padding': '3em',
            'showCloseButton': false,
            'focusConfirm': false,
            'focusCancel': true,

        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire('','El método de pago ha sido eliminado.','success')
                Swal.fire({
                    'confirmButtonText': 'Ok',
                    'icon': 'success',
                    'text': 'El pago ha sido realizado.',
                    'confirmButtonColor': '#83B106',
                })



                popup.classList.toggle("hide");
                mostrado = true;


            }
        });


    }


}


initAPP();

aplicarModo(modo);


/*
const obtener_mascotas = () => {
    return fetch(`http://localhost:8080/pets/get-user-pets/${USUARIOACTUAL}`,{}).then(response => response.json())
        .then((json) => json);
};
 */