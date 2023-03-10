$('#openBtn').click(function (e) { 
    if($('.HomeOpenSlider').width()=='250'){
        $('.HomeOpenSlider').animate({width:"0px"},0)
        $("#HomeMain").css("margin-left", "0px");
    }
    else{
        $('.HomeOpenSlider').animate({width:"250px"},0)
        $("#HomeMain").css("margin-left", "250px");
    }
});
$('#closeBtn').click(function (e) { 
    $('.HomeOpenSlider').animate({width:"0px"},0)
    $("#HomeMain").css("margin-left", "0px");
    
});
$('a').click(function (e) { 
    let hraf=$(e.target).attr("href");
    if( $(hraf).offset() !=undefined){
        let position=$(hraf).offset().top;
        $("html , body").animate({
            scrollTop: position
        },100);
    }
});
$(document).ready(function () {
    $("#Details div:first").css("display", "block");
    $("#Details h3").click(function () {
        $(this).next().slideToggle(500);
        $("#Details div").not($(this).next()).slideUp(500);
    });
});
function countdown() {
    var now = new Date();
    var eventDate = new Date(2023, 4, 3);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";

    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown, 1000);
}

countdown();
$(function () {
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        console.log(length)
        if (length >= 100) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(100-length);
        }
    });
});