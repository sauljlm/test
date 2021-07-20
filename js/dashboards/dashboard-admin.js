const data = [{
        name: ['Principal'],
        links: ['Acciones'],
    },

    {
        name: ['Reportes'],
        links: ['Ver reportes'],
    },

    {
        name: ['Solicitudes'],
        links: ['Nuevas solicitudes'],
    },
    {
        name: ['Denuncias'],
        links: ['Ver denuncias'],
    },
    {
        name: ['Catálogos'],
        links: ['Ver catálogos'],
    },
    {
        name: ['Buscar'],
        links: ['Buscar usuarios'],
    }
];

const parteSaul = 'denuncias-administrador.html';

const mainUserSrc = 'https://images.unsplash.com/photo-1616328510318-4c3a2aed0c90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
const firstSupplierSrc = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
const secondSupplierSrc = 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
const thirdSupplierSrc = 'https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

const welcomeText = 'Bienvenido Administrador';
const welcomeMessage = `En +kotas nuestra prioridad es el bienestar de nuestros clientes, por lo que recomendamos revisar la sección de denuncias constantemente.`;

const firstSectionTitle = `Denuncias Recientes`;

const firstSupplierName = `Erick Zuckerberg`;
const secondSupplierName = `Gabriel Potts`;
const thirdSupplierName = `Victoria Ramírez`;

const firstSupplierText = `El Proveedor de Servicio Mario Santana el día 30 de mayo, llegó 3 horas despúes con mi mascota sin alimentar.`;

const thirdSupplierText = `El Proveedor con el nombre Cecilia Perez no llegó por mi mascota y no sólo eso, sino que no se me devolvió el dinero.`;

const secondSupplierText = `El día de ayer miércoles 24 de Junio el proveedor de servicio me cobró el doble según el porque duró media hora más en la vuelta al parque con mi mascota.`;


const sideContainer = document.querySelector('.side-container');

