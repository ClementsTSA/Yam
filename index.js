$(window).on('resize', function(){
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
});