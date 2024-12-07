function getRandomstring() {
  var string = new Array();
  string[0] = "it's not that i have something to hide; i have nothing i want you to see";
  string[1] = "lack the ability to safely participate in group ordering at restaurants";
  string[2] = "just a reminder that if you were lazy then you'd be having fun";
  string[3] = "i'm sorry if i gave you the impression that i know stuff";
  string[4] = "not good with verbal expression in an immediate fashion";
  var i = Math.floor(Math.random()*string.length);
  document.write(string[i]);
  }
getRandomstring();
