//Returns the unique words of a txt file and the number of occurences
function TextReader() {
  this.wordList = []
}

TextReader.prototype.populateWordList = function(text) {
  textWithoutPunctuation = text.replace(/[^\w]/g, ' ');
  this.wordList = textWithoutPunctuation.split(' ').filter(Boolean);
}
