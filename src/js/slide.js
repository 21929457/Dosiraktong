var main = new Swiper(".main" , {
    loop : true,
    effect : 'fade',
    speed: 1300,
    touchRatio : 0,
    autoplay : {
        delay : 5000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.main-next',
        prevEl: '.main-prev'
    },
})
let pagination = $('.main .pagination li');
let btn = $('section.banner-section .inner .banner-link');

pagination.eq(0).addClass('active');
btn.eq(0).addClass('hide')

main.on('transitionEnd' , function(){
    let index = this.realIndex;

    btn.eq(0).removeClass('hide')
    pagination.removeClass('active');

    if(index == 0) {
        $('.banner-text').html(`
            <p>도시락통</p>
            <p>도시락으로 다 통한다, 해외데이터는 도시락통</p>
        `)
        pagination.eq(0).addClass('active');
        btn.eq(0).addClass('hide')
    } else if(index == 1) {
        $('.banner-text').html(`
            <p>와이파이도시락</p>
            <p>여럿이 함께 쓰는 대용량 데이터, 장거리, 장기 할인은 기본</p>
        `)
        pagination.eq(1).addClass('active');
        btn.eq(0).prop('href','https://www.wifidosirak.com/v3/index.aspx?utm_source=tong&utm_medium=mainb&utm_campaign=brand');
    } else if(index == 2) {
        $('.banner-text').html(`
            <p>도시락유심</p>
            <p>믿을 수 있는 현지 통신사의 선불유심, 유심도 도시락으로!</p>
        `)
        pagination.eq(2).addClass('active');
        btn.eq(0).prop('href','https://dosiraksim.com/?utm_source=tong&utm_medium=mainb&utm_campaign=brand');
    } else if(index == 3) {
        $('.banner-text').html(`
            <p>도시락eSIM</p>
            <p>요금제, 통신사 변경 없이 데이터 충전가능한 아이폰유저를 위한 가장 간편한 로밍</p>
        `)
        pagination.eq(3).addClass('active');
        btn.eq(0).prop('href','https://dosirakesim.com/?utm_source=tong&utm_medium=mainb&utm_campaign=brand');
    }
})
var about = new Swiper(".ab-slide" , {
    slidesPerView : 4,
    navigation: {
        nextEl: '.main-btn-next',
        prevEl: '.main-btn-prev'
    },
})