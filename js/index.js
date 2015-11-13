$.animations = {
    init:function(settings){
        var $contaier     = $(settings.container),
            $operationer  = $(settings.operationer);

        var initTop = "5px";
        $contaier.children().each(function(){
            $(this).css("top",initTop+=initTop);
        });
    }
};
$.fn.animations = function(settings){

    var ds = {
        type        :  "putPicInFolder",
        container   :  "ul#container",
        operationer :  "div#operationer",
        buttongroup :  "div#btn-group"
    };
    $.extend(ds,settings);

    $.animations.init.call(settings);

    switch(settings.type){
      case "putPicInFolder":

           break;
    }
}
$(".button.btn-sonar").click(function(){

    $(this).addClass("active");
    $(this)[0].addEventListener("webkitAnimationEnd",function(){
        $(this).removeClass("active")
    })
    $(this)[0].addEventListener("animationEnd",function(){
        $(this).removeClass("active")
    })
});
