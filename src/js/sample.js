//URLで分岐、bodyにクラス付与
const url = location.href;
const target = document.querySelector('body');

//カード型レイアウトのタグ(HTML)を一部取得
const tagList = document.querySelector('.bl_latest_item:nth-child(2) .bottom');

if (url.includes('/about.html')) {
  target.classList.add('sample');
} else if (url.includes('/post.html')) {
  target.classList.add('post');
} else if (url.includes('/form.html')) {
  target.classList.add('apply');
} else if (url.includes('/sidebar-post.html')) {
  target.classList.add('sidebar-post', 'post');
} else {
  target.classList.add('home');
  //カード型レイアウトのタグ(HTML)を一部削除
  tagList.remove();
  console.log(tagList);
}
//カード型レイアウトのタグ(HTML)を一部削除
// const tagList = document.querySelector('.bl_latest_item:nth-child(2) .bottom');
// tagList.remove();
