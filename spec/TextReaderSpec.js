describe('TextReader', function() {
  let textReader;

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
      let text = 'meet the meerkats';
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['meet', 'the', 'meerkats']);
    });

    it('does not retrieve any punctuation', function() {
      let text = ',meet//the.. meerkats?'
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['meet', 'the', 'meerkats']);
    })

    it('does not retrieve any spaces', function() {
      let text = '  meet      the   ';
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['meet', 'the']);
    })

    it('all words are converted to lowercase', function() {
      let text = 'Meet The Meerkats';
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['meet', 'the', 'meerkats']);
    })
  });

  describe('#convertWordsToLowerCase', function() {
    it('converts words in array to lowercase', function() {
      let wordArray = ['Meet', 'The', 'Meerkats'];
      expect(textReader.convertWordsToLowerCase(wordArray)).toEqual(['meet', 'the', 'meerkats']);
    })
  })

  describe('#countOccurrenceOfEachWord', function() {
    it('counts number of times each words occurs', function() {
      textReader.wordList = ['meet', 'the', 'the', 'meet', 'meerkats'];
      textReader.countOccurrenceOfEachWord();
      expect(textReader.wordData).toEqual({ 'meet': 2, 'the': 2, 'meerkats': 1 })
    })
  })

  describe('#areOccurrencesPrimeNumbers', function() {
    it('checks whether count of each word is a prime number', function() {
      textReader.wordData = { 'meet': 3, 'the': 2, 'meerkats': 1, 'please': 6}
      textReader.areOccurrencesPrimeNumbers()
      expect(textReader.wordData).toEqual({ 'meet': [3, true], 'the': [2, true], 'meerkats':[1, false], 'please': [6, false] })
    })
  })

  describe('#isAPrimeNumber', function() {
    it('checks whether 1 is a prime number', function() {
      expect(textReader.isAPrimeNumber(1)).toEqual(false);
    })

    it('checks whether 2 is a prime number', function() {
      expect(textReader.isAPrimeNumber(2)).toEqual(true);
    })

    it('checks whether 3 is a prime number', function() {
      expect(textReader.isAPrimeNumber(3)).toEqual(true);
    })

    it('checks whether 100 is a prime number', function() {
      expect(textReader.isAPrimeNumber(100)).toEqual(false);
    })

    it('checks whether 347 is a prime number', function() {
      expect(textReader.isAPrimeNumber(347)).toEqual(true);
    })
  })
});
