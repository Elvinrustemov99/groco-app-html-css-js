const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const shoppingCart = document.querySelector(".shopping-cart");
const cartBtn = document.querySelector("#cart-btn");
const loginForm = document.querySelector(".login-form")
const loginBtn = document.querySelector("#login-btn");
const menuNavbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", () => {
	searchForm.classList.toggle('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	menuNavbar.classList.remove('active');
})

cartBtn.addEventListener("click", () => {
	shoppingCart.classList.toggle('active');
	searchForm.classList.remove('active');
	loginForm.classList.remove('active');
	menuNavbar.classList.remove('active');
})

loginBtn.addEventListener('click', () => {
	loginForm.classList.toggle("active");
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	menuNavbar.classList.remove('active');
})

menuBtn.addEventListener('click', ()=>{
	menuNavbar.classList.toggle("active");
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
})

onscroll = ()=>{
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	menuNavbar.classList.remove('active');
}

let swiper1 = new Swiper(".product-slider", {
	loop:true,
	spaceBetween: 20,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1020: {
			slidesPerView: 3,
		},
	},
});

let swiper2 = new Swiper(".review-slider", {
	loop:true,
	spaceBetween: 20,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1020: {
			slidesPerView: 3,
		},
	},
});

