colcon
======

A simple to use color code converter. Supports RGB and HEX color formats.

Table of Contents
-----------------

-	[Installation](#installation)
-	[Usage](#usage)
-	[API](#api)
-	[Release Notes](#release-notes)

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

To use colcon programmatically, add something like this in your code:

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

Command line API:

```
Usage: colcon [options]

Options:

	-h, --help           output usage information
	-V, --version        output the version number
	-c, --color [value]  a color code like rgb or hex. If passing a hex color code, remove the leading #.
```

Programmatically API:

<h4>colcon.convert(value)</h4><p>Converts a HEX or RGB color code. Returns object of colors.</p>

<h4>colcon.isRgb(value)</h4><p>Checks if given string is a valid RGB color code. Returns boolean.

<h4>colcon.isHex(value)</h4><p>Checks if given string is a valid HEX color code. Returns boolean.

<h4>colcon.toRgb(value)</h4><p>Converts a given string to a RGB color code. If the string isn´t a valid color code, returns `false`</p>

<h4>colcon.toHex(value)</h4><p>Converts a given string to a HEX color code. If the string isn´t a valid color code, returns `false`</p>

Release Notes
-------------

-	0.2.0
	-	Global usage is now available
	-	some bugfixes
-	0.1.0 Initial Release
