// fade in divs using opacity
// set opacity to 0 in .css file, and this will animate the opacity css element to bring it back to opacity=1 after a set delay.


$(document).ready(function(){
$("#div1").css('opacity',0).delay(1000).animate({opacity:1}, 1000);
$("#div2").css('opacity',0).delay(2000).animate({opacity:1}, 1000);
$("#div3").css('opacity',0).delay(3000).animate({opacity:1}, 1000);
$("#div4").css('opacity',0).delay(4000).animate({opacity:1}, 1000);
});