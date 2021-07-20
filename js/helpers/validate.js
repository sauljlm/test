const validateTypeUser = () => {

    if (userSelected == null) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar la cuenta',
            'text': 'Por favor elija un tipo de usuario',
            'confirmButtonText': 'Entendido'
        });
        return false
    } else {
        return true
    }
}

const validatePersonalInfo = (userSelected) => {
    let error = false;

    let regexEmail = /^[a-zA-Z.0-9_]+\@{1}[a-zA-Z.]+$/;
    let regexName = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
    let regexIdCedula = /\d{9,10}/

    if (regexEmail.test(inputEmail.value) == false) {
        error = true;
        inputEmail.classList.add('form__item--error');
    } else {
        inputEmail.classList.remove('form__item--error');
    }

    if (regexName.test(inputName.value) == false) {
        error = true;
        inputName.classList.add('form__item--error');
    } else {
        inputName.classList.remove('form__item--error');
    }

    if (regexIdCedula.test(inputId.value) == false) {
        error = true;
        inputId.classList.add('form__item--error');
    } else {
        inputId.classList.remove('form__item--error');
    }

    if (selectSex.value == '') {
        error = true;
        selectSex.classList.add('form__item--error');
    } else {
        selectSex.classList.remove('form__item--error');
    }

    if (userSelected == 'DM') {
        if (inputBirthdate.value == '') {
            error = true;
            inputBirthdate.classList.add('form__item--error');
        } else {
            if (calculateAge(inputBirthdate.value) < 18) {
                error = true;
                inputBirthdate.classList.add('form__item--error');
            } else {
                inputBirthdate.classList.remove('form__item--error');
            }
        }
    } else {
        if (inputBusinessName.value == '') {
            error = true;
            inputBusinessName.classList.add('form__item--error');
        } else {
            inputBusinessName.classList.remove('form__item--error');
        }
    }

    if (error == false) {
        return true;
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar la cuenta',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
        return false
    }
}

const validateLocation = () => {
    let error = false;

    if (selectProvince.value == '') {
        error = true;
        selectProvince.classList.add('form__item--error');
    } else {
        selectProvince.classList.remove('form__item--error');
    }

    if (selectCant.value == '') {
        error = true;
        selectCant.classList.add('form__item--error');
    } else {
        selectCant.classList.remove('form__item--error');
    }

    if (selectDistr.value == '') {
        error = true;
        selectDistr.classList.add('form__item--error');
    } else {
        selectDistr.classList.remove('form__item--error');
    }

    if (error == false) {
        return true;
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar la cuenta',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
        return false
    }
}

const validateNewPassword = () => {
    let error = false;

    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,12}$/;

    if (regexPassword.test(newPassword.value) == false) {
        error = true;
        newPassword.classList.add('form__item--error');
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar la cuenta',
            'text': 'La contraseña debe tener entre 6 y 12 caracteres, al menos una mayúscula, una minúscula, un caracter especial y un número',
            'confirmButtonText': 'Entendido'
        });
    } else {
        newPassword.classList.remove('form__item--error');
    }

    if (confirmPassword.value != newPassword.value) {
        error = true;
        confirmPassword.classList.add('form__item--error');
        Swal.fire({
            'icon': 'warning',
            'title': 'Las contraseñas no coinciden',
            'confirmButtonText': 'Entendido'
        });
    } else {
        confirmPassword.classList.remove('form__item--error');
    }

    if (error == false) {
        return true;
    }
}

const manageValidateNewPassword = () => {
    let error = false;

    if (userData.userType == 'DM') {
        if (userData.password == oldPassword.value) {} else {
            error = true;
            Swal.fire({
                'icon': 'warning',
                'title': 'La contraseña actual es incorrecta',
                'confirmButtonText': 'Entendido'
            });
        }
    }
    if (!validateNewPassword()) {
        error = true;
    }

    if (error == false) {
        return true;
    }
}