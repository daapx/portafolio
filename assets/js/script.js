$(function(){
    $("a.nav-link").click(function(event){
        var gato = this.hash;
        if(gato !== ""){
            event.preventDefault;
            $("html, body").animate({
                scrollTop: $(gato).offset().top - $("nav").outerHeight()
            }, 800, function(){
                return;
            });
        } else {
            $("html, body").animate({ scrollTop: 0}, 800, function(){
                window.location.hash = gato;
            });
        }
    });
    $("[data-toggle='tooltip']").tooltip();
});