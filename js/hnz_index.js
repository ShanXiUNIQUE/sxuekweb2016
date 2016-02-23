$(function(){
	//nav 课程体系 跳转
	var kctx=$('.nav-list li:contains(课程体系)');
	var kcTop=$('.course-box').position().top-75;
	touch.on(kctx[0],'tap', function(ev){
		$("body,html").animate({scrollTop:kcTop},200)
	});
	//nav 师资团队 跳转
	var sztd=$('.nav-list li:contains(师资团队)');
	var sztdTop=$('.wq-sztdbg').position().top+200;
	touch.on(sztd[0],'tap', function(ev){
		$("body,html").animate({scrollTop:sztdTop},400)
	});

	//获取窗口 宽度
	var clientW=$(window).width();
	$(window).resize(imgResize);
	imgResize();
	function imgResize(){
		clientW=$(window).width();
	}

	//学生作品
	var stuLinks=$('.stu-l-t a');
	stuLinks.each(function(i){
		this.index=i;
	})
	var stuLists=$('.stu-l-list>ul');
	touch.on('.stu-l-t a','tap', function(ev){
		var Elm=this.nodeName=='SPAN'?this.parentNode:this;
		stuLinks.removeClass("hnz-stu-hot");
		$(Elm).addClass("hnz-stu-hot");
		stuLists.css('display','none').eq(Elm.index).css("display",'block');
	});

	//stu-l-t
	var stuLT=$('.stu-l-t');
	touch.on(stuLT[0], 'touchstart', function(ev){
		ev.preventDefault();
	});
	var ow=stuLT.width()-clientW;
	touch.on(stuLT[0], 'swiperight', function(ev){
		stuLT[0].style.left = "0px";
	});
	touch.on(stuLT[0], 'swipeleft', function(ev){
		stuLT[0].style.left = -ow+'px';
	});

	//教师团队
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