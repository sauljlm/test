const data = [{
        name: ['Perfil'],
        links: ['Mi perfil'],
    },
    {
        name: ['Proveedores de servicio'],
        links: ['Proveedores'],
    },
    {
        name: ['Pagos'],
        links: ['Métodos de pago'],
    }
];

const parteSaul = 'search-results.html';

let mainUserSrc = 'https://images.unsplash.com/photo-1616328510318-4c3a2aed0c90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
const firstSupplierSrc = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
const secondSupplierSrc = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
const thirdSupplierSrc = 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=879&q=80';

const welcomeText = 'Bienvenido dueño de mascota';
const welcomeMessage = `En +kotas nos preocupamos por el bienestar de tus mascotas, 
recuerda siempre puntuar a los Proveedores de Servicio para garantizar un servicio
de calidad.`;

const firstSectionTitle = `Servicios destacados`;

const firstSupplierName = `Mariano Daliam`;
const secondSupplierName = `Marina Salas`;
const thirdSupplierName = `Salina Perez`;

const firstSupplierText = `Aprovechá un grooming al 50% de descuento en +Kotas.
Esta oferta comprende un servicio de grooming para perro o gato con corte de
cabello, baño, limpieza de oídos, corte de uñas`;

const secondSupplierText = `Aprovechá un grooming al 30% de descuento en +Kotas.
Esta oferta comprende un servicio de grooming para gato y un paseo de 30 minutos 
por el parque más cercano.`;

const thirdSupplierText = `En oferta, Hotel para perros al 10% de descuento en +Kotas.
Esta oferta comprende un servicio de hospedaje para mascotas para perro o gato.`;


const sideContainer = document.querySelector('.side-container');

const insertCardsInfo = () => {
    const firstCardName = document.querySelector('#card-name1');
    firstCardName.textContent = firstSupplierName;

    const secondCardName = document.querySelector('#card-name2');
    secondCardName.textContent = secondSupplierName;

    const thirdCardName = document.querySelector('#card-name3');
    thirdCardName.textContent = thirdSupplierName;


    const firstCardText = document.querySelector('#card-text1');
    firstCardText.textContent = thirdSupplierText;
    const secondCardText = document.querySelector('#card-text2');
    secondCardText.textContent = secondSupplierText;
    const thirdCardText = document.querySelector('#card-text3');
    thirdCardText.textContent = thirdSupplierText;


}

