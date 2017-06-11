// Stores file, checks it is a .txt, and extracts text into string.
function FileHandler() {}

FileHandler.prototype.isATextFile = function(fileName) {
  return /^.*\.(txt)$/.test(this.file.name);
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
