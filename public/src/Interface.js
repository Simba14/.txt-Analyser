$(document).ready(function() {
  let fileHandler;
  $("#analyse-btn").hide();

  $('#upload-btn').click(function(){
    $('#error-message').text('');
    let file = document.getElementById("file-to-analyse").files[0];
    if(typeof file === 'undefined') {
      generateErrorMessage()
    } else {
      isAValidFile(file);
    }
  });

  $('#analyse-btn').click(function(){
    $('#error-message').text('');
    console.log(fileHandler);
    generateTextReport(fileHandler);
  });

  function isAValidFile(file) {
    fileHandler = new FileHandler(file);
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
    $("#analyse-btn").hide();
  }

  function generateErrorMessage() {
    $('#error-message').text('Invalid file submitted. Please input the url of a .txt file.');
  }
});
