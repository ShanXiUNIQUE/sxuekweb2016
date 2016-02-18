$(function(){
	//导航 小屏 点击按钮显示 菜单列表
	var minNavMore=$('.min-nav-more');
	var minNavList=$('.min-nav-list');
	minNavMore.on('touchstart',function(){
		$(this).toggleClass("active");
		minNavList.finish().slideToggle("200");
	})
	//banner
	var imgs=$('.banner-box img');
	var clientW=$(window).width();
	$(window).resize(function(){
		clientW=$(window).width();
		imgs.attr('src',function(){
			if(clientW>640){
				return $(this).attr('data-lg')
			}else{
				return $(this).attr('data-xs')
			}
		})
		
	})

})