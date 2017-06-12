describe('TextAnalyser', function() {
  let textAnalyser;

  beforeEach(function() {
    textAnalyser = new TextAnalyser();
  });

  describe('initialization', function() {
    it('initializes with an empty wordList array', function() {
      expect(textAnalyser.wordList).toEqual([]);
    });

    it('initializes with an empty wordData object', function() {
      expect(textAnalyser.wordData).toEqual({});
    });
  })

  describe('#populateWordList', function() {
    it('retrieves all the words from a text source and populates the wordList array', function() {
      let text = 'meerkats meeting';
      textAnalyser.populateWordList(text);
      expect(textAnalyser.wordList).toEqual(['meerkats', 'meeting']);
    });

    it('sorts wordList array alphabetically', function() {
      let text = 'meet the cheeky and fun meerkats';
      textAnalyser.populateWordList(text);
      expect(textAnalyser.wordList).toEqual(['and', 'cheeky', 'fun', 'meerkats', 'meet', 'the']);
    });

    it('does not retrieve any punctuation', function() {
      let text = ',meet//the.. meerkats?'
      textAnalyser.populateWordList(text);
      expect(textAnalyser.wordList).toEqual(['meet', 'the', 'meerkats']);
    })

    it('does not retrieve any spaces', function() {
      let text = '  meet      the   ';
      textAnalyser.populateWordList(text);
      expect(textAnalyser.wordList).toEqual(['meet', 'the']);
    })

    it('all words are converted to lowercase', function() {
      let text = 'Meet The Meerkats';
      textAnalyser.populateWordList(text);
      expect(textAnalyser.wordList).toEqual(['meet', 'the', 'meerkats']);
    })
  });

  describe('#convertWordsToLowerCase', function() {
    it('converts words in array to lowercase', function() {
      let wordArray = ['Meet', 'The', 'Meerkats'];
      expect(textAnalyser.convertWordsToLowerCase(wordArray)).toEqual(['meet', 'the', 'meerkats']);
    })
  })

  describe('#countOccurrenceOfEachWord', function() {
    it('counts number of times each words occurs', function() {
      textAnalyser.wordList = ['meet', 'the', 'the', 'meet', 'meerkats'];
      textAnalyser.countOccurrenceOfEachWord();
      expect(textAnalyser.wordData).toEqual({ 'meet': 2, 'the': 2, 'meerkats': 1 })
    })
  })

  describe('#areOccurrencesPrimeNumbers', function() {
    it('checks whether count of each word is a prime number', function() {
      textAnalyser.wordData = { 'meet': 3, 'the': 2, 'meerkats': 1, 'please': 6}
      textAnalyser.areOccurrencesPrimeNumbers()
      expect(textAnalyser.wordData).toEqual({ 'meet': [3, true], 'the': [2, true], 'meerkats':[1, false], 'please': [6, false] })
    })
  })

  describe('#isAPrimeNumber', function() {
    it('checks whether 1 is a prime number', function() {
      expect(textAnalyser.isAPrimeNumber(1)).toEqual(false);
    })

    it('checks whether 2 is a prime number', function() {
      expect(textAnalyser.isAPrimeNumber(2)).toEqual(true);
    })

    it('checks whether 3 is a prime number', function() {
      expect(textAnalyser.isAPrimeNumber(3)).toEqual(true);
    })

    it('checks whether 100 is a prime number', function() {
      expect(textAnalyser.isAPrimeNumber(100)).toEqual(false);
    })

    it('checks whether 347 is a prime number', function() {
      expect(textAnalyser.isAPrimeNumber(347)).toEqual(true);
    })
  })
});
