const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnPopup2 = document.querySelector('.icon-close');


btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

btnPopup2.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});


