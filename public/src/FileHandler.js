// Stores file, checks it is a .txt, and extracts text into string.
function FileHandler(file) {
  this.file = file;
}

FileHandler.prototype.isATextFile = function() {
  return /^.*\.(txt)$/.test(this.file.name);
};

FileHandler.prototype.loadFileAsText = function(fileReader = new FileReader()) {
  fileReader = fileReader;
  let self = this;

  fileReader.onload = function(fileLoadedEvent){
      return self.storeFileText(fileLoadedEvent.target.result);
  };

  return fileReader.readAsText(this.file, "UTF-8");
};

FileHandler.prototype.storeFileText = function(text) {
  return this.fileText = text;
};
