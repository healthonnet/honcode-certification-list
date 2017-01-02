'use strict';

var should = require('chai').should();
var honcodeCertificationList = require('../src/index.js');

describe('HONcode Certification List', function() {
  this.timeout(15000);

  var md5List;

  beforeEach(function(done) {
    honcodeCertificationList.getHONcodeCertificationList().then(function(hash) {
      md5List = hash;
      done();
    });
  });

  it('should contain at least 5000 items', function(done) {
    var enoughListLength = Object.keys(md5List).length > 5000;
    enoughListLength.should.equal(true);
    done();
  });

  it('should contain HONConduct298987', function(done) {
    md5List[
      '995da273245834a9ab8bdfe4d7db0363'
    ].should.equal('HONConduct298987');
    done();
  });

  it('should not contain playboy.com', function(done) {
    should.equal(md5List[
      '91bad729a69dfbef464400f92cf4401a' // Do md5('playboy.com/')
    ], undefined);
    done();
  });

});
