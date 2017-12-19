/**
 * Created by chenjing on 17/3/15.
 */
$(".j").css("margin", 50)
$("#navBox").css("height", $(window).height())
$(document).ready(function () {
    // $(".j").css("margin", $(".fidex").height())
    // $("#navBox").css("height", $(window).height())
    $(".fidex").html(
        "<div id=nav>" +
        "<div class=logoBox>" +
        "<img src=../imagesMO/logo.png class='center-block logo img-responsive'>" +
        "<img id=dianji src=../imagesMO/dianji.jpg class='pull-right img-responsive'>" +
        "</div>" +
        "<div id=navBox>" +
        "<a href=indexM.html>首页</a>" +
        "<a href=zixun.html>资讯</a>" +
        "<a href=shizi.html>师资</a>" +
        "<a href=liudayoushi.html>六大优势</a>" +
        "<a href=kechongzhongxin.html>课程中心</a>" +
        "<a href=jiaoxuechengji.html>教学成绩</a>" +
        "<a href=dashijian.html>大事迹</a>" +
        "<a href=baomingzhongxin.html>报名中心</a>" +
        "<a href=zaixianliuyan.html>在线留言</a>" +
        "<a href=guanyuwomen.html>关于我们</a>" +
        "</div>" +
        "</div>"
    );
})

$(function () {
    $(".logoBox").bind("click", function () {
        var $content = $(this).next();
        if ($content.is(":visible")) {
            $content.hide(1000);
        } else {
            $content.show(1000);
        }
    })
})
$(".select8").on("click", "p", function () {
    $(this).find("img").addClass("kuang").parent().siblings().find("img").removeClass("kuang")
})
$(".select4").on("click", "p", function () {
    $(this).find("img").addClass("kuang").parent().siblings().find("img").removeClass("kuang")
})

//$(".fidex").height()
