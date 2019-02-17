
/* When website loads */

$(function () {
    if(window.innerWidth <635){
        $(".ml4").css({
            "position": "relative", "font-weight": "900","font-size": "1em"
        })
    }

    else if(window.innerWidth <1052){
        $(".ml4").css({
            "position": "relative", "font-weight": "900","font-size": "2em"
        })
    }

    else{
        $(".ml4").css({
            "position": "relative", "font-weight": "900","font-size": "3em"
        })
    }
})

/* When website resizes */


$(window).resize(function () {
    if(window.innerWidth <635){
        $(".ml4").css({
            "position": "relative", "font-weight": "900","font-size": "1em"
        })
    }

    else if(window.innerWidth <1052){
        $(".ml4").css({
            "position": "relative", "font-weight": "900","font-size": "2em"
        })
    }

    else{
        $(".ml4").css({
            "position": "relative", "font-weight": "900","font-size": "3em"
        })
    }
})

/* Animation jQuery plugin */

$("a").click(function () {
    console.log("Scroll")
    var pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#" + pageId).offset().top }, 1000);
});