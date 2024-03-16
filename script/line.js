function getRandomstring() {
  var string = new Array();
  string[0] = "i could shove an ice pick in my eye; i could eat some fish from last july";
  string[1] = "it's not that i have something to hide; i have nothing i want you to see";
  string[2] = "i knew who i was this morning; but i have changed a few times since then";
  string[3] = "lack the ability to safely participate in group ordering at restaurants";
  string[4] = "just a reminder that; if you were lazy then you'd be having fun";
  string[5] = "i'm sorry if i gave you the impression that i know stuff";
  string[6] = "not good with verbal expression in an immediate fashion";
  var i = Math.floor(Math.random()*string.length);
  document.write(string[i]);
}
getRandomstring();
