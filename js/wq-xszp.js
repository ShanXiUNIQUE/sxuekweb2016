$(function(){
	$(".wq-imgbox").hover(function(){
		$(this).addClass("wq-hot")
	},function(){
		$(this).removeClass("wq-hot")
	})
	var windowheight=$(window).height()
  var windowwidth=$(window).width()
 $(".wq-imgbox").click(function(){
		if(windowwidth>768){
    var mask=$("<div>").css({
			width:"100%",
			minHeight:windowheight+"px",
			background:"rgba(0,0,0,0.5)",
			position:"fixed",
			left:0,
			top:0,
      textAlign:"center"
		})}else{
    var mask=$("<div>").css({
      width:"100%",
      background:"rgba(0,0,0,0.5)",
      position:"absolute",
      left:0,
      top:0,
      textAlign:"center"
    })  
    }
	  $("body").append(mask)
    var src=$(this).attr("data-src")
    var img=$("<img>").attr("src",src).css("maxWidth","80%")
    mask.append(img)
    var value=30;
    var value2=100;
	    mousewheel(mask[0],function(e){
          if(e.preventDefault)
          e.preventDefault()
          else
          e.returnValue="false"
          
          var top=parseInt(mask.css("top"))
          if(top<0){
          top+=value;
          mask.css("top",top+"px")
          }else{
            mask.css("top",0) 
          }
	    },function(e){
          if(e.preventDefault)
          e.preventDefault()
          else
          e.returnValue="false"
          var top=parseInt(mask.css("top"))
          var maskheight=parseInt(mask.css("height"))
          if(top>windowheight-maskheight){
          top-=value;
          mask.css("top",top+"px")
          }else{
           top=windowheight-maskheight
           mask.css("top",top+"px")
          }
	    })
     mask.click(function(){
      $(this).remove()
     }) 
     //touch.on()
	}) 
function mousewheel(obj,upfun,downfun){
    if(obj.addEventListener){
     obj.addEventListener("mousewheel",fun,false)
     obj.addEventListener("DOMMouseScroll",fun,false) 
    }else{
      obj.attachEvent("onmousewheel",fun)
    }
    function fun(e){
      var ev=e||window.event;
      if(ev.detail==-3||ev.wheelDelta==120){
        if(upfun){
          upfun.call(obj,ev)
        }    
      }else if(ev.detail==3||ev.wheelDelta==-120){
        if(downfun){
          downfun.call(obj,ev)
        }
      }  
    }   
  }  
 
})