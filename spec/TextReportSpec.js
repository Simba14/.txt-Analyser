describe('TextReport', function() {
  let textReport;
  let text;
  let analyser;

  beforeEach(function() {
    analyser = jasmine.createSpyObj('analyser')
    text = 'Meerkats are comical, comical mongooses widely spread across Africa Africa'
    textReport = new TextReport(text);
  });

  describe('initialization', function() {
    it('stores text passed as argmument', function() {
      expect(textReport.text).toEqual('Meerkats are comical, comical mongooses widely spread across Africa Africa');
    })
  })
})
