$(function(){

	var clientW=$(window).width();
	$(window).resize(imgResize);
	imgResize();
	function imgResize(){
		clientW=$(window).width();
	}

	//学生作品
	var stuLinks=$('.stu-l-t a');
	stuLinks.each(function(i){
		this.index=i;
	})
	var stuLists=$('.stu-l-list>ul');
	touch.on('.stu-l-t a','tap', function(ev){
		var Elm=this.nodeName=='SPAN'?this.parentNode:this;
		stuLinks.removeClass("hnz-stu-hot");
		$(Elm).addClass("hnz-stu-hot");
		stuLists.css('display','none').eq(Elm.index).css("display",'block');
	});

	//stu-l-t
	var stuLT=$('.stu-l-t');
	touch.on(stuLT[0], 'touchstart', function(ev){
		ev.preventDefault();
	});
	var ow=stuLT.width()-clientW;
	touch.on(stuLT[0], 'swiperight', function(ev){
		stuLT[0].style.left = "0px";
	});
	touch.on(stuLT[0], 'swipeleft', function(ev){
		stuLT[0].style.left = -ow+'px';
	});
})