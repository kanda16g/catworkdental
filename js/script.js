$(function() {


/* ハンバーガー */
var humMenu = $("#humberger_menu");

humMenu.hide();

$(".humberger").click(function() {
    $(humMenu).slideToggle(200);
});

var conMenu = $(".contact_menu");

conMenu.hide();

$(".contact_humberger").click(function() {
    $(conMenu).slideToggle(200);
});


// ハンバーガーメニューを開いたまま、ブラウザ幅を広げたときの調整
$(window).resize(function() {
 
var w = $(window).width();

    if(w < 701) {
        $(".contact_menu").hide();
    }

    if(w < 881) {
        $(".humberger_menu").hide();
    }
});
 

/* スクロールトップ */
var returnTop = $("#return-top");

returnTop.hide();

$(window).scroll(function() {
    if($(this).scrollTop() > 800 ) {
        returnTop.fadeIn();
    } else {
        returnTop.fadeOut();
    }
});

returnTop.click(function() {
    $("body, html").animate({scrollTop: 0}, 1000);

    return false;
})


/* グロナビ追従,色変化 */
var w = $(window).width();

    $(window).on('load scroll', function() {

        if($(this).scrollTop() > 800 ) {

            $("#header").css({
                position: "fixed",
                background: "#fff"}
            );

            $(".header .logo img").attr("src", "images/clone_logo.png");

            $("nav a").css("color", "#949494");

            $(".contact .item").css( {
                color: "#fff",
                background: "#f39800" }
            );

            $(".contact .item span").css("color", "#fff");

            $(".contact .item span").css("background", "url(images/icon01.png) left 10px bottom no-repeat");

            $(".glonav li:nth-of-type(1)").css("background", "url(images/clone_nav01.png) center center no-repeat");

            $(".glonav li:nth-of-type(2)").css("background", "url(images/clone_nav02.png) center center no-repeat");

            $(".glonav li:nth-of-type(3)").css("background", "url(images/clone_nav03.png) center center no-repeat");

            $(".glonav li:nth-of-type(4)").css("background", "url(images/clone_nav04.png) center center no-repeat");

            $(".glonav li:nth-of-type(5)").css("background", "url(images/clone_nav05.png) center center no-repeat");

            $(".glonav li:nth-of-type(6)").css("background", "url(images/clone_nav06.png) center center no-repeat");

            $(".glonav li:nth-of-type(7)").css("background", "url(images/clone_nav07.png) center center no-repeat");

        } else {

            $("#header").css({
                position: "absolute",
                background: "transparent"}
            );

            $(".header .logo img").attr("src", "images/header_logo.png");

            $("nav a").css("color", "#fff");

            $(".contact .item").css( {
                color: "#f39800",
                background: "#fff" }
            );

            $(".contact .item span").css("color", "#f39800");

            $(".contact .item span").css("background", "url(images/icon02.png) left 10px bottom no-repeat");

            $(".glonav li:nth-of-type(1)").css("background", "url(images/header_nav01.png) center center no-repeat");

            $(".glonav li:nth-of-type(2)").css("background", "url(images/header_nav02.png) center center no-repeat");

            $(".glonav li:nth-of-type(3)").css("background", "url(images/header_nav03.png) center center no-repeat");

            $(".glonav li:nth-of-type(4)").css("background", "url(images/header_nav04.png) center center no-repeat");

            $(".glonav li:nth-of-type(5)").css("background", "url(images/header_nav05.png) center center no-repeat");

            $(".glonav li:nth-of-type(6)").css("background", "url(images/header_nav06.png) center center no-repeat");

            $(".glonav li:nth-of-type(7)").css("background", "url(images/header_nav07.png) center center no-repeat");

        }

    });



// ページ内リンクスクロール
$('a[href^="#"]:not([href="#"])').click(function() {
    var target = $($(this).attr('href')).offset().top;
    $('html, body').animate({scrollTop: target}, 600);
    return false;
});



});

  //Webフォント
  (function(d) {
    var config = {
      kitId: 'eoo4tuy',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);