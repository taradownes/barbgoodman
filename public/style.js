$("document").ready(function() {

$(".pagedown").click(function() {
  $('html,body').animate({
      scrollTop: $("#welcome").offset().top},
      'slow');
  });


});
 



