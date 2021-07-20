'use strict';
window.onload = function() {
    sessionStorage.clear();
    initLocalStorage();
    updateLoggedUser(false);
    updateData();
};