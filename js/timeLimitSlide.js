$(function(){
	var index = 0;
	var imgLength = $(".hot-slide").length;
	// console.log(imgLength)
	var timer;

	// 右键单击事件
	$(".right").click(function(){
		index++
		move();
	})

	$(".left").click(function(){
		index--;
		move();
	})

//	$(".all span").click(function(){
//		index = $(this).index();
//		move()
//	})
	$(".special-content").hover(function(){
		clearInterval( timer )
	},function(){
		autoPlay()
	})


	autoPlay()
	function autoPlay(){
		timer = setInterval(function(){
			index++
			move()
		},3000)
	}

	function move(){
		// 检测右边界
		if( index >= imgLength ){
			$(".specialShoppingSlide").css({
				"left":"0"
			})
			index = 1
		}
		// 检测左边界
		if( index <= -1 ){
			$(".specialShoppingSlide").css({
				"left": - $(".hot-slide").width() * (imgLength-1)
			})
			index = imgLength - 1
		}

		$(".specialShoppingSlide").animate({
			"left": - index * $(".hot-slide").width()
		},1000)

//		// 判断小圆点的边界
//		if( index == imgLength-1 ){
//			$(".all span").eq(0).addClass("current").siblings().removeClass()
//		}
//		// 添加小圆点样式
//		$(".all span").eq(index).addClass("current").siblings().removeClass()

	}
})

