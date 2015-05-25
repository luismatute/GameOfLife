/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'beachesIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-activities': '&#xe600;',
		'icon-arrow-down': '&#xe601;',
		'icon-arrow-left': '&#xe602;',
		'icon-arrow-right': '&#xe603;',
		'icon-arrow-up': '&#xe604;',
		'icon-arrow': '&#xe605;',
		'icon-beaches': '&#xe606;',
		'icon-best-price': '&#xe607;',
		'icon-bullet': '&#xe608;',
		'icon-butler-elite': '&#xe609;',
		'icon-butler': '&#xe60a;',
		'icon-cal': '&#xe60b;',
		'icon-camera': '&#xe60c;',
		'icon-chat': '&#xe60d;',
		'icon-check': '&#xe60e;',
		'icon-check2': '&#xe60f;',
		'icon-checkin': '&#xe610;',
		'icon-checkout': '&#xe611;',
		'icon-close': '&#xe612;',
		'icon-compass': '&#xe613;',
		'icon-dan': '&#xe614;',
		'icon-details-arrivals': '&#xe615;',
		'icon-details-babysitting': '&#xe616;',
		'icon-details-bring': '&#xe617;',
		'icon-details-butler': '&#xe618;',
		'icon-details-charge': '&#xe619;',
		'icon-details-checkin': '&#xe61a;',
		'icon-details-currency': '&#xe61b;',
		'icon-details-departure': '&#xe61c;',
		'icon-details-dress': '&#xe61d;',
		'icon-details-electric': '&#xe61e;',
		'icon-details-gift': '&#xe61f;',
		'icon-details-handicap': '&#xe620;',
		'icon-details-laundry': '&#xe621;',
		'icon-details-medical': '&#xe622;',
		'icon-details-passport': '&#xe623;',
		'icon-details-private': '&#xe624;',
		'icon-details-requests': '&#xe625;',
		'icon-details-safe': '&#xe626;',
		'icon-details-scuba': '&#xe627;',
		'icon-details-tips': '&#xe628;',
		'icon-details-transfers': '&#xe629;',
		'icon-details-weather': '&#xe62a;',
		'icon-details-wifi': '&#xe62b;',
		'icon-details': '&#xe62c;',
		'icon-dining-diet': '&#xe62d;',
		'icon-divider': '&#xe62e;',
		'icon-dollar': '&#xe62f;',
		'icon-download': '&#xe630;',
		'icon-edit': '&#xe631;',
		'icon-english-butler': '&#xe632;',
		'icon-extras-butler': '&#xe633;',
		'icon-extras-concierge': '&#xe634;',
		'icon-extras-handicap': '&#xe635;',
		'icon-extras-lovenest': '&#xe636;',
		'icon-extras-private-transfer': '&#xe637;',
		'icon-extras-room-service': '&#xe638;',
		'icon-facebook': '&#xe639;',
		'icon-foundation': '&#xe63a;',
		'icon-fowlcay': '&#xe63b;',
		'icon-gplus': '&#xe63c;',
		'icon-grandpineapple': '&#xe63d;',
		'icon-grid': '&#xe63e;',
		'icon-handicap': '&#xe63f;',
		'icon-contact': '&#xe640;',
		'icon-laptop': '&#xe641;',
		'icon-press': '&#xe642;',
		'icon-rss': '&#xe643;',
		'icon-islandroutes': '&#xe644;',
		'icon-list': '&#xe645;',
		'icon-lovenest': '&#xe646;',
		'icon-mail': '&#xe647;',
		'icon-map': '&#xe648;',
		'icon-padi-learning': '&#xe649;',
		'icon-padi': '&#xe64a;',
		'icon-person': '&#xe64b;',
		'icon-photo': '&#xe64c;',
		'icon-pinterest': '&#xe64d;',
		'icon-plus': '&#xe64e;',
		'icon-privatevillas': '&#xe64f;',
		'icon-redlane': '&#xe650;',
		'icon-sandals-select': '&#xe651;',
		'icon-sandals': '&#xe652;',
		'icon-select': '&#xe653;',
		'icon-share': '&#xe654;',
		'icon-snapshots': '&#xe655;',
		'icon-square-check': '&#xe656;',
		'icon-tag': '&#xe657;',
		'icon-tri-down': '&#xe658;',
		'icon-tri-left': '&#xe659;',
		'icon-tri-right': '&#xe65a;',
		'icon-tri-up': '&#xe65b;',
		'icon-twitter': '&#xe65c;',
		'icon-users': '&#xe65d;',
		'icon-video': '&#xe65e;',
		'icon-vrx': '&#xe65f;',
		'icon-weddingmoons': '&#xe660;',
		'icon-wp-lazy': '&#xe661;',
		'icon-wp-pirate': '&#xe662;',
		'icon-wp-slide': '&#xe663;',
		'icon-wp-surf': '&#xe664;',
		'icon-zoom': '&#xe665;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
