'use strict'
import {fetchDrinkInformation} from './axios.js'

// ! slide

let slide = document.querySelectorAll('.slide');
let current = 0;

function showSlide() {
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none'
    }
}

function nextSlid(){
    showSlide()
    if(current === slide.length-1) current = -1
    current++
    slide[current].style.display = 'block'
    slide[current].style.opacity = '0.4'

    let x = 0.4
    let intX = setInterval(function() {
        x += 0.1
        slide[current].style.opacity = x
        if(x >= 1) {
            clearInterval(intX)
            x = 0.4
        }
    }, 100)
}

function prevSlid(){
    showSlide()
    if(current === 0) current = slide.length
    current--

    slide[current].style.display = 'block'
    slide[current].style.opacity = '0.4'

    let x = 0.4
    let intX = setInterval(function() {
        x += 0.1
        slide[current].style.opacity = x
        if(x >= 1) {
            clearInterval(intX)
            x = 0.4
        }
    }, 100)
}

let prevSlide = document.getElementById('prevslide')
prevSlide.addEventListener('click', prevSlid)

let nexSlide = document.getElementById('nexslide')
nexSlide.addEventListener('click', nextSlid)

function start() {
    showSlide()
    slide[current].style.display = 'block'
}

start()

// ! form

const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const loginBtn = document.querySelector('.btn-login')
const iconClose = document.querySelector('.close-icon')
let form = document.getElementById('registration')
const formWrapper = document.getElementById('form')

registerLink.addEventListener('click', (e)=> {
    wrapper.classList.add('active')
    e.preventDefault()
})

loginLink.addEventListener('click', (e)=> {
    wrapper.classList.remove('active')
    e.preventDefault()
})

loginBtn.addEventListener('click', ()=> {
    wrapper.classList.add('active-button')
    formWrapper.style.display = 'block'
})

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-button')
    formWrapper.style.display = 'none'
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let errors = {};
    let username = document.getElementById('usernamefield').value;

    if(username == '') {
        errors.username = 'Username field can not be empty';
    }

    let passValue = document.getElementById('passwordfield').value;
    if(passValue == '') {
        errors.password = 'Password field can not be empty'
    }

    let check = document.getElementById('agree').checked

    if(!check) {
        errors.check = 'You must agree our Terms and conditions';
    }

    console.log(errors);

    form.querySelectorAll('.error-text').forEach((i) => {
        i.innerText = ' ';
    })

    for (let item in errors) {

        let textError = document.getElementById('error-' + item);
        if(textError) {
            textError.innerText = errors[item];
        }
    }

    if(Object.keys(errors).length == 0) {
        form.submit();
    }
})

let showPassword = document.getElementById('passwordfield')
let icon = document.getElementById('showpassword')
icon.style.cursor = 'pointer'

function showHidePassword() {
    if(showPassword.type == 'password') {
        showPassword.setAttribute('type', 'text');
        icon.classList.remove('fa-lock');
        icon.classList.add('fa-eye')
    } else {
        showPassword.setAttribute('type', 'password');
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-lock');
    }
}
icon.addEventListener('click', showHidePassword)


let emailFild = document.getElementById('emailfield');

function emailValidator() {
    let email = document.getElementById('emailfield').value;
    let emailError = document.getElementById('emailError');
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(email.match(emailPattern)) {
        emailError.innerText = 'Your email is valid';
        emailError.style.color = '#0f6021'
        emailError.style.marginTop = '10px'
    } else {
        emailError.innerText = 'Your email is invalid';
        emailError.style.color = '#98270b'
        emailError.style.marginTop = '10px'
    }

    if (email == '') {
        emailError.innerText = '';
    }
}

emailFild.addEventListener('keyup', emailValidator)

let username = document.getElementById('usernamefield');
let userError = document.getElementById('error-username')

function usernameValidator() {
    let usernameValue = document.getElementById('usernamefield').value;
    let regexPattern = /^[a-zA-Z0-9]+$/;
    
    if(usernameValue.match(regexPattern)) {
        userError.innerText = 'Your username is valid'
        userError.style.color = '#0f6021'
        userError.style.marginTop = '10px'
        userError.style.fontSize = '15px'
    } else {
        userError.innerText = 'Your username is invalid'
        userError.style.color = '#98270b'
        userError.style.marginTop = '10px'
        userError.style.fontSize = '15px'
    }

    if (usernameValue == '') {
        userError.innerText = ''
    }
}

    username.addEventListener('keyup', usernameValidator)

let loginEmail = document.getElementById('loginEmail')

function loginEmailValidator() {
    let email = document.getElementById('loginEmail').value;
    let emailError = document.getElementById('loginEmailError');
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(email.match(emailPattern)) {
        emailError.innerText = 'Your email is valid';
        emailError.style.color = '#0f6021'
        emailError.style.marginTop = '10px'
    } else {
        emailError.innerText = 'Your email is invalid';
        emailError.style.color = '#98270b'
        emailError.style.marginTop = '10px'
    }

    if (email == '') {
        emailError.innerText = '';
    }
}

    loginEmail.addEventListener('keyup', loginEmailValidator)


let showLoginPassword = document.getElementById('loginpassword')
let loginIcon = document.getElementById('showLoginPassword')
loginIcon.style.cursor = 'pointer'

function showHidePassword2() {
    if(showLoginPassword.type == 'password') {
        showLoginPassword.setAttribute('type', 'text');
        loginIcon.classList.remove('fa-lock');
        loginIcon.classList.add('fa-eye')
    } else {
        showLoginPassword.setAttribute('type', 'password');
        loginIcon.classList.remove('fa-eye');
        loginIcon.classList.add('fa-lock');
    }
}
loginIcon.addEventListener('click', showHidePassword2)


// !burger

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.mobile-nav');
const btnLogin = document.querySelector('.login-btn');
const closed = document.getElementById('close-icon');
const delet = document.querySelectorAll('.delet');
// const formWrapperr = document.getElementById('form')


function toggleBurgerMenu() {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    if (burger.classList.contains('active')) {
        burgerMenu.classList.remove('delete');
    }
}

function toggleLogin() {
    wrapper.classList.toggle('active-button');
    burgerMenu.classList.toggle('delete');
}

function closeBurgerMenu() {
    burgerMenu.classList.remove('delete');
}

delet.forEach((e) => {
    e.addEventListener('click', toggleBurgerMenu);
});

btnLogin.addEventListener('click', ()=> {
    formWrapper.style.display = 'block'
    toggleLogin()
})

burger.addEventListener('click', toggleBurgerMenu);
closed.addEventListener('click', closeBurgerMenu);


// ! flipPhoto 

let adToCart = document.querySelectorAll(".cart")
let adToWishlist = document.querySelectorAll('.wishlist')

adToWishlist.forEach(function(e) {
    e.addEventListener('click', (event) =>{
        event.preventDefault()
        let wishlistText = 'The product added to the wishlist';
        alert(wishlistText)
    });
})

adToCart.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        let CartText = 'The product added to the cart'
        alert(CartText)
    })
})

// !batten

let recipes = document.getElementById('recipes')
let coloButton = document.getElementById('color-button')
let apiWrapper = document.getElementById('api-wrapper')
let isFetching = false

coloButton.addEventListener('click', () => {
    if (recipes.contains(apiWrapper)) {
        recipes.removeChild(apiWrapper);
    } else {
        recipes.appendChild(apiWrapper);
    }
    apiWrapper.classList.toggle('active')
})

    if(isFetching) {
        clearInterval(intervalId)
        isFetching = false
    } else {
        isFetching = true
        fetchDrinkInformation()
    }


