document.write("&nbsp;&nbsp;/\\_/\\<br>&nbsp;&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___");
var elem = document.getElementById("animation");
var inst = setInterval(getAnimation, 2000);
var counter = 0;
var frame = [
  "&nbsp;&nbsp;/\\_/\\<br>>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)__/",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___"
];
function getAnimation() {
  elem.innerHTML = frame[counter];
  counter++;
  if (counter >= frame.length) {
    counter = 0;
//  clearInterval(inst);
  }
}
