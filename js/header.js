const headerMainMenu = document.querySelector('#nav-main-menu');
const headerSignOut = document.querySelector('#nav-sign-out');
const headerLogIn = document.querySelector('#nav-log-in');
const headerSignUp = document.querySelector('#nav-sign-up');

const contSearch = document.querySelector('#search');
const inputSearch = document.querySelector('#input-search');
const btnSearch = document.querySelector('#btn-search');

let currentUser = false;

const manageHeader = () => {
    if (!currentUser) {
        headerMainMenu.style.display = 'none';
        contSearch.style.display = 'none';
        headerSignOut.style.display = 'none';
    } else {
        headerLogIn.style.display = 'none';
        headerSignUp.style.display = 'none';
        switch (currentUser.userType) {
            case 'DM':
                headerMainMenu.setAttribute('href', 'dashboard-dm.html');
                break;
            case 'PS':
                headerMainMenu.setAttribute('href', 'dashboard-ps.html');
                break;
            case 'Admin':
                headerMainMenu.setAttribute('href', 'dashboard-admin.html');
                break;
        }
    }
}

btnSearch.addEventListener('click', async() => {
    console.log('hey there')
    await sessionStorage.setItem('currentSearch', JSON.stringify(inputSearch.value));
    window.location.href = 'search-results.html';
});

headerSignOut.addEventListener('click', async() => {
    await updateLoggedUser(false)
    Swal.fire({
        'icon': 'success',
        'title': 'La sesión se cerró con éxito',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'home-page.html';
    })
});

const startHeader = async() => {
    currentUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
    manageHeader();
}

window.onload = async() => {
    currentUser = await JSON.parse(window.sessionStorage.getItem('loggedUser'));
    manageHeader();
}