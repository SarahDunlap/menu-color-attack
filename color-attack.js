//change colors here to the colors you want
var colors = ["#BD232A","#168FA1","#000000","#5db845","#d0c72b","#006fb2"];
var colorCount = -1;

function findColor () {
  colorCount += 1;
  if (colorCount === colors.length) {
  colorCount = 0;
  }
}

//changes color of the border bottom but make sure you have a border set up in css
//also this targets the li tag so all items using li could potentially have a border color
$("li").hover(function() {
    findColor(); 
    $(this).find("a").css("border-bottom-color", colors[colorCount]);
}, function() {
    $(this).find("a").removeAttr("style");
});

