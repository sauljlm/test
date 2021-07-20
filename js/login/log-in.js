'use strict';
const form = document.querySelector('#form');
const btnSubmit = document.querySelector('#submit-button');
const logInEmail = document.querySelector('#log-in-email');
const logInPassword = document.querySelector('#log-in-password');

let userData = null;

logInEmail.addEventListener('change', async() => {
    const currentEmail = logInEmail.value;
    await updateData();
    const currentUser = await getUserByEmail(currentEmail);
    if (currentUser) {
        userData = currentUser;
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'El usuario no existe',
            'text': 'Por favor ingrese un correo electrónico valido',
            'confirmButtonText': 'Entendido'
        });
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData();
    console.log(userData)
    formData.append('email', userData.email);
    formData.append('password', logInPassword.value);

    if (userData.userType == 'DM') {
        if (userData.validated == false) {
            fetch('http://localhost:8080/users/log-in', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(response => {
                    if (response.status == 500) {
                        Swal.fire({
                            'icon': 'warning',
                            'title': `${response.error}`,
                            'confirmButtonText': 'Entendido'
                        });
                    } else {
                        Swal.fire({
                            'icon': 'success',
                            'title': 'La sesión se realizó con éxito',
                            'text': 'Ahora crea tu nueva contraseña',
                            'confirmButtonText': 'Entendido'
                        }).then(() => {
                            window.location.href = 'register-password.html';
                        });
                    }
                })
        } else {
            fetch('http://localhost:8080/users/log-in', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(response => {
                    if (response.status == 500) {
                        Swal.fire({
                            'icon': 'warning',
                            'title': `${response.error}`,
                            'confirmButtonText': 'Entendido'
                        });
                    } else {
                        Swal.fire({
                            'icon': 'success',
                            'title': 'La sesión se realizó con éxito',
                            'confirmButtonText': 'Entendido'
                        }).then(() => {
                            updateLoggedUser(response.usuario);
                            window.location.href = 'dashboard-dm.html';
                        });
                    }
                })
        }
    } else {
        fetch('http://localhost:8080/users/log-in', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(response => {
                if (response.status == 500) {
                    Swal.fire({
                        'icon': 'warning',
                        'title': `${response.error}`,
                        'confirmButtonText': 'Entendido'
                    });
                } else {
                    Swal.fire({
                        'icon': 'success',
                        'title': 'La sesión se realizó con éxito',
                        'confirmButtonText': 'Entendido'
                    }).then(() => {
                        updateLoggedUser(response.usuario);
                        if (userData.userType == 'PS') {
                            window.location.href = 'dashboard-ps.html';
                        } else if (userData.userType == 'Admin') {
                            window.location.href = 'dashboard-admin.html';
                        }
                    });
                }
            })
    }
});