$(function(){
	$(".wq-techerint").hover(function(){
		$(this).children().css("color","#fff")
	},function(){
		$(this).children().css("color","")
	})
	$(".wq-techerpic").click(function(){
	  var mask=$("<div>").css({
        width:"100%",
        height:"100%",
        background:"rgba(0,0,0,0.5)",
        position:"absolute",
        left:0,
        top:0,
        zIndex:1
	  })
	  $(".wq-sztdbg").append(mask)	
	  //wq-sztd-inbg
	  var xq=$("<div>").css({
	  	width:"100%",
	  	height:"100%",
	  	position:"absolute",
	  	left:0,
	  	top:0,
	  	background:"#fff",
	  	zIndex:9,
	  	overflow:"hidden"
	  })
	  $(".wq-sztd-inbg").append(xq)
	  var src=$(this).find("img").attr("src")
	  var img=$("<img src="+src+">").css({
	  	width:"50%",
	  })
	  xq.append(img)
	  var index=$(this).index(".wq-techerpic")
	  var title=$(".wq-techerint").eq(index).find("h3").html()
	  var intdro=$(".wq-techerint").eq(index).find(".wq-int").html()
	  var rightbox=$("<div>").css({
	  	width:"50%",
	  	height:"100%",
	  	float:"right"
	  })
	  var h3=$("<h3>").html(title).css({
         fontSize:"30px",
         marginLeft:"68px",
         lineHeight:"136px"
	  })
	  var intdtuce=$("<div>").html(intdro).css({
        fontSize:"18px",
        marginLeft:"68px",
        lineHeight:"40px"
	  })
	  rightbox.append(h3).append(intdtuce)
	  xq.append(rightbox)
	  xq.click(function(){
	  	$(this).remove()
	  	mask.remove()
	  })
	})
})