$(document).ready(function() {

  $('#analyse-btn').click(function(){
    $('#error-message').text('');
    let file = document.getElementById("file-to-analyse").files[0];
    isAValidFile(file);
  });

  function isAValidFile(file) {
    let fileHandler = new FileHandler(file);
    if (fileHandler.isATextFile()) {
      loadFileAsText(file);
      // fileHandler.loadFileAsText();
      // debugger;
      // generateTextReport(fileHandler.fileText);
    } else {
      generateErrorMessage();
    }
  }

  function generateTextReport(text) {
    let report = new TextReport(text);
    let reportObject = report.generate();
    let formattedReport = report.format();
    $('#report-header').text('Text Report')
    $('#text-report').text(formattedReport).css('padding', '20px');
  }

  function generateErrorMessage() {
    $('#error-message').text('Invalid file submitted. Please input the url of a .txt file.');
  }

  function loadFileAsText(file){
    let fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent){
        let textFromFileLoaded = fileLoadedEvent.target.result;
        generateTextReport(textFromFileLoaded);
    };

    fileReader.readAsText(file, "UTF-8");
  }
});
