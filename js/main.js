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
  

