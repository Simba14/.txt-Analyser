describe("TextReader", function() {
  var textReader;

  beforeEach(function() {
    textReader = new TextReader();
  });

  it('initializes with an empty wordList array', function() {
    expect(textReader.wordList).toEqual([]);
  });
});
