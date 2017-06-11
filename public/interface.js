$(document).ready(function() {
  // let fileHandler = New FileHandler

  $('#analyse-btn').click(function(){
    let file = $('input[name="file-input"]').val();
    generateTextReport(file);
  });

  function generateTextReport(file) {
    $('#text-report').text(file);
  }
});
