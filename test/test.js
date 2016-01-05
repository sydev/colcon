var expect = require('chai').expect,
	colcon = require('../lib/colcon');

describe('Colcon', function() {
	describe('Convert any color code', function() {
		it('Converts the basic colors (without callback)', function() {
			var redHex = colcon.convert('255, 0, 0');
			var greenHex = colcon.convert('#00ff00');
			var blueHex = colcon.convert('0, 0, 255');

			expect(redHex.result).to.equal('#ff0000');
			expect(greenHex.result).to.equal('0, 255, 0');
			expect(blueHex.result).to.equal('#0000ff');
		});
	});

	describe('RGB to HEX', function() {
		it('Converts the basic colors (without callback)', function() {
			var redHex = colcon.toHex('255, 0, 0');
			var greenHex = colcon.toHex('0, 255, 0');
			var blueHex = colcon.toHex('0, 0, 255');

			expect(redHex.result).to.equal('#ff0000');
			expect(greenHex.result).to.equal('#00ff00');
			expect(blueHex.result).to.equal('#0000ff');
		});
	});

	describe('HEX to RGB', function() {
		it('Converts the basic colors (without callback)', function() {
			var redRgb = colcon.toRgb('#ff0000');
			var greenRgb = colcon.toRgb('#00ff00');
			var blueRgb = colcon.toRgb('#0000ff');

			expect(redRgb.result).to.equal('255, 0, 0');
			expect(greenRgb.result).to.equal('0, 255, 0');
			expect(blueRgb.result).to.equal('0, 0, 255');
		});
	});
});
