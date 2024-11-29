$(function(){
    $(window).scroll(function(){
        var scrTop = $(this).scrollTop();
        var winH = $(this).height();
        var startPoint = 150;

        scrTop > 50 ? $('header').addClass('trans-header') : $('header').removeClass('trans-header');
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

    $('.select-DNS').click(function(e){
        var menuH = $('.email-dropdown-menu').height();
        
        if(menuH != 0) {
            $('.email-dropdown-menu').css({
                'overflow' : 'hidden',
                'height' : '0',
                'padding-bottom' : '0',
                'padding-top' : '0',
                'opacity' : '0'
            });
        }
        else if(menuH == 0) {
            $('.email-dropdown-menu').css({
                'overflow' : 'auto',
                'height' : '254px',
                'padding-bottom' : '30px',
                'padding-top' : '30px',
                'opacity' : '1'
            });
        }
        return false;
    });
    $('.insert-comp-type-view').click(function(e){
        var menuH = $('.info-dropdown-menu').height();
        
        if(menuH != 0) {
            $('.info-dropdown-menu').css({
                'overflow' : 'hidden',
                'height' : '0',
                'padding-bottom' : '0',
                'padding-top' : '0',
                'opacity' : '0'
            });
        }
        else if(menuH == 0) {
            $('.info-dropdown-menu').css({
                'overflow' : 'auto',
                'height' : '221px',
                'padding-bottom' : '30px',
                'padding-top' : '30px',
                'opacity' : '1'
            });
        }
        return false;
    });
});