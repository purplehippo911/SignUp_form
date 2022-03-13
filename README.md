# Frontend Mentor - Intro component with sign up form solution

This is my solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

Desktop Design:

![](design/desktop.png)

Mobile Design:

![](design/mobile.png)

### Links

- Solution URL: [mySolution](https://purplehippo911.github.io/SignUp_form/)
- Live Site URL: [githubPages](https://your-live-site-url.com/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JS
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

```html
<div class="wrong_input wrong_input4">
  <p>Password cannot be empty</p>
</div>
```

```css
.form_button {
  width: 90%;
  margin-top: 1rem;
  border: 0;
  border-radius: 5px;
  padding: 15px;
  background-color: var(--green);
  color: var(--grayBlue);
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0px px 0px 0px hsla(5, 10%, 0%, 0.2);
  transition: 0.5s;
}
```

```js
 if(firstName.value && lastName.value && password.value  ===! "" || firstName.value && lastName.value && password.value !== null) {
       div1.classList.remove('active');
       div2.classList.remove('active');
       div4.classList.remove('active');
       firstName.classList.remove('empty');
       lastName.classList.remove('empty');
       password.classList.remove('empty');
   }
};
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [webdevSimplified](https://m.youtube.com/watch?v=ln0nB0ABaUk) - This video gave me an insight to how to validate forms in Javascript. I think that his channel is quite beginner-friendly.

## Author

- Frontend Mentor - [@purplehippo911](https://www.frontendmentor.io/profile/purplehippo911)
- Github - [@purplehippo911](https://github.com/purplehippo911)

## Acknowledgments

I want to

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
