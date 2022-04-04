//Search form
searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active')
}

let loginForm = document.querySelector('.login-form-container')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active')
}




//Para a barra de navegação 'fixar' na parte superior
window.onscroll = () =>{

    searchForm.classList.remove('active')   // isso vai tirar a classe quando surgir a barra de navegacao

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')
    } else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')
    } else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
}

//Paginação e swiper js

var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

//slider das promoções

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

//arrivals-slider swiper

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


//review clientes swiper

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 3100,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


































