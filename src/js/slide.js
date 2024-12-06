var main = new Swiper(".main" , {
    loop : true,
    effect : 'fade',
    speed: 1300,
    touchRatio : 0,
    autoplay : {
        delay : 5000,
        disableOnInteraction: false
    }
})
var about = new Swiper(".ab-slide" , {
    slidesPerView : 4,
    navigation: {
        nextEl: '.main-btn-next',
        prevEl: '.main-btn-prev'
    },
})