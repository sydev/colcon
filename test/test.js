var expect = require('chai').expect,
	colcon = require('../index');

describe('Colcon', function() {
	describe('HEX to RGB', function() {
		it('Converts the basic colors', function() {
			var redHex = colcon.toHex('255, 0, 0');
			var greenHex = colcon.toHex('0, 255, 0');
			var blueHex = colcon.toHex('0, 0, 255');

			expect(redHex).to.equal('#ff0000');
			expect(greenHex).to.equal('#00ff00');
			expect(blueHex).to.equal('#0000ff');
		});
	});

	describe('RGB to HEX', function() {
		it('Converts the basic colors', function() {
			var redRgb = colcon.toRgb('#ff0000');
			var greenRgb = colcon.toRgb('#00ff00');
			var blueRgb = colcon.toRgb('#0000ff');

			expect(redRgb).to.equal('255, 0, 0');
			expect(greenRgb).to.equal('0, 255, 0');
			expect(blueRgb).to.equal('0, 0, 255');
		});
	});
});
