// @main
// Luis Matute - luis.matute@me.com - http://luismatute.me
// May-15

window._		= require('./modules/utils.js');
var God			= require('./modules/god.js'),
	start		= new Date(),
	perf, end;

new God();

end = new Date();
perf = end - start;
console.log("Time in ms: " + perf);