var STATES		= require('./states.js'),
	Universe	= require('./universe.js'),
	defaults	= {
		STATE:	STATES.DEAD,
		SIZE:	20,
		X:		0,
		Y:		0,
		COLORS: {
			1:  	"#03a9f4",
			0: 		"#2196F3",
			empty:	"#e8eaf6"
		}
	};

function Cell(opts) {
	this.constructor(opts);
}

Cell.prototype = {
	constructor: function(opts) {
		opts = opts? opts: {};
		this.opts = _.merge_options(defaults,opts);
		for (var attrname in this.opts) { this[attrname] = this.opts[attrname]; }
		delete this.opts;
	},

	get_state: function() {
		return this.STATE;
	},

	set_state: function(doa) {
		this.STATE = doa;
		this.draw_me();
	},

	draw_me: function() {
		var self	= this,
			ctx		= self.CTX;

		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = self.COLORS["0"];
		ctx.rect(self.X*self.SIZE, self.Y*self.SIZE, self.SIZE, self.SIZE);
		ctx.fillStyle = (self.STATE === STATES.ALIVE)? self.COLORS["1"]: self.COLORS["empty"];
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
};

module.exports = Cell;