$(document).ready(() => {
    $('#products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#products-nav'
    });
    $('#products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

})