document.write("|");
var elem = document.getElementById("animation");
var inst = setInterval(getAnimation, 500);
var counter = 0;
var frame = [
  "&nbsp;&nbsp;/|",
  "&nbsp;&nbsp;/\\|",
  "&nbsp;&nbsp;/\\_|",
  "&nbsp;&nbsp;/\\_/|",
  "&nbsp;&nbsp;/\\_/\\|",
  "&nbsp;&nbsp;/\\_/\\<br>|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^<|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^<<br>|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___|",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)__/",
  "&nbsp;&nbsp;/\\_/\\<br>>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)__/",
  "&nbsp;&nbsp;/\\_/\\<br>>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)__/",
  "&nbsp;&nbsp;/\\_/\\<br>>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)__/",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>&nbsp;&nbsp;>^,^<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___"
];
function getAnimation() {
  elem.innerHTML = frame[counter];
  counter++;
  if (counter >= frame.length) {counter = frame.length-8}
}
