let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu')

menu.onclick = () => {
	navbar.classList.toggle('active');
	menu.classList.toggle('move');
}

// Swiper
var swiper = new Swiper(".trending-content", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay:5000,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1068: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });

// Registration

const container = document.querySelector('.user'),
  showPw = document.querySelectorAll('.showPw'),
  pwField = document.querySelectorAll('.password');

showPw.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', () => {
    pwField.forEach(pwField => {
      if(pwField.type === 'password'){
        pwField.type = 'text';

        showPw.forEach(icon => {
          icon.classList.replace("bx-low-vision", "bx-envelope");
        })
      }else {
        pwField.type = 'password';
      }
    })
  })
});

