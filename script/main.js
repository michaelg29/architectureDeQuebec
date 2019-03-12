$(document).ready(function() {
    $("#navbar").load("/architectureDeQuebec/nav.html #main-nav");

    $("span.expandable-zone").each(function() {
        var img_src = $(this).attr("img-src");
        var src_title = $(this).attr("src-title");

        $(this).append("<div class=\"expandable-content\">" +
                        "\n\t<div class=\"img-section\">" +
                        "\n\t\t<img class=\"img-with-link\" src=\"" + img_src + "\" src-title=\"" + src_title + "\"/>" +
                        "\n\t</div>" +
                        "\n</div>");
    });

    $(".img-section").each(function() {
        var src = $(this).find(".img-with-link").attr("src");
        var src_title = $(this).find(".img-with-link").attr("src-title");

        $(this).append("<p class=\"img-link\">Source: <a target=\"_blank\" href=\"" + src + "\">" + src_title + "</a></p>");
    });

    var num = 1;

    $("footnote").each(function() {
        var href = $(this).html();

        $(this).replaceWith("<sup><a target=\"_blank\" href=\"" + href + "\">" + num + "</a></sup>");

        num++;
    });

    $("definition").each(function() {
        var original = $(this).html();
        var definition = $(this).attr("def");

        $(this).replaceWith("<span tooltip=\"true\" tooltip-position=\"top\" tooltip-data=\"'" + definition + "'\">" + original + "</span>");
    });
});