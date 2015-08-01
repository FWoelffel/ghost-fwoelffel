$("#navbar").on("hidden.bs.collapse", function(){
    $(".navbar-header").toggleClass("navbar-collapse-expanded")
});
$("#navbar").on("show.bs.collapse", function(){
    $(".navbar-header").toggleClass("navbar-collapse-expanded");
});