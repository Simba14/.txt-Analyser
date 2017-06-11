// Stores file, checks it is a .txt, and extracts text into string.
function FileHandler() {}

FileHandler.prototype.isATextFile = function(fileName) {
  return /^.*\.(txt)$/.test(this.file.name);
}

FileHandler.prototype.loadFileAsText = function() {
  let fileReader = new FileReader();
  
  fileReader.onload = function(fileLoadedEvent){
      let textFromFileLoaded = fileLoadedEvent.target.result;
      return textFromFileLoaded;
  };

  fileReader.readAsText(file, "UTF-8");
}
