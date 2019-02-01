
$(function(){
    responsiveScreen()
})

$(window).on('resize', function(){
    responsiveScreen()
});

function responsiveScreen(){
    if($(window).width() <1400){
        $("#animated-thumbnials").css({
            "all" : "unset"
        })
    }
    else{
        $("#animated-thumbnials").css({
            "all" : ""
        })
    }

    var height = $("#animated-thumbnials").height() + 250 + "px"
    $("#YamPics").css({
        "height" : height
    })
}