const insertCardsInfo = () => {
    const firstCardName = document.querySelector('#card-name1');
    firstCardName.textContent = firstSupplierName;

    const secondCardName = document.querySelector('#card-name2');
    secondCardName.textContent = secondSupplierName;

    const thirdCardName = document.querySelector('#card-name3');
    thirdCardName.textContent = thirdSupplierName;


    const firstCardText = document.querySelector('#card-text1');
    firstCardText.textContent = firstSupplierText;
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


const insertImgs = () => {
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

const svgAcciones = `<svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><circle cx="392" cy="392" fill="#f79caf" r="120"/><g fill="#acebe2"><path d="m240 66v108c0 36.39-29.61 66-66 66h-108c-36.39 0-66-29.61-66-66v-108c0-36.39 29.61-66 66-66h108c36.39 0 66 29.61 66 66z"/><path d="m512 66v108c0 36.39-29.61 66-66 66h-108c-36.39 0-66-29.61-66-66v-108c0-36.39 29.61-66 66-66h108c36.39 0 66 29.61 66 66z"/><path d="m240 338v108c0 36.39-29.61 66-66 66h-108c-36.39 0-66-29.61-66-66v-108c0-36.39 29.61-66 66-66h108c36.39 0 66 29.61 66 66z"/></g><path d="m512 392c0 66.17-53.83 120-120 120-5.42 0-10.77-.36-16-1.07 58.64-7.84 104-58.19 104-118.93s-45.36-111.09-104-118.93c5.23-.71 10.58-1.07 16-1.07 66.17 0 120 53.83 120 120z" fill="#e3889b"/><path d="m240 66v108c0 36.39-29.61 66-66 66h-32c36.39 0 66-29.61 66-66v-108c0-36.39-29.61-66-66-66h32c36.39 0 66 29.61 66 66z" fill="#98d7ce"/><path d="m512 66v108c0 36.39-29.61 66-66 66h-32c36.39 0 66-29.61 66-66v-108c0-36.39-29.61-66-66-66h32c36.39 0 66 29.61 66 66z" fill="#98d7ce"/><path d="m240 338v108c0 36.39-29.61 66-66 66h-32c36.39 0 66-29.61 66-66v-108c0-36.39-29.61-66-66-66h32c36.39 0 66 29.61 66 66z" fill="#98d7ce"/></g></svg>`;
const svgReportes = `<svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Analysis-report-document-develop-infromation"><path d="m61 14v45a2.006 2.006 0 0 1 -2 2h-34a2.006 2.006 0 0 1 -2-2v-54a2.006 2.006 0 0 1 2-2h25v9a2.006 2.006 0 0 0 2 2z" fill="#fee9ab"/><path d="m61 14v45a2.006 2.006 0 0 1 -2 2h-4a2.006 2.006 0 0 0 2-2v-45z" fill="#ffd422"/><path d="m61 14h-9a2.006 2.006 0 0 1 -2-2v-9z" fill="#ff7956"/><circle cx="49" cy="49" fill="#bdfdff" r="8"/><path d="m47 28h-20v-20a19.994 19.994 0 0 1 20 20z" fill="#ff3051"/><path d="m57 49a8 8 0 0 1 -8 8 8.239 8.239 0 0 1 -2-.25 8.005 8.005 0 0 0 0-15.5 8.239 8.239 0 0 1 2-.25 8 8 0 0 1 8 8z" fill="#46f8ff"/><path d="m47 28h-4a20 20 0 0 0 -16-19.6v-.4a19.994 19.994 0 0 1 20 20z" fill="#cd2a00"/><path d="m23 32h20a20 20 0 0 1 -34.14 14.14z" fill="#5eac24"/><path d="m23 12v20l-14.14 14.14a20 20 0 0 1 14.14-34.14z" fill="#ffcd00"/><path d="m61.71 13.29-11-11a1.033 1.033 0 0 0 -.71-.29h-25a3.009 3.009 0 0 0 -3 3v6.05a20.973 20.973 0 0 0 0 41.9v6.05a3.009 3.009 0 0 0 3 3h34a3.009 3.009 0 0 0 3-3v-45a1.033 1.033 0 0 0 -.29-.71zm-10.71-7.88 7.59 7.59h-6.59a1 1 0 0 1 -1-1zm-47 26.59a19.023 19.023 0 0 1 18-18.97v18.56l-13.1 13.1a18.879 18.879 0 0 1 -4.9-12.69zm6.31 14.1 13.1-13.1h18.56a18.963 18.963 0 0 1 -31.66 13.1zm49.69 12.9a1 1 0 0 1 -1 1h-34a1 1 0 0 1 -1-1v-6.05a21.014 21.014 0 0 0 20-20.95 1 1 0 0 0 -1-1h-19v-26a1 1 0 0 1 1-1h24v8a3.009 3.009 0 0 0 3 3h8z"/><path d="m27 7a1 1 0 0 0 -1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1 21.023 21.023 0 0 0 -21-21zm1 20v-17.97a19.017 19.017 0 0 1 17.97 17.97z"/><path d="m49 40a9 9 0 1 0 9 9 9.014 9.014 0 0 0 -9-9zm0 16a7 7 0 1 1 7-7 7.008 7.008 0 0 1 -7 7z"/><path d="m47 50.586-2.293-2.293-1.414 1.414 3 3a1 1 0 0 0 1.414 0l6-6-1.414-1.414z"/><path d="m50 19h8v2h-8z"/><path d="m50 25h8v2h-8z"/><path d="m50 31h8v2h-8z"/></g></svg>`;
const svgNuevasSolicitudes = `<svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m346.051 158.82-66.45.35-192.58 1.03c-5.55-27.13-6.84-70.28 1.66-96.63 10.35-33.6 45.44-49.5 76.19-57 47.93-11.73 119.53-11.16 139.03 30.45 1.25 3.06 4.07 5.19 7.35 5.55 40.2 3.899 42.9 73.95 34.8 116.25z" fill="#56788b"/><path d="m346.051 158.82-66.45.35v-54.67c-19.72-59.14 31.65-61.93 31.65-61.93 40.2 3.899 42.9 73.95 34.8 116.25z" fill="#415e6f"/><path d="m287.311 340.35c-3.7-.41-7.51-.76-11.43-1.06h-115.76c-150.65 11.37-140.69 110.13-139.91 167.26.04 3.02 2.51 5.45 5.54 5.45h384.5c3.03 0 5.5-2.43 5.54-5.45.76-55.64 10.23-150.78-128.48-166.2z" fill="#ff6b81"/><path d="m275.881 339.29c-1.57 30.6-26.88 54.92-57.88 54.92s-56.32-24.33-57.88-54.92c9.37-.71 19.36-1.08 30.02-1.08h55.72c10.66 0 20.65.37 30.02 1.08z" fill="#d9f0f4"/><path d="m415.791 506.55c-.04 3.02-2.51 5.45-5.54 5.45h-20c3.03 0 5.5-2.43 5.54-5.45.72-52.82 9.29-143.79-108.48-166.2 138.71 15.42 129.24 110.56 128.48 166.2z" fill="#ed2061"/><g fill="#fab684"><path d="m299.451 190.676h27.337c12.616 0 22.844-10.228 22.844-22.846 0-12.617-10.228-22.846-22.844-22.846h-19.448z"/><path d="m135.34 190.676h-27.337c-12.616 0-22.844-10.228-22.844-22.846 0-12.617 10.228-22.846 22.844-22.846h19.448z"/></g><path d="m245.861 306.499c-2.331 6.319-3.534 22.528 0 31.708 0 15.39-12.473 27.866-27.859 27.866s-27.859-12.476-27.859-27.866c3.534-9.181 2.331-25.39 0-31.708z" fill="#fab684"/><path d="m310.961 222.17c0 22.12-18.81 48.54-55.93 78.55-2.08 1.69-4.29 3.23-6.59 4.61-9.18 5.5-19.91 8.44-30.64 8.42-13.42.03-26.43-4.58-36.83-13.03-37.11-30.01-55.92-56.43-55.92-78.55 0-2.35.09-4.7.28-7.01.96-9.65.68-53.71.66-82.16v-.03c-.25-9.64 5.15-18.55 13.82-22.8 18.94-8.42 48.55-12.62 78.19-12.6 21.27-.01 42.52 2.14 59.83 6.48 6.81 1.7 13.02 3.74 18.37 6.12 8.66 4.25 14.06 13.16 13.81 22.8v.03c-.02 28.45-.29 72.51.66 82.16.19 2.31.29 4.66.29 7.01z" fill="#fdd9b4"/><path d="m310.961 222.17c0 22.12-18.81 48.54-55.93 78.55-2.08 1.69-4.29 3.23-6.59 4.61 28.24-25.35 42.52-47.89 42.52-67.16 0-2.35-.1-4.7-.29-7.01-.95-9.65-.68-69.71-.66-98.16v-7.03c.23-9.02-4.48-17.4-12.18-21.92 6.81 1.7 13.02 3.74 18.37 6.12 8.66 4.25 14.06 13.16 13.81 22.8v.03c-.02 28.45-.29 72.51.66 82.16.19 2.31.29 4.66.29 7.01z" fill="#f9c19b"/><g fill="#fab684"><path d="m242.578 236.189c-3.482-2.248-8.123-1.247-10.369 2.233-3.177 4.922-8.563 7.861-14.406 7.861s-11.229-2.939-14.407-7.861c-2.247-3.48-6.89-4.479-10.369-2.233-3.48 2.247-4.479 6.889-2.233 10.369 5.953 9.221 16.049 14.726 27.008 14.726s21.056-5.505 27.009-14.726c2.247-3.48 1.247-8.122-2.233-10.369z"/><path d="m204.322 211.841c3.479 2.245 8.122 1.247 10.369-2.233.731-1.134 1.97-1.811 3.312-1.811s2.581.677 3.312 1.811c1.435 2.222 3.846 3.433 6.308 3.433 1.394 0 2.803-.388 4.061-1.2 3.48-2.247 4.48-6.889 2.233-10.369-3.507-5.432-9.456-8.675-15.915-8.675-6.458 0-12.407 3.243-15.914 8.675-2.246 3.48-1.246 8.122 2.234 10.369z"/></g><path d="m492.191 360.87c0 52.54-42.77 95.29-95.34 95.29-3.38 0-6.72-.18-10-.52-47.89-5.02-85.34-45.61-85.34-94.77s37.45-89.75 85.34-94.77c3.28-.34 6.62-.52 10-.52 52.57 0 95.34 42.75 95.34 95.29z" fill="#09eaa3"/><path d="m492.191 360.87c0 52.54-42.77 95.29-95.34 95.29-3.38 0-6.72-.18-10-.52 47.89-5.02 85.34-45.61 85.34-94.77s-37.45-89.75-85.34-94.77c3.28-.34 6.62-.52 10-.52 52.57 0 95.34 42.75 95.34 95.29z" fill="#14bb87"/><path d="m363.804 368.369h25.546v25.547c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-25.547h25.546c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-25.546v-25.546c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v25.546h-25.546c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z" fill="#fff"/><g fill="#ed2061"><path d="m106.238 470.968c-1.403-.041-4.147.323-6.818 2.946-2.943 2.89-6.855 9.205-6.855 30.586 0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-13.057 1.569-17.991 2.248-19.515 2.222-1.268 3.739-3.64 3.788-6.383.075-4.142-3.222-7.56-7.363-7.634z"/><path d="m336.592 473.914c-2.671-2.624-5.419-2.976-6.818-2.946-4.142.075-7.438 3.493-7.363 7.634.049 2.744 1.566 5.116 3.788 6.383.68 1.524 2.248 6.458 2.248 19.515 0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-21.381-3.912-27.696-6.855-30.586z"/></g></g></svg>`;
const svgDenuncias = `<svg id="Capa_1" enable-background="new 0 0 499.767 499.767" height="512" viewBox="0 0 499.767 499.767" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m269.608 393.421 9.01 22.134c9.652 23.707-1.615 51.251-25.115 61.398l-43.532 18.797c-18.32 7.911-38.922 3.421-52.297-9.952-3.623-3.623-6.713-7.894-9.087-12.75l-10.655-21.795-33.457-69.718 33.457-13.595 33.698 68.513 9.995 20.444c2.498 5.11 8.545 7.347 13.767 5.091l43.533-18.796c5.27-2.276 7.797-8.454 5.632-13.772l-8.633-21.206-30.476-69.968 41.039-15.917z" fill="#f3eae6"/><path d="m220.473 109.524-70.086 6.914-117.13 266.7-11.585 22.521 65.002 70.377 25.853-13.628 266.74-117.15 25.951-50.989z" fill="#f3eae6"/><g><g><path d="m202.977 54.274-29.09 8.664-23.5 53.5.12.05 228.76 228.77 53.46-23.48 18.952-18.802z" fill="#f9f3f1"/></g><path d="m84.318 468.304 11.584-22.521 117.13-266.7 23.5-53.5-16.059-16.059-70.086 6.914-117.13 266.7-11.585 22.521 65.002 70.377 3.218-1.696z" fill="#e1d3ce"/><path d="m243.198 94.495-40.221-40.221-29.09 8.664-23.5 53.5.12.05 62.545 62.548c7.142-16.259 28.396-20.253 40.952-7.696l159.07 159.07 19.653-8.632 18.952-18.802z" fill="#efe2dd"/><path d="m434.5 323.551-262.385-262.385c-8.92-8.92-8.92-23.382 0-32.301l3.301-3.301c8.92-8.92 23.382-8.92 32.301 0l262.385 262.385c8.92 8.92 8.92 23.382 0 32.301l-3.301 3.301c-8.92 8.92-23.382 8.92-32.301 0z" fill="#f37c7c"/><path d="m234.018 113.363 19.95-19.95c4.158-4.158 9.522-6.352 14.966-6.633l-61.217-61.216c-8.92-8.92-23.382-8.92-32.301 0l-3.301 3.301c-8.92 8.92-8.92 23.382 0 32.301l57.795 57.795c1.05-2.015 2.417-3.906 4.108-5.598z" fill="#ee6161"/><g><path d="m366.252 138.469c-1.919 0-3.839-.732-5.304-2.197-2.929-2.929-2.929-7.678 0-10.606l8.263-8.263c2.93-2.929 7.678-2.929 10.607 0s2.929 7.678 0 10.606l-8.263 8.263c-1.464 1.465-3.384 2.197-5.303 2.197z" fill="#fee97d"/></g><g><path d="m405.589 97.577c-1.919 0-3.839-.732-5.304-2.197-2.929-2.929-2.929-7.678 0-10.606l34.983-34.984c2.93-2.929 7.678-2.929 10.607 0s2.929 7.678 0 10.606l-34.983 34.984c-1.464 1.465-3.384 2.197-5.303 2.197z" fill="#fee97d"/></g><g><path d="m325.328 64.43c-.199 0-.399-.008-.602-.024-4.13-.328-7.211-3.941-6.883-8.071l3.919-49.319c.329-4.128 3.945-7.209 8.07-6.882 4.13.328 7.211 3.941 6.883 8.071l-3.919 49.319c-.312 3.927-3.595 6.906-7.468 6.906z" fill="#fee97d"/></g><g><path d="m442.939 179.401c-3.873 0-7.156-2.979-7.469-6.906-.328-4.129 2.753-7.743 6.883-8.071l49.319-3.919c4.133-.334 7.742 2.754 8.07 6.882.328 4.129-2.753 7.743-6.883 8.071l-49.319 3.919c-.2.016-.402.024-.601.024z" fill="#fee97d"/></g></g><path d="m74.626 490.722-69.683-69.683c-6.591-6.591-6.591-17.278 0-23.869l9.24-9.24c6.591-6.591 17.278-6.591 23.869 0l69.683 69.683c6.591 6.591 6.591 17.278 0 23.869l-9.24 9.24c-6.591 6.591-17.278 6.591-23.869 0z" fill="#f37c7c"/><path d="m55.657 444.247c-6.591-6.591-6.591-17.278 0-23.869l7.422-7.422-25.027-25.026c-6.591-6.591-17.278-6.591-23.869 0l-9.24 9.24c-6.591 6.591-6.591 17.278 0 23.869l69.683 69.683c6.591 6.591 17.278 6.591 23.869 0l1.818-1.818z" fill="#ee6161"/></g></svg>`;
const svgCatalogos = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m366.567 431.262h-266.246c-8.533 0-15.449-6.917-15.449-15.449v-400.364c0-8.532 6.917-15.449 15.449-15.449h266.246c8.533 0 15.449 6.917 15.449 15.449v400.363c.001 8.533-6.916 15.45-15.449 15.45z" fill="#8ac9fe"/><path d="m366.567 0h-40.883c8.533 0 15.449 6.917 15.449 15.449v400.363c0 8.533-6.917 15.45-15.449 15.45h40.883c8.533 0 15.449-6.917 15.449-15.45v-400.363c.001-8.532-6.916-15.449-15.449-15.449z" fill="#60b7ff"/><path d="m142.024 81.127c1.098-.248 2.236-.39 3.408-.39h236.584v-65.288c0-3.788-1.368-7.252-3.63-9.94z" fill="#fd4755"/><path d="m411.679 512h-266.246c-8.533 0-15.449-6.917-15.449-15.449v-400.364c0-8.533 6.917-15.449 15.449-15.449h266.246c8.533 0 15.449 6.917 15.449 15.449v400.363c0 8.533-6.917 15.45-15.449 15.45z" fill="#0593fc"/><path d="m167.069 199.683v-74.648c0-3.983 3.229-7.211 7.211-7.211h80.529c3.983 0 7.211 3.229 7.211 7.211v74.648c0 3.983-3.229 7.211-7.211 7.211h-80.529c-3.982.001-7.211-3.228-7.211-7.211z" fill="#ffc4c8"/><path d="m167.069 467.702v-74.648c0-3.983 3.229-7.211 7.211-7.211h80.529c3.983 0 7.211 3.229 7.211 7.211v74.648c0 3.983-3.229 7.211-7.211 7.211h-80.529c-3.982 0-7.211-3.228-7.211-7.211z" fill="#ffc4c8"/><path d="m167.069 337.859v-74.648c0-3.983 3.229-7.211 7.211-7.211h80.529c3.983 0 7.211 3.229 7.211 7.211v74.648c0 3.983-3.229 7.211-7.211 7.211h-80.529c-3.982 0-7.211-3.228-7.211-7.211z" fill="#fff3be"/><path d="m411.679 80.738h-40.883c8.533 0 15.45 6.917 15.45 15.45v400.363c0 8.532-6.917 15.449-15.45 15.449h40.883c8.533 0 15.449-6.917 15.449-15.449v-400.364c0-8.532-6.917-15.449-15.449-15.449z" fill="#0182fc"/><g><path d="m330.277 184.687h-35.713c-4.267 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h35.713c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#c4e2ff"/></g><g><path d="m330.277 322.862h-35.713c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h35.713c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#c4e2ff"/></g><g><path d="m330.277 452.705h-35.713c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h35.713c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#c4e2ff"/></g><g><path d="m390.042 155.485h-95.478c-4.267 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h95.478c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#c4e2ff"/></g><g><path d="m390.042 293.661h-95.478c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h95.478c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#c4e2ff"/></g><g><path d="m390.042 423.504h-95.478c-4.267 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h95.478c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#c4e2ff"/></g><g fill="#b3dafe"><path d="m390.042 140.032h-3.796v15.453h3.796c4.267 0 7.726-3.459 7.726-7.726 0-4.268-3.459-7.727-7.726-7.727z"/><path d="m390.042 278.208h-3.796v15.453h3.796c4.267 0 7.726-3.459 7.726-7.726s-3.459-7.727-7.726-7.727z"/><path d="m390.042 408.051h-3.796v15.453h3.796c4.267 0 7.726-3.459 7.726-7.726 0-4.268-3.459-7.727-7.726-7.727z"/></g><g><path d="m378.387 5.51-31.412 10.05v65.178h35.042v-65.289c0-3.787-1.368-7.252-3.63-9.939z" fill="#fb2b3a"/></g></g></svg>
`;
const svgBuscarUsuarios = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 192.904 192.904" style="enable-background:new 0 0 192.904 192.904;" xml:space="preserve">
<path d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0
C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078
c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193
C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187
C44.693,147.38,15,117.689,15,81.193z"/>
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

insertSideTargets('Acciones', 'index-administrador.html', svgAcciones);
insertSideTargets('Ver reportes', 'reportes-administrador.html', svgReportes);
insertSideTargets('Nuevas solicitudes', 'solicitudes-administrador.html', svgNuevasSolicitudes);
insertSideTargets('Ver denuncias', 'denuncias-administrador.html', svgDenuncias);
insertSideTargets('Ver catálogos', 'denuncias-administrador.html', svgCatalogos);
insertSideTargets('Buscar usuarios', 'search-results.html', svgBuscarUsuarios);