'use strict';

var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	alphaNumeric = alpha + '0123456789-_:.';

var charc = function(number) {
	if (number) {
		return alpha[Math.round(Math.random() * (alpha.length-1))];
	} else {
		return alphaNumeric[Math.round(Math.random() * (alphaNumeric.length-1))];
	};
};

/**
 *	@function htmlid
 *	@param {Len} number
 *	@return String
 */
module.exports = function(len) {
	len = (parseInt(len, 10) || 10) - 1;
	var id = [charc(true)];
	for (var i = 0; i<len; i++) id.push(charc(false));
	return id.join('');
};
