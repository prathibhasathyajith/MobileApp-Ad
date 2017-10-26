$(document).ready(function () {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("body").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 50;
        var newvalueY = height * pageY * -1 - 165;

        var newvalueXC3 = width * pageX * -1 + 50;
        var newvalueYC3 = height * pageY * -1 + 0;

        var newvalueXC1 = width * pageX - 330;
        var newvalueYC1 = height * pageY - 800;
        
        var mPointX = e.pageX*5/100;
        var mPointY = e.pageY*15/100;
    

        $('#top-image').css("background-position", newvalueX + "px  " + newvalueY + "px");
        $('#top-image-cloud3').css("background-position", -newvalueXC3 + "px  " + -newvalueYC3 + "px");
        $('#top-image-cloud1').css("background-position", (750+mPointX) + "px  " + (mPointY+300) + "px");

    });
    $(".mobile-interface").mousemove(function (e){
         e.stopPropagation();
    });
    
    $(".mobile-interface").mouseenter(function (e){
        $('#top-image').css("transition", "0.5s");
        $('#top-image').css("transform", "scale(1.5)");
    })
    $(".mobile-interface").mouseleave(function (e){
        
        $('#top-image').css("transform", "scale(1)");
        $('#top-image').css("transition", "0.1s");
    });
});
