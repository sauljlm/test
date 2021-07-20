'use strict';

const configServices = document.querySelector(".profile-section profile-items profile-items-services");
const btnServices = document.querySelector(".btnServices");
const servicesContainer = document.querySelector('.js-profile-services-container');
let serviceOptions = null;

const servicesPS = [{
        type: 'Paseos',
        description: 'Se realizan paseos de perros al parque, con un costo semanal de ₡30 000. El perro es recogido y devuelto en su casa.',
        schedule: 'De Lunes a Viernes, de 9:00am a 5:00pm',
        price: '₡30 000'

    },
    {
        type: 'Grooming',
        description: 'Se realiza servicio de grooming con un costo de ₡30 000. El servicio a domicilio aplica solamente en la GAM.',
        schedule: 'De Lunes a Viernes, de 8:00am a 4:00pm',
        price: '₡5 000'

    },
    {
        type: 'Hotel',
        description: 'Necesita salir de vacaciones pero no puede llevarse a su mascota? Yo se la cuido con un costo de ₡10 000 por día.',
        schedule: 'De Lunes a Domingo',
        price: '₡10 000'
    },
]

const manageServiceEdit = (element) => {
    console.log(element);
}

const displayServices = () => {
    servicesPS.forEach((service) => {
        const serviceItem = document.createElement('li');
        const profileItemLeft = document.createElement('div');
        const serviceType = document.createElement('p');
        const serviceDescription = document.createElement('p');
        const profileItemRight = document.createElement('div');
        const serviceSchedule = document.createElement('p');
        const servicePrice = document.createElement('p');

        serviceItem.setAttribute('class', 'js-service');
        profileItemLeft.setAttribute('class', 'profile-item__body-left');
        serviceType.setAttribute('class', 'profile-item__header');
        serviceDescription.setAttribute('class', 'profile-item__description');
        profileItemRight.setAttribute('class', 'profile-item__body-right');
        serviceSchedule.setAttribute('class', 'profile-item__schedule');
        servicePrice.setAttribute('class', 'profile-item__price')

        /*servicesContainer incorpora en su nodo hijo el serviceItem*/
        servicesContainer.appendChild(li);
        profileItemLeft.appendChild(div);
        serviceType.appendChild(p);
        serviceDescription.appendChild(p);
        profileItemRight.appendChild(p);
        serviceSchedule.appendChild(p);
        servicePrice.appendChild(p);
    });

}

window.onload = function() {
    displayServices();
};