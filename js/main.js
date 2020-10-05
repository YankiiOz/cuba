$(function(){
$('.photo_slider').slick({
    prevArrow: '<button type="button" class="slick-prev" ><img src="images/arrow_left.svg" alt=""></button>',
    nextArrow: '<button type="button"class="slick-next"><img src="images/arrow_right.svg" alt=""></button>'

})

$('.menu_btn').on('click', function(){
    $('.menu_list').slideToggle();
});
});