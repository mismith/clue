"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Object.defineProperty(Object.prototype, 'map', {
//     value: function(f, ctx) {
//         ctx = ctx || this;
//         var self = this, result = {};
//         Object.keys(self).forEach(function(k) {
//             result[k] = f.call(ctx, self[k], k, self);
//         });
//         return result;
//     }
// });

function val(item) {
	return item.value || item.name;
}
var Board = React.createClass({
	displayName: "Board",

	render: function render() {
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
						React.createElement(
							"td",
							{ colSpan: "5", rowSpan: "6" },
							val(this.props.groups[2].items[0])
						),
						React.createElement("td", null),
						React.createElement("td", null),
						React.createElement(
							"td",
							{ colSpan: "5", rowSpan: "6" },
							val(this.props.groups[2].items[1])
						),
						React.createElement("td", null),
						React.createElement("td", null),
						React.createElement("td", null),
						React.createElement("td", null),
						React.createElement("td", null),
						React.createElement("td", null),
						React.createElement("td", null),
						React.createElement("td", null),
						React.createElement(
							"td",
							{ colSpan: "4", rowSpan: "7" },
							val(this.props.groups[2].items[3])
						),
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
						React.createElement(
							"td",
							{ colSpan: "5", rowSpan: "6" },
							val(this.props.groups[2].items[2])
						),
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
						React.createElement(
							"td",
							{ colSpan: "7", rowSpan: "8" },
							val(this.props.groups[2].items[4])
						),
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
						React.createElement(
							"td",
							{ colSpan: "7", rowSpan: "5" },
							val(this.props.game)
						),
						React.createElement("td", null),
						React.createElement(
							"td",
							{ colSpan: "7", rowSpan: "6" },
							val(this.props.groups[2].items[5])
						),
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
						React.createElement(
							"td",
							{ colSpan: "7", rowSpan: "8" },
							val(this.props.groups[2].items[7])
						),
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
						React.createElement(
							"td",
							{ colSpan: "6", rowSpan: "7" },
							val(this.props.groups[2].items[8])
						),
						React.createElement("td", null)
					),
					React.createElement(
						"tr",
						null,
						React.createElement("td", null),
						React.createElement("td", null),
						React.createElement(
							"td",
							{ colSpan: "6", rowSpan: "6" },
							val(this.props.groups[2].items[6])
						),
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
	}
});

var Sheet = React.createClass({
	displayName: "Sheet",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "sheet" },
			React.createElement(
				"header",
				null,
				React.createElement(
					"span",
					null,
					val(this.props.game)
				)
			),
			React.createElement(
				"table",
				{ cellSpacing: "0", cellPadding: "0" },
				this.props.groups.map(function (group, i) {
					return React.createElement(Sheet.Group, { key: i, name: group.name, items: group.items });
				})
			)
		);
	}
});
Sheet.Group = React.createClass({
	displayName: "Group",

	render: function render() {
		return React.createElement(
			"tbody",
			null,
			React.createElement(Sheet.Row.Header, { name: this.props.name }),
			this.props.items.map(function (item, i) {
				return React.createElement(Sheet.Row, { key: i, item: item });
			})
		);
	}
});
Sheet.Row = React.createClass({
	displayName: "Row",

	render: function render() {
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"td",
				null,
				val(this.props.item)
			),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null)
		);
	}
});
Sheet.Row.Header = React.createClass({
	displayName: "Header",

	render: function render() {
		return React.createElement(
			"tr",
			{ className: "header" },
			React.createElement(
				"td",
				null,
				this.props.name
			),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null),
			React.createElement("td", null)
		);
	}
});

var Card = React.createClass({
	displayName: "Card",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "card" },
			React.createElement(
				"header",
				null,
				React.createElement(
					"span",
					null,
					this.props.item.name
				)
			),
			React.createElement("figure", null),
			React.createElement(
				"footer",
				null,
				React.createElement(
					"span",
					null,
					this.props.item.name
				)
			)
		);
	}
});

var ClueGame = React.createClass({
	displayName: "ClueGame",

	getInitialState: function getInitialState() {
		return {
			game: {
				name: 'Clue'
			},
			groups: [{
				name: 'Who',
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
		this.setState(React.addons.update(this.state, {
			groups: _defineProperty({}, groupIndex, {
				items: _defineProperty({}, itemIndex, {
					value: { $set: e.target.value }
				})
			})
		}));
	},
	render: function render() {
		var _this = this;

		var cards = [];
		this.state.groups.forEach(function (group) {
			return group.items.forEach(function (item) {
				return cards.push(item);
			});
		});

		return React.createElement(
			"div",
			{ className: "flex-row" },
			React.createElement(
				"table",
				{ id: "input" },
				this.state.groups.map(function (group, i) {
					return React.createElement(
						"tbody",
						{ key: i },
						React.createElement(
							"tr",
							null,
							React.createElement(
								"td",
								null,
								group.name
							)
						),
						group.items.map(function (item, j) {
							return React.createElement(
								"tr",
								{ key: j },
								React.createElement(
									"td",
									null,
									React.createElement("input", { placeholder: item.name, onChange: _this.handleNameChange.bind(_this, i, j) })
								)
							);
						})
					);
				})
			),
			React.createElement(
				"div",
				{ id: "content" },
				React.createElement(Board, { game: this.state.game, groups: this.state.groups }),
				React.createElement(
					"div",
					{ id: "sheets" },
					this.state.groups[0].items.map(function (item, i) {
						return React.createElement(Sheet, { key: i, game: _this.state.game, groups: _this.state.groups });
					})
				),
				React.createElement(
					"div",
					{ id: "cards" },
					cards.map(function (item, i) {
						return React.createElement(Card, { key: i, item: item });
					})
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(ClueGame, null), document.getElementById('clue'));
