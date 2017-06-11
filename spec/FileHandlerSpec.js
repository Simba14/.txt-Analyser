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

  describe('isATextFile', function() {
    it('returns true if file is a .txt file', function() {
      expect(fileHandler.isATextFile()).toEqual(true);
    })
  })
})
