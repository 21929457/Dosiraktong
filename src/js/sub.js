$(function(){
    $(window).scroll(function(){
        var scrTop = $(this).scrollTop();
        var winH = $(this).height();
        var startPoint = 150;

        if(scrTop > 50 ) {
            $('header').addClass('active');
            $('.logo img').attr('src' , '../image/icon/logo.png');
        } else {
            $('header').removeClass('active');
            $('.logo img').attr('src' , '../image/icon/logo_white.png');
        }
        scrTop > winH - 150 ? $('.go-to-top').addClass('show') : $('.go-to-top').removeClass('show');

        $('section').each(function(i){
            var secOff = $(this).offset();
            var startPoint = 150;
            var secIndex = i;

            if(secOff.top - startPoint <= scrTop && scrTop <= secOff.top + winH) {
                $(this).addClass('active');
            }
        });
    });
    $('.go-to-top a').click(function(e){

        $('html , body').stop();
        $('html , body').animate({scrollTop : 0} , 1000);

        return false;
    });
});