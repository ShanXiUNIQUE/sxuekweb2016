$(function(){
	//导航 小屏 点击按钮显示 菜单列表
	var minNavMore=$('.min-nav-more');
	var minNavList=$('.min-nav-list');
	minNavMore.on('touchstart',function(){
		$(this).toggleClass("active");
		minNavList.finish().slideToggle("200");
	})
	//banner
	

})