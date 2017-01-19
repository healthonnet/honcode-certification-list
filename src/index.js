'use strict';

var os       = require('os');
var fs       = require('fs');
var md5      = require('md5');
var download = require('download');
var Promise  = require('bluebird');

var url = 'https://www.honcode.ch/HONcode/Plugin/listeMD5.txt';
var fileName = 'HONcodeMD5List.txt';

var buildHash = function(data) {
  var map = {};

  if (data !== null && data !== '') {
    var lines = data.split(new RegExp('\n', 'i'));
    for (var i = 0; i < lines.length - 1; i++) {
      var infos = lines[i].split(new RegExp(' ', 'i'));
      map[infos[0]] = infos[1];
    }
  }
  return map;
};

var isOutdated = function(file) {
  var stats = fs.statSync(file);
  var lastModified = new Date(stats.mtime);
  var now = new Date();
  return now.getTime() - lastModified.getTime() > 3600 * 1000;
};

var retrieveMd5List = function() {
  var promise = new Promise(function(resolve,reject) {
    var tmpDir = os.tmpDir();
    var fileExist = fs.existsSync(tmpDir + '/' + fileName);
    var isTooOld = false;
    if (fileExist) {
      isTooOld = isOutdated(tmpDir + '/' + fileName);
    }
    if (fileExist && !isTooOld) {
      var content = fs.readFileSync(tmpDir + '/' + fileName, 'utf8');
      var hash = buildHash(content);
      resolve(hash);
    } else {
      download(url).then(function(data) {
        fs.writeFileSync(tmpDir + '/' + fileName, data);
        var hash = buildHash(data.toString());
        resolve(hash);
      }).catch(function(reason) {
        reject(reason);
      });
    }
  });
  return promise;
};

exports.getHONcodeCertificationList = function() {
  return retrieveMd5List();
};

exports.isInList = function(honCodeList, urlsList) {
  for (var i = 0; i < urlsList.length; i++) {
    if (honCodeList[md5(urlsList[i])] !== undefined) {
      return true;
    }
  }
  return false;
};
