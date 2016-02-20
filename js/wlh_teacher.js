$(function(){
	var wlh_yiji=$(".wlh-teacher-yiji");
	var wlh_hover=$(".wlh-teacher-hover");
	var wlh_erji=$(".wlh-teacher-erji");
	var wlh_blank=$(".wlh-blank");
    

    var wlh_w=$(".wlh-teacher-yiji-innerbox").eq(0).innerWidth();
	var wlh_h1=$(".wlh-teacher-yiji-innerbox").eq(0).innerHeight();
	var wlh_h2=$(".wlh-teacher-yiji-word").eq(0).innerHeight();
    $(window).resize(function(){
    	wlh_w=$(".wlh-teacher-yiji-innerbox").eq(0).innerWidth();
		wlh_h1=$(".wlh-teacher-yiji-innerbox").eq(0).innerHeight();
		wlh_h2=$(".wlh-teacher-yiji-word").eq(0).innerHeight();
    })
		

    //单击之前，记录一下位置
    var wlh_col=0;
    wlh_yiji.each(function(index,obj){
    	if(wlh_col>5){
    		wlh_col=0;
    	}
    	this.wei=wlh_col;
    	wlh_col++;
    })
    
    var flag=true;  
	wlh_yiji.click(function(){
		var index=$(this).index(".wlh-teacher-yiji");  
		     		
        if($(window).width()>640){
        	if(flag){
				wlh_hover.eq(index).css({display:"block",width:wlh_w+10+"px",height:wlh_h1+wlh_h2+20+"px","box-shadow":"0px 0px 5px rgba(0,0,0,0.5)"});

	            wlh_erji.eq(index).css({width:$(".wlh-width").width()-15+"px",height:"auto","box-shadow":"0px 0px 5px rgba(0,0,0,0.5)",left:this.wei*-1*$(".wlh-teacher").outerWidth()+-5+"px",top:wlh_h1+wlh_h2+10+"px"});
	            wlh_blank.eq(index).css({width:wlh_w+10+"px",display:"block"})
	            $(".wlh-teacher").eq(index).css({height:wlh_h1+wlh_h2+20+wlh_erji.eq(index).outerHeight()+"px"})
	            flag=false;

			}else{
				wlh_hover.eq(index).css({display:"none"});
	            wlh_erji.eq(index).css({height:"0px"});
	            wlh_blank.eq(index).css({display:"none"});
	            $(".wlh-teacher").eq(index).css({height:"auto"})
	            flag=true;
			}
        }else{
        	if(flag){
				wlh_hover.eq(index).css({display:"block",width:wlh_w+10+"px",height:wlh_h1+wlh_h2+20+"px","box-shadow":"0px 0px 5px rgba(0,0,0,0.5)"});
				if(index%2==0){
					wlh_erji.eq(index).css({width:$(".wlh-width").width()-15+"px",height:"auto","box-shadow":"0px 0px 5px rgba(0,0,0,0.5)",left:-5+"px",top:wlh_h1+wlh_h2+10+"px"});
				}else{
					wlh_erji.eq(index).css({width:$(".wlh-width").width()-15+"px",height:"auto","box-shadow":"0px 0px 5px rgba(0,0,0,0.5)",left:-1*$(".wlh-teacher").outerWidth()+-5+"px",top:wlh_h1+wlh_h2+10+"px"});
				}
	           
	            wlh_blank.eq(index).css({width:wlh_w+10+"px",display:"block"})
	            $(".wlh-teacher").eq(index).css({height:wlh_h1+wlh_h2+20+wlh_erji.eq(index).outerHeight()+"px"})
	            flag=false;

			}else{
				wlh_hover.eq(index).css({display:"none"});
	            wlh_erji.eq(index).css({height:"0px"});
	            wlh_blank.eq(index).css({display:"none"});
	            $(".wlh-teacher").eq(index).css({height:"auto"})
	            flag=true;
			}
        }
		
       
	})
})