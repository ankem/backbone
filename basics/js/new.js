$( document ).ready(function() {
    $('.execute').click(function () {
        eval($(this).siblings().html());
    });
});

