//Подключаем dev-dependencies
let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should();

const boot = require('../bin/www').boot,
      shutdown = require('../bin/www').shutdown,
      port = require('../bin/www').port,
      hostname = require('../bin/www').hostname;

chai.use(chaiHttp);

//Наш основной блок

// describe('outer describe', function () {
//     beforeEach(function () {
//         console.log('outer describe - beforeEach');
//     });

//     describe('inner describe 1', function () {
//         before(function () {
//             console.log('inner describe 1 - before');
//         });

//     describe('inner describe 2', function () {
//         beforeEach(function () {
//             console.log('inner describe 2 - beforeEach');
//         });
//  });

describe('hooks', function() {

    beforeEach(function() {
        // runs before all tests in this block
        console.log('outer describe - beforeEach');
    });

    after(function() {
        // runs after all tests in this block
    });

    beforeEach(function() {
        // runs before each test in this block
    });

    afterEach(function() {
        // runs after each test in this block
    });

    // test cases
});


describe('Chai should be run server', () => {

  // beforeEach( () => { //Перед каждым тестом
  //     boot();
  // });
  beforeEach(function() {
        // runs before all tests in this block
        console.log('outer describe - beforeEach');
    });
  /*
    * Тест для /GET
  */

  describe('Chai should be open homepage', () => {
    it('Chai should respond to GET',  (done) => {
        chai.request(boot)
            .get(hostname+':'+port)
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
      });
  });

  // afterEach( () => {
  //   shutdown();
  // });
    afterEach(function() {
        // runs after each test in this block
        console.log('inner describe 3 - afterEach');
    });

});
