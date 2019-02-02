
$(function () {
    responsiveScreen()

    // Set up vars
    var _window = $(window),
        panels = $('.panel'),
        panelsY = [];

    // Cache position of each panel
    $.each(panels, function (i, el) {
        panelsY.push(panels.eq(i).offset().top);
    });

    // Bind our function to window scroll
    _window.bind('scroll', function () {
        updateWindow();
    });

    // Update the window
    function updateWindow() {
        var y = _window.scrollTop();

        // Loop through our panel positions
        for (i = 0, l = panels.length; i < l; i++) {
            /* 
                Firstly, we break if we're checking our last panel,
                otherwise we compare if he y position is in between
                two panels
            */
            if ((i === l - 1) || (y >= panelsY[i] && y <= panelsY[i + 1])) {
                break;
            }
        };

        // Update classes
        panels.not(':eq(' + i + ')').removeClass('panel-fixed');
        panels.eq(i).addClass('panel-fixed');
    };
})

$(window).on('resize', function () {
    responsiveScreen()
});

function responsiveScreen() {
    if ($(window).width() < 1400) {
        $("#animated-thumbnials").css({
            "all": "unset"
        })
    }
    else {
        $("#animated-thumbnials").css({
            "all": ""
        })
    }

    var height = $("#animated-thumbnials").height() + 250 + "px"
    $("#YamPics").css({
        "height": height
    })
}

function scrollToTrack() {
    var myDiv = document.getElementById('Lies');
    myDiv.scrollTop = 0;
}