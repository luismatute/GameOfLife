var Universe	= require('./universe.js'),
	canvas		= document.getElementById("grid"),
	defaults	= {
		speed:	600
	},
	_uni;

function God(opts) {
	this.constructor(opts);
	this.create_universe();
	this.bind_events();
}

God.prototype = {
	constructor: function(opts) {
		opts = opts? opts: {};
		this.opts = _.merge_options(defaults,opts);
		for (var attrname in this.opts) { this[attrname] = this.opts[attrname]; }
		delete this.opts;
	},

	create_universe: function() {
		_uni = new Universe({ CANVAS: canvas });
	},

	bind_events: function() {
		this.cell_events();
		this.life_events();
	},

	cell_events: function() {
		var draw = false,
			last = {x:null,y:null};

		canvas.addEventListener("mousedown", function(evt) {
			draw = true;
			update_state(evt);
		});
		canvas.addEventListener("mousemove", update_state);
		canvas.addEventListener("mouseup", off_draw);
		canvas.addEventListener("mouseleave", off_draw);

		// When mouse leaves or stops holding click
		function off_draw(evt) {
			draw = false;
			update_state(evt);
		}
		// Updates the cell
		function update_state(evt) {
			if (draw) {
				var posX	= Math.floor(evt.offsetX/_uni.SQR),
					posY	= Math.floor(evt.offsetY/_uni.SQR),
					_cell	= _uni.GRID[posX][posY];

				// Determines if not the same cell hovering
				if (last.x !== posX || last.y !== posY){
					_cell.set_state( !_cell.get_state() );
					last = {
						x: posX,
						y: posY
					};
				}
			}
		}
	},

	life_events: function() {
		var self		= this,
			play		= false,
			next_btn	= document.getElementById("next"),
			play_btn	= document.getElementById("play"),
			clear_btn	= document.getElementById("clear"),
			timer;

		next_btn.addEventListener("click", function() {
			_uni.next_gen();
		});

		clear_btn.addEventListener("click", function() {
			self.create_universe();
			clearInterval(timer);
			_.removeClass(next_btn, 'disabled');
		});

		play_btn.addEventListener("click", function() {
			if (play) {
				play = false;
				play_btn.innerHTML = "Play";
				_.removeClass(next_btn, 'disabled');
				clearInterval(timer);
			} else {
				play = true;
				play_btn.innerHTML = "Pause";
				_.addClass(next_btn, 'disabled');
				timer = setInterval(function() {
					_uni.next_gen();
				}, self.speed);
			}
		});
	}
};

module.exports = God;