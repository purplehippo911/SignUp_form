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
    if(email.value === "" || email.value == null || !email.validity.valid) {
        div3.classList.add('active');
        email.classList.add('empty');
    }
   
    // Password
    if(password.value === "" || password.value == null) {
        div4.classList.add('active');
        password.classList.add('empty');
    }
    // take of the classes when all the inputs have some text
   if(firstName.value && lastName.value && password.value  ===! "" || firstName.value && lastName.value && password.value !== null) {
       div1.classList.remove('active');
       div2.classList.remove('active');
       div4.classList.remove('active');
       firstName.classList.remove('empty');
       lastName.classList.remove('empty');
       password.classList.remove('empty');
   }
   //take the class off if the email is valid
   if(email.validity.valid) {
    div3.classList.remove('active');
    email.classList.remove('empty');
   }
    e.preventDefault();
});
