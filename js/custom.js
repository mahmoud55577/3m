/**
 * Created by HP on 02/12/2016.
 */
$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('#bootstrap-touch-slider').bsTouchSlider();
});


function goToByScroll(id){
    $('html,body').animate({scrollTop: $(id).offset().top},'slow');
}

$(document).ready(function(){
    $('nav a').click(function(){
        goToByScroll($(this).attr('href'));
        return false;
    });
});

$('#backtotop').hide();

//top
$(function() {
    $('#backtotop').hide();
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#backtotop').fadeIn();
        } else {
            $('#backtotop').fadeOut();
        }
    });

    $('#backtotop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});