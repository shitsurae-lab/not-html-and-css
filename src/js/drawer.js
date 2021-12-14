const btn = document.querySelector('.drawer_btn');
// export function btn() {
//   querySelector('.drawer_btn');
// }
const nav = document.querySelector('.drawer_nav');

// export function nav() {
//   querySelector('.drawer_btn');
// }

const href = location.href;

if (href === 'http://localhost:8080/about.html') {
  btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
    if (btn.innerHTML === 'メニュー') {
      btn.innerHTML = '閉じる';
    } else {
      btn.innerHTML = 'メニュー';
    }
  });
}
