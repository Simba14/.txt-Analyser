$(document).ready(function() {
  $("#analyse-btn").hide();

  $('#upload-btn').click(function(){
    $('#error-message').text('');
    let file = document.getElementById("file-to-analyse").files[0];
    isAValidFile(file);
  });

  $('#analyse-btn').click(function(){
    $('#error-message').text('');
    generateTextReport(fileHandler);
  });

  function isAValidFile(file) {
    let fileHandler = new FileHandler(file);
    if (fileHandler.isATextFile()) {
      fileHandler.loadFileAsText();
      $("#analyse-btn").show();
    } else {
      generateErrorMessage();
    }
  }

  function generateTextReport(text) {
    let report = new TextReport(text.fileText);
    let reportObject = report.generate();
    let formattedReport = report.format();
    $('#report-header').text('Text Report')
    $('#text-report').text(formattedReport).css('padding', '20px');
  }

  function generateErrorMessage() {
    $('#error-message').text('Invalid file submitted. Please input the url of a .txt file.');
  }
});
