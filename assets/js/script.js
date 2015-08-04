function checkSize() {
    if($(".navbar-header").css("float") == "none") {
        $(document).trigger("size.sm");
    }
    else {
        $(document).trigger("size.md");
    }
}

// ---------------------------

$(function() {

    $(document).on("size.md", function () {
        $("#main-navbar").removeClass("navbar-collapse-expanded");
        $("#navbar-links").removeClass("in");
        $("#navbar-links").attr("aria-expanded", false);
    });

    $("#main-navbar #navbar-links").on("hidden.bs.collapse", function () {
        $("#main-navbar").toggleClass("navbar-collapse-expanded")
    });

    $("#main-navbar #navbar-links").on("show.bs.collapse", function () {
        $("#main-navbar").toggleClass("navbar-collapse-expanded");
    });

    $("#main-navbar").affix({
        offset: {
            top: function() {
                return $("#main-header").height() - $("#navbar-links").height();
            }
        }
    });

    $(window).resize(checkSize);
    
});
