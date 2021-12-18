//URLで分岐、bodyにクラス付与
const url = location.href;
const target = document.querySelector('body');
if (url === 'http://localhost:8080/about.html') {
  target.classList.add('sample');
} else if (url === 'http://localhost:8080/post.html') {
  target.classList.add('post');
} else if (url === 'http://localhost:8080/sidebar-post.html') {
  target.classList.add('sidebar-post');
} else {
  target.classList.add('home');
}

//カード型レイアウトのタグ(HTML)を一部削除
const tagList = document.querySelector('.bl_latest_item:nth-child(2)');

tagList.querySelector('.bl_latest_text span:nth-child(2)').remove();
