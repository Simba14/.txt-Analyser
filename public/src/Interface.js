$(document).ready(function() {
  let textReader = new TextReader;

  $('#analyse-btn').click(function(){
    let file = $('input[name="file-input"]').val();
    isAValidFile(file);
  });

  function isAValidFile(file) {
    let fileHandler = new FileHandler(file);
    if (fileHandler.isATextFile()) {
      generateTextReport();
    } else {
      generateErrorMessage();
    }
  }

  function generateTextReport() {
    let textData = analyseText();
    console.log(textData);
    $('#text-report').text('file');
  }

  function analyseText() {
    textReader.populateWordList('This me I want this to work');
    textReader.countOccurrenceOfEachWord();
    textReader.areOccurrencesPrimeNumbers();
    return textReader.wordData
  }

  function generateErrorMessage() {
    $('#error-message').text('Invalid file submitted. Please input the url of a .txt file.');
  }
});
