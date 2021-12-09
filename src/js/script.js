'use strict';

import jQuery from 'jquery';

//$マークに参照(jQuery)を代入
const $ = jQuery;

$(function () {
  $('.navbtn').on('click', (event) => {
    event.preventDefault();
    // $e = $(event.currentTarget);
    if ($('.navbtn').hasClass('close')) {
      // メニューが開いている状態から閉まる状態へ
      $('.header-nav').slideUp();
      $('.navbtn').removeClass('close');
      $('.header-nav').addClass('collapse');
    } else {
      // メニューが閉じている状態から開く状態へ
      $('.header-nav').slideDown();
      $('.navbtn').addClass('close');
      $('.header-nav').removeClass('collapse');
    }
  });

  console.log('jQueryは動いてます');
});
