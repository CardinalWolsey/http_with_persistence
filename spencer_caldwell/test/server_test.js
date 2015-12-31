var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
require(__dirname + '/../server');


describe('the server.js module', function() {

  before('write a test file', function() {
      chai.request('localhost:3000')
        .post('/something/test-post')
        .send({"message": "test"})
        .end();
  });

  it('should respond with a 200 status to a GET request', function(done) {
    chai.request('localhost:3000')
      .get('/something/test')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('it should write a JSON file on a post request', function(done) {
    chai.request('localhost:3000')
      .get('/something/test-post')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.eql('{"message":"test"}');
        done();
      });
  });
});

describe('the POST route', function() {

  it('should respond with a 200 status to a POST request', function(done) {
    chai.request('localhost:3000')
      .post('/something/test')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200)
        done();
      });
  });

});
