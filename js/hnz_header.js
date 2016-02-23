$(function(){
	//导航 小屏 点击按钮显示 菜单列表
	var minNavMore=$('.min-nav-more');
	var minNavList=$('.min-nav-list');
	var flag=true;
	touch.on('.min-nav-more','tap',function(){
		if(flag){
			flag=false;
			minNavList.css('height','auto');
		}else{
			flag=true;
			minNavList.css('height','0');
		}
	})
})