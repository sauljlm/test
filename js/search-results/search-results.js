'use strict';
const resultsContainer = document.querySelector('.js-results');
const resultHeader = document.querySelector('.resultHeader');
const selectProvince = document.querySelector('#slt-province');
const selectCant = document.querySelector('#slt-cant');
const selectServiceType = document.querySelector('#slt-service');
const selectSearchType = document.querySelector('#slt-search');
const searchBar = document.querySelector('#input-search');

const formItemServiceType = document.querySelector('.js-item-service-type');
const formItemProvince = document.querySelector('.js-item-province');
const formItemCant = document.querySelector('.js-item-cant');

let currentResult = null;
let loggedUser = null;
let results = null;
let regexSearch = null;

let filter = {
    searchType: 'name',
    serviceType: null,
    province: null,
    cant: null
}

const clearResultsView = () => {
    resultsContainer.innerHTML = '';
}

const openResult = async(userData) => {
    await sessionStorage.setItem('openUserResult', JSON.stringify(userData))
    window.location.href = 'search-result-profile.html';
}

const generateResults = () => {
    clearResultsView();
    results.forEach(async(itemData) => {
        const userResult = document.createElement('li');
        const leftBlock = document.createElement('div');
        const rightBlock = document.createElement('div');
        const profilePhoto = document.createElement('div');
        const userName = document.createElement('p');
        const userRole = document.createElement('p');
        const userLocation = document.createElement('p');

        userResult.setAttribute('class', 'results-item');
        leftBlock.setAttribute('class', 'results-item__left-container');
        rightBlock.setAttribute('class', 'results-item__right-container');
        profilePhoto.setAttribute('class', 'results-item__user-photo');
        userName.setAttribute('class', 'results-item__user-name');
        userRole.setAttribute('class', 'results-item__user-role');
        userLocation.setAttribute('class', 'results-item__user-location');

        userName.innerHTML = itemData.name;
        userLocation.innerHTML = `${await getProvinceName(itemData.province)}, ${await getCantName(itemData.province, itemData.cant)}`;
        if (itemData.userType == 'DM') {
            userRole.innerHTML = 'Dueño de mascota';
        } else if (itemData.userType == 'PS') {
            userRole.innerHTML = `${itemData.nameCompany}, ${itemData.serviceType}`;
        }
        console.log(itemData)
        profilePhoto.style.backgroundImage = `url(${itemData.imageURL})`;

        userResult.addEventListener('click', () => openResult(itemData));

        leftBlock.appendChild(userName);
        leftBlock.appendChild(userRole);
        rightBlock.appendChild(userLocation);
        userResult.appendChild(profilePhoto);
        userResult.appendChild(leftBlock);
        userResult.appendChild(rightBlock);
        resultsContainer.appendChild(userResult);
    });
}

const handleResults = async() => {
    if (currentResult) {
        resultHeader.innerHTML = `Resultados de "${currentResult}"`;
    } else {
        resultHeader.innerHTML = `Resultados de busqueda`;
    }
    await sessionStorage.setItem('currentSearch', JSON.stringify(currentResult));
    generateResults();
}

const checkResult = (result) => {
    if (loggedUser.userType == 'PS') {
        if (result.userType == 'DM') {
            return true
        } else {
            return false
        }
    } else if ((loggedUser.userType == 'DM')) {
        if (result.userType == 'PS') {
            return true
        } else {
            return false
        }
    } else if ((loggedUser.userType == 'Admin')) {
        return true;
    }
}

const searchByName = async() => {
    let allUsers = await getUsers();
    currentResult = searchBar.value;
    regexSearch = new RegExp(`^(${currentResult})[ \w]*`, 'i');
    console.log(allUsers);
    allUsers.forEach(element => {
        if (element.name != 'Admin') {
            if (regexSearch.test(element.name)) {
                if (filter.province && filter.cant) {
                    if (element.province == filter.province) {
                        if (checkResult(element)) {
                            results.push(element);
                        }
                    }
                } else if (filter.province) {
                    if (element.province == filter.province) {
                        if (checkResult(element)) {
                            results.push(element);
                        }
                    }
                } else {
                    if (checkResult(element)) {
                        results.push(element);
                    }
                }
            }
        }
    });

    handleResults();
}

const searchByServiceType = async() => {
    let allUsers = await getUsers();
    currentResult = searchBar.value;
    regexSearch = new RegExp(`^(${currentResult})[ \w]*`, 'i');

    allUsers.forEach(element => {
        if (element.userType == 'PS') {
            if (regexSearch.test(element.serviceType)) {
                if (filter.serviceType) {
                    if (element.serviceType == filter.serviceType) {
                        results.push(element);
                    }
                } else {
                    results.push(element);
                }
            }
        }
    });

    handleResults();
}

const searchByLocation = async() => {
    let allUsers = await getUsers();
    currentResult = searchBar.value;

    allUsers.forEach(element => {
        if (element.name != 'admin') {
            if (filter.province && filter.cant) {
                if (element.province == filter.province && element.cant == filter.cant) {
                    results.push(element);
                }
            } else if (filter.province && filter.cant == null) {
                if (element.province == filter.province) {
                    results.push(element);
                }
            } else {
                results.push(element);
            }
        }
    });

    handleResults();
}

const manageSearch = () => {
    results = [];
    switch (filter.searchType) {
        case 'name':
            searchByName();
            break;
        case 'serviceType':
            searchByServiceType();
            break;
        case 'location':
            searchByLocation();
            break;
    }
}

const manageFilter = () => {
    formItemServiceType.style.display = "block";
    formItemProvince.style.display = "block";
    formItemCant.style.display = "block";

    switch (filter.searchType) {
        case 'name':
            formItemServiceType.style.display = "none";
            break;
        case 'serviceType':
            formItemProvince.style.display = "none";
            formItemCant.style.display = "none";
            break;
        case 'location':
            formItemServiceType.style.display = "none";
            break;
    }
    manageSearch();
}

selectProvince.addEventListener('change', () => {
    let currentProvince = selectProvince.value;
    filter.province = currentProvince;
    if (currentProvince) {
        fetch(`https://ubicaciones.paginasweb.cr/provincia/${currentProvince}/cantones.json`)
            .then(response => response.json())
            .then(data => {
                for (const property in data) {
                    const option = document.createElement('option');
                    option.setAttribute('value', property);
                    option.innerHTML = `${data[property]}`;
                    selectCant.appendChild(option);
                }
                manageFilter();
            })
    }
});

selectCant.addEventListener('change', () => {
    filter.cant = selectCant.value;
    manageFilter();
});

selectServiceType.addEventListener('change', () => {
    filter.serviceType = selectServiceType.value;
    manageFilter();
});

selectSearchType.addEventListener('change', () => {
    filter.searchType = selectSearchType.value;
    manageFilter();
});

searchBar.addEventListener('keyup', () => {
    manageFilter();
});

window.onload = async() => {
    startHeader();
    currentResult = await JSON.parse(window.sessionStorage.getItem('currentSearch'));
    loggedUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
    searchBar.value = currentResult;
    manageFilter();
}