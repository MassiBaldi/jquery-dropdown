$('.nav_right_item').click(function(){
  // alert('ciao');
  // $(this).children('.dropmenu').slideDown();
  var thisDM = $(this).children('.dropmenu');

  if (thisDM.hasClass('open')) {
    thisDM.removeClass('open');
  }
  else {
    $('.dropmenu').removeClass('open');
    thisDM.addClass('open');
  }
});

$('.nav_right_item').mouseenter(function(){
  var thisDM = $(this).children('.dropmenu');
  thisDM.addClass('open');
});

// Volendo mettere MOUSELEAVE che il sito non ha

$('.nav_right_item').mouseleave(function(){
  var thisDM = $(this).children('.dropmenu');
  thisDM.removeClass('open');
});


$('.nav_left_item').click(function(){

  var thisRight = $(this).children('.img');

  if (thisRight.hasClass('open')) {
    thisRight.removeClass('open');
  }
  else {
    $('.img').removeClass('open');
    thisRight.addClass('open');
  }
});

$('.nav_left_item').mouseenter(function(){
  var thisDMR = $(this).children('.img');
  thisDMR.addClass('open');
});

$('.nav_left_item').mouseleave(function(){
  var thisDM = $(this).children('.img');
  thisDM.removeClass('open');
});
