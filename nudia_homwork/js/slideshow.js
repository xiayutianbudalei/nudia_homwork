
	$(function(){
		let oul = $(".imgOul");
		let oli = oul.find("li");
		let index = 0;
		let time = null;
		let douOli=$(".douBox").find("li");
		let width=$(window).width();
		function change() {
			oul.stop(true,false).animate({
				left: - width * index
			},500, function() {
				dou();
				if (index == 4) {
					index = 0;
					oul.css({
						left:0
					});
				}
			})
		}
		
		function dou(){
			if(index==4){
					douOli.eq(0).addClass("doudou").siblings().removeClass("doudou");
				}else{
					douOli.eq(index).addClass("doudou").siblings().removeClass("doudou");
				}
		}
		// function fun() {
		// 	oul.stop(true, false).animate({
		// 		left: -1356 * index
		// 	}, 500)
		// }
		//启动定时器
		time = setInterval(function(){
			index++;
			change();	
		},2000);
		//鼠标进去停止定时器
		$(".Box").mouseover(function(){
			clearInterval(time);
		})
		//鼠标离开启动定时器
		$(".Box").mouseout(function(){
			time = setInterval(function(){
				index++;
				change();
			},2000);
		})
		//点击箭头换下一张
		$(".next").click(function(){
				index++;
			if (index==5) {
				index = 0
				oul.css({
					left: 0
				})
			}
			change();
			dou()
		})
		//点击箭头换上一张
		$(".prev").click(function(){
			index--;
			if (index == -1) {
				index = 4;
				oul.css({
					left: - width * index
				})
				index--;
			}
			change();
			dou()
		})
	});