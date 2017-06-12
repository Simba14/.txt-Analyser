//Returns the unique words of a txt file and the number of occurences
function TextAnalyser() {
  this.wordList = [];
  this.wordData = {};
}

TextAnalyser.prototype.populateWordList = function(text) {
  let textWithoutPunctuation = text.replace(/[^\w]/g, ' ');
  let wordArray = textWithoutPunctuation.split(' ').filter(Boolean).sort();
  this.wordList = this.convertWordsToLowerCase(wordArray);
}

TextAnalyser.prototype.countOccurrenceOfEachWord = function() {
  for (let i = 0; i < this.wordList.length; i++) {
    let word = this.wordList[i];
    if (typeof this.wordData[word] === 'undefined') {
      this.wordData[word] = 1;
    } else {
      this.wordData[word]++;
    }
  }
}

TextAnalyser.prototype.convertWordsToLowerCase = function(wordArray) {
  return wordArray.map(function(word) {
    return word.toLowerCase();
  })
}

TextAnalyser.prototype.areOccurrencesPrimeNumbers = function() {
  for (let key in this.wordData) {
    let occurrence = this.wordData[key];
    this.wordData[key] = [occurrence, this.isAPrimeNumber(occurrence)];
  }
}

TextAnalyser.prototype.isAPrimeNumber = function(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}
