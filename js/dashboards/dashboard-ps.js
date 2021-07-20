const data = [{
        name: ['Perfil'],
        links: ['Mi Perfil'],
    },

    {
        name: ['Solicitudes de Servicio'],
        links: ['Solicitudes'],
    },
    {
        name: ['Registrar Servicios'],
        links: ['Nuevo Servicio'],
    },

];

const parteSaul = 'search-results.html';
const firstSupplierSrc = 'https://images.unsplash.com/photo-1617968763460-48f12e7351d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80';
const secondSupplierSrc = 'https://images.unsplash.com/photo-1618251824638-050380b200b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80';
const thirdSupplierSrc = 'https://images.unsplash.com/photo-1618276250441-8ba927b88deb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

const welcomeText = 'Bienvenido Proveedor de Servicio';
const welcomeMessage = `Recuerda siempre llevar contigo una bolsita para recoger los desechos de las mascotas de nuestros clientes.`;

const firstSectionTitle = `Servicios destacados`;

const firstSupplierName = `Pedro Salazar`;
const secondSupplierName = `Maria Salas`;
const thirdSupplierName = `Diego Stevens`;

const firstSupplierText = `Aprovechá un grooming al 90% de descuento en +Kotas.
Esta oferta comprende un servicio de grooming para perro o gato con corte de
cabello, baño, limpieza de oídos, corte de uñas`;

const secondSupplierText = `El mejor servicio de Grooming al 10% de descuento en +Kotas.
Esta oferta comprende un servicio de grooming para gato y un paseo de 30 minutos 
por el parque más cercano.`;

const thirdSupplierText = `En oferta, Hospedaje para perros al 30% de descuento en +Kotas.
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


const insertImgs = () => {

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
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        window.location.href = parteSaul;
    });
});

insertCardsInfo();

insertTexts();

const svgMyProfile = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="512" y2="0"><stop offset="0" stop-color="#fd3a84"/><stop offset="1" stop-color="#ffa68d"/></linearGradient><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="226" x2="226" y1="391" y2="0"><stop offset="0" stop-color="#ffc2cc"/><stop offset="1" stop-color="#fff2f4"/></linearGradient><g><g><g><path d="m406 0h-195l-120 120v377c0 8.291 6.709 15 15 15h300c8.291 0 15-6.709 15-15v-482c0-8.291-6.709-15-15-15z" fill="url(#SVGID_1_)"/></g></g><g><g><path d="m211 105v-105h-15c-3.984 0-7.793 1.582-10.605 4.395l-90 90c-2.813 2.812-4.395 6.621-4.395 10.605v15h105c8.291 0 15-6.709 15-15zm135 256h-180c-8.291 0-15 6.709-15 15s6.709 15 15 15h180c8.291 0 15-6.709 15-15s-6.709-15-15-15zm-90-150c24.814 0 45-20.186 45-45s-20.186-46-45-46-45 21.186-45 46 20.186 45 45 45zm-75 75c0 8.291 6.709 15 15 15h120c8.291 0 15-6.709 15-15 0-41.353-33.633-75-75-75s-75 33.647-75 75z" fill="url(#SVGID_2_)"/></g></g></g></svg>`;
const svgSolicitudes = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#FEDBAB;" d="M506.029,289.999L419.03,416c-16.8,22.5-43.801,36-72.001,36h-257L74.428,294.2l15.601-14.099
c22.8-20.101,37.8-33.9,67.2-40.801c35.099-8.099,70,1.8,93.1,22.8c6,5.101,9.6,9.901,17.1,9.901h3.6c69.6,0,6.7,0,76,0
c16.5,0,30,13.5,30,30s-13.5,30-30,30h-61c-8.401,0-15,6.599-15,15s6.599,15,15,15h70.901c5.7,0,16.5-3.6,22.2-9.6l81-100.8
c10.199-11.1,27.299-12.9,39.6-3.9C513.228,257.601,515.929,276.799,506.029,289.999z"/>
<g>
<path style="fill:#FEC478;" d="M271.029,347v-75c69.6,0,6.7,0,76,0c16.5,0,30,13.5,30,30s-13.5,30-30,30h-61
    C277.628,332,271.029,338.599,271.029,347z"/>
