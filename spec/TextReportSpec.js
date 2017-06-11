describe('TextReport', function() {
  let textReport;
  let text;
  let analyser;

  beforeEach(function() {
    analyser = jasmine.createSpyObj('analyser', ['populateWordList', 'wordData', 'countOccurrenceOfEachWord', 'areOccurrencesPrimeNumbers'])
    text = 'Meerkats are comical, comical mongooses widely spread across Africa Africa'
    textReport = new TextReport(text, analyser);
  });

  describe('initialization', function() {
    it('stores text passed as argmument', function() {
      expect(textReport.text).toEqual('Meerkats are comical, comical mongooses widely spread across Africa Africa');
    })

    it('initializes with new analyser', function() {
      expect(textReport.analyser).toEqual(analyser);
    })
  })

  describe('#generate', function() {
    it('returns an object of words with associated metrics', function() {
      expect(textReport.generate()).toEqual(analyser.wordData)
    })
  })

  describe('#format', function() {
    it('formats text report', function() {
      textReport.textData = {'meerkat': [2, true], 'africa': [1, false]}
      expect(textReport.format()).toEqual('MEERKAT - Count: 2 (Prime number: true)\nAFRICA - Count: 1 (Prime number: false)')
    })
  })
})
