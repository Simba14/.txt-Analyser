// Stores file, checks it is a .txt, and extracts text into string.
function FileHandler(file) {
  this.file = file;
}

FileHandler.prototype.isATextFile = function() {
  return /^.*\.(txt)$/.test(this.file.name);
}

FileHandler.prototype.loadFileAsText = function() {
  let fileReader = new FileReader();
  let textFromFileLoaded;

  fileReader.onload = function(fileLoadedEvent){
      textFromFileLoaded = fileLoadedEvent.target.result;
      debugger;
  };
  return textFromFileLoaded;
  fileReader.readAsText(this.file, "UTF-8");
}
