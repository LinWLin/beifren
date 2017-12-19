/**
 * Created by Administrator on 2017/4/5.
 */
// var bannerBox = document.getElementById('banner-box');
// var slideBox = document.getElementById('slideBox');
var opa = $('#banner-box').css('opacity');
$(document).ready(function () {
    $(window).scroll(function () {
        var h = $(window).scrollTop();//这个方法是当前滚动条滚动的距离
     
        if (h == 0 && $("#slideBox").css('top') == '0px') {
            // $("#banner-box>.banner-box>img").animate({opacity:"1"},2000);
            // $("#banner-box").slideDown(3000);
            $("#slideBox").css('top', '0.1%').animate({top: "99%"}, 3000);
            $("#banner-box").css('opacity', '0').animate({opacity: "1"}, 3000);
            $('#banner-box .banner-box').show();
            $('#slideBox').show();
            // $("#banner-box>.banner-box>img").show();
            // $(".bottomLine").show();
        }
        else if (h > 0 && h < 80) {
            $('#banner-box').css('opacity', 0.9);
        } else if (h > 80 && h < 160) {
            $('#banner-box').css('opacity', 0.8);
        } else if (h > 160 && h < 240) {
            $('#banner-box').css('opacity', 0.7);
        } else if (h > 240 && h < 320) {
            $('#banner-box').css('opacity', 0.6);
        } else if (h > 320 && h < 400) {
            $('#banner-box').css('opacity', 0.5);
        } else if (h > 400 && h < 480) {
            $('#banner-box').css('opacity', 0.4);
        } else if (h > 480 && h < 560) {
            $('#banner-box').css('opacity', 0.3);
        } else if (h > 560 && h < 640) {
            $('#banner-box').css('opacity', 0.2);
        } else if (h > 640 && h < 720) {
            $('#banner-box').css('opacity', 0.1);
        } else if (h > 720 && h < 800) {
            $('#banner-box').css('opacity', 0);
        }


        if (h > 2300 && h < 2450) {
            $('.row-scale img').css('top', '-100px');
            $('.row-child').css('top', '-390px');
        } else if (h > 2450 && h < 2600) {
            $('.row-scale img').css('top', '-50px');
            $('.row-child').css('top', '-440px');

        } else if (h > 2600 && h < 2750) {
            $('.row-scale img').css('top', '0px');
            $('.row-child').css('top', '-460px');

        } else if (h > 2750 && h < 2900) {
            $('.row-scale img').css('top', '50px');
            $('.row-child').css('top', '-480px');

        } else if (h > 2900 && h < 3050) {
            $('.row-scale img').css('top', '100px');
            $('.row-child').css('top', '-500px');

        } else if (h > 3050 && h < 3200) {
            $('.row-scale img').css('top', '150px');
            $('.row-child').css('top', '-520px');

        } else if (h > 3200 && h < 3350) {
            $('.row-scale img').css('top', '200px');
            $('.row-child').css('top', '-540px');

        } else if (h > 3500 && h < 3650) {
            $('.row-scale img').css('top', '250px');
            $('.row-child').css('top', '-590px');

        } else if (h > 3800 && h < 3950) {
            $('.row-scale img').css('top', '300px');

        } else if (h > 4100 && h < 4250) {
            $('.row-scale img').css('top', '350px');

        } else if (h > 4400 && h < 4550) {
            $('.row-scale img').css('top', '400px');

        } else if (h > 4700 && h < 4850) {
            $('.row-scale img').css('top', '450px');

        } else if (h > 5000 && h < 5150) {
            $('.row-scale img').css('top', '500px');

        }
    });
});
