"use strict";

/**
 * Colcon
 * A simple and lightweight color code converter
 *
 * @param  {String} color string
 * @return {Object} hex and rgb color code
 */
class Colcon {

	convert(colorCode) {
		var self = this;

		if (colorCode) {
			var result = {
				rgb: self.toRgb(colorCode),
				hex: self.toHex(colorCode)
			};

			return result;
		}
	}


	/**
	 * isRgb()
	 * checks wether if a string is a valid rgb color code
	 *
	 * @param  {String} color code
	 * @return {Boolean} true or false :D
	 */
	isRgb(colorCode) {
		return /\d+/g.test(colorCode);
	}

	/**
	 * is hex()
	 * checks wether if a string is a valid hex color code
	 *
	 * @param  {String} color code
	 * @return {Boolean} true or false :D
	 */
	isHex(colorCode) {
		if (colorCode.charAt(0) != '#') colorCode = '#' + colorCode;
		return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colorCode);
	}


	/**
	 * toRgb()
	 * converts any color code to rgb
	 *
	 * @param  none
	 * @return {String} rgb color code
	 */
	toRgb(colorCode) {
		let rgbColor;

		if (this.isHex(colorCode)) {
			rgbColor = this.hexToRgb(colorCode);
		} else if (this.isRgb(colorCode)) {
			rgbColor = colorCode;
		} else {
			rgbColor = false;
		}

		return rgbColor;
	}


	/**
	 * toHex()
	 * converts rgb color code to hex
	 *
	 * @param  {String} color code
	 * @return {String} hex color code
	 */
	toHex(colorCode) {
		let hexColor;

		if (this.isRgb(colorCode)) {
			hexColor = this.rgbToHex(colorCode);
		} else if (this.isHex(colorCode)) {
			hexColor = colorCode;
		} else {
			hexColor = false;
		}

		return hexColor;
	}


	/**
	 * rgbToHex()
	 * converts rgb color code to hex
	 *
	 * @param  {String} rgb color code
	 * @return {String} hex color code
	 */
	rgbToHex(colorCode) {
		let rgbArr = colorCode.replace(/ /g, '').split(','),
			result = '#',
			self = this;

		rgbArr.forEach(function(val) {
			val = parseInt(val);
			result += self.rgbComponentToHex(val);
		});

		return result;
	}


	/**
	 * hexToRgb()
	 * converts hex color code to rgb
	 *
	 * @param  {String} hex color code
	 * @return {String} rgb color code
	 */
	hexToRgb(colorCode) {
		let colorArr = [],
			result;

		if (colorCode.charAt(0) == '#') colorCode = colorCode.replace('#', '');

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
	 * rgbComponentToHex()
	 * converts rgb component to hex component
	 *
	 * @param  {String} rgb component
	 * @return {String} hex component
	 */
	rgbComponentToHex(component) {
		let hex = component.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

}

exports = module.exports = new Colcon();
