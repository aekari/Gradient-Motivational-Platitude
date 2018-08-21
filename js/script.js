$(document).ready(function () {

    var $allQuotes = $('.flexboxchild .quote'); // variable that selects every .quote within .flexboxchild
    var $allFlexBoxes = $('.flexboxchild'); // variable that selects every .flexboxchild

    $($allQuotes).hide(); // hide all the quotes first, then

    $('.flexboxchild').on('click', function () { // when a .flexboxchild is clicked
        var $this = $(this).find('.quote'); // variable that finds the .quote within the .flexboxchild that was clicked

        $($this).fadeToggle(); // fadeToggle the specific .quote
        $($allQuotes).not($this).hide(); // hide all the other .quotes
    });
});
