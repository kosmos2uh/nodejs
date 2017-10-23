const boot = require('../bin/www').boot,
      shutdown = require('../bin/www').shutdown,
      port = require('../bin/www').port,
      hostname = require('../bin/www').hostname,
      superagent = require('superagent'),
      expect = require('chai').expect;

describe('This should be run a server', () => {

  // beforeEach( () => {
  //     boot();
  // });
  beforeEach(function() {
        // runs after each test in this block
        console.log('inner describe 5 - beforeEach');
    });

  describe('This should be open homepage', () => {
    it('should respond to GET',  (done) => {
      superagent
      .get(hostname+':'+port)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });
  });

  afterEach(function() {
        // runs after each test in this block
        console.log('inner describe 6 - afterEach');
    });
  // afterEach( () => {
  //   shutdown();
  // });

});
