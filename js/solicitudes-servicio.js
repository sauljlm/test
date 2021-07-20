'use-strict';

const container = document.querySelector('.container');
const cards = document.querySelector('.cards');
const cardsContainer = document.querySelector('.cards');
const fragment = document.createDocumentFragment();
const inputFiltro = document.querySelector('#search-bar');
const optionAll = document.querySelector('.link-all');
const optionAccepted = document.querySelector('.link-accepted');
const optionDeclined = document.querySelector('.link-declined');
const optionPending = document.querySelector('.link-pending');

const selectTypes = document.querySelector(".filter-select");


let USUARIOACTUAL = `608435b65d2ff458e4a62450`;

const updateUsuarioActual = async() => {
    if (window.sessionStorage.getItem('loggedUser')) {
        loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
        USUARIOACTUAL = loggedUser._id;
    }
}

updateUsuarioActual();



let localRequests = {};

const modifyRequestsDB = () => {
    let datos = {};
    datos[propiedad] = valor;
    return fetch(`http://localhost:8080/requests/update-request/${USUARIOACTUAL}`, {
            method: 'GET',
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));
}

const aceptarSolicitudDB = (id) => {
    return fetch(`http://localhost:8080/requests/accept-request/${id}`, {
            method: 'PUT',
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));
}

const rechazarSolicitudDB = (id) => {
    return fetch(`http://localhost:8080/requests/decline-request/${id}`, {
            method: 'PUT',
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));
}

const obtener_servicios_usuario = () => {
    return fetch(`http://localhost:8080/requests/get-user-requests/${USUARIOACTUAL}`).then(response => response.json())
        .then((json) => json);
};




