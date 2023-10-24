$(document).ready(function () {
    //toggle button
    $('.menu-toggle').on('click',function(){
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    })
});