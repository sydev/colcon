colcon
======

A simple to use color code converter.

Installation
------------

For programmatically usage install colcon locally:

```
npm install colcon --save
```

For global usage install it globally:

```
npm install colcon -g
```

Usage
-----

To use colcon programmatically, add something like this into your code:

```JavaScript
var colcon = require('colcon');

var hex = '#f8f8f8',
    rgb = '150, 150, 150';

var newRgb = colcon.convert(hex);
var newHex = colcon.convert(rgb);

console.log('hex to rgb: ' + newRgb);
console.log('rgb to hex: ' + newHex);
```

For command line conversion hit:

```
colcon -c [color code]
```

API
---

```
Usage: colcon [options]

Options:

	-h, --help           output usage information
	-V, --version        output the version number
	-c, --color [value]  a color code like rgb or hex. If passing a hex color code, remove the leading #.
```

Release Notes
-------------

-	0.2.0
	-	Global usage is now available
	-	some bugfixes
-	0.1.0 Initial Release
