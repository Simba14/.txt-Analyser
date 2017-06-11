function TextReport(text) {
  this.analyser = new TextAnalyser;
  this.text = text;
}

TextReport.prototype.generate = function(){
  this.analyser.populateWordList(this.text);
  this.analyser.countOccurrenceOfEachWord();
  this.analyser.areOccurrencesPrimeNumbers();
  return this.analyser.wordData
}

TextReport.prototype.format = function() {
  let wordDataArray = [];
  for (let key in textData) {
    wordDataArray.push(`${key.toUpperCase()} - Count: ${textData[key][0]} (Prime number: ${textData[key][1]})`);
  }
  return wordDataArray.join('\n');
}
