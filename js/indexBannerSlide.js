/**
 * Created by Administrator on 2018/10/18.
 */

$(function(){
    var index = 0;
    var imgLength = $(".banner-img-box").length;
//				 console.log(imgLength)
    var timer;


    $(".circles span").mouseenter(function(){
        index = $(this).index();
        console.log(index)
        move()
    })
    $(".slide").hover(function(){
        clearInterval( timer )
    },function(){
        autoPlay()
    })


    autoPlay()
    function autoPlay(){
        timer = setInterval(function(){
            index++
            move()
        },2000)
    }

    function move(){
        // ����ұ߽�
        if( index >= imgLength ){
            $(".slide").css({
                "left":"0"
            })
            index = 1
        }
        // �����߽�
        if( index <= -1 ){
            $(".slide").css({
                "left": - $(".banner-img-box").width() * (imgLength-1)
            })
            index = imgLength - 1
        }

        $(".slide").stop().animate({
            "left": - index * $(".banner-img-box").width()
        },1000)

        // �ж�СԲ��ı߽�
        if( index == imgLength-1 ){
            $(".circles span").eq(0).addClass("active").siblings().removeClass()
        }
        // ���СԲ����ʽ
        $(".circles span").eq(index).addClass("active").siblings().removeClass()

    }
})

/**
 * Created by Administrator on 2018/10/18.
 */
