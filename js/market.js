$(function(){
    $('.h_hover').hover(function(){
        $('.h_subnav_wp').css("height","50px")
    },function(){
        $('.h_subnav_wp').css("height",0)
    })
    $('.cpin_item').hover(function(){
        $('.c_pannel_img_item').eq($(this).index()).css("display","list-item").siblings().css("display","none")
        $(this).addClass('cur').siblings().removeClass('cur')
    },function(){})

    $('.c_real_list').append($('.c_real_list>li').eq(0).clone(true))
    var len=$('.c_real_item').length
    var kk=0
    var index=0
    $('.c_disc_item').hover(function(){
        index=$(this).index()
        kk=$(this).index()
        $('.c_real_list').stop(true).animate({left:-1200*index},500)
        $('.c_disc_item').removeClass('cur').eq(kk).addClass('cur')
    })

});