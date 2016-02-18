$(function(){
	var minNavMore=$('.min-nav-more');
	var minNavList=$('.min-nav-list');
	minNavMore.on('touchstart',function(){
		$(this).toggleClass("active");
		minNavList.finish().slideToggle("200");
	})
})