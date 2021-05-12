/*Progress*/

$(document).ready(function(){
	
  $("#skillbar_html").animate({width:'85%'},1500);
  $("#skillbar_py").animate({width:'90%'},1500);
  $("#skillbar_js").animate({width:'75%'},1500);
  $("#skillbar_net").animate({width:'78%'},1500);
  $("#skillbar_java").animate({width:'80%'},1500);
  });

/*Progress*/

/* image1 */
var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
  snippet.forEach(function (snippet) {
    snippet.addEventListener('mouseout', function (event) {
      if (event.target.parentNode.tagName === 'figure') {
        event.target.parentNode.classList.remove('hover')
      } else {
        event.target.parentNode.classList.remove('hover')
      }
    });
  });
}
/*image2 */
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);