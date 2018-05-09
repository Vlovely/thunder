
var GLOBLE = GLOBLE || {};
$(function(){

    $(".page_box").css("height", ($(window).height())+"px");

    $(window).resize(function(){
        $(".page_box").css("height", ($(window).height())+"px");
        //调整页面大小的时候让整屏居中。
        if(mainSlideIndex){
            if(GLOBLE.resizeTimer){
                clearInterval(GLOBLE.resizeTimer);
            }
            GLOBLE.resizeTimer = setTimeout(function(){
                mainSlideGoing = true;
                mainSlideGo();
            },200)
        }

    })
    /*单页滚动开始*/
//鼠标滚动实践绑定及检测
    var mainSlideIndex = 1;
    var mainSlideGoing = false;
    var mainSlideDelay = 0;
    var mainSlideTimer =  null;
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                //alert("滑轮向上滚动");
                mainSlideUp();
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                //alert("滑轮向下滚动 ie chrom");
                mainSlideDown();

            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向下滚动时
                //alert("滑轮向下滚动")
               mainSlideDown();

            }
            if (e.detail< 0) { //当滑轮向上滚动时
                //alert("滑轮向上滚动ff");
                mainSlideUp();
            }
        }
    }
//给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
//滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc;

//向下滚动
    function mainSlideDown(){
        if(!mainSlideGoing){
            mainSlideGoing = true;
            mainSlideIndex++;
            if(mainSlideIndex>$(".page_box").length){
                mainSlideIndex = 1;
            }
            mainSlideGo();
        }
        }
//向上滚动
    function mainSlideUp(){
        if(!mainSlideGoing) {
            mainSlideGoing = true;
            mainSlideIndex--;
            if (mainSlideIndex < 1) {
                mainSlideIndex = 1;
            }
            mainSlideGo();
        }
    }
    $(".page_box").eq(1).css("top",($(".page_box").height()*1)+"px")
    $(".page_box").eq(2).css("top",($(".page_box").height()*2)+"px")
    $(".page_box").eq(3).css("top",($(".page_box").height()*3)+"px")
    $(".page_box").eq(4).css("top",($(".page_box").height()*4)+"px")
    $(".page_box").eq(5).css("top",($(".page_box").height()*5)+"px")
//滚动方法
    function mainSlideGo(){
        $(".page_wp").animate({"top":"-"+ $(".page_box").height()*(mainSlideIndex-1) +"px"},600,"easeBothStrong",function(){
            mainSlideGoing = false;
            mainSlideDelay = 0;
            $(".circles a").removeClass("cur").eq(mainSlideIndex-1).addClass("cur");
        });
    }


//点击导航的时候，滚动到对应模块
    $(".circles a").click(function(){
        var navIndex = $(this).index();
        //if(navIndex == 4){
        //    navIndex = 3;
        //};
        if(navIndex != 5){
            mainSlideIndex = navIndex+1;
            mainSlideGo();
        }

    });

//在第一页的时候，点击向下翻页箭头
    $(".ic_page").click(function(){
        mainSlideIndex = 2;
        mainSlideGo();
    })


    //进入
    $('.page3 .product').hover(function(){
        $('.page3 .hover_box').eq($(this).index()).css({"left":"0","opacity":"1"})
        $(".page3 .product .cont_box .tb_box").eq($(this).index()).hide();
        console.log()
    },function(){
        $('.page3 .hover_box').eq($(this).index()).css({"left":"100%","opacity":"0"})
        $(".page3 .product .cont_box .tb_box").eq($(this).index()).show();
    })
    $('.page4 .product').hover(function(){
        $('.page4 .hover_box').eq($(this).index()).css({"left":"0","opacity":"1"})
        $(".page4 .product .cont_box .tb_box").eq($(this).index()).hide();
        console.log()
    },function(){
        $('.page4 .hover_box').eq($(this).index()).css({"left":"100%","opacity":"0"})
        $(".page4 .product .cont_box .tb_box").eq($(this).index()).show();
    })



    //选项卡
    $('.carousel_btns .btns_box>a').hover(function(){
        $('.btns_box>a').addClass('cur').siblings().removeClass('cur');
        console.log($(this).index())
        $('.ic_line').css("left",$(this).index()*152+"px")
        $('.carousel_list>li').eq($(this).index()).css("z-index","2").siblings().css("z-index","0")
    },function(){})


    //喜欢
    $('.btn_zan').click(function(){
        $(this).addClass('zaned')
    })



})


