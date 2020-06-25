//skills bar animation when scrolling
$(document).ready(function() {
  $(window).scroll( function(){
    $('#skills').each(function(){
      var bottom_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop();

      if(bottom_of_window > bottom_of_object/2){
        $('.html, .css, .excel, .powerpoint, .word, .photoshop').stop().animate({width: '90%'},800);
        $('.js, .git').stop().animate({width: '70%'},800);
        $('.illustrator').stop().animate({width: '60%'},800);
      }
    });
  });
});

//portfolio_design img modal
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
