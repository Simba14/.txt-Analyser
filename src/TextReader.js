//Returns the unique words of a txt file and the number of occurences
function TextReader() {
  this.wordList = []
}

TextReader.prototype.populateWordList = function(text) {
  this.wordList = text.split(' ');
}
