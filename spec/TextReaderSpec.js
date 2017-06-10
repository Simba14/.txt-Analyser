describe("TextReader", function() {
  var textReader;

  beforeEach(function() {
    textReader = new TextReader();
  });

  it('initializes with an empty word list hash', function() {
    expect(textReader.wordList).toEqual({});
  });
});
