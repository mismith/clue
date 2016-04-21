'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//import React from 'react';
//import ReactDOM from 'react-dom';
//import FaUpload from 'react-icons/fa/upload';

var getName = function getName(item) {
	return item ? item.name || '' : '';
};

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
					React.createElement(Board.Room, { defaults: props.defaults.conservatory, overrides: props.overrides.items.conservatory, colSpan: '5', rowSpan: '6' }),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(Board.Room, { defaults: props.defaults.billiard, overrides: props.overrides.items.billiard, colSpan: '5', rowSpan: '6' }),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(Board.Room, { defaults: props.defaults.study, overrides: props.overrides.items.study, colSpan: '4', rowSpan: '7' }),
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
					React.createElement(Board.Room, { defaults: props.defaults.library, overrides: props.overrides.items.library, colSpan: '5', rowSpan: '6' }),
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
					React.createElement(Board.Room, { defaults: props.defaults.ball, overrides: props.overrides.items.ball, colSpan: '7', rowSpan: '8' }),
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
					React.createElement(Board.Room, { defaults: props.game, overrides: props.overrides.game, colSpan: '7', rowSpan: '5' }),
					React.createElement('td', null),
					React.createElement(Board.Room, { defaults: props.defaults.hall, overrides: props.overrides.items.hall, colSpan: '7', rowSpan: '6' }),
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
					React.createElement(Board.Room, { defaults: props.defaults.dining, overrides: props.overrides.items.dining, colSpan: '7', rowSpan: '8' }),
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
					React.createElement(Board.Room, { defaults: props.defaults.lounge, overrides: props.overrides.items.lounge, colSpan: '6', rowSpan: '7' }),
					React.createElement('td', null)
				),
				React.createElement(
					'tr',
					null,
					React.createElement('td', null),
					React.createElement('td', null),
					React.createElement(Board.Room, { defaults: props.defaults.kitchen, overrides: props.overrides.items.kitchen, colSpan: '6', rowSpan: '6' }),
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

Board.Room = function (props) {
	return React.createElement(
		'td',
		_extends({ className: 'room', style: { backgroundImage: 'url(' + (props.overrides.image || props.defaults.image || '') + ')' } }, props),
		React.createElement(
			'div',
			null,
			props.overrides.name || props.defaults.name
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
				props.overrides.game.name || props.game.name
			)
		),
		React.createElement(
			'table',
			{ cellSpacing: '0', cellPadding: '0' },
			props.groups.map(function (group) {
				return React.createElement(Sheet.Group, { key: group['.key'], group: group, items: props.items.filter(function (item) {
						return item.group === group['.key'];
					}), overrides: props.overrides });
			})
		)
	);
};