<path style="fill:#FEC478;" d="M506.029,289.999L419.03,416c-16.8,22.5-43.801,36-72.001,36h-76V347c0,8.401,6.599,15,15,15h70.901
    c5.7,0,16.5-3.6,22.2-9.6l81-100.8c10.199-11.1,27.299-12.9,39.6-3.9C513.228,257.601,515.929,276.799,506.029,289.999z"/>
</g>
<path style="fill:#17ACE8;" d="M91.611,503.709l-90-180c-3.706-7.412-0.703-16.421,6.709-20.127L41.484,287
c22.222-11.089,49.277-2.065,60.381,20.127l63.164,126.328c11.125,22.25,2.123,49.256-20.127,60.381l-33.164,16.582
C104.251,514.136,95.297,511.06,91.611,503.709z"/>
<path style="fill:#1689FC;" d="M271.029,90c-49.501,0-91,41.499-91,91v16c0,8.401,6.599,15,15,15h152c8.401,0,15-6.599,15-15v-16
C362.029,131.499,320.53,90,271.029,90z"/>
<path style="fill:#136EF1;" d="M362.029,181v16c0,8.401-6.599,15-15,15h-76V90C320.53,90,362.029,131.499,362.029,181z"/>
<path style="fill:#17ACE8;" d="M271.029,0c-32.999,0-61,27.001-61,60s28.001,60,61,60s61-27.001,61-60S304.028,0,271.029,0z"/>
<path style="fill:#1689FC;" d="M332.029,60c0,32.999-28.001,60-61,60V0C304.028,0,332.029,27.001,332.029,60z"/>
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
const svgAddService = `<svg width="512px" height="512px" viewBox="0 0 512 512" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
<defs>
<path d="M0 0L512 0L512 512L0 512L0 0Z" id="path_1" />
<clipPath id="mask_1">
<use xlink:href="#path_1" />
</clipPath>
</defs>
<g id="new-post">
<path d="M0 0L512 0L512 512L0 512L0 0Z" id="Background" fill="none" fill-rule="evenodd" stroke="none" />
<g clip-path="url(#mask_1)">
<g id="Group" transform="translate(155.435 11.733)">
  <g id="Group" transform="translate(0 77.75699)">
    <path d="M274.666 32.483L274.666 242.193C274.666 260.134 260.124 274.676 242.183 274.676L32.483 274.676C14.542 274.676 0 260.134 0 242.193L0 32.483C0 14.542 14.542 0 32.483 0L242.183 0C260.124 0 274.666 14.542 274.666 32.483L274.666 32.483Z" transform="translate(0 0.0010223389)" id="Shape" fill="#FCB44D" fill-rule="evenodd" stroke="none" />
    <g id="Group" transform="translate(200.646 0)">
      <path d="M74.02 32.484L74.02 104.311L59.951 104.311C53.058 104.311 47.476 98.729 47.476 91.836L47.476 53.1L12.475 53.1C5.582 53.1 0 47.518 0 40.625L0 12.475C0 5.592 5.582 0 12.475 0L41.537 0C59.478 0.000999451 74.02 14.543 74.02 32.484L74.02 32.484Z" id="Shape" fill="#FB9927" fill-rule="evenodd" stroke="none" />
    </g>
    <g id="Group" transform="translate(206.99402 0.0010223389)">
      <path d="M67.672 32.483L67.672 242.193C67.672 260.134 53.13 274.676 35.189 274.676L0 274.676C17.941 274.676 32.483 260.134 32.483 242.193L32.483 32.483C32.483 14.542 17.941 0 0 0L35.189 0C53.13 0 67.672 14.542 67.672 32.483L67.672 32.483Z" id="Shape" fill="#FB9927" fill-rule="evenodd" stroke="none" />
    </g>
  </g>
  <g id="Group" transform="translate(200.646 0)">
    <path d="M135.562 51.213L100.566 51.213L100.566 12.475C100.566 5.586 94.981 0 88.092 0L59.945 0C53.056 0 47.47 5.585 47.47 12.475L47.47 51.213L12.475 51.213C5.586 51.213 0 56.798 0 63.688L0 91.835C0 98.724 5.58499 104.31 12.475 104.31L47.47 104.31L47.47 143.048C47.47 149.937 53.055 155.523 59.945 155.523L88.092 155.523C94.981 155.523 100.566 149.938 100.566 143.048L100.566 104.31L135.562 104.31C142.451 104.31 148.037 98.725 148.037 91.835L148.037 63.687C148.037 56.798 142.452 51.213 135.562 51.213L135.562 51.213Z" id="Shape" fill="#23F1A8" fill-rule="evenodd" stroke="none" />
    <g id="Group" transform="translate(107.43204 51.207993)">
      <path d="M40.609 12.478L40.609 40.623C40.609 47.511 35.02 53.1 28.132 53.1L0 53.1C6.888 53.1 12.477 47.511 12.477 40.623L12.477 12.478C12.477 5.59 6.88699 0 0 0L28.132 0C35.019 0.000999451 40.609 5.59 40.609 12.478L40.609 12.478Z" id="Shape" fill="#26D192" fill-rule="evenodd" stroke="none" />
    </g>
  </g>
</g>
</g>
</g>
<g id="S" fill="#FFFFFF" transform="translate(249 138.3)">
<path d="M8.50781 142.336L8.50781 128.414Q10.8984 130.523 14.2383 132.211Q17.5781 133.898 21.2695 135.059Q24.9609 136.219 28.6875 136.852Q32.4141 137.484 35.5781 137.484Q46.4766 137.484 51.8555 133.441Q57.2344 129.398 57.2344 121.805Q57.2344 117.727 55.4414 114.703Q53.6484 111.68 50.4844 109.184Q47.3203 106.688 42.9961 104.402Q38.6719 102.117 33.6797 99.5859Q28.4063 96.9141 23.8359 94.1719Q19.2656 91.4297 15.8906 88.125Q12.5156 84.8203 10.582 80.6367Q8.64844 76.4531 8.64844 70.8281Q8.64844 63.9375 11.6719 58.8398Q14.6953 53.7422 19.6172 50.4375Q24.5391 47.1328 30.832 45.5156Q37.125 43.8984 43.6641 43.8984Q58.5703 43.8984 65.3906 47.4844L65.3906 60.7734Q56.4609 54.5859 42.4688 54.5859Q38.6016 54.5859 34.7344 55.3945Q30.8672 56.2031 27.8438 58.0313Q24.8203 59.8594 22.9219 62.7422Q21.0234 65.625 21.0234 69.7734Q21.0234 73.6406 22.4648 76.4531Q23.9063 79.2656 26.7188 81.5859Q29.5312 83.9063 33.5742 86.0859Q37.6172 88.2656 42.8906 90.8672Q48.3047 93.5391 53.1563 96.4922Q58.0078 99.4453 61.6641 103.031Q65.3203 106.617 67.4648 110.977Q69.6094 115.336 69.6094 120.961Q69.6094 128.414 66.6914 133.582Q63.7734 138.75 58.8164 141.984Q53.8594 145.219 47.3906 146.66Q40.9219 148.102 33.75 148.102Q31.3594 148.102 27.8438 147.715Q24.3281 147.328 20.6719 146.59Q17.0156 145.852 13.7461 144.762Q10.4766 143.672 8.50781 142.336Z" />
</g>
</svg>`;
insertSideTargets('Mi Perfil', 'perfil-ps.html', svgMyProfile);
insertSideTargets('Solicitudes', 'solicitudes-servicio.html', svgSolicitudes);
insertSideTargets('Nuevo Servicio', 'service-register.html', svgAddService);