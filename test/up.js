"use strict";

var assert = require('assert')
var fs     = require('fs')
var wrapup = require('../lib/main')
var test   = require('./run').test

var wrup1 = wrapup({
    output: __dirname + "/output/up.result.js"
})

wrup1.require(__dirname + '/fixtures/up').up(function(err){
    assert.ifError(err)
    test('up')
})

var wrup2 = wrapup()

wrup2.require("test", __dirname + "/fixtures/up")
    .require("bar", __dirname + "/fixtures/e")

wrup2.up(function(err, data){
    fs.writeFileSync(__dirname + "/output/up2.result.js", data)
    test('up2')
})
