$(document).ready(function() {
  let textAnalyser = new TextAnalyser;

  $('#analyse-btn').click(function(){
    $('#error-message').text('');
    let file = $('input[name="file-uploaded"]').val();
    isAValidFile(file);
  });

  function isAValidFile(file) {
    let fileHandler = new FileHandler(file);
    if (fileHandler.isATextFile()) {
      loadFileAsText();
    } else {
      generateErrorMessage();
    }
  }

  function generateTextReport(text) {
    let report = new TextReport(text);
    let reportObject = report.generate();
    //let textDataObject = analyseText(text);
    let textReport = formatTextReport(reportObject);
    $('#report-header').text('Text Report')
    $('#text-report').text(textReport).css('padding', '20px');
  }

  function analyseText(text) {
    textAnalyser.populateWordList(text);
    textAnalyser.countOccurrenceOfEachWord();
    textAnalyser.areOccurrencesPrimeNumbers();
    return textAnalyser.wordData
  }

  function formatTextReport(textData) {
    let wordDataArray = [];
    for (let key in textData) {
      wordDataArray.push(`${key.toUpperCase()} - Count: ${textData[key][0]} (Prime number: ${textData[key][1]})`);
    }
    return wordDataArray.join('\n');
  }

  function generateErrorMessage() {
    $('#error-message').text('Invalid file submitted. Please input the url of a .txt file.');
  }

  function loadFileAsText(){
    let fileToLoad = document.getElementById("file-to-analyse").files[0];

    let fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        let textFromFileLoaded = fileLoadedEvent.target.result;
        generateTextReport(textFromFileLoaded);
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
  }
});
