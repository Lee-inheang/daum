$(function(){
    $('.latest-txt li').hover(function(){
        $('.latest-txt li').removeClass('active');
        $(this).addClass('active');
    });
});