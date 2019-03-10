$(document).ready(function() {
    $(".img-section").each(function() {
        var src = $(this).find(".img-with-link").attr("src");
        var src_title = $(this).find(".img-with-link").attr("src-title");
    
        $(this).find(".img-link").find("a").attr("href", src);
        $(this).find(".img-link").find("a").html(src_title);
    });

    $("#navbar").load("nav.html #main-nav");
/*
    $.get("/nav.html", function(nav_html) {
        $("#navbar").html(nav_html);
    });*/
});