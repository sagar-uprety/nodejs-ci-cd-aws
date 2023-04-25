const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 

// Configure Chai to use HTTP plugin
chai.use(chaiHttp);

// Set up Chai assertion styles
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;


describe('Express App', () => {

  // Test GET request to / endpoint
  it('should return status 200 and Welcome message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200); // Assert HTTP status code
        res.text.should.equal('Hey there! Welcome to CI-CD Demo!'); // Assert response body content
        done();
      });
  });

});