Sheet.Group = function (props) {
	return React.createElement(
		'tbody',
		null,
		React.createElement(
			'tr',
			{ className: 'header' },
			React.createElement(
				'td',
				null,
				React.createElement(
					'div',
					{ className: props.group['.key'] },
					props.group.name
				)
			),
			React.createElement('td', null),
			React.createElement('td', null),
			React.createElement('td', null),
			React.createElement('td', null),
			React.createElement('td', null),
			React.createElement('td', null),
			React.createElement('td', null)
		),
		props.items.map(function (item) {
			return React.createElement(Sheet.Row, { key: item['.key'], defaults: item, overrides: props.overrides.items[item['.key']] });
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
				props.overrides.name || props.defaults.name
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
	return React.createElement(
		'div',
		{ className: 'card ' + props.item.group },
		React.createElement(
			'header',
			null,
			React.createElement(
				'div',
				null,
				props.item.name
			)
		),
		React.createElement('figure', { style: { backgroundImage: 'url(' + (props.item.image || '') + ')' } }),
		React.createElement(
			'footer',
			null,
			React.createElement(
				'div',
				null,
				props.item.name
			)
		)
	);
};

var ClueGame = React.createClass({
	displayName: 'ClueGame',

	mixins: [ReactFireMixin],
	getInitialState: function getInitialState() {
		return {
			game: {},
			groups: [],
			items: [],
			rooms: {},
			overrides: {
				game: {},
				items: {}
			}
		};
	},
	componentWillMount: function componentWillMount() {
		this.firebase = new Firebase('https://mismith.firebaseio.com/clue');

		var defaults = this.firebase.child('defaults');
		this.bindAsObject(defaults.child('game'), 'game');
		this.bindAsArray(defaults.child('groups'), 'groups');
		this.bindAsArray(defaults.child('items'), 'items');
		this.bindAsObject(defaults.child('items'), 'rooms');

		if (!this.props.id) {
			this.props.id = this.firebase.child('games').push().key();
			// @TODO: redirect/change hash
		}
		this.bindAsObject(this.firebase.child('games').child(this.props.id), 'overrides');
	},
	handleChange: function handleChange(path, key, value) {
		this.firebase.child('games').child(this.props.id).child(path).child(key).set(value);
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
							{ colspan: '2' },
							'Game'
						)
					),
					React.createElement(ClueGame.ItemInput, {
						item: this.state.overrides.game,
						'default': this.state.game,
						onChange: function onChange(e) {
							return _this.handleChange('game', 'name', e.target.value);
						},
						onUpload: function onUpload(data) {
							return _this.handleChange('game', 'image', data.link);
						},
						onRemove: function onRemove(data) {
							return _this.handleChange('game', 'image', null);
						}
					})
				),
				this.state.groups.map(function (group) {
					return React.createElement(
						'tbody',
						{ key: group['.key'] },
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								group.name
							)
						),
						_this.state.items.filter(function (item) {
							return item.group === group['.key'];
						}).map(function (item) {
							return React.createElement(ClueGame.ItemInput, {
								key: item['.key'],
								item: _this.state.overrides.items[item['.key']],
								'default': item,
								onChange: function onChange(e) {
									return _this.handleChange('items/' + item['.key'], 'name', e.target.value);
								},
								onUpload: function onUpload(data) {
									return _this.handleChange('items/' + item['.key'], 'image', data.link);
								},
								onRemove: function onRemove(data) {
									return _this.handleChange('items/' + item['.key'], 'image', null);
								}
							});
						})
					);
				})
			),
			React.createElement(
				'div',
				{ id: 'content' },
				React.createElement(Board, { game: this.state.game, defaults: this.state.rooms, overrides: this.state.overrides }),
				React.createElement(
					'div',
					{ id: 'sheets' },
					[1, 2, 3, 4, 5, 6, 7, 8].map(function (i) {
						return React.createElement(Sheet, { key: 's' + i, game: _this.state.game, groups: _this.state.groups, items: _this.state.items, overrides: _this.state.overrides });
					})
				),
				React.createElement(
					'div',
					{ id: 'cards' },
					this.state.items.map(function (item) {
						return React.createElement(Card, { key: item['.key'], item: _this.state.overrides.items[item['.key']] || item });
					})
				)
			)
		);
	}
});
ClueGame.ItemInput = React.createClass({
	displayName: 'ItemInput',
	getDefaultProps: function getDefaultProps() {
		return {
			item: {},
			default: {},
			onChange: function onChange() {},
			onUpload: function onUpload() {},
			onRemove: function onRemove() {}
		};
	},
	render: function render() {
		return React.createElement(
			'tr',
			null,
			React.createElement(
				'td',
				null,
				React.createElement('input', { value: this.props.item.name, placeholder: this.props.default.name, onChange: this.props.onChange })
			),
			React.createElement(
				'td',
				null,
				React.createElement(ImgurUpload, { onUpload: this.props.onUpload, onRemove: this.props.onRemove })
			)
		);
	}
});

var ImgurUpload = React.createClass({
	displayName: 'ImgurUpload',
	getDefaultProps: function getDefaultProps() {
		return {
			onUpload: function onUpload() {},
			onRemove: function onRemove() {}
		};
	},
	getInitialState: function getInitialState() {
		return {
			image: null
		};
	},
	imgur: function imgur(method) {
		var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		return fetch('https://api.imgur.com/3/' + method, Object.assign({
			headers: { Authorization: 'Client-ID 6c8483b3b8e6fb9' }
		}, options));
	},
	handleUpload: function handleUpload(e) {
		var _this2 = this;

		var data = new FormData();
		data.append('image', e.target.files[0]);

		this.imgur('upload', {
			method: 'POST',
			body: data
		}).then(function (res) {
			return res.json();
		}).then(function (json) {
			return json.data;
		}).then(function (image) {
			_this2.setState({ image: image });

			return _this2.props.onUpload(image);
		});
	},
	handleRemove: function handleRemove(e) {
		var _this3 = this;

		this.imgur('image/' + this.state.image.deletehash, {
			method: 'DELETE'
		}).then(function (res) {
			return res.json();
		}).then(function (json) {
			return json.data;
		}).then(function (data) {
			_this3.setState({ image: null });

			return _this3.props.onRemove(data);
		});
	},
	render: function render() {
		var styles = {
			inputWrapper: {
				position: 'relative',
				overflow: 'hidden'
			},
			input: {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				fontSize: 100,
				opacity: 0,
				cursor: 'pointer'
			}
		};
		return React.createElement(
			'div',
			{ 'class': 'container' },
			React.createElement(
				'button',
				{ hidden: this.state.image, style: styles.inputWrapper },
				React.createElement('span', { className: 'ion-image' }),
				React.createElement('input', { type: 'file', accept: 'image/*', onChange: this.handleUpload, style: styles.input })
			),
			React.createElement(
				'button',
				{ hidden: !this.state.image, onClick: this.handleRemove },
				React.createElement('span', { className: 'ion-close' })
			)
		);
	}
});

ReactDOM.render(React.createElement(ClueGame, { id: location.hash.substring(1) }), document.getElementById('app'));
