// Stores file, checks it is a .txt, and extracts text into string.
function FileHandler(file) {
  this.file = file;
}

FileHandler.prototype.isATextFile = function() {
  return /^.*\.(txt)$/.test(this.file);
}

// FileHandler.prototype.loadFileAsText = function (){
//   let fileToLoad = document.getElementById('file-to-analyse').files[0];
//
//   let fileReader = new FileReader();
//   fileReader.onload = function(fileLoadedEvent){
//       let textFromFileLoaded = fileLoadedEvent.target.result;
//       return textFromFileLoaded;
//   };
}
