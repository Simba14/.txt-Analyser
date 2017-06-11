//Returns the unique words of a txt file and the number of occurences
function TextReader() {
  this.wordList = [];
  this.wordData = {};
}

TextReader.prototype.populateWordList = function(text) {
  let textWithoutPunctuation = text.replace(/[^\w]/g, ' ');
  let wordArray = textWithoutPunctuation.split(' ').filter(Boolean);
  this.wordList = this.convertWordsToLowerCase(wordArray);
}

TextReader.prototype.countOccurrenceOfEachWord = function() {
  for (let i = 0; i < this.wordList.length; i++) {
    let word = this.wordList[i];
    if (typeof this.wordData[word] === 'undefined') {
      this.wordData[word] = 1;
    } else {
      this.wordData[word]++;
    }
  }
}

TextReader.prototype.convertWordsToLowerCase = function(wordArray) {
  return wordArray.map(function(word) {
    return word.toLowerCase();
  })
}

TextReader.prototype.areOccurrencesPrimeNumbers = function() {
  for (let key in this.wordData) {
    let occurrence = this.wordData[key];
    this.wordData[key] = [occurrence, this.isAPrimeNumber(occurrence)];
  }
}

TextReader.prototype.isAPrimeNumber = function(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}
