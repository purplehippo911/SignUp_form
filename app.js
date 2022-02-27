const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const email = document.getElementById('email');
const form = document.querySelector('form');
const div1 = document.querySelector('.wrong_input1');
const div2 = document.querySelector('.wrong_input2')
const div3 = document.querySelector('.wrong_input3')
const div4 = document.querySelector('.wrong_input4')

form.addEventListener('submit', (e) => {
    // firstName
    if(firstName.value === "" || firstName.value == null) {
       div1.classList.add('active');
       firstName.classList.add('empty');
   }
   // lastName
    if(lastName.value === "" || lastName.value == null) {
        div2.classList.add('active');
        lastName.classList.add('empty');
    }
    // email
    if(email.value === "" || email.value == null) {
        div3.classList.add('active');
        email.classList.add('empty');
    }
    // Password
    if(password.value === "" || password.value == null) {
        div4.classList.add('active');
        password.classList.add('empty');
    }

   if(firstName.value && lastName.value && email.value && password.value ===! "" || firstName.value && lastName.value && email.value && password.value !== null) {
       div1.classList.remove('active');
       div2.classList.remove('active');
       div3.classList.remove('active');
       div4.classList.remove('active');
       firstName.classList.remove('empty');
       lastName.classList.remove('empty');
       email.classList.remove('empty');
       password.classList.remove('empty');
   }
    e.preventDefault();
});
