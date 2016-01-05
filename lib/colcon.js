"use strict";

/**
 * Colcon
 * A simple and lightweight color code converter
 *
 * @param  none
 * @return {Object} hex and rgb color code
 */
class Colcon {

	convert(colorCode, callback) {
		let self = this;
		let error = null;
		let result = null;

		if (!this._isString(colorCode)) error = 'Given param isn´t a string';

		if (this.isHex(colorCode) || this.isRgb(colorCode)) {
			let hex = self.toHex(colorCode);
			let rgb = self.toRgb(colorCode);

			hex = (hex.error) ? hex.error : hex.result;
			rgb = (rgb.error) ? rgb.error : rgb.result;

			result = {
				hex: hex,
				rgb: rgb
			};
		} else {
			error = 'Given string isn´t a valid color code.';
		}

		return (callback) ? callback(error, result) : {
			error: error,
			result: result
		};
	}


	/**
	 * isRgb()
	 * checks wether if a string is a valid rgb color code
	 *
	 * @param  {String} color code
	 * @return {Boolean} true or false :D
	 */
	isRgb(colorCode, callback) {
		let error = null;
		let result = null;

		if (!this._isString(colorCode)) {
			error = 'Given param isn´t a string';
		} else {
			result = /\d+/g.test(colorCode);
		}

		return (callback) ? callback(error, result) : {
			error: error,
			result: result
		};
	}

	/**
	 * is hex()
	 * checks wether if a string is a valid hex color code
	 *
	 * @param  {String} color code
	 * @return {Boolean} true or false :D
	 */
	isHex(colorCode, callback) {
		let error = null;
		let result = null;

		if (!this._isString(colorCode)) {
			error = 'Given param isn´t a string';
		} else {
			if (colorCode.charAt(0) != '#') colorCode = '#' + colorCode;
			result = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colorCode);
		}

		return (callback) ? callback(error, result) : {
			error: error,
			result: result
		};
	}


	/**
	 * toRgb()
	 * converts any color code to rgb
	 *
	 * @param  none
	 * @return {String} rgb color code
	 */
	toRgb(colorCode, callback) {
		let error = null;
		let result = null;

		if (!this._isString(colorCode)) {
			error = 'Given param isn´t a string';
		} else {
			if (this.isHex(colorCode).result) {
				result = this._hexToRgb(colorCode);
			} else if (this.isRgb(colorCode).result) {
				result = colorCode;
			} else {
				error = 'Given param isn´t a RGB color code neither a HEX color code.';
			}
		}

		return (callback) ? callback(error, result) : {
			error: error,
			result: result
		};
	}


	/**
	 * toHex()
	 * converts rgb color code to hex
	 *
	 * @param  {String} color code
	 * @return {String} hex color code
	 */
	toHex(colorCode, callback) {
		let error = null;
		let result = null;

		if (!this._isString(colorCode)) {
			error = 'Given param isn´t a string.';
		} else {
			if (this.isRgb(colorCode).result) {
				result = this._rgbToHex(colorCode);
			} else if (this.isHex(colorCode).result) {
				result = '#' + colorCode;
			} else {
				error = 'Given param isn´t a RGB color code neither a HEX color code.';
			}
		}

		return (callback) ? callback(error, result) : {
			error: error,
			result: result
		};
	}


	/**
	 * _rgbToHex()
	 * converts rgb color code to hex
	 *
	 * @param  {String} rgb color code
	 * @return {String} hex color code
	 */
	_rgbToHex(colorCode) {
		let rgbArr = colorCode.replace(/ /g, '').split(',');
		let result = '#';
		let self = this;

		rgbArr.forEach(function(val) {
			val = parseInt(val);
			result += self._rgbComponentToHex(val);
		});

		return result;
	}


	/**
	 * _hexToRgb()
	 * converts hex color code to rgb
	 *
	 * @param  {String} hex color code
	 * @return {String} rgb color code
	 */
	_hexToRgb(colorCode) {
		let colorArr = [];
		let result = null;

		// Checks validity
		if (!this.isHex(colorCode)) return false;

		if (colorCode.charAt(0) === '#') colorCode = colorCode.replace('#', '');

		if (colorCode.length == 3) {
			colorArr = colorCode.split('');

			for (var i = 0, len = colorArr.length; i < len; ++i) {
				colorArr[i] = colorArr[i] + colorArr[i];
			}
		} else {
			colorArr = colorCode.match(/.{1,2}/g);
		}

		result = parseInt(colorArr[0], 16) + ', ' + parseInt(colorArr[1], 16) + ', ' + parseInt(colorArr[2], 16);
		return result;
	}



	/**
	 * _rgbComponentToHex()
	 * converts rgb component to hex component
	 *
	 * @param  {String} rgb component
	 * @return {String} hex component
	 */
	_rgbComponentToHex(component) {
		let hex = component.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}


	/**
	 * _isString()
	 * checks if given param is a string
	 *
	 * @param  {?}
	 * @return {Boolean}
	 */
	_isString(str) {
		let isString = typeof str === 'string' || str instanceof String;

		return isString;
	}
}

exports = module.exports = new Colcon();
