var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	slidesPerView: 1,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const btnActionLogin = document.querySelectorAll(".btnActionLogin");
const indicator = document.querySelector(".indcator");
const login = document.querySelector(".login");
const regis = document.querySelector(".regis");
const overlay = document.querySelector(".overlay");
const loginBox = document.querySelector("#loginBox");
const btnLoginOpen = document.querySelectorAll(".btnLoginOpen");

if (btnActionLogin && overlay) {
	btnActionLogin.forEach((item) => {
		item.addEventListener("click", (e) => {
			indicator.style.left = e.target.offsetLeft + "px";
			login.classList.toggle("hidden");
			login.classList.toggle("animate");
			regis.classList.toggle("hidden");
			regis.classList.toggle("animate");
		});
	});
	overlay.addEventListener("click", () => {
		loginBox.classList.add("hidden");
	});
	btnLoginOpen.forEach((item) => {
		item.addEventListener("click", () => {
			loginBox.classList.remove("hidden");
		});
	});
}

const overPack = document.querySelector(".overlay-pack");
const banner = document.querySelector("#dialog-banner");
const pay = document.querySelector("#pay");
const pack = document.querySelector("#dialog-pack");
const btnSwitch = document.querySelector("#btnSwitch");
const btnDetail = document.querySelectorAll(".btnDetail");

if (pack) {
	btnSwitch.addEventListener("click", () => {
		banner.classList.add("hidden");
		pay.classList.remove("hidden");
	});

	overPack.addEventListener("click", () => {
		pack.classList.add("hidden");
		banner.classList.remove("hidden");
		pay.classList.add("hidden");
	});

	btnDetail.forEach((item) => {
		item.addEventListener("click", () => {
			pack.classList.remove("hidden");
		});
	});
}

const indimenu = document.querySelector(".indica-menu");
const meuItems = document.querySelectorAll(".menuList > a");
const mainScroll = document.querySelector("#mainScroll");

if (mainScroll && meuItems) {
	mainScroll.addEventListener("scroll", function () {
		const sections = document.querySelectorAll(".section-c");

		sections.forEach((section, index) => {
			const rect = section.getBoundingClientRect();
			if (rect.top <= 150 && rect.bottom >= 150) {
				indimenu.style.top = meuItems[index].offsetTop + 8 + "px";
			}
		});
	});
}
