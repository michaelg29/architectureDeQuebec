$(document).ready(function() {
    $(".img-section").each(function() {
        var src = $(this).find(".img-with-link").attr("src");
        var src_title = $(this).find(".img-with-link").attr("src-title");

        $(this).append("<p class=\"img-link\">Source: <a target=\"_blank\" href=\"" + src + "\">" + src_title + "</a></p>");

        /* .append( "<p>Test</p>" ); 
            <p class="img-link">Source: <a target="_blank" href=""></a></p>
        */
    
        /*$(this).find(".img-link").find("a").attr("href", src);
        $(this).find(".img-link").find("a").html(src_title);*/
    });

    $("#navbar").load("/nav.html #main-nav");
});