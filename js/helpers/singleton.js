'use strict';

const getUserByEmail = async(email) => {
    let currentUser = false;
    let usersData = await JSON.parse(window.localStorage.getItem('usersData'));
    usersData.usuarios.forEach(element => {
        if (element.email == email) {
            currentUser = element
        }
    });

    return currentUser;
}

const getUserByID = async(id) => {
    let currentUser = false;
    await updateData();
    let usersData = await JSON.parse(window.localStorage.getItem('usersData'));
    usersData.usuarios.forEach(element => {
        if (element._id == id) {
            currentUser = element
        }
    });

    return currentUser;
}

const getUsers = async() => {
    await updateData();
    const data = await JSON.parse(window.localStorage.getItem('usersData'));;
    return data.usuarios;
}

const updateData = async () => {
    await fetch('http://localhost:8080/users/get-users')
        .then(response => response.json())
        .then(data => window.localStorage.setItem('usersData', JSON.stringify(data)));
}

const setNewUser = (newUser) => {
    fetch('http://localhost:8080/users/sign-up', {
        method: 'POST',
        body: newUser
    });
}

const updatePassword = async(formData) => {
    fetch('http://localhost:8080/users/new-password', {
        method: 'PUT',
        body: formData
    });
}

const updateLoggedUser = async(userdata) => {
    console.log(userdata)
    await window.sessionStorage.setItem('loggedUser', JSON.stringify(userdata));
}