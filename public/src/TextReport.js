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
