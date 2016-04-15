'use strict';

var val = function val(item) {
	return item.value || item.name;
};
var LoremPixelCounter = 0;
function LoremPixel(type) {
	var w = arguments.length <= 1 || arguments[1] === undefined ? 225 : arguments[1];
	var h = arguments.length <= 2 || arguments[2] === undefined ? 350 : arguments[2];

	var image = '';
	image = '//lorempixel.com/225/350/';
	switch (type) {
		case 'character':
			image += 'people/';
			break;
		case 'weapon':
			image += 'abstract/';
			break;
		case 'room':
			image += 'city/';
			break;
	}
	image += ++LoremPixelCounter % 9 + 1;
	return image;
}

var Board = function Board(props) {
	return React.createElement(
		'div',
		{ className: 'board' },
		React.createElement(
			'table',
			{ className: 'bg', cellSpacing: '0', cellPadding: '0' },
			React.createElement(
				'tbody',
				null,
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(
						'td',
						{ colSpan: '5', rowSpan: '6', className: 'room', style: { backgroundImage: 'url(' + (props.groups[2].items[0].image || LoremPixel(props.groups[2].type)) + ')' } },
						React.createElement(
							'div',
							null,
							val(props.groups[2].items[0])
						)
					),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(
						'td',
						{ colSpan: '5', rowSpan: '6', className: 'room', style: { backgroundImage: 'url(' + (props.groups[2].items[1].image || LoremPixel(props.groups[2].type)) + ')' } },
						React.createElement(
							'div',
							null,
							val(props.groups[2].items[1])
						)
					),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(
						'td',
						{ colSpan: '4', rowSpan: '7', className: 'room', style: { backgroundImage: 'url(' + (props.groups[2].items[3].image || LoremPixel(props.groups[2].type)) + ')' } },
						React.createElement(
							'div',
							null,
							val(props.groups[2].items[3])
						)
					),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(
						'td',
						{ colSpan: '5', rowSpan: '6', className: 'room', style: { backgroundImage: 'url(' + (props.groups[2].items[2].image || LoremPixel(props.groups[2].type)) + ')' } },
						React.createElement(
							'div',
							null,
							val(props.groups[2].items[2])
						)
					),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(
						'td',
						{ colSpan: '7', rowSpan: '8', className: 'room', style: { backgroundImage: 'url(' + (props.groups[2].items[4].image || LoremPixel(props.groups[2].type)) + ')' } },
						React.createElement(
							'div',
							null,
							val(props.groups[2].items[4])
						)
					),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(
						'td',
						{ colSpan: '7', rowSpan: '5', className: 'room', style: { backgroundImage: 'url(' + (props.game.image || LoremPixel()) + ')' } },
						React.createElement(
							'div',
							null,
							val(props.game)
						)
					),
					React.createElement('td', null),
					React.createElement(
						'td',
						{ colSpan: '7', rowSpan: '6', className: 'room', style: { backgroundImage: 'url(' + (props.groups[2].items[5].image || LoremPixel(props.groups[2].type)) + ')' } },
						React.createElement(
							'div',
							null,
							val(props.groups[2].items[5])
						)
					),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(
						'td',
						{ colSpan: '7', rowSpan: '8', className: 'room', style: { backgroundImage: 'url(' + (props.groups[2].items[7].image || LoremPixel(props.groups[2].type)) + ')' } },
						React.createElement(
							'div',
							null,
							val(props.groups[2].items[7])
						)
					),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(
						'td',
						{ colSpan: '6', rowSpan: '7', className: 'room', style: { backgroundImage: 'url(' + (props.groups[2].items[8].image || LoremPixel(props.groups[2].type)) + ')' } },
						React.createElement(
							'div',
							null,
							val(props.groups[2].items[8])
						)
					),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(
						'td',
						{ colSpan: '6', rowSpan: '6', className: 'room', style: { backgroundImage: 'url(' + (props.groups[2].items[6].image || LoremPixel(props.groups[2].type)) + ')' } },
						React.createElement(
							'div',
							null,
							val(props.groups[2].items[6])
						)
					),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null)
				)
			)
		),
		React.createElement(
			'table',
			{ className: 'fg', cellSpacing: '0', cellPadding: '0' },
			React.createElement(
				'tbody',
				null,
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 's3 room border-top border-left trapdoor-top-left' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement(
						'td',
						{ className: 'cell start' },
						'1'
					),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'room border-top border-left' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'wall-right border-right room border-top' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement(
						'td',
						{ className: 'cell start' },
						'4'
					),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'room border-top border-left' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'wall-right border-right room border-top trapdoor-top-right' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 's3 room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room border-top' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'door-right border-right room' }),
					React.createElement('td', { className: 'cell door-left' }),
					React.createElement('td', { className: 'room border-top border-left' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'wall-right border-right room border-top' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 's3 room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 's3 room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'border-bottom door-right cell' }),
					React.createElement('td', { className: 'room door-left border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 's3 room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'border-bottom door-bottom wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'border-bottom room border-left' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom wall-right border-right room' }),
					React.createElement('td', { className: 'cell door-top' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'border-bottom room border-left' }),
					React.createElement('td', { className: 'border-bottom door-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'border-bottom room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'border-bottom wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell door-top' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'border-bottom room border-left' }),
					React.createElement('td', { className: 'border-bottom door-bottom room' }),
					React.createElement('td', { className: 'border-bottom wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'border-bottom door-right cell' }),
					React.createElement('td', { className: 'border-bottom room door-left border-left' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell border-right border-bottom door-bottom' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell door-top' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell bg' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement(
						'td',
						{ className: 'cell start' },
						'8'
					),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-top border-left' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room door-top border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'wall-right border-right room border-top' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell border-bottom door-bottom border-right' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement(
						'td',
						{ className: 'cell start' },
						'6'
					),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'door-right border-right room' }),
					React.createElement('td', { className: 'cell door-left' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-top border-left border-right border-bottom', colSpan: '7', rowSpan: '5' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-top border-left' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room door-top border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'wall-right border-right room border-top' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'room border-top border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'border-bottom door-right cell' }),
					React.createElement('td', { className: 'room door-left border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'border-bottom door-right cell' }),
					React.createElement('td', { className: 'room door-left border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'border-bottom room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement(
						'td',
						{ className: 'cell start' },
						'3'
					),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'door-right border-right room' }),
					React.createElement('td', { className: 'cell door-left' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'border-bottom room border-left' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'border-bottom room border-left' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom door-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell border-bottom door-bottom border-right' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell door-top' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-top border-left' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room door-top border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'wall-right border-right room border-top' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement(
						'td',
						{ className: 'cell start' },
						'5'
					),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'door-right border-right room' }),
					React.createElement('td', { className: 'cell door-left' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'border-bottom door-right cell' }),
					React.createElement('td', { className: 'room door-left border-top border-left' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'room border-top border-left' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'room border-top' }),
					React.createElement('td', { className: 'wall-right border-right room border-top' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room border-top' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'door-right border-right room' }),
					React.createElement('td', { className: 'cell door-left' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-top border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell bg' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'cell' }),
					React.createElement('td', { className: 'room border-left' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'room' }),
					React.createElement('td', { className: 'wall-right border-right room' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'border-bottom room border-left trapdoor-bottom-left' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement(
						'td',
						{ className: 'cell start' },
						'7'
					),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'border-bottom room border-left' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom wall-right border-right room' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement(
						'td',
						{ className: 'cell start' },
						'2'
					),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'border-bottom room border-left' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom room' }),
					React.createElement('td', { className: 'border-bottom wall-right border-right room trapdoor-bottom-right' }),
					React.createElement('td', { className: 'bg' })
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' }),
					React.createElement('td', { className: 'bg' })
				)
			)
		)
	);
};

var Sheet = function Sheet(props) {
	return React.createElement(
		'div',
		{ className: 'sheet' },
		React.createElement(
			'header',
			null,
			React.createElement(
				'span',
				null,
				val(props.game)
			)
		),
		React.createElement(
			'table',
			{ cellSpacing: '0', cellPadding: '0' },
			props.groups.map(function (group, i) {
				return React.createElement(Sheet.Group, { key: i, name: group.name, type: group.type, items: group.items });
			})
		)
	);
};

Sheet.Group = function (props) {
	return React.createElement(
		'tbody',
		null,
		React.createElement(Sheet.Row.Header, { name: props.name, type: props.type }),
		props.items.map(function (item, i) {
			return React.createElement(Sheet.Row, { key: i, item: item });
		})
	);
};

Sheet.Row = function (props) {
	return React.createElement(
		'tr',
		null,
		React.createElement(
			'td',
			null,
			React.createElement(
				'div',
				null,
				val(props.item)
			)
		),
		React.createElement('td', null),
		React.createElement('td', null),
		React.createElement('td', null),
		React.createElement('td', null),
		React.createElement('td', null),
		React.createElement('td', null),
		React.createElement('td', null)
	);
};

Sheet.Row.Header = function (props) {
	return React.createElement(
		'tr',
		{ className: 'header' },
		React.createElement(
			'td',
			null,
			React.createElement(
				'div',
				{ className: props.type },
				props.name
			)
		),
		React.createElement('td', null),
		React.createElement('td', null),
		React.createElement('td', null),
		React.createElement('td', null),
		React.createElement('td', null),
		React.createElement('td', null),
		React.createElement('td', null)
	);
};

var Card = function Card(props) {
	var image = props.item.image || LoremPixel(props.type);

	return React.createElement(
		'div',
		{ className: 'card ' + props.type },
		React.createElement(
			'header',
			null,
			React.createElement(
				'div',
				null,
				val(props.item)
			)
		),
		React.createElement('figure', { style: { backgroundImage: 'url(' + image + ')' } }),
		React.createElement(
			'footer',
			null,
			React.createElement(
				'div',
				null,
				val(props.item)
			)
		)
	);
};

var ClueGame = React.createClass({
	displayName: 'ClueGame',
	getInitialState: function getInitialState() {
		return {
			game: {
				name: 'Clue'
			},
			groups: [{
				name: 'Who',
				type: 'character',
				items: [{
					name: 'Mr. Green'
				}, {
					name: 'Colonel Mustard'
				}, {
					name: 'Mrs. Peacock'
				}, {
					name: 'Professor Plum'
				}, {
					name: 'Miss Scarlet'
				}, {
					name: 'Mrs. White'
				}, {
					name: ''
				}, {
					name: ''
				}]
			}, {
				name: 'How',
				type: 'weapon',
				items: [{
					name: 'Candlestick'
				}, {
					name: 'Knife'
				}, {
					name: 'Lead Pipe'
				}, {
					name: 'Poison'
				}, {
					name: 'Revolver'
				}, {
					name: 'Rope'
				}, {
					name: 'Wrench'
				}, {
					name: ''
				}]
			}, {
				name: 'Where',
				type: 'room',
				items: [{
					name: 'Conservatory'
				}, {
					name: 'Billiard Room'
				}, {
					name: 'Library'
				}, {
					name: 'Study'
				}, {
					name: 'Ballroom'
				}, {
					name: 'Hall'
				}, {
					name: 'Kitchen'
				}, {
					name: 'Dining Room'
				}, {
					name: 'Lounge'
				}]
			}]
		};
	},
	handleNameChange: function handleNameChange(groupIndex, itemIndex, e) {
		if (groupIndex < 0 || itemIndex < 0) {
			var game = Object.assign({}, this.state.game);
			game.value = e.target.value;

			this.setState({ game: game });
		} else {
			var groups = [].concat(this.state.groups);
			groups[groupIndex].items[itemIndex].value = e.target.value;

			this.setState({ groups: groups });
		}
	},
	render: function render() {
		var _this = this;

		return React.createElement(
			'div',
			{ className: 'flex-row' },
			React.createElement(
				'table',
				{ id: 'input' },
				React.createElement(
					'tbody',
					null,
					React.createElement(
						'tr',
						null,
						React.createElement(
							'td',
							null,
							'Game'
						)
					),
					React.createElement(
						'tr',
						null,
						React.createElement(
							'td',
							null,
							React.createElement('input', { placeholder: this.state.game.name, onChange: this.handleNameChange.bind(this, -1, -1) })
						)
					)
				),
				this.state.groups.map(function (group, i) {
					return React.createElement(
						'tbody',
						{ key: i },
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								group.name
							)
						),
						group.items.map(function (item, j) {
							return React.createElement(
								'tr',
								{ key: j },
								React.createElement(
									'td',
									null,
									React.createElement('input', { placeholder: item.name, onChange: _this.handleNameChange.bind(_this, i, j) })
								)
							);
						})
					);
				})
			),
			React.createElement(
				'div',
				{ id: 'content' },
				React.createElement(Board, { game: this.state.game, groups: this.state.groups }),
				React.createElement(
					'div',
					{ id: 'sheets' },
					this.state.groups[0].items.map(function (item, i) {
						return React.createElement(Sheet, { key: i, game: _this.state.game, groups: _this.state.groups });
					})
				),
				React.createElement(
					'div',
					{ id: 'cards' },
					this.state.groups.map(function (group, i) {
						return group.items.map(function (item, j) {
							return React.createElement(Card, { key: i + ':' + j, type: group.type, item: item });
						});
					})
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(ClueGame, null), document.getElementById('clue'));
