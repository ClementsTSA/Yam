
/* When website loads */

$(function () {

})


$("a").click(function () {
    console.log("Scroll")
    var pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#" + pageId).offset().top }, 1000);
});