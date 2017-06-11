$(document).ready(function() {
  let textReader = new TextReader;

  $('#analyse-btn').click(function(){
    $('#error-message').text('');
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
    let textDataObject = analyseText();
    let textReport = formatTextReport(textDataObject);
    console.log(textReport)
    $('#text-report').text(textReport);
  }

  function analyseText() {
    textReader.populateWordList('This me I want this to work');
    textReader.countOccurrenceOfEachWord();
    textReader.areOccurrencesPrimeNumbers();
    return textReader.wordData
  }

  function formatTextReport(textData) {
    let wordDataArray = [];
    for (let key in textData) {
      wordDataArray.push(`${key} - Count: ${textData[key][0]} (Prime number: ${textData[key][1]})`);
    }
    return wordDataArray.join('\n');
  }

  function generateErrorMessage() {
    $('#error-message').text('Invalid file submitted. Please input the url of a .txt file.');
  }
});
