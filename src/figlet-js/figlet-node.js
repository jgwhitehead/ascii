/**
 * Figlet JS node.js module
 *
 * Copyright (c) 2010 Scott González
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://github.com/scottgonzalez/figlet-js
 */
var fs = require("fs");
var Figlet = require("./figlet").Figlet;

var read = require("read-file");

// // async
// read('foo.txt', function(err, buffer) {
//   //=> <Buffer 74 68 69 73 20 69 73 20 66 6f 6f>
// });

Figlet.loadFont = function(name, fn) {
  read("./fonts/" + name + ".flf", "utf-8", function(err, contents) {
    fn(contents);
  });
};

exports.Figlet = Figlet;
