function TextReport(text, analyser = new TextAnalyser) {
  this.analyser = analyser;
  this.text = text;
  this.textData;
}

TextReport.prototype.generate = function(){
  this.analyser.populateWordList(this.text);
  this.analyser.countOccurrenceOfEachWord();
  this.analyser.areOccurrencesPrimeNumbers();
  return this.textData = this.analyser.wordData
}

TextReport.prototype.format = function() {
  let wordDataArray = [];
  for (let key in this.textData) {
    wordDataArray.push(`${key.toUpperCase()} - Count: ${this.textData[key][0]} (Prime number: ${this.textData[key][1]})`);
  }
  return wordDataArray.join('\n');
}
