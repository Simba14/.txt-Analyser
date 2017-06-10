describe('TextReader', function() {
  var textReader;

  beforeEach(function() {
    textReader = new TextReader();
  });

  describe('initialization', function() {
    it('initializes with an empty wordList array', function() {
      expect(textReader.wordList).toEqual([]);
    });

    it('initializes with an empty wordData object', function() {
      expect(textReader.wordData).toEqual({});
    });
  })

  describe('#populateWordList', function() {
    it('retrieves all the words from a text source and populates the wordList array', function() {
      text = 'Meet the Meerkats';
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['Meet', 'the', 'Meerkats']);
    });

    it('does not retrieve any punctuation', function() {
      text = ',Meet//the.. Meerkats?'
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['Meet', 'the', 'Meerkats']);
    })

    it('does not retrieve any spaces', function() {
      text = '  Meet      the   ';
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['Meet', 'the']);
    })
  });

  describe('#countOccurrenceOfEachWord', function() {
    it('counts number of times each words occurs', function() {
      textReader.wordList = ['Meet', 'the', 'the', 'Meet', 'Meerkats'];
      textReader.countOccurrenceOfEachWord();
      expect(textReader.wordData).toEqual({ 'Meet': 2, 'the': 2, 'Meerkats': 1 })
    })
  })
});
