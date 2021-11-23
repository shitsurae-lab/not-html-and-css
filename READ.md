# 「ゼロ」から web ページを組み立てるには

## コンテナの分割

- 横幅が変わることろで分割する
- 背景の塗りつぶし方法が変わるところで分割
- コンテナは原則、縦から積み重なる。(横方向や重なるということは原則無い)

## モジュールの作成

コンテナを情報の内容やレイアウトに合わせて分割する

##　無視すべき点
背景画像がある場合でも CSS で表現できる箇所(あしらいなど)の場合は分割箇所としては無視をする

## コンテナーのパターン化

```HTML
<div class="クラス名">
  <div class="contaiern">

  </div>
</div>
<!-- End クラス名-->
```

| タグ                |     |
| ------------------- | --- |
| <header></header>   |     |
| <footer></footer>   |     |
| <main></main>       |     |
| <article></article> |     |
| <section></section> |     |
| <nav></nav>         |     |
| <div></div>         |     |

```HTML
<body class="post">
  <header class="page-header">
    <div class="header-container">
    </div>
  </header>
  <div class="breadcrumb">
    <div class="bc-container">
    </div>
  </div>
  <main class="page-main">
    <div class="main-container">
    </div>
  </main>
  <footer class="page-footer">
    <div class="footer-container">
    </div>
  </footer>
</body>
```

## コンテナには次の 4 つのスタイルを二重構造のコンテナ HTML セットを利用して記述する

1. コンテナの幅を設定
2. コンテナをビューポートの中央に配置
3. 上下のスペースを調整
4. 背景色や背景画像を settei

# map-get and mixin

参考: https://bit.ly/3CEH4NH

```CSS
//Set Map
$breakpoint: (
  sm: 'screen and (min-width: 576px)',
  md: 'screen and (min-width: 768px)',
  lg: 'screen and (min-width: 992px)',
  xl: 'screen and (min-width: 1200px)',
  xxl: 'screen and (min-width: 1400px)',
); //mapの')'の後ろにセミコロン

//Set mixin
@mixin mq($bp) {
  @media #{map-get($breakpoint,$bp)} {
    @content; //@contentの後ろにセミコロン
  }
}
```

# backgound-image

1. https://numb86-tech.hatenablog.com/entry/2018/03/03/131414
2. https://solomaker.club/how-to-solve-img-url-in-css-with-webpack/
