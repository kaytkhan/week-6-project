var expect = chai.expect;

describe('clickdemocard', function() {
  describe('#clickdemocard()', function() {
      it('should return computer_score', function() {
          let x = clickdemocard();
          expect(x).to.equal(computer_score);
      });
      it('should not return computer score if its is string', function() {
          expect(function() {
            clickdemocard();
          }).to.throw(Error);
      })
  })
})