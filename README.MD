colcon
======

A simple to use color code converter.

Installation
------------

```
npm install colcon --save
```

Usage
-----

```JavaScript
var colcon = require('colcon');

var hex = '#f8f8f8',
    rgb = '150, 150, 150';

var newRgb = colcon(hex);
var newHex = colcon(rgb);

console.log('hex to rgb: ' + newRgb);
console.log('rgb to hex: ' + newHex);
```

Release Notes
-------------

-	0.1.0 Initial Release