const insertTexts = () => {
    const message = document.querySelector("body > div > div.big-container > div.main-container > div > div.content-wrapper-header > div > div");
    const title = document.querySelector("body > div > div.big-container > div.main-container > div > div.content-wrapper-header > div > h3");
    const servicesTitle = document.querySelector("body > div > div.big-container > div.main-container > div > div.content-section > div.content-section-title");

    servicesTitle.textContent = firstSectionTitle;
    message.textContent = welcomeMessage;
    iconoBienvenida = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<circle style="fill:#FFE570;" cx="256" cy="256" r="256"/>
<path style="fill:#FDB500;" d="M511.75,266.987L384.701,139.938c0,0-1.075,1.218-2.553,3.285l-81.315-82.557
c0,0-17.892,20.213-12.238,38.683c-8.278,4.784-15.102,14.285-19.164,26.425l-60.516-61.168c0,0-17.892,20.213-12.238,38.683
c-13.554,7.832-23.223,28.299-23.223,52.315c0,20.653,7.153,38.672,17.775,48.297l24.473,24.44c-1.082,0.408-2.162,0.833-3.241,1.27
l-85.163-85.733c0,0-15.009,16.956-10.266,32.45c-11.37,6.571-19.481,23.739-19.481,43.885c0,16.175,5.231,30.421,13.177,38.812
l29.105,29.118c-9.367,13.184-17.132,27.952-22.666,44.015c-10.473,30.398-2.745,53.955,13.45,68.253l111.19,111.19
c4.7,0.258,9.43,0.399,14.193,0.399C393.702,512,505.993,403.273,511.75,266.987z"/>
<g>
<path style="fill:#CE7937;" d="M399.725,332.159c-23.205-67.351-85.553-112.012-141.277-112.012s-118.076,44.66-141.281,112.012
c-23.078,66.982,42.215,100.754,91.748,75.425c19.966-10.21,30.955-28.988,49.531-28.988s29.565,18.778,49.531,28.988
C357.51,432.913,422.803,399.141,399.725,332.159z"/>
<path style="fill:#CE7937;" d="M307.98,407.58c-19.97-10.21-30.96-28.98-49.53-28.98c-0.83,0-1.65,0.04-2.45,0.11V220.18
c0.82-0.02,1.64-0.03,2.45-0.03c55.72,0,118.07,44.66,141.28,112.01C422.8,399.14,357.51,432.91,307.98,407.58z"/>
<path style="fill:#CE7937;" d="M137.565,176.328c4.743-15.494-10.266-32.45-10.266-32.45s-15.009,16.956-10.266,32.45
c-11.37,6.57-19.481,23.739-19.481,43.885c0,25.817,13.318,46.746,29.747,46.746s29.747-20.929,29.747-46.746
C157.046,200.067,148.935,182.899,137.565,176.328z"/>
<path style="fill:#CE7937;" d="M221.154,103.29c5.654-18.47-12.238-38.683-12.238-38.683s-17.892,20.213-12.238,38.683
c-13.554,7.832-23.223,28.299-23.223,52.315c0,30.776,15.876,55.724,35.461,55.724s35.461-24.949,35.461-55.724
C244.376,131.588,234.707,111.122,221.154,103.29z"/>
<path style="fill:#CE7937;" d="M374.435,172.388c-4.743-15.494,10.266-32.45,10.266-32.45s15.009,16.956,10.266,32.45
c11.37,6.57,19.481,23.739,19.481,43.885c0,25.817-13.318,46.746-29.747,46.746c-16.429,0-29.747-20.929-29.747-46.746
C354.954,196.127,363.065,178.958,374.435,172.388z"/>
<path style="fill:#CE7937;" d="M288.595,99.35c-5.654-18.47,12.238-38.683,12.238-38.683s17.892,20.213,12.238,38.683
c13.554,7.832,23.223,28.299,23.223,52.315c0,30.776-15.876,55.724-35.461,55.724s-35.461-24.949-35.461-55.724
C265.372,127.648,275.041,107.182,288.595,99.35z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`
    title.innerHTML = iconoBienvenida + welcomeText;

}


const insertImgs = async() => {
    const loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
    mainUserSrc = loggedUser.imageURL;
    const mainImg = document.querySelector("body > div > div.header > div.header-profile > img");
    mainImg.src = mainUserSrc;

    const firstSupplierImg = document.querySelector("#card-img1");
    firstSupplierImg.src = firstSupplierSrc;
    const secondSupplierImg = document.querySelector("#card-img2");
    secondSupplierImg.src = secondSupplierSrc;
    const thirdSupplierImg = document.querySelector("#card-img3");
    thirdSupplierImg.src = thirdSupplierSrc;

}

insertImgs();

const verifyExistance = (array) => {
    if (array.length !== 0 || typeof array !== 'undefined') {
        return true;
    }
    return false;
}

const capitalize = (text) => {
    if (text) {
        const resultado = text.replace(/^\w/, (c) => c.toUpperCase());
        return resultado;
    }
}


const createSideLinks = (titulo) => {

    let fragmentLinks = document.createDocumentFragment();

    const resultado = data.find(section => {
        return section.name == `${titulo}`;
    });

    const valor = data.indexOf(resultado);

    const keys = Object.values(data[valor]);

    const linksCount = keys.length;

    if (verifyExistance(data)) {
        let count = 0;
        for (let index = 0; index <= linksCount; index++) {
            let aLink = document.createElement('a');
            aLink.classList.add('side-link');
            const texto = capitalize(data[valor].links[index]);
            if (texto) {
                aLink.textContent = texto;
                fragmentLinks.appendChild(aLink);
            }
        }
    }

    return fragmentLinks;
}

const loadSideSections = () => {
    if (verifyExistance(data)) {

        const fragment = document.createDocumentFragment();
        const sections = data.length;

        for (let index = 0; index < sections; index++) {
            let sideSection = document.createElement('DIV');
            sideSection.classList.add('side-section');
            let sideTitle = document.createElement('DIV');
            sideTitle.classList.add('side-title');
            let propertyName = data[index].name[0].toString();
            let titleCapitalized = capitalize(propertyName);
            sideTitle.textContent = titleCapitalized;
            let sideLinkContainer = document.createElement('DIV');
            sideLinkContainer.classList.add('side-link-container');
            let linksToAppend = createSideLinks(propertyName);
            sideLinkContainer.appendChild(linksToAppend);
            sideSection.appendChild(sideTitle);
            sideSection.appendChild(sideLinkContainer);
            fragment.appendChild(sideSection);
        }

        sideContainer.appendChild(fragment);

    }
}

loadSideSections();


const insertSideTargets = (titulo = 'entrar', enlace = '#', ...resto) => {

    if (verifyExistance(data)) {
        // const selected;
        const links = document.querySelectorAll('.side-link');


        const capitalizado = capitalize(titulo);

        links.forEach(link => {

            if (link.textContent == `${capitalizado}`) {
                selected = link;

                link.setAttribute('href', `${enlace}`);

                if (resto.length == 1) {
                    link.innerHTML = `${resto[0]} ${capitalizado}`;
                }

                if (resto.length == 2) {
                    link.innerHTML = `${resto[0]}  ${capitalizado} ${resto[1]}`;
                }

            }


        });

    }

}

const botones = document.querySelectorAll('.content-button');
console.log(botones);

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        window.location.href = parteSaul;
    });
});

insertCardsInfo();

insertTexts();

const svgMyProfile = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="512" y2="0"><stop offset="0" stop-color="#fd3a84"/><stop offset="1" stop-color="#ffa68d"/></linearGradient><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="226" x2="226" y1="391" y2="0"><stop offset="0" stop-color="#ffc2cc"/><stop offset="1" stop-color="#fff2f4"/></linearGradient><g><g><g><path d="m406 0h-195l-120 120v377c0 8.291 6.709 15 15 15h300c8.291 0 15-6.709 15-15v-482c0-8.291-6.709-15-15-15z" fill="url(#SVGID_1_)"/></g></g><g><g><path d="m211 105v-105h-15c-3.984 0-7.793 1.582-10.605 4.395l-90 90c-2.813 2.812-4.395 6.621-4.395 10.605v15h105c8.291 0 15-6.709 15-15zm135 256h-180c-8.291 0-15 6.709-15 15s6.709 15 15 15h180c8.291 0 15-6.709 15-15s-6.709-15-15-15zm-90-150c24.814 0 45-20.186 45-45s-20.186-46-45-46-45 21.186-45 46 20.186 45 45 45zm-75 75c0 8.291 6.709 15 15 15h120c8.291 0 15-6.709 15-15 0-41.353-33.633-75-75-75s-75 33.647-75 75z" fill="url(#SVGID_2_)"/></g></g></g></svg>`;
const svgPaymentMethods = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 512.016 512.016" style="enable-background:new 0 0 512.016 512.016;" xml:space="preserve">
<path style="fill:#6F7070;" d="M511.936,71.336v243.84c0,17.76-14.24,32-32,32H91.456c-17.76,0-32-14.24-32-32V71.336
c0-17.6,14.24-32,32-32h388.48C497.696,39.336,511.936,53.736,511.936,71.336z"/>
<rect x="59.376" y="97.544" style="fill:#464646;" width="452.64" height="51.968"/>
<g>
<path style="fill:#787878;" d="M393.968,52.44H290.704c-8.832,0-16,7.152-16,16s7.168,16,16,16h103.264c8.832,0,16-7.152,16-16
C409.968,59.608,402.8,52.44,393.968,52.44z"/>
<path style="fill:#787878;" d="M468.576,52.44h-27.984c-8.832,0-16,7.152-16,16s7.168,16,16,16h27.984c8.832,0,16-7.152,16-16
C484.576,59.608,477.424,52.44,468.576,52.44z"/>
</g>
<g>
<path style="fill:#3E3E3E;" d="M179.792,107.528h-78.016c-8.832,0-16,7.152-16,16s7.168,16,16,16h78.016c8.832,0,16-7.152,16-16
C195.792,114.68,188.64,107.528,179.792,107.528z"/>
<path style="fill:#3E3E3E;" d="M254.416,107.528h-27.968c-8.832,0-16,7.152-16,16s7.168,16,16,16h27.968c8.832,0,16-7.152,16-16
C270.416,114.68,263.248,107.528,254.416,107.528z"/>
</g>
<g style="opacity:0.07;">
<path style="fill:#010101;" d="M511.936,253.256v61.92c0,17.76-14.24,32-32,32h-38.72l11.04-153.6L511.936,253.256z"/>
</g>
<path style="fill:#4B9FD8;" d="M420.608,472.68H32c-17.68,0-32-14.32-32-32V196.792c0-17.664,14.32-32,32-32h388.608
c17.68,0,32,14.336,32,32v243.872C452.608,458.344,438.288,472.68,420.608,472.68z"/>
<g>
<path style="fill:#3A9BD6;" d="M206.72,164.792c-99.84,75.68-170.08,172.64-206.4,279.04c-0.16-1.28-0.32-2.56-0.32-4v-243.84
c0-15.2,10.56-28,24.8-31.2L206.72,164.792L206.72,164.792z"/>
<path style="fill:#3A9BD6;" d="M245.904,472.68c99.84-75.68,170.08-172.64,206.4-279.04c0.16,1.28,0.32,2.56,0.32,4v243.84
c0,15.2-10.56,28-24.8,31.2H245.904z"/>
</g>
<circle style="fill:#FEE218;" cx="309.68" cy="251.768" r="38.976"/>
<circle style="fill:#CD494C;" cx="365.648" cy="251.768" r="38.976"/>
<g>
<path style="fill:#FFFFFF;" d="M133.92,349.88H58.224c-8.832,0-16-7.152-16-16s7.168-16,16-16h75.696c8.832,0,16,7.152,16,16
C149.92,342.712,142.752,349.88,133.92,349.88z"/>
<path style="fill:#FFFFFF;" d="M201.536,267.768H58.224c-8.832,0-16-7.152-16-16s7.168-16,16-16h143.312c8.832,0,16,7.152,16,16
C217.536,260.616,210.368,267.768,201.536,267.768z"/>
</g>
<path style="fill:#8BD5EC;" d="M105.088,431.992h-46.88c-8.832,0-16-7.152-16-16s7.168-16,16-16h46.88c8.832,0,16,7.152,16,16
C121.088,424.824,113.936,431.992,105.088,431.992z"/>
<path style="fill:#DAEFF6;" d="M201.536,431.992h-46.88c-8.832,0-16-7.152-16-16s7.168-16,16-16h46.88c8.832,0,16,7.152,16,16
C217.536,424.824,210.368,431.992,201.536,431.992z"/>
<path style="fill:#8BD5EC;" d="M297.968,431.992h-46.88c-8.832,0-16-7.152-16-16s7.168-16,16-16h46.88c8.832,0,16,7.152,16,16
C313.968,424.824,306.8,431.992,297.968,431.992z"/>
<path style="fill:#DAEFF6;" d="M394.4,431.992h-46.88c-8.832,0-16-7.152-16-16s7.168-16,16-16h46.88c8.832,0,16,7.152,16,16
C410.4,424.824,403.232,431.992,394.4,431.992z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;
const svgProveedores = `<svg height="511pt" viewBox="0 -3 511.99981 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m379.441406 310.25 67.480469-66.773438c25.203125-25.203124 73.675781 6.59375 47.488281 37.402344l-81.710937 96.132813c-3.199219 3.761719-6.875 7.097656-10.929688 9.917969-13.171875 8.417968-28.859375 11.222656-44.316406 11.222656h-121.257813c-8.769531 0-17.535156.507812-26.246093 1.519531l-34.875 3.917969-72.335938-70.195313s41.035157-77.492187 121.53125-55.21875c15.054688 4.167969 30.632813 6.152344 46.253907 6.152344h79.691406c37.515625 0 37.8125 59.609375-.3125 59.609375h-69.375" fill="#ffcdac"/><path d="m127.558594 494.933594 68.816406-70.601563c.019531-.019531.019531-.050781 0-.070312l-116.769531-113.316407c-.019531-.019531-.050781-.015624-.070313 0l-69.464844 72.117188zm0 0" fill="#6bd5e1"/><path d="m92.644531 100.320312c-21.8125 2.066407-38.878906 20.433594-38.878906 42.789063v45.765625c0 7.902344 6.40625 14.3125 14.3125 14.3125h98.140625c7.90625 0 14.3125-6.410156 14.3125-14.3125v-45.765625c0-22.371094-17.089844-40.753906-38.929688-42.792969" fill="#ffb677"/><path d="m165.171875 58.859375c0 26.523437-21.5 48.023437-48.023437 48.023437-26.523438 0-48.023438-21.5-48.023438-48.023437s21.5-48.027344 48.023438-48.027344c26.523437 0 48.023437 21.503907 48.023437 48.027344zm0 0" fill="#ffcdac"/><path d="m219.414062 100.320312c-21.8125 2.066407-38.882812 20.433594-38.882812 42.789063v45.765625c0 7.902344 6.410156 14.3125 14.316406 14.3125h98.140625c7.90625 0 14.3125-6.410156 14.3125-14.3125v-45.765625c0-22.371094-17.09375-40.753906-38.929687-42.792969" fill="#ff8364"/><path d="m291.941406 58.859375c0 26.523437-21.5 48.023437-48.023437 48.023437-26.523438 0-48.027344-21.5-48.027344-48.023437s21.503906-48.027344 48.027344-48.027344c26.523437 0 48.023437 21.503907 48.023437 48.027344zm0 0" fill="#ffcdac"/><path d="m346.183594 100.320312c-21.816406 2.066407-38.882813 20.433594-38.882813 42.789063v45.765625c0 7.902344 6.410157 14.3125 14.3125 14.3125h98.140625c7.90625 0 14.316406-6.410156 14.316406-14.3125v-45.765625c0-22.371094-17.09375-40.753906-38.933593-42.792969" fill="#ffd98e"/><path d="m418.710938 58.859375c0 26.523437-21.503907 48.023437-48.027344 48.023437-26.523438 0-48.023438-21.5-48.023438-48.023437s21.5-48.027344 48.023438-48.027344c26.523437 0 48.027344 21.503907 48.027344 48.027344zm0 0" fill="#ffcdac"/><path d="m499.902344 236.066406c-7.664063-7.070312-18.089844-11.4375-28.605469-11.984375-11.941406-.617187-23.128906 3.640625-31.460937 11.976563l-56.929688 56.332031c-1.125-1.949219-2.410156-3.789063-3.851562-5.496094-7.003907-8.316406-17.246094-12.894531-28.835938-12.894531h-79.695312c-15.027344 0-29.6875-1.949219-43.570313-5.789062-36.195313-10.011719-70.773437-2.699219-100.003906 21.160156-11.886719 9.703125-20.558594 20.257812-26.042969 27.953125l-14.289062-13.867188c-1.878907-1.824219-4.425782-2.859375-7.046876-2.859375-.023437 0-.042968 0-.066406 0-2.714844.019532-5.339844 1.148438-7.222656 3.101563l-69.464844 72.113281c-1.859375 1.929688-2.8710935 4.523438-2.81249975 7.203125.05859375 2.683594 1.17968775 5.230469 3.12109375 7.078125l117.488281 111.871094c1.949219 1.855468 4.449219 2.78125 6.945313 2.78125 2.621094 0 5.242187-1.019532 7.214844-3.042969l68.816406-70.601563c1.878906-1.929687 2.921875-4.566406 2.871094-7.261718-.050782-2.65625-1.164063-5.21875-3.070313-7.070313l-5.992187-5.8125 13.714843-1.542969c8.296875-.964843 16.734375-1.453124 25.085938-1.453124h121.253906c19.703125 0 36.4375-4.308594 49.742187-12.808594.109376-.070313.21875-.144532.328126-.21875 4.765624-3.3125 9.089843-7.238282 12.847656-11.664063l81.710937-96.128906c13.984375-16.449219 13.109375-36.976563-2.179687-51.074219zm-372.605469 244.449219-102.945313-98.023437 55.457032-57.574219 102.34375 99.316406zm359.4375-206.421875-81.710937 96.132812c-2.59375 3.050782-5.566407 5.761719-8.84375 8.058594-9.988282 6.324219-23.015626 9.535156-38.726563 9.535156h-121.257813c-9.121093 0-18.34375.535157-27.371093 1.585938l-30.148438 3.382812-63.125-61.257812c4.386719-6.503906 12.453125-17.015625 24.136719-26.554688 24.289062-19.828124 51.84375-25.667968 81.894531-17.351562 15.632813 4.324219 32.097657 6.519531 48.941407 6.519531h79.695312c14.3125 0 18.132812 12.398438 18.132812 19.722657 0 5.351562-1.71875 10.445312-4.714843 13.976562-3.25 3.824219-7.871094 5.761719-13.734375 5.761719h-69.375c-5.5625 0-10.070313 4.511719-10.070313 10.074219s4.507813 10.070312 10.070313 10.070312h69.375c11.710937 0 22.039062-4.570312 29.085937-12.867188 5.863281-6.898437 9.207031-15.96875 9.488281-25.664062l65.566407-64.878906c9.371093-9.371094 24.011719-7.019532 32.203125.535156 4.234375 3.90625 9.929687 12.113281.488281 23.21875zm0 0"/><path d="m249.117188 340.996094c-1.269532-5.417969-6.6875-8.773438-12.105469-7.507813-5.414063 1.269531-8.777344 6.6875-7.503907 12.105469l.09375.410156c1.089844 4.640625 5.226563 7.773438 9.796876 7.773438.761718 0 1.535156-.085938 2.308593-.265625 5.417969-1.269531 8.777344-6.691407 7.507813-12.105469zm0 0"/><path d="m68.078125 213h98.140625c5.34375 0 10.289062-1.734375 14.3125-4.664062 4.023438 2.929687 8.96875 4.664062 14.3125 4.664062h98.144531c5.34375 0 10.289063-1.734375 14.3125-4.664062 4.023438 2.929687 8.96875 4.664062 14.3125 4.664062h98.140625c13.445313 0 24.382813-10.941406 24.382813-24.386719v-45.765625c0-20.554687-11.503907-38.410156-28.722657-47.21875 8.34375-10.0625 13.367188-22.96875 13.367188-37.03125 0-32.035156-26.0625-58.097656-58.097656-58.097656s-58.097656 26.0625-58.097656 58.097656c0 14.0625 5.023437 26.972656 13.367187 37.03125-7.441406 3.8125-13.8125 9.316406-18.652344 15.992188-4.839843-6.679688-11.210937-12.183594-18.65625-15.992188 8.34375-10.058594 13.367188-22.96875 13.367188-37.03125 0-32.035156-26.0625-58.097656-58.097657-58.097656-32.035156 0-58.097656 26.0625-58.097656 58.097656 0 14.0625 5.027344 26.972656 13.371094 37.035156-7.445312 3.808594-13.816406 9.3125-18.65625 15.992188-4.839844-6.679688-11.210938-12.183594-18.65625-15.996094 8.34375-10.058594 13.367188-22.96875 13.367188-37.027344 0-32.039062-26.0625-58.101562-58.097657-58.101562-32.03125 0-58.09375 26.0625-58.09375 58.101562 0 14.058594 5.023438 26.96875 13.367188 37.03125-17.21875 8.808594-28.726563 26.667969-28.726563 47.21875v45.761719c0 13.445313 10.941406 24.386719 24.386719 24.386719zm302.609375-192.355469c20.925781 0 37.953125 17.023438 37.953125 37.953125 0 20.925782-17.027344 37.953125-37.953125 37.953125-20.929688 0-37.953125-17.023437-37.953125-37.953125-.003906-20.929687 17.023437-37.953125 37.953125-37.953125zm-26.167969 89.800781c7.871094 3.988282 16.757813 6.25 26.164063 6.25 9.410156 0 18.296875-2.261718 26.164062-6.25 15.652344 2.726563 27.148438 16.214844 27.148438 32.402344v45.765625c0 2.339844-1.902344 4.242188-4.242188 4.242188h-98.140625c-2.335937 0-4.238281-1.902344-4.238281-4.242188v-45.765625c-.003906-16.183594 11.496094-29.675781 27.144531-32.402344zm-100.601562-89.800781c20.925781 0 37.953125 17.023438 37.953125 37.953125 0 20.925782-17.027344 37.953125-37.953125 37.953125-20.929688 0-37.953125-17.023437-37.953125-37.953125 0-20.929687 17.023437-37.953125 37.953125-37.953125zm-26.164063 89.800781c7.867188 3.988282 16.753906 6.25 26.164063 6.25 9.410156 0 18.292969-2.261718 26.164062-6.25 15.648438 2.726563 27.148438 16.214844 27.148438 32.402344v45.765625c0 2.339844-1.902344 4.242188-4.242188 4.242188h-98.140625c-2.339844 0-4.242187-1.902344-4.242187-4.242188v-45.765625c0-16.183594 11.5-29.675781 27.148437-32.402344zm-100.605468-89.800781c20.925781 0 37.953124 17.023438 37.953124 37.953125 0 20.925782-17.027343 37.953125-37.953124 37.953125-20.925782 0-37.953126-17.027343-37.953126-37.953125 0-20.929687 17.027344-37.953125 37.953126-37.953125zm-53.3125 122.203125c0-16.183594 11.5-29.675781 27.148437-32.402344 7.871094 3.988282 16.753906 6.25 26.164063 6.25 9.410156 0 18.292968-2.261718 26.164062-6.25 15.652344 2.726563 27.148438 16.214844 27.148438 32.402344v45.765625c0 2.339844-1.902344 4.242188-4.242188 4.242188h-98.140625c-2.339844 0-4.242187-1.902344-4.242187-4.242188zm0 0"/></svg>`;


insertSideTargets('Mi perfil', 'perfil-dm.html', svgMyProfile);
insertSideTargets('Métodos de pago', 'listar-metodos.html', svgPaymentMethods);
insertSideTargets('Proveedores', 'search-results.html', svgProveedores);

const updateCurrentUser = async() => {
    const loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));

}