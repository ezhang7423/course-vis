

$(function() {
    $("div.children-wrapper").on("click", function(e){
        // $("body").append(e.target)
        // e.target.classList.add("main")
        e.target.classList.add("new-main")
        $(".boxes-wrapper")[0].style.animationFillMode = "forwards";
        $(".boxes-wrapper")[0].style.animationName = "slideUp";          
        e.preventDefault(); //to prevent any other unwanted behavior clicking the div might cause
    });
    $("div.parent-wrapper").on("click", function(e){
        // $("body").append(e.target)
        // e.target.classList.add("main")
        e.target.classList.add("new-main");
        $(".boxes-wrapper")[0].style.animationFillMode = "forwards";
        $(".boxes-wrapper")[0].style.animationName = "slideDown";          
        e.preventDefault(); //to prevent any other unwanted behavior clicking the div might cause
    });
});