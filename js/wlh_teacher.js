$(document).ready(function(){
	var wlh_yiji=$(".wlh-teacher-yiji");
	var wlh_hover=$(".wlh-teacher-hover");
	var wlh_erji=$(".wlh-teacher-erji");
	var wlh_blank=$(".wlh-blank");
    

    var wlh_w=$(".wlh-teacher-yiji-innerbox").eq(0).innerWidth();
	var wlh_h1=$(".wlh-teacher-yiji-innerbox").eq(0).innerHeight();
	var wlh_h2=$(".wlh-teacher-yiji-word").eq(0).innerHeight();

    //单击之前，记录一下位置
    var wlh_col=0;
    var wlh_row=0;
    wlh_yiji.each(function(index,obj){
    	if(wlh_col>5){
    		wlh_col=0;
    		wlh_row++;
    	}
    	this.y=wlh_col; 
    	this.x=wlh_row; 	
    	wlh_col++;
    })
	 
    $(window).resize(function(){
    	wlh_w=$(".wlh-teacher-yiji-innerbox").eq(0).innerWidth();
		wlh_h1=$(".wlh-teacher-yiji-innerbox").eq(0).innerHeight();
		wlh_h2=$(".wlh-teacher-yiji-word").eq(0).innerHeight();		
    })
    var flag=true;
    var flag1=true;
    var x;
    if($(window).width()>768){
        $(".wlh-teacher-yiji").click(function(){ 
            if(!flag1){
	    		return;
	    	}
	    	flag1=false;
			var index=$(this).index(".wlh-teacher-yiji"); 
			x=this.x; 
	        if(flag){	        	
			    wlh_hover.eq(index).css({
			    	display:"block",
			    	width:wlh_w+10+"px",
			    	height:wlh_h1+wlh_h2+20+"px",
			    	"box-shadow":"0px 0px 5px rgba(0,0,0,0.5)"
			    });
                wlh_yiji.each(function(i,obj){
	                if(this.x==x){
	                    $(this).parents(".wlh-teacher").css({height:"1051px"});
	                }
		        });
		        wlh_erji.eq(index).css({width:1180+"px",
		        	"box-shadow":"0px 0px 5px rgba(0,0,0,0.5)",
		        	left:this.y*-1*$(".wlh-teacher").outerWidth()+-5+"px",
		        	top:wlh_h1+wlh_h2+10+"px"
		        }).animate({height:"794px"},500,function(){
		        	flag1=true;
		        });

                $(".wlh-anniu").eq(index).css({background:"#2a9bf5"})
		        wlh_blank.eq(index).css({width:wlh_w+10+"px",display:"block"})
		        $(".wlh-teacher").eq(index).css({height:"1051px"});                             
		        flag=false;	                
			}else{					
		        wlh_erji.eq(index).animate({height:"0px"},500,function(){
		        	wlh_hover.eq(index).css({display:"none"});
		            $(".wlh-teacher").eq(index).css({height:"242px"});
		            wlh_blank.eq(index).css({display:"none"});
		            wlh_yiji.each(function(i,obj){
			            if(this.x==x){
			                $(this).parents(".wlh-teacher").css({height:"242px"});
			            }
			            $(".wlh-anniu").eq(index).css({background:"#474950"})
				    })
				    flag1=true; 
		        }); 		               
		        flag=true;
			}	              
		})
        $(".wlh-anniu").hover(function(){
        	$(this).css({background:"#2a9bf5"})
        },function(){
        	$(this).css({background:"#474950"})
        })
    }
})