# ng-scoreboard-clock

[![Build Status](https://travis-ci.org/zeMirco/ng-scoreboard-clock.png)](https://travis-ci.org/zeMirco/ng-scoreboard-clock)

An angular.js directive to display the current time as seen on sports scoreboards.

## How to use

```html
<clock format="HH:mm"></clock>
```

## Configuration

To format the time (you could even add the date) use the format string provided by the
angular.js [date filter](http://docs.angularjs.org/api/ng.filter:date).

Pass them to the directive through the `format` attribute.

```html
<clock format="medium"></clock>
```

## Test

You need to have [karma](http://karma-runner.github.com/0.8/index.html) and [grunt](http://gruntjs.com/)
installed to run the tests.

Run

```bash
$ grunt test
```

## License

Copyright (C) 2013 [Mirco Zeiss](mailto: mirco.zeiss@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.