/**
 * Created by Administrator on 2017/2/22.
 */
var win_width = ($(window).width())
var win_heigth = ($(window).height()) - 16
var win_heigth_1 = parseFloat($(window).height()) - 66
var win_heigth_2 = ($(window).height()) - 16
$(".head-d2 img").css("width", win_width)
$(".head-d2 img").css("height", win_heigth)
$(".head-d5").css("top", win_heigth_1)
$(".d6_down").css("top", parseFloat(win_heigth_2))
$(".page_1").css("height", win_heigth + 8)
$(".page_2").hide()
$(".head-d5 img").click(function () {
    $(".head-d3").hide()
    //$(".head-d2").hide(3000,"linear")
    //$(".head-d4").hide(3000,"linear")
    //$(".head-d5").hide(3000,"linear")
    $(".head-d6").hide()
    $(".page_1").slideToggle(3000)
    //$(".head-d3").show()
    $(".page_2").show()
    //$(".page_2").css("position","fixed").css("top","0")
})
$(".aboutWe-c-dd1-2 img").click(function () {
    $(this).next().slideToggle("slow")
})


//���ͷ��������
//$(".chooseC-cd1-a2").mousemove(function () {
//    $(".text-padding88").hide()
//    $(".text-padding52").show();
//})
//$(".chooseC-cd1-a2").mouseout(function () {
//       $(".text-padding88").show();
//    $(".text-padding52").hide();
//})
$(".chooseC-cd1-bx").on("mousemove",".text-fff",function () {
    $(this).find(".text-padding88").hide();
    $(this).find(".text-padding52").show();
})
$(".chooseC-cd1-bx").on("mouseout",".text-fff",function () {
    $(this).find(".text-padding88").show()
    $(this).find(".text-padding52").hide();
})



$(".bannerRightNav a").click(function(){
    alert(12313)
})
