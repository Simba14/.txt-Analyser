$(document).ready(function() {

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
    $('#text-report').text('file');
  }

  function generateErrorMessage() {
    $('#text-report').text('Invalid file submitted. Please input the url of a .txt file.');
  }
});
