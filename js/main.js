//ドロップダウンの設定
function mediaQueriesWin(){
	var width = $(window).width();
	if(width <= 1024) {//横幅が1024px以下の場合 $(".has-child>a").off('click');	//has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
		$(".has-child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
			var parentElem =  $(this).parent();// aタグから見た親要素のliを取得し
			$(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
			$(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
			return false;//リンクの無効化
		});
	}else{//横幅が1024px以上の場合
		$(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
		$(".has-child").removeClass('active');//activeクラスを削除
		$('.has-child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
        $('.gnav').removeAttr('style');
        $('.header-bottom').removeAttr('style');
        $('.header-bottom').removeClass('active');
	}
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

//menu icon
$(".openbtn").click(function () {
    $(this).toggleClass('active');
});

$(".has-child").click(function () {
    $(this).toggleClass('active');
    $(this).children('ul').slideToggle();
});
//メニュー開閉
$(function(){
    $('.openbtn').click(function(){
        $('.gnav').toggleClass('active');
        $('.gnav').slideToggle();
        $('.header-bottom').toggleClass('active');

        var wH = $(window).height(); 
        var divH = $('.header-bottom').innerHeight();
        if($('.header-bottom').hasClass("active")){
            $('.header-bottom').css('height',wH+'px'); 
        } else {
            $('.header-bottom').removeAttr('style');
        }
    });
});

//slider
const $jq = jQuery.noConflict();

$jq(document).ready(function () {
  $jq('.slider').slick({
      autoplay: true,//自動的に動き出すか。初期値はfalse。
      infinite: true,//スライドをループさせるかどうか。初期値はtrue。
      slidesToShow: 3,//スライドを画面に3枚見せる
      slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
      prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
      nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
      dots: false,//下部ドットナビゲーションの表示
      responsive: [
          {
          breakpoint: 769,//モニターの横幅が769px以下の見せ方
          settings: {
              slidesToShow: 2,//スライドを画面に2枚見せる
              slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
          }
      },
      {
          breakpoint: 426,//モニターの横幅が426px以下の見せ方
          settings: {
              slidesToShow: 1,//スライドを画面に1枚見せる
              slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
          }
      }
  ]
  });
});

//scroll animation

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
  
    $('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
      var elemPos = $(this).offset().top+200;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
      }

      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//scroll animation 2 right slidein

// 動きのきっかけの起点となるアニメーションの名前を定義
function rSlideAnime(){
  
    $('.rSlidefadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
      var elemPos = $(this).offset().top+200;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('rSlidefadeIn');// 画面内に入ったらrSlidefadeInというクラス名を追記
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      rSlideAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      rSlideAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//scroll animation 2 right slidein

// 動きのきっかけの起点となるアニメーションの名前を定義
function lSlideAnime(){
  
    $('.lSlidefadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
      var elemPos = $(this).offset().top+200;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('lSlidefadeIn');// 画面内に入ったらlSlidefadeInというクラス名を追記
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      lSlideAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      lSlideAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  

