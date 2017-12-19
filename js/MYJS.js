
(function () {
    var bannerH;
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsMidp || bIsIphoneOs || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        bannerH = $(window).height() - 6;
    } else {
        bannerH = ($(window).height()/5)*2;
    }
    $(".banner-box").css({
        "height": bannerH,
        "width": "100%"
    })
    $('#slideBox').css({'top': bannerH });
})()

$(".bottomLine img").click(function () {
    $("#slideBox").animate({top: "0"}, 3000).prev('.zindex').find('#banner-box').animate({opacity: "0"}, 3000);
    // $('.navCenter img').attr('src', '../img/head01.png');

});

$(function (event) {
    $(".tab-pane ul li dl dt").bind("click", function () {
        var $conts = $(this).siblings()
        if ($conts.is(":visible")) {
            $conts.hide()
            $(this).find("span").removeClass('animated rotateIn')
        } else {
            $conts.show()

            $(this).find("span").addClass('animated rotateIn')
        }
        return false
    })
})
///**
// * Created by Administrator on 2017/2/22.
// */
//var win_width = ($(window).width())
//var win_heigth = ($(window).height()) - 16
//var win_heigth_1 = parseFloat($(window).height()) - 66
//var win_heigth_2 = ($(window).height()) - 16
//$(".head-d2 img").css("width", win_width)
//$(".head-d2 img").css("height", win_heigth)
//$(".head-d5").css("top", win_heigth_1)
//$(".d6_down").css("top", parseFloat(win_heigth_2))
//$(".page_1").css("height", win_heigth + 8)
//$(".page_2").hide()
//$(".head-d5 img").click(function () {
//    $(".head-d3").hide()
//    //$(".head-d2").hide(3000,"linear")
//    //$(".head-d4").hide(3000,"linear")
//    //$(".head-d5").hide(3000,"linear")
//    $(".head-d6").hide(3000,"linear")
//    $(".page_1").slideToggle(3000)
//    //$(".head-d3").show()
//    $(".page_2").show()
//    //$(".page_2").css("position","fixed").css("top","0")
//})
//$(".aboutWe-c-dd1-2 img").click(function () {
//    $(this).next().slideToggle("slow")
//})


//班型分类的区别
//$(".chooseC-cd1-a2").mousemove(function () {
//    $(".text-padding88").hide()
//    $(".text-padding52").show();
//})
//$(".chooseC-cd1-a2").mouseout(function () {
//       $(".text-padding88").show();
//    $(".text-padding52").hide();
//})
$(".chooseC-cd1-bx").on("mousemove", ".text-fff", function () {
    $(this).find(".text-padding88").hide();
    $(this).find(".text-padding52").show();
})
$(".chooseC-cd1-bx").on("mouseout", ".text-fff", function () {
    $(this).find(".text-padding88").show()
    $(this).find(".text-padding52").hide();
})




