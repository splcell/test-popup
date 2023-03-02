const form = document.querySelector('.popup__form');
const email = form.querySelector('.popup__form-email');
const btn = form.querySelector('.popup__form-btn');

let valEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
let error = document.createElement('span');

email.addEventListener('focusin', function(){
    error.remove();
    btn.disabled = false;
});

form.addEventListener('submit', function(e){
    if(email.value.trim() == ''){
        e.preventDefault();
        error.classList.add('error');
        error.textContent = 'Поле не может быть пустым';
        email.after(error);
        btn.disabled = true;
        return;
    }

    if(!valEmail.test(email.value)){
        e.preventDefault();
        error.classList.add('error');
        error.textContent = 'Емэйл указан неверно';
        email.after(error);
        btn.disabled = true;
        return;
    }
});