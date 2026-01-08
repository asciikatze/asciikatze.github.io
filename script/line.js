function getRandomstring() {
  var string = new Array();
  string[0] = "why should i bother reading something that nobody could be bothered to write";
  string[1] = "it's not that i have something to hide; i have nothing i want you to see";
  string[2] = "lack the ability to safely participate in group ordering at restaurants";
  string[3] = "if the oppressed cannot access technology, then it's not revolutionary";
  string[4] = "just a reminder that if you were lazy then you'd be having fun";
  string[5] = "culture shouldn't exist only for those who can afford it";
  string[6] = "i'm sorry if i gave you the impression that i know stuff";
  string[7] = "not good with verbal expression in an immediate fashion";
  string[8] = "easily undoable things are pretty great";
  var i = Math.floor(Math.random()*string.length);
  document.write(string[i]);
  }
getRandomstring();
