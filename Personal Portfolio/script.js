$(document).ready(function () {

    $('section').hide();
    $('section.html').show();
    $('menu.a').click(function () {
        $('menu.a').removeClass('active');
        $(this).addClass('active');
    });
    $('a.html').click(function () {
        $('section').hide("slide", { direction: "left" }, 1000);
        $('section.html').show("slide", { direction: "right" }, 1000);
    });
    $('a.css').click(function () {
        $('section').hide("slide", { direction: "left" }, 1000);
        $('section.css').show("slide", { direction: "right" }, 1000);
    });
    $('header').stickUp();
});

//just for the button
