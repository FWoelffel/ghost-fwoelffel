$(function() {
    $("[data-toggle='collapse']").on("click", function (e) {
        e.preventDefault();
        var id = $('.v-icon[data-target="' + $(this).attr("data-target") + '"]');
        var icon = $(id).children("i");
        if (/fa-minus/i.test($(icon).attr("class"))) {
            $(icon).removeClass("fa-minus").addClass("fa-plus");
        }
        else {
            $(icon).removeClass("fa-plus").addClass("fa-minus");
        }
    });
});