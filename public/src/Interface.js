$(document).ready(function() {
  // let fileHandler = New FileHandler

  $('#analyse-btn').click(function(){
    let file = $('input[name="file-input"]').val();

    isAValidFile(file);
  });

  function isAValidFile(file) {
    let fileHandler = new FileHandler(file);
    if (fileHandler.isATextFile()) {
      generateTextReport();
    }
  }

  function generateTextReport() {
    $('#text-report').text('file');
  }
});
