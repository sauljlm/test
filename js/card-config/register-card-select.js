const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');


const tipos = [{
        tipo: 'mastercard',
    },
    {
        tipo: 'visa',
    },
    {
        tipo: 'amex',
    }

];

let MODOGLOBAL = 0;
let IDTARJETAGLOBAL = ``;

const insertarTipo = (tipo) => {

    let src = '';

    tipo === 'mastercard' ? src = 'https://res.cloudinary.com/proyects/image/upload/v1616376668/card-config/logos/mastercard_ckm7jd.png' :
        tipo === 'visa' ? src = 'https://res.cloudinary.com/proyects/image/upload/v1616376667/card-config/logos/visa_ukts9c.png' :
        src = 'https://res.cloudinary.com/proyects/image/upload/v1616376668/card-config/logos/amex_slkuc2.png';

    return src;
}

const capitalizar = (tipo) => {

    let result;

    (tipo === 'amex' || tipo === '3') ? result = `American Express`: (tipo === 'mastercard' || tipo === '5') ? result = `MasterCard` :
        result = `Visa`;

    return result;

}

if (typeof tipos !== 'undefined') {

    const contenedorTipos = document.createDocumentFragment();

    tipos.forEach(tarjeta => {

        const elemento = document.createElement('A');
        elemento.classList.add('opcion');

        const src = insertarTipo(tarjeta.tipo);
        const nombre = capitalizar(tarjeta.tipo);

        elemento.innerHTML = `<div class="contenido-opcion">
		<img src="${src}" class='imgTipo' alt="">
		<div class="textos">
			<h1 class="titulo">${nombre}</h1>
		</div>
	</div>`;

        contenedorTipos.appendChild(elemento);

    });

    opciones.appendChild(contenedorTipos);

}

const constructorHTML = (cargaDatos) => {

    const tituloSelected = capitalizar(cargaDatos.id);

    const contentHTML = `<div class="contenido-opcion">
		   <img src=${cargaDatos.ruta} class="imgTipo" alt="">
		   <div class="textos">
			   <h1 class="titulo">${tituloSelected}</h1>
		   </div>
	   </div>`;

    return contentHTML;

}

function insertarContenidoHTML(e) {
    e.preventDefault();
    // asigna al contenido select el valor
    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
    // lo cierra
    select.classList.toggle('active');
    // lo cierra
    opciones.classList.toggle('active');
    hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText.toLowerCase();
}

function insertarContenidoReconocido(cargaDatos) {

    const contenidoObtenido = constructorHTML(cargaDatos);

    contenidoSelect.innerHTML = contenidoObtenido;


    select.classList.remove('active');
    opciones.classList.remove('active');
    const valorSelect = contenidoSelect.querySelector('.titulo');
    hiddenInput.value = valorSelect.innerText.toLowerCase();
}


function activarModificacion() {
    select.classList.toggle('active');
    opciones.classList.toggle('active');
}



function activarSelectbox(mostrar = 'true', cargaDatos) {

    const opciones = document.querySelectorAll('#opciones > .opcion')

    if (mostrar) {

        opciones.forEach((opcion) => {
            opcion.addEventListener('click', insertarContenidoHTML);
        });

        select.addEventListener('click', activarModificacion);

    } else {



        opciones.forEach((opcion) => {
            opcion.removeEventListener('click', insertarContenidoHTML);
            insertarContenidoReconocido(cargaDatos);

        });

        select.removeEventListener('click', activarModificacion);

    }

}

activarSelectbox();