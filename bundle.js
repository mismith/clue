"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//import React from 'react';
//import ReactDOM from 'react-dom';
//import FaUpload from 'react-icons/fa/upload';

var merge = function merge() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	args.unshift({});
	return Object.assign.apply(this, args.map(function (arg) {
		return arg || {};
	}));
};

var Board = function Board(props) {
	return React.createElement(
		"div",
		{ className: "board" },
		React.createElement(
			"table",
			{ className: "bg", cellSpacing: "0", cellPadding: "0" },
			React.createElement(
				"tbody",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement(Board.Room, { item: props.items.find(function (item) {
							return item['.key'] === 'conservatory';
						}), colSpan: "5", rowSpan: "6" }),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement(Board.Room, { item: props.items.find(function (item) {
							return item['.key'] === 'billiard';
						}), colSpan: "5", rowSpan: "6" }),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement(Board.Room, { item: props.items.find(function (item) {
							return item['.key'] === 'study';
						}), colSpan: "4", rowSpan: "7" }),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement(Board.Room, { item: props.items.find(function (item) {
							return item['.key'] === 'library';
						}), colSpan: "5", rowSpan: "6" }),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement(Board.Room, { item: props.items.find(function (item) {
							return item['.key'] === 'ball';
						}), colSpan: "7", rowSpan: "8" }),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement(Board.Room, { item: props.game, colSpan: "7", rowSpan: "5" }),
					React.createElement("td", null),
					React.createElement(Board.Room, { item: props.items.find(function (item) {
							return item['.key'] === 'hall';
						}), colSpan: "7", rowSpan: "6" }),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement(Board.Room, { item: props.items.find(function (item) {
							return item['.key'] === 'dining';
						}), colSpan: "7", rowSpan: "8" }),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement(Board.Room, { item: props.items.find(function (item) {
							return item['.key'] === 'lounge';
						}), colSpan: "6", rowSpan: "7" }),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement(Board.Room, { item: props.items.find(function (item) {
							return item['.key'] === 'kitchen';
						}), colSpan: "6", rowSpan: "6" }),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null),
					React.createElement("td", null)
				)
			)
		),
		React.createElement(
			"table",
			{ className: "fg", cellSpacing: "0", cellPadding: "0" },
			React.createElement(
				"tbody",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "s3 room border-top border-left trapdoor-top-left" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "bg" }),
					React.createElement(
						"td",
						{ className: "cell start" },
						"1"
					),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "room border-top border-left" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "wall-right border-right room border-top" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement(
						"td",
						{ className: "cell start" },
						"4"
					),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "room border-top border-left" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "wall-right border-right room border-top trapdoor-top-right" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "s3 room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room border-top" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "door-right border-right room" }),
					React.createElement("td", { className: "cell door-left" }),
					React.createElement("td", { className: "room border-top border-left" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "wall-right border-right room border-top" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "s3 room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "s3 room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "border-bottom door-right cell" }),
					React.createElement("td", { className: "room door-left border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "s3 room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "border-bottom door-bottom wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "border-bottom room border-left" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom wall-right border-right room" }),
					React.createElement("td", { className: "cell door-top" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "border-bottom room border-left" }),
					React.createElement("td", { className: "border-bottom door-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "border-bottom room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "border-bottom wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell door-top" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "border-bottom room border-left" }),
					React.createElement("td", { className: "border-bottom door-bottom room" }),
					React.createElement("td", { className: "border-bottom wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "border-bottom door-right cell" }),
					React.createElement("td", { className: "border-bottom room door-left border-left" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell border-right border-bottom door-bottom" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell door-top" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell bg" }),
					React.createElement("td", { className: "cell" }),
					React.createElement(
						"td",
						{ className: "cell start" },
						"8"
					),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-top border-left" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room door-top border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "wall-right border-right room border-top" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell border-bottom door-bottom border-right" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement(
						"td",
						{ className: "cell start" },
						"6"
					),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "door-right border-right room" }),
					React.createElement("td", { className: "cell door-left" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-top border-left border-right border-bottom", colSpan: "7", rowSpan: "5" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-top border-left" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room door-top border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "wall-right border-right room border-top" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "room border-top border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "border-bottom door-right cell" }),
					React.createElement("td", { className: "room door-left border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "border-bottom door-right cell" }),
					React.createElement("td", { className: "room door-left border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "border-bottom room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement(
						"td",
						{ className: "cell start" },
						"3"
					),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "door-right border-right room" }),
					React.createElement("td", { className: "cell door-left" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "border-bottom room border-left" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "border-bottom room border-left" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom door-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell border-bottom door-bottom border-right" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell door-top" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-top border-left" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room door-top border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "wall-right border-right room border-top" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement(
						"td",
						{ className: "cell start" },
						"5"
					),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "door-right border-right room" }),
					React.createElement("td", { className: "cell door-left" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "border-bottom door-right cell" }),
					React.createElement("td", { className: "room door-left border-top border-left" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "room border-top border-left" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "room border-top" }),
					React.createElement("td", { className: "wall-right border-right room border-top" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room border-top" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "door-right border-right room" }),
					React.createElement("td", { className: "cell door-left" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-top border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell bg" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "cell" }),
					React.createElement("td", { className: "room border-left" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "room" }),
					React.createElement("td", { className: "wall-right border-right room" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "border-bottom room border-left trapdoor-bottom-left" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "bg" }),
					React.createElement(
						"td",
						{ className: "cell start" },
						"7"
					),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "border-bottom room border-left" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom wall-right border-right room" }),
					React.createElement("td", { className: "bg" }),
					React.createElement(
						"td",
						{ className: "cell start" },
						"2"
					),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "border-bottom room border-left" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom room" }),
					React.createElement("td", { className: "border-bottom wall-right border-right room trapdoor-bottom-right" }),
					React.createElement("td", { className: "bg" })
				),
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" }),
					React.createElement("td", { className: "bg" })
				)
			)
		)
	);
};
Board.defaultProps = {
	items: {}
};

Board.Room = function (props) {
	var item = props.item;

	var attrs = _objectWithoutProperties(props, ["item"]);

	return React.createElement(
		"td",
		_extends({ className: "room", style: { backgroundImage: "url(" + (_.get(item, 'image.src') || '') + ")" } }, attrs),
		React.createElement(
			"div",
			null,
			item.name
		)
	);
};
Board.Room.defaultProps = {
	item: {}
};

var Sheet = function Sheet(props) {
	return React.createElement(
		"div",
		{ className: "sheet" },
		React.createElement(
			"header",
			null,
			React.createElement(
				"span",
				null,
				props.game.name
			)
		),
		React.createElement(
			"table",
			{ cellSpacing: "0", cellPadding: "0" },
			props.groups.map(function (group) {
				return React.createElement(Sheet.Group, { key: group['.key'], group: group, items: props.items.filter(function (item) {
						return item.group === group['.key'];
					}) });
			})
		)
	);
};
Sheet.defaultProps = {
	game: {},
	groups: [],
	items: []
};

Sheet.Group = function (props) {
	return React.createElement(
		"tbody",
		null,
		React.createElement(
			"tr",
			{ className: "header" },
			React.createElement(
				"td",
				null,
				React.createElement(
					"div",
					{ className: props.group['.key'] },
					props.group.name
				)
			),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null)
		),
		props.items.map(function (item) {
			return React.createElement(
				"tr",
				{ key: item['.key'] },
				React.createElement(
					"td",
					null,
					React.createElement(
						"div",
						null,
						item.name
					)
				),
				React.createElement("td", null),
				React.createElement("td", null),
				React.createElement("td", null),
				React.createElement("td", null),
				React.createElement("td", null),
				React.createElement("td", null),
				React.createElement("td", null)
			);
		})
	);
};
Sheet.Group.defaultProps = {
	group: {},
	items: []
};

var Card = function Card(props) {
	return React.createElement(
		"div",
		{ className: "card " + props.item.group },
		React.createElement(
			"header",
			null,
			React.createElement(
				"div",
				null,
				props.item.name
			)
		),
		React.createElement("figure", { style: { backgroundImage: "url(" + (_.get(props, 'item.image.src') || '') + ")" } }),
		React.createElement(
			"footer",
			null,
			React.createElement(
				"div",
				null,
				props.item.name
			)
		)
	);
};
Card.defaultProps = {
	item: {}
};

var ClueGame = React.createClass({
	displayName: "ClueGame",

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

		if (!this.props.id) {
			this.props.id = this.firebase.child('games').push().key();

			// change hash
			location.hash = this.props.id;
		}
		this.bindAsObject(this.firebase.child('games').child(this.props.id), 'overrides');
	},
	handleChange: function handleChange(path, key, value) {
		this.firebase.child('games').child(this.props.id).child(path).child(key).set(value || null);
	},
	render: function render() {
		var _this = this;

		var game = merge(this.state.game, this.state.overrides.game || {}),
		    items = this.state.items.map(function (item) {
			return merge(item, (_this.state.overrides.items || {})[item['.key']]);
		});
		return React.createElement(
			"div",
			{ className: "flex-row" },
			React.createElement(
				"table",
				{ id: "input" },
				React.createElement(
					"tbody",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement(
							"td",
							{ colspan: "2" },
							"Game"
						)
					),
					React.createElement(ClueGame.ItemInput, {
						item: this.state.overrides.game,
						"default": this.state.game,
						onChange: function onChange(e) {
							return _this.handleChange('game', 'name', e.target.value);
						},
						onUpload: function onUpload(data) {
							return _this.handleChange('game', 'image', { src: data.link, deletehash: data.deletehash });
						},
						onRemove: function onRemove(data) {
							return _this.handleChange('game', 'image', null);
						}
					})
				),
				this.state.groups.map(function (group) {
					return React.createElement(
						"tbody",
						{ key: group['.key'] },
						React.createElement(
							"tr",
							null,
							React.createElement(
								"td",
								null,
								group.name
							)
						),
						_this.state.items.filter(function (item) {
							return item.group === group['.key'];
						}).map(function (item) {
							return React.createElement(ClueGame.ItemInput, {
								key: item['.key'],
								item: (_this.state.overrides.items || {})[item['.key']],
								"default": item,
								onChange: function onChange(e) {
									return _this.handleChange("items/" + item['.key'], 'name', e.target.value);
								},
								onUpload: function onUpload(data) {
									return _this.handleChange("items/" + item['.key'], 'image', { src: data.link, deletehash: data.deletehash });
								},
								onRemove: function onRemove(data) {
									return _this.handleChange("items/" + item['.key'], 'image', null);
								}
							});
						})
					);
				})
			),
			React.createElement(
				"div",
				{ id: "content" },
				React.createElement(Board, { game: game, items: items }),
				React.createElement(
					"div",
					{ id: "sheets" },
					[1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
						return React.createElement(Sheet, { key: 's' + i, game: game, groups: _this.state.groups, items: items });
					})
				),
				React.createElement(
					"div",
					{ id: "cards" },
					items.map(function (item) {
						return React.createElement(Card, { key: item['.key'], game: game, item: item });
					})
				)
			)
		);
	}
});

