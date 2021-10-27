$(document).ready(() => {

    $('.category').click((e) => {
        let currentElement = $(e.target);

        $('.products-container').hide();
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElement.addClass('active');

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');
    });

    $('#burgers-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#burgers-container .products-nav'
    });
    $('#burgers-container .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burgers-container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('#fries-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#fries-container .products-nav'
    });
    $('#fries-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#fries-container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('#sauces-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#sauces-container .products-nav'
    });
    $('#sauces-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#sauces-container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('#drinks-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#drinks-container .products-nav'
    });
    $('#drinks-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#drinks-container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('#reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });

})