function getRandomstring() {
  var string = new Array();
  var i = Math.floor(Math.random()*5);
  string[0] = "i could shove an ice pick in my eye; i could eat some fish from last july";
  string[1] = "it's not that i have something to hide; i have nothing i want you to see";
  string[2] = "lack the ability to safely participate in group ordering at restaurants";
  string[3] = "i'm sorry if i gave you the impression that i know stuff";
  string[4] = "not good with verbal expression in an immediate fashion";
  document.write(string[i]);
}
getRandomstring();
