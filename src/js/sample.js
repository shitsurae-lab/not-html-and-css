const url = location.href;
const target = document.querySelector('body');
if (url === 'http://localhost:8080/about.html') {
  target.classList.add('sample');
} else if (url === 'http://localhost:8080/post.html') {
  target.classList.add('post');
} else {
  target.classList.add('home');
}
