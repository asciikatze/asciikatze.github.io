document.write("&nbsp;&nbsp;/\\_/\\<br>>O,o<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___");
var elem = document.getElementById("glitch");
var inst = setInterval(getAnimation, 500);
var counter = 0;
var frame = [
  "&nbsp;&nbsp;/\\_/\\<br>>O,x<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>O,o<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>O,o<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>O,o<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>O,x<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>O,o<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>O,o<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>X,o<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>O,o<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>X,x<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>X,x<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>X,x<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>X,x<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___",
  "&nbsp;&nbsp;/\\_/\\<br>>T,T<<br>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>&nbsp;&nbsp;(__)___"
  ];
function getAnimation() {
  elem.innerHTML = frame[counter];
  counter++;
  if (counter >= frame.length) {
    counter = 0;
//  clearInterval(inst);
    }
  }
