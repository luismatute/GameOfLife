// Locals
var Cell		= require('./cell.js'),
	STATES		= require('./states.js'),
	defaults	= {
		GRID:	new Array(),
		MIN_X:	0,
		MIN_Y:	0,
		MAX_X:	40,
		MAX_Y:	40,
		SQR:	0,
		CANVAS:	null
	};

function Universe(opts) {
	this.constructor(opts);
	this.GRID = this.build_grid();
}

Universe.prototype = {
	constructor: function(opts) {
		opts = opts? opts: {};
		this.opts = _.merge_options(defaults,opts);
		for (var attrname in this.opts) { this[attrname] = this.opts[attrname]; }
		delete this.opts;
	},

	build_grid: function() {
		var self	= this,
			_grid	= [];

		self.SQR = (self.CANVAS.offsetWidth / self.MAX_Y);
		self.CANVAS.setAttribute("width",self.CANVAS.offsetWidth);
		self.CANVAS.setAttribute("height",self.CANVAS.offsetWidth);
		self.CTX = self.CANVAS.getContext("2d");

		for (var x = 0; x < self.MAX_Y; x++) {
			_grid[x] = new Array(self.MAX_Y);
			for (var y = 0; y < self.MAX_X; y++) {
				var _cell = new Cell({
					X: x,
					Y: y,
					CTX: self.CTX,
					SIZE: self.SQR,
					__proto__: self
				});
				_grid[x][y] = _cell;
				_grid[x][y].draw_me();
			}
		}

		return _grid;
	},

	// Gets the amount of alive neighbors
	get_neightbors: function(thisPosX,thisPosY) {
		var self		= this,
			alive		= 0,
			startPosX 	= (thisPosX - 1 < self.MIN_X) ? thisPosX : thisPosX-1,
			startPosY 	= (thisPosY - 1 < self.MIN_Y) ? thisPosY : thisPosY-1,
			endPosX 	= (thisPosX + 1 > self.MAX_X-1) ? thisPosX : thisPosX+1,
			endPosY 	= (thisPosY + 1 > self.MAX_Y-1) ? thisPosY : thisPosY+1;

		// See how many are alive
		for (var rowNum = startPosX; rowNum <= endPosX; rowNum++) {
			for (var colNum = startPosY; colNum <= endPosY; colNum++) {
				// All the neighbors will be self.GRID[rowNum][colNum]
				if ( (thisPosY !== colNum || thisPosX !== rowNum) && self.GRID[rowNum][colNum].STATE === STATES.ALIVE) alive++;
			}
		}

		return alive;
	},

	next_gen: function() {
		var self	= this,
			tmp_arr = [];

		for (var x = 0; x < self.MAX_Y; x++) {
			for (var y = 0; y < self.MAX_X; y++) {
				var _cell = self.GRID[x][y],
					doa = self.rules( self.get_neightbors(x,y), _cell );

				if (doa !== _cell.STATE) tmp_arr.push(_cell);
			}
		}

		var len = tmp_arr.length;
		for (var i = 0; i < len; i++) {
			tmp_arr[i].set_state( !tmp_arr[i].STATE );
		}
	},

	rules: function(num_alive, _cell) {
		var doa = STATES.DEAD;
		if (_cell.STATE === STATES.ALIVE) {
			if (num_alive < 2) doa = STATES.DEAD;
			if (num_alive === 2 || num_alive ===3) doa = STATES.ALIVE;
			if (num_alive > 3) doa = STATES.DEAD;
		} else if (num_alive === 3) {
			doa = STATES.ALIVE;
		}

		return doa;
	}
};

module.exports = Universe;