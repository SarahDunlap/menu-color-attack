var colors = ["#BD232A","#168FA1","#000000","#5db845","#d0c72b","#006fb2"];
var colorCount = -1;

function findColor () {
  colorCount += 1;
  if (colorCount === colors.length) {
  colorCount = 0;
  }
  

}


$("li").hover(function() {
    findColor(); 
    $(this).find("a").css("border-bottom-color", colors[colorCount]);
}, function() {
    $(this).find("a").removeAttr("style");
});#   m e n u - c o l o r - a t t a c k  
 