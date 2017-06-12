describe('FileHandler', function() {
  let fileHandler;
  let file = { name: './sample_text.txt' }

  beforeEach(function() {
    fileHandler = new FileHandler(file);
  });

  describe('initialization', function() {
    it('stores file passed as argmument', function() {
      expect(fileHandler.file).toEqual(file);
    })
  })

  describe('#isATextFile', function() {
    it('returns true if file is a .txt file', function() {
      expect(fileHandler.isATextFile()).toEqual(true);
    })
  })

  describe('#storeFileText', function() {
    it('stores text passed through', function() {
      let text = 'meet the meerkats';
      fileHandler.storeFileText(text)
      expect(fileHandler.fileText).toEqual(text);
    })
  })
})
