'use strict';
const contactForm = document.querySelector('#form-contact-us');
const contactName = document.querySelector('#contact-name');
const contactEmail = document.querySelector('#contact-email');
const contactMessage = document.querySelector('#contact-message');
const btnSubmit = document.querySelector('#contact-submit');

const validateContact = () => {
	let error = false;

	let regexEmail = /^[a-zA-Z.0-9_]+\@{1}[a-zA-Z.]+$/;
	let regexName = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;

	if (regexEmail.test(contactEmail.value) == false) {
		error = true;
		contactEmail.classList.add('form__item--error');
	} else {
		contactEmail.classList.remove('form__item--error');
	}

	if (regexName.test(contactName.value) == false) {
		error = true;
		contactName.classList.add('form__item--error');
	} else {
		contactName.classList.remove('form__item--error');
	}

	if (contactMessage.value == '') {
		error = true;
		contactMessage.classList.add('form__item--error');
	} else {
		contactMessage.classList.remove('form__item--error');
	}

	if (error == false) {
		return true;
	} else {
		Swal.fire({
			'icon': 'warning',
			'title': 'No se pudo enviar el mensaje',
			'text': 'Por favor revise los campos resaltados',
			'confirmButtonText': 'Entendido'
		});
		return false
	}
}

const clearContactForm = () => {
	contactName.value = '';
	contactEmail.value = '';
	contactMessage.value = '';
}

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
	if (validateContact()) {
		Swal.fire({
			'icon': 'success',
			'title': 'El mensaje se envió con éxito',
			'confirmButtonText': 'Entendido'
		}).then(() => {
			clearContactForm();
		});
	}
});