const myForm = document.querySelector('#my-form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const msg = document.querySelector('.msg');
const bookList = document.querySelector('#books');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(titleInput.value === '' || authorInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else {
        const li = document.createElement('li');
        const bold = document.createElement('strong');
        bold.appendChild(document.createTextNode(titleInput.value));
        li.appendChild(bold); 
        li.appendChild(document.createTextNode(" by "));
        li.appendChild(document.createTextNode(authorInput.value));
       //li.appendChild(document.createTextNode(`${titleInput.value} by ${authorInput.value}`));

        bookList.appendChild(li);

        titleInput.value = '';
        authorInput.value = '';
    }
}