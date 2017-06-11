// Stores file, checks it is a .txt, and extracts text into string.
function FileHandler(file) {
  this.file = file;
}

FileHandler.prototype.isATextFile = function() {
  return /^.*\.(txt)$/.test(this.file);
}
