window.onload = function () {
    var oList = document.querySelector('.list');
    var oPic = document.querySelector('.pic');
    var aLink = oList.getElementsByTagName('li');
    var imgbar = document.querySelector('#imgBar');
    var oChoose = document.querySelector('.choose');
    var ach = oChoose.getElementsByTagName('li');
    var time = null;
    var list = [{
        "link1": ['素描', '色彩', '速写', '创意速写', '设计'],
        "imgBar": ["<img src='../images/1-1.jpg'/>",
            "<img src='../images/1-1.jpg'/>",
            "<img src='../images/1-1.jpg'/>",
            "<img src='../images/1-1.jpg'/>",
            "<img src='../images/1-1.jpg'/>"],
        "pic": [
            ["<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>"],
            ["<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao02.jpg'></a><span>静物　素描作品</span>"],
            ["<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao03.jpg'></a><span>静物　素描作品</span>"],
            ["<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao04.jpg'></a><span>静物　素描作品</span>"],
            ["<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao05.jpg'></a><span>静物　素描作品</span>"]

            /*

             ["速写1", "速写2", "速写3", "速写4","速写1", "速写2", "速写3", "速写4","速写1", "速写2", "速写3", "速写4"],
             ["创意速写1", "创意速写2", "创意速写3", "创意速写4","创意速写1", "创意速写2", "创意速写3", "创意速写4","创意速写1", "创意速写2", "创意速写3", "创意速写4"],
             ["设计1", "设计2", "设计3", "设计4","设计1", "设计2", "设计3", "设计4","设计1", "设计2", "设计3", "设计4"]
             */
        ]
    }, {
        "link1": ['影视1'],
        "imgBar": ["<img src='../images/1-1.jpg'/>"],
        "pic": [
            // ["影视1", "影视1", "影视1", "影视1","影视1", "影视1", "影视1", "影视1","影视1", "影视1", "影视1", "影视1"]
            ["<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>",
                "<a href='javascript:void(0);'><img src='../images/sumiao.jpg'></a><span>静物　素描作品</span>"]
        ]
    }];

    demo(0);

    for (var i = 0; i < aLink.length; i++) {

        aLink[i].index = i;
        aLink[i].onmouseover = function () {

            oChoose.style.display = "block";
            oChoose.innerHTML = "";

            demo(this.index);

        }

    }

    function demo(index) {

        for (var i = 0; i < (list[index].link1).length; i++) {
            var oLi = document.createElement('li');

            oLi.index = i;
            oLi.onclick = function () {
                oPic.innerHTML = "";
                init(this.index);

            }
            var oA = document.createElement('a');

            oA.innerHTML = list[index].link1[i];
            oA.href = "javascript:;";
            oA.className = "zuopin";
            oLi.appendChild(oA);
            oChoose.appendChild(oLi);
        }

        function init(num) {

            for (var i = 0; i < list[index].pic[num].length; i++) {

                var oLi = document.createElement('li');
                oLi.innerHTML = list[index].pic[num][i];
                imgbar.innerHTML = list[index].imgBar[num];
                oPic.appendChild(oLi);
            }


        }

        $(".choose").on("click", "li a", function () {
            $(this).addClass("zuopinAct").parents("li").siblings().find("a").removeClass("zuopinAct")


            var uli = $('.pic li');
            for (var i = 0; i < uli.length; i++) {
                $('.pic li').eq(i).click(function () {
                    $('.img-bg').show();
                })
            }
            $('#img-off').click(function(){
                $('.img-bg').hide();
            })
/*            var uli = $('.pic li');
            for (var i = 0; i < uli.length; i++) {
                $('.pic li').eq(i).hover(function () {
                    $(this).find('.img-bg').show().parent().siblings().find('.img-bg').hide();
                },function () {
                    $(this).find('.img-bg').hide().parent().siblings().find('.img-bg').hide();
                })
            }
            */

        })
    }

/*    var uli = $('.pic li');

    for (var i = 0; i < uli.length; i++) {
        $('.pic li').eq(i).hover(function () {
            $(this).find('.img-bg').show().parent().siblings().find('.img-bg').hide();
        },function () {
            $(this).find('.img-bg').hide().parent().siblings().find('.img-bg').hide();
        })
    }*/
    var uli = $('.pic li');
    for (var i = 0; i < uli.length; i++) {
        $('.pic li').eq(i).click(function () {
            $('.img-bg').show();
        })
    }
    $('#img-off').click(function(){
        $('.img-bg').hide();
    })

}

