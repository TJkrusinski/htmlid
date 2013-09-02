'use strict';

var id = require('../index.js'),
	assert = require('assert');

describe('html idgen', function(){
	it('creates html id safe ids', function(){
		assert.equal(id(20).length, 20);
	});
});

describe('html idgen', function(){
	it('creates html id safe ids', function(d){
		assert.equal(id(99).length, 99);
		d();
	});
});

describe('html idgen', function(){
	it('creates html id safe ids', function(d){
		assert.equal(id().length, 10);
		d();
	});
});

describe('html idgen', function(){
	it('creates html id safe ids', function(){
		assert.equal(typeof id(100), 'string');
	});
});

describe('html idgen', function(){
	it('creates html id safe ids', function(d){
		assert.equal(id(2).length, 2);
		d();
	});
});

describe('html idgen', function(){
	it('creates html id safe ids', function(d){
		assert.equal(typeof id('poopfoo'), 'string');
		d();
	});
});
