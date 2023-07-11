const isValidEmail = (email) => {
	const regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
};

const isValidCPF = (cpf) => {
	const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
	return regex.test(String(cpf).toLowerCase());
};

let isValidForm = false;

const resetInput = (element) => {
	element.classList.remove('invalid');
	element.nextElementSibling.classList.add('hidden');
};

const form = document.querySelector('form');
const message = document.querySelector('.thanks');
const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');

const validateInput = () => {
	isValidForm = true;
	if (!inputName.value) {
		inputName.classList.add('invalid');
		inputName.nextElementSibling.classList.remove('hidden');
		isValidForm = false;
	}

	if (!isValidEmail(inputEmail.value)) {
		inputEmail.classList.add('invalid');
		inputEmail.nextElementSibling.classList.remove('hidden');
		isValidForm = false;
	}
};

inputName.addEventListener('input', () => {
	resetInput(inputName);
});

inputEmail.addEventListener('input', () => {
	resetInput(inputEmail);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	validateInput();

	if (isValidForm) {
		//POST -> Backend
		form.remove();
		message.classList.remove('hidden');
	}
});