// !Mantiene el estado de el click del user
let isPressedDown = false;
//! espacio en x del cursor al contenedor
let cursorXSpace;
container.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - cards.offsetLeft;
    container.style.cursor = "grabbing";
});
container.addEventListener("mouseup", () => {
    container.style.cursor = "grab";
});
window.addEventListener("mouseup", () => {
    isPressedDown = false;
});
const slideCard = (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorXSpace}px`;
    boundCards();
}
container.addEventListener("mousemove", slideCard);

function boundCards() {
    const container_rect = container.getBoundingClientRect();
    const cards_rect = cards.getBoundingClientRect();

    if (parseInt(cards.style.left) > 0) {
        cards.style.left = 0;
    } else if (cards_rect.right < container_rect.right) {
        cards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }
}

function addEventsToWrapper() {

    const descriptionWrappers = document.querySelectorAll('.description-wrapper');

    descriptionWrappers.forEach((descriptionWrapper) => {
        descriptionWrapper.addEventListener("mouseenter", () => {
            container.removeEventListener("mousemove", slideCard);
        });

    });

    descriptionWrappers.forEach((descriptionWrapper) => {
        descriptionWrapper.addEventListener("mouseleave", () => {
            container.addEventListener("mousemove", slideCard);
        });



    });

}
const getClassByStatus = (status) => {

    if (status == "Activo") {
        return 'imgBx';
    } else if (status == "Aceptada") {
        return 'aceptada';
    } else if (status == "Rechazada") {
        return "rechazada";
    }

}

const getButtonByStatus = (status) => {

    if (status == "Activo") {
        return `<button class="accept-btn">Aceptar</button>
    <button class="decline-btn">Rechazar</button>`;
    } else {
        return '<button class="completed-btn">Realizado</button>';
    }

}


async function getRequests() {
    cardsContainer.innerHTML = '';
    return await obtener_servicios_usuario();
}

async function showRequests(valoresRequest) {
    if (valoresRequest) {

        valoresRequest.forEach((request) => {
            const { _id, fromUser, date, serviceType, description, status } = request;

            const image = fromUser.imageURL || "https://picsum.photos/200/300";

            const requestCard = document.createElement("div");
            requestCard.classList.add('card');

            requestCard.innerHTML = `<div class="img-container">
      <div class="${getClassByStatus(status)}">
          <img src="${image}"
              alt="">
      </div>
  </div>

  <div class="card-content">
      <h1 class="card-name">${fromUser.name}</h1>
      <div class="titles-container">
          <h2 class="type-title">${serviceType}</h2>
          <h2 class="date-title">${date}</h2>
      </div>
      <div class="description-wrapper">
          <p>${description}
          </p>
      </div>

      <div class="btn-box">
      ${getButtonByStatus(status)}
      </div>
      <input type="hidden" name="" id="inputHidden" value="${_id}">
  </div>
  `
            fragment.appendChild(requestCard);
        });

        cardsContainer.appendChild(fragment);

    }
}

function areSame(actual) {
    let filtro = inputFiltro.value.toLowerCase();
    return actual.toLowerCase().includes(filtro);
}

function isAccepted(status) {
    return status == "Aceptada";
}

function isDeclined(status) {
    return status == "Rechazada";
}

function isPending(status) {
    return status == "Activo";
}


async function filterRequests(valoresRequest) {
    if (valoresRequest) {
        valoresRequest.forEach((request) => {

            const { _id, fromUser, date, serviceType, description, status } = request;
            if (areSame(fromUser.name) || areSame(description)) {
                const image = fromUser.imageURL || "https://picsum.photos/200/300";
                const requestCard = document.createElement("div");
                requestCard.classList.add('card');

                requestCard.innerHTML = `<div class="img-container">
        <div class="${getClassByStatus(status)}">
            <img src="${image}"
                alt="">
        </div>
    </div>
  
    <div class="card-content">
        <h1 class="card-name">${fromUser.name}</h1>
        <div class="titles-container">
            <h2 class="type-title">${serviceType}</h2>
            <h2 class="date-title">${date}</h2>
        </div>
        <div class="description-wrapper">
            <p>${description}
            </p>
        </div>
  
        <div class="btn-box">
        ${getButtonByStatus(status)}
        </div>
        <input type="hidden" name="" id="inputHidden" value="${_id}">
    </div>
    `
                fragment.appendChild(requestCard);
            }

        });

        cardsContainer.appendChild(fragment);

    }
}

function addEventsToButtons() {
    const AcceptButtons = document.querySelectorAll('.accept-btn');
    const DeclineButtons = document.querySelectorAll('.decline-btn');

    AcceptButtons.forEach((button) => {
        button.addEventListener("click", async(e) => {
            boton = e.target;
            const id = e.target.parentElement.parentElement.querySelector('input').value;
            await aceptarSolicitudDB(id);
            await loadCleanData();

        });
    });

    DeclineButtons.forEach((button) => {
        button.addEventListener("click", async(e) => {

            boton = e.target;
            const id = e.target.parentElement.parentElement.querySelector('input').value;
            await rechazarSolicitudDB(id);
            await loadCleanData();

        });
    });


};

function activeFilter() {
    debugger
    inputFiltro.addEventListener('keyup', async(e) => {
        if (e.code === "Enter") {
            cardsContainer.innerHTML = '';
            filterRequests(localRequests).
            then(() => {
                addEventsToButtons();
            });
        }
    });

}

function activeTypes() {

    optionAll.addEventListener('click', async(e) => {
        cardsContainer.innerHTML = '';
        await getRequests().then((requests) => {
            localRequests = requests;
            showRequests(requests).
            then(() => {
                addEventsToButtons();
            });
        });
    });


    optionAccepted.addEventListener('click', async(e) => {
        cardsContainer.innerHTML = '';
        await getRequests().then((requests) => {
            const filtered = requests.filter((request) => {
                return isAccepted(request.status);
            });
            localRequests = filtered;
            showRequests(filtered).
            then(() => {
                addEventsToButtons();
            });
        });
    });

    optionDeclined.addEventListener('click', async(e) => {
        cardsContainer.innerHTML = '';
        await getRequests().then((requests) => {
            const filtered = requests.filter((request) => {
                return isDeclined(request.status);
            });
            localRequests = filtered;
            showRequests(filtered).
            then(() => {
                addEventsToButtons();
            });
        });
    });

    optionPending.addEventListener('click', async(e) => {
        cardsContainer.innerHTML = '';
        await getRequests().then((requests) => {
            const filtered = requests.filter((request) => {
                return isPending(request.status);
            });
            localRequests = filtered;
            showRequests(filtered).
            then(() => {
                addEventsToButtons();
            });
        });
    });


}

const loadCleanData = async() => {
    await getRequests().then((requests) => {
        localRequests = requests;
        showRequests(requests).
        then(() => {
            addEventsToButtons();
        });
    });
}

window.onload = async function() {

    await getRequests().then((requests) => {
        localRequests = requests;
        showRequests(requests).
        then(() => {
            addEventsToButtons();
        });
    });

    addEventsToWrapper();
    activeFilter();
    activeTypes();

};