const hamburger = document.querySelector('.navbtn');
// export function btn() {
//   querySelector('.drawer_btn');
// }
const gnav = document.querySelector('.header-nav');

// export function nav() {
//   querySelector('.drawer_btn');
// }

hamburger.addEventListener('click', () => {
  gnav.classList.toggle('.sample');
});
