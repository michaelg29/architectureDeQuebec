jQuery(document).ready(function() {
    jQuery.noConflict();

    jQuery("#navbar").load("/architectureDeQuebec/nav.html #main-nav");

    jQuery("span.expandable-zone").each(function() {
        var img_src = jQuery(this).attr("img-src");
        var src_title = jQuery(this).attr("src-title");

        jQuery(this).append("<div class=\"expandable-content\">" +
                        "\n\t<div class=\"img-section\">" +
                        "\n\t\t<img class=\"img-with-link\" src=\"" + img_src + "\" src-title=\"" + src_title + "\"/>" +
                        "\n\t</div>" +
                        "\n</div>");
    });

    jQuery(".img-section").each(function() {
        var src = jQuery(this).find(".img-with-link").attr("src");
        var src_title = jQuery(this).find(".img-with-link").attr("src-title");

        jQuery(this).append("<p class=\"img-link\">Source: <a target=\"_blank\" href=\"" + src + "\">" + src_title + "</a></p>");
    });

    var num = 1;

    jQuery("footnote").each(function() {
        var href = jQuery(this).html();

        jQuery(this).replaceWith("<sup><a target=\"_blank\" href=\"" + href + "\">" + num + "</a></sup>");

        num++;
    });

    jQuery("definition").each(function() {
        var original = jQuery(this).html();
        var definition = jQuery(this).attr("def");

        jQuery(this).replaceWith("<span tooltip=\"true\" tooltip-position=\"top\" tooltip-data=\"'" + definition + "'\">" + original + "</span>");
    });
});