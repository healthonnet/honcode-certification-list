'use strict';

var os = require('os');
var fs = require('fs');

var should = require('chai').should();
var rewire = require('rewire');

var honcodeCertificationList = rewire('../src/index.js');

describe('HONcode Certification Foobar List', function() {

  before(function(done) {
    var tmpDir = os.tmpdir();
    if (fs.existsSync(tmpDir + '/HONcodeMD5List.txt')) {
      fs.unlinkSync(tmpDir + '/HONcodeMD5List.txt');
    }
    done();
  });

  it('should fail with foobar list', function(done) {
    honcodeCertificationList.__set__('url', 'foobar');
    var result = honcodeCertificationList.getHONcodeCertificationList();
    result.then(function(hash) {
      should.fail();
      done();
    }).catch(function(reason) {
      done();
    });
  });
});
