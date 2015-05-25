var utils = {
	merge_options: function (obj1,obj2){
		var obj3 = {};
		for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		for (var attrname2 in obj2) { obj3[attrname2] = obj2[attrname2]; }
		return obj3;
	},

	// Add/Remove Classes
		hasClass: function (el,cls) {
			return !!el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
		},
		addClass: function (el,cls) {
			if (!this.hasClass(el,cls)) el.className += " "+cls;
		},
		removeClass: function (el,cls) {
			if (this.hasClass(el,cls)) {
				var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
				el.className=el.className.replace(reg,' ');
			}
		}
};


module.exports = utils;