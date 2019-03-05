$("document").ready(function() {

$(".angle").click(function() {
  $('html,body').animate({
      scrollTop: $("#welcome").offset().top},
      'slow');
  });

  $(".contact-us").click(function() {
    $('html,body').animate({
        scrollTop: $("#form").offset().top},
        'slow');
    });


});
 