ClueGame.ItemInput = function (props) {
	return React.createElement(
		"tr",
		null,
		React.createElement(
			"td",
			null,
			React.createElement("input", { value: props.item.name, placeholder: props.default.name, onChange: props.onChange })
		),
		React.createElement(
			"td",
			null,
			React.createElement(ImgurUpload, { image: props.item.image, onUpload: props.onUpload, onRemove: props.onRemove })
		)
	);
};
ClueGame.ItemInput.defaultProps = {
	item: {},
	default: {},
	onChange: function onChange() {},
	onUpload: function onUpload() {},
	onRemove: function onRemove() {}
};

var ImgurUpload = React.createClass({
	displayName: "ImgurUpload",
	getDefaultProps: function getDefaultProps() {
		return {
			image: null,
			onUpload: function onUpload() {},
			onRemove: function onRemove() {}
		};
	},
	shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
		return this.props.image !== nextProps.image;
	},
	imgur: function imgur(method) {
		var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		return fetch("https://api.imgur.com/3/" + method, Object.assign({
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
			return _this2.props.onUpload(image);
		});
	},
	handleEdit: function handleEdit(e) {
		window.open("https://imgur.com/edit/advanced?deletehash=" + this.props.image.deletehash);
	},
	handleRemove: function handleRemove(e) {
		var _this3 = this;

		this.imgur("image/" + this.props.image.deletehash, {
			method: 'DELETE'
		}).then(function (res) {
			return res.json();
		}).then(function (json) {
			return json.data;
		}).then(function (data) {
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
		var hasImage = !!this.props.image;
		return React.createElement(
			"div",
			{ "class": "container" },
			React.createElement(
				"button",
				{ hidden: hasImage, style: styles.inputWrapper },
				React.createElement("span", { className: "ion-image" }),
				React.createElement("input", { type: "file", accept: "image/*", onChange: this.handleUpload, style: styles.input })
			),
			React.createElement(
				"button",
				{ hidden: !hasImage, onClick: this.handleEdit },
				React.createElement("span", { className: "ion-edit" })
			),
			React.createElement(
				"button",
				{ hidden: !hasImage, onClick: this.handleRemove },
				React.createElement("span", { className: "ion-android-close" })
			)
		);
	}
});

ReactDOM.render(React.createElement(ClueGame, { id: location.hash.replace(/^#?/, '') }), document.getElementById('app'));
