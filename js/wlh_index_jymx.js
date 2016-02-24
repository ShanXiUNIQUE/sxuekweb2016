$(function(){
    
	$(window).resize(wlhHeight);
	function wlhHeight(){
		if($(window).width()>768){
			$(".wlh-starbanner").css({height:"480px"});
		}else{
			$(".wlh-starbanner").css({height:$(".lx_student").height()*2+80+"px"});
		}		
	}
	wlhHeight();
	var wlh_now=0;
	var wlh_next=0;

	var wlh_box=$(".wlh-starinnerbox")
	var wlh_w=$(".wlh-starinnerbox").width();
	$(".wlh-starinnerbox:not(:first)").css({left:wlh_w+"px"})
	var wlh_flage=true
	function wlhbanner(){
		if(!wlh_flage){
			return;
		}
		wlh_flage=false;
        wlh_next++;
        if(wlh_next>=wlh_box.length){
       	   wlh_next=0;
        }
        wlh_box.eq(wlh_next).css("left",wlh_w+"px");
        wlh_box.eq(wlh_now).animate({left:-1*wlh_w+"px"},500,function(){
        	wlh_flage=true;
        });
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

    var wlhall=wlh_box.get();
    touch.on(wlh_box, 'touchstart', function(ev){
		clearInterval(wlht);
		
	});
	touch.on(wlh_box, 'touchend', function(ev){
		wlht=setInterval(wlhbanner,3000);
		//ev.preventDefault();
	});
	touch.on(wlh_box, 'dragstart', function(ev){
		if(ev.direction=="right"){
			ev.preventDefault();
		}
		if(ev.direction=="right" && ev.x>=5){	    	
			if(!wlh_flage){
				return;
			}
			wlh_flage=false;
	        wlh_next--;
	        if(wlh_next<=-1){
	       	   wlh_next=wlh_box.length-1;
	        }
	        wlh_box.eq(wlh_next).css("left",-1*wlh_w+"px");
	        wlh_box.eq(wlh_now).animate({left:wlh_w+"px"},500,function(){
	        	wlh_flage=true;
	        });
	        wlh_box.eq(wlh_next).animate({left:0},500);
	        $(".wlh-btn").css({background:"#bebebe"})
	        $(".wlh-btn").eq(wlh_next).css({background:"#296afa"})
	        wlh_now=wlh_next;
        }
	});
	touch.on(wlh_box, 'dragstart', function(ev){
		
		if(ev.direction=="left"){
			ev.preventDefault();
		}
		if(ev.direction=="left" && ev.x<=-5){
		
		    wlhbanner();
	    }
	});
})