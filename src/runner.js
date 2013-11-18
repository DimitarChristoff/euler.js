#!/usr/bin/env node
'use strict';

var glob = require('glob'),
	path = require('path'),
	files = glob.sync('src/problem-*.js').sort();

require('colors');

process.cwd('src');
files.forEach(function(f){
	console.log('starting ' + f.yellow);
	console.time(f.red)
	require('./' + path.basename(f, '.js'));
	console.timeEnd(f.red);
})