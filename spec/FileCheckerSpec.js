describe('FileHandler', function() {
  let fileHandler;

  beforeEach(function() {
    fileHandler = new FileHandler(sample_text.txt);
  });

  describe('initialization', function() {
    it('stores file passed as argmument', function() {
      expect(this.file).toEqual(sample_text.txt);
    })
  })
})
