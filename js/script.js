$(document).ready(function () {

    $(".quote").hide();
    $(".flexboxchild").on('click', function () {
        $(this).find('.quote').toggle();
    });
});
