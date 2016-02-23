/**
 * Created by Administrator on 2016/2/18.
 */
$(function(){
    //底部翻页宽度
    var widthA=$(".lx_pageNow").outerWidth(true);
    var lengthA=$(".lx_pageTurn a").length-1;
    var widths=widthA*lengthA+140
    $(".lx_pageTurn").css("width",widths);

    var widthA=$(".lx_pageNow1").outerWidth(true);
    var lengthA=$(".lx_pageTurn1 a").length-1;
    var widths=widthA*lengthA+140
    $(".lx_pageTurn1").css("width",widths);

   //lx_student
    var a=$(".lx_student a");
    for(var i=0;i<a.length;i++){
        a[i].addEventListener('touchstart',function(){},false);
    }



})
