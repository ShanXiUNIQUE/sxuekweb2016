$(function(){
	var wlh_now=0;
	var wlh_next=0;
	var wlh_box=$(".wlh-starinnerbox")
	var wlh_w=$(".wlh-starinnerbox").width();
	$(".wlh-starinnerbox:not(:first)").css({left:wlh_w+"px"})
	function wlhbanner(){
        wlh_next++;
        if(wlh_next>=wlh_box.length){
       	   wlh_next=0;
        }
        wlh_box.eq(wlh_next).css("left",wlh_w+"px");
        wlh_box.eq(wlh_now).animate({left:-1*wlh_w+"px"},500);
        wlh_box.eq(wlh_next).animate({left:0},500);
        $(".wlh-btn").css({background:"#bebebe"})
        $(".wlh-btn").eq(wlh_next).css({background:"#296afa"})
        wlh_now=wlh_next;
	}
	var wlht=setInterval(wlhbanner,3000);
	$(".wlh-starbanner").hover(function(){
		clearInterval(wlht);
	},function(){
		wlht=setInterval(wlhbanner,3000);
	})

	$(".wlh-btn").click(function(){
		var wlh_boxindex=$(this).index(".wlh-btn");
		wlh_box.css({left:wlh_w+"px"})
		wlh_box.eq(wlh_boxindex).animate({left:0},500);
		$(".wlh-btn").css({background:"#bebebe"})
        $(".wlh-btn").eq(wlh_boxindex).css({background:"#296afa"})
		wlh_now=wlh_boxindex;
		wlh_next=wlh_boxindex;
	})
})