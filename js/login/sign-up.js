'use strict';
const form = document.querySelector('#form');
const inputName = document.querySelector('#txt-name');
const inputEmail = document.querySelector('#txt-email');
const selectTypeId = document.querySelector('#slt-id-type');
const inputId = document.querySelector('#num-id');
const inputBirthdate = document.querySelector('#txt-birthdate');
const selectSex = document.querySelector('#slt-sex');
const inputPhone = document.querySelector('#num-phone');
const inputBusinessName = document.querySelector('#txt-business-name');
const selectService = document.querySelector('#slt-service');
const btnContinue = document.querySelectorAll('.js-btn-continue');
const progressbarItem = document.querySelectorAll('.js-progressbar__item');
const sliderItem = document.querySelectorAll('.js-form-slider');
const signUpHeader = document.querySelector('#sign-up-header');
const inputLoation = document.querySelector('#txt-location');
const chooseTypeUser = document.querySelectorAll('.js-choose-user');
const itemDM = document.querySelectorAll('.form__item-dm');
const itemPS = document.querySelectorAll('.form__item-ps');
const selectProvince = document.querySelector('#slt-province');
const selectCant = document.querySelector('#slt-cant');
const selectDistr = document.querySelector('#slt-distr');
const file = document.querySelector('#file');
const contPreview = document.querySelector('.js-form-preview');

let currentSlide = 0;
let userSelected = null;

let currentProvince = 0;
let currentCant = 0;

const handleFormView = () => {
    if (validate() == true) {
        manageSlider();
        manageProgressBar();

        if (currentSlide == 1) {
            signUpHeader.setAttribute("style", "padding-top: 25%");
        } else {
            signUpHeader.removeAttribute("style");
        }
    }
}

const manageProgressBar = () => {
    progressbarItem.forEach(item => {
        item.classList.remove('progressbar__item--active');
    });
    for (let i = 0; i <= currentSlide; i++) {
        progressbarItem[i].classList.add('progressbar__item--active');
    }
}

const manageSlider = () => {
    sliderItem.forEach(item => {
        item.classList.remove('form__slider--active');
    });
    sliderItem[currentSlide].classList.add('form__slider--active');
}

const validate = () => {
    let validation = false;
    switch (currentSlide) {
        case 1:
            validation = validateTypeUser();
            break;
        case 2:
            validation = validatePersonalInfo(userSelected);
            break;
        case 3:
            validation = validateLocation();
            break;
        case 4:
            validation = true;
            break;
        case 5:
            validation = validatePassword();
            break;
        default:
            validation = true;
            break;
    }

    return validation;
}

const manageUserSelected = (item, index) => {
    chooseTypeUser.forEach((button) => {
        button.classList.remove('choose-user--active');
    });
    item.classList.add('choose-user--active');
    switch (index) {
        case 0:
            userSelected = 'DM';
            itemPS.forEach(item => {
                item.classList.add('form__item-ps');
            });
            itemDM.forEach(item => {
                item.classList.remove('form__item-dm');
            });
            break;
        case 1:
            userSelected = 'PS';
            itemDM.forEach(item => {
                item.classList.add('form__item-dm');
            });
            itemPS.forEach(item => {
                item.classList.remove('form__item-ps');
            });
            break;
        default:
            userSelected = 'DM'
    }
}

const renderPreview = (formData) => {
    const file = formData.get('file');
    const image = URL.createObjectURL(file);
    contPreview.classList.add('form__item-preview');
    contPreview.style.backgroundImage = `url(${image})`;
}

chooseTypeUser.forEach((item, index) => {
    item.addEventListener('click', () => manageUserSelected(item, index));
});

selectProvince.addEventListener('change', () => {
    currentProvince = selectProvince.value;
    fetch(`https://ubicaciones.paginasweb.cr/provincia/${currentProvince}/cantones.json`)
        .then(response => response.json())
        .then(data => {
            for (const property in data) {
                const option = document.createElement('option');
                option.setAttribute('value', property);
                option.innerHTML = `${data[property]}`;
                selectCant.appendChild(option);
            }
        });
});

selectCant.addEventListener('change', () => {
    currentCant = selectCant.value;
    fetch(`https://ubicaciones.paginasweb.cr/provincia/${currentProvince}/canton/${currentCant}/distritos.json`)
        .then(response => response.json())
        .then(data => {
            for (const property in data) {
                const option = document.createElement('option');
                option.setAttribute('value', parseInt(property));
                option.innerHTML = `${data[property]}`;
                selectDistr.appendChild(option);
            }
        });
});

file.addEventListener('change', () => {
    const formData = new FormData(form);
    renderPreview(formData);
});

btnContinue.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentSlide = index + 1;
        handleFormView();
    });
});

progressbarItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentSlide = index;
        handleFormView();
    });
});

inputEmail.addEventListener('change', async() => {
    const currentEmail = inputEmail.value;
    if (await getUserByEmail(currentEmail)) {
        inputEmail.classList.add('form__item--error');
        Swal.fire({
            'icon': 'warning',
            'title': 'El correo electrónico ya está en uso',
            'text': 'Por favor ingrese un nuevo correo electrónico',
            'confirmButtonText': 'Entendido'
        });
    } else {
        inputEmail.classList.remove('form__item--error');
    }
});

inputId.addEventListener('change', async() => {
    if (selectTypeId.value == '') {
        selectTypeId.classList.add('form__item--error');
        Swal.fire({
            'icon': 'warning',
            'text': 'Por favor ingrese un tipo de identificación',
            'confirmButtonText': 'Entendido'
        });
    } else {
        selectTypeId.classList.remove('form__item--error');
    }
});

const generateNewUser = (e, password) => {
    const formdata = new FormData(e.currentTarget);

    formdata.append("userType", userSelected);
    if (userSelected == 'DM') {
        formdata.append("password", password);
    } else {
        formdata.append("nameCompany", inputBusinessName.value);
    }

    return formdata;
}

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const password = generatePassword();
    const newUser = generateNewUser(e, password);
    await setNewUser(newUser);
    if (userSelected == 'DM') {
        Swal.fire({
            'icon': 'success',
            'title': 'Su cuenta se registró con éxito',
            'text': 'Por favor revise su correo electrónico',
            'text': `Su contraseña temporal es ${password}`,
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'log-in.html';
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Su cuenta se registró con éxito',
            'text': 'Por favor revise su correo electrónico',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'register-password.html';
        });
    }
});