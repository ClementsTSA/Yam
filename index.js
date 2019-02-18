
/* When website loads */

$(function () {
    responsiveness()
})

/* When website resizes */


$(window).resize(function () {
    responsiveness()
})

/* Animation jQuery plugin */

$("a").click(function () {
    console.log("Scroll")
    var pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#" + pageId).offset().top }, 1000);
});


setInterval(() =>{
    var source = document.getElementById("YamTourPic").src
    if(source.includes("yam-tour.png") ){
        $("#YamTourPic").attr('src', 'images/yam-lookout.png');
    }
    else{
        $("#YamTourPic").attr('src', 'images/yam-tour.png');
    }

},3000)


function responsiveness(){
    if(window.innerWidth <635){
        $(".ml4").css({
            "position": "relative", "font-weight": "900","font-size": "1em"
        })

        $("#merch-formating").css({
            "margin-right":"0%", "margin-left": "0%"

        })
    }

    else if(window.innerWidth <1052){
        $(".ml4").css({
            "position": "relative", "font-weight": "900","font-size": "2em"
        })

        $("#merch-formating").css({
            "margin-right":"10%", "margin-left": "10%"

        })
    }

    else{
        $(".ml4").css({
            "position": "relative", "font-weight": "900","font-size": "3em"
        })

        $("#merch-formating").css({
            "margin-right":"10%", "margin-left": "10%"

        })
    }
}