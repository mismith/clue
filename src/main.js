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
let Board = React.createClass({
	render: function () {
		return <div className="board">
			<table className="bg" cellSpacing="0" cellPadding="0">
				<tbody>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td colSpan="5" rowSpan="6">{val(this.props.groups[2].items[0])}</td>
					<td></td>
					<td></td>
					<td colSpan="5" rowSpan="6">{val(this.props.groups[2].items[1])}</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td colSpan="4" rowSpan="7">{val(this.props.groups[2].items[3])}</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td colSpan="5" rowSpan="6">{val(this.props.groups[2].items[2])}</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td colSpan="7" rowSpan="8">{val(this.props.groups[2].items[4])}</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td colSpan="7" rowSpan="5">{val(this.props.game)}</td>
					<td></td>
					<td colSpan="7" rowSpan="6">{val(this.props.groups[2].items[5])}</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td colSpan="7" rowSpan="8">{val(this.props.groups[2].items[7])}</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td colSpan="6" rowSpan="7">{val(this.props.groups[2].items[8])}</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td colSpan="6" rowSpan="6">{val(this.props.groups[2].items[6])}</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr></tbody>
			</table>
			<table className="fg" cellSpacing="0" cellPadding="0">
				<tbody>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="s3 room border-top border-left trapdoor-top-left"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="bg"></td>
					<td className="cell start">1</td>
					<td className="bg"></td>
					<td className="room border-top border-left"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="wall-right border-right room border-top"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="cell start">4</td>
					<td className="bg"></td>
					<td className="room border-top border-left"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="wall-right border-right room border-top trapdoor-top-right"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="s3 room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room border-top"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="door-right border-right room"></td>
					<td className="cell door-left"></td>
					<td className="room border-top border-left"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="wall-right border-right room border-top"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="s3 room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="s3 room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="border-bottom door-right cell"></td>
					<td className="room door-left border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="s3 room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="border-bottom door-bottom wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="border-bottom room border-left"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom wall-right border-right room"></td>
					<td className="cell door-top"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="border-bottom room border-left"></td>
					<td className="border-bottom door-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="border-bottom room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="border-bottom wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell door-top"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="border-bottom room border-left"></td>
					<td className="border-bottom door-bottom room"></td>
					<td className="border-bottom wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="border-bottom door-right cell"></td>
					<td className="border-bottom room door-left border-left"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell border-right border-bottom door-bottom"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell door-top"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell bg"></td>
					<td className="cell"></td>
					<td className="cell start">8</td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="cell"></td>
					<td className="room border-top border-left"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="room door-top border-top"></td>
					<td className="room border-top"></td>
					<td className="wall-right border-right room border-top"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell border-bottom door-bottom border-right"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="bg"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="cell start">6</td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="door-right border-right room"></td>
					<td className="cell door-left"></td>
					<td className="cell"></td>
					<td className="room border-top border-left border-right border-bottom" colSpan="7" rowSpan="5"></td>
					<td className="cell"></td>
					<td className="room border-top border-left"></td>
					<td className="room border-top"></td>
					<td className="room door-top border-top"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="wall-right border-right room border-top"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="room border-top border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="border-bottom door-right cell"></td>
					<td className="room door-left border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="border-bottom door-right cell"></td>
					<td className="room door-left border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="border-bottom room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="cell start">3</td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="door-right border-right room"></td>
					<td className="cell door-left"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="border-bottom room border-left"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="cell"></td>
					<td className="border-bottom room border-left"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom door-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell border-bottom door-bottom border-right"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="bg"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell door-top"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-top border-left"></td>
					<td className="room border-top"></td>
					<td className="room door-top border-top"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="wall-right border-right room border-top"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell start">5</td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="door-right border-right room"></td>
					<td className="cell door-left"></td>
					<td className="cell"></td>
					<td className="border-bottom door-right cell"></td>
					<td className="room door-left border-top border-left"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="bg"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="room border-top border-left"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="room border-top"></td>
					<td className="wall-right border-right room border-top"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room border-top"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="door-right border-right room"></td>
					<td className="cell door-left"></td>
					<td className="cell"></td>
					<td className="room border-top border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell bg"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="cell"></td>
					<td className="room border-left"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="room"></td>
					<td className="wall-right border-right room"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="border-bottom room border-left trapdoor-bottom-left"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="bg"></td>
					<td className="cell start">7</td>
					<td className="bg"></td>
					<td className="border-bottom room border-left"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom wall-right border-right room"></td>
					<td className="bg"></td>
					<td className="cell start">2</td>
					<td className="bg"></td>
					<td className="border-bottom room border-left"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom room"></td>
					<td className="border-bottom wall-right border-right room trapdoor-bottom-right"></td>
					<td className="bg"></td>
				</tr>
				<tr>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
					<td className="bg"></td>
				</tr></tbody>
			</table>
		</div>
	}
});


let Sheet = React.createClass({
	render: function () {
		return <div className="sheet">
			<header>
				<span>{val(this.props.game)}</span>
			</header>
			<table cellSpacing="0" cellPadding="0">
			{this.props.groups.map((group, i) =>
				<Sheet.Group key={i} name={group.name} items={group.items} />
			)}
			</table>
		</div>
	},
});
Sheet.Group = React.createClass({
	render: function () {
		return <tbody>
			<Sheet.Row.Header name={this.props.name} />
		{this.props.items.map((item, i) => 
			<Sheet.Row key={i} item={item} />
		)}
		</tbody>
	},
});
Sheet.Row = React.createClass({
	render: function () {
		return <tr>
			<td>{val(this.props.item)}</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	},
});
Sheet.Row.Header = React.createClass({
	render: function() {
		return <tr className="header">
			<td>{this.props.name}</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	},
});


let Card = React.createClass({
	render: function () {
		return <div className="card">
			<header>
				<span>{this.props.item.name}</span>
			</header>
			<figure></figure>
			<footer>
				<span>{this.props.item.name}</span>
			</footer>
		</div>
	},
});


let ClueGame = React.createClass({
	getInitialState: function () {
		return {
			game: {
				name: 'Clue',
			},
			groups: [
				{
					name: 'Who',
					items: [
						{
							name: 'Mr. Green',
						},
						{
							name: 'Colonel Mustard',
						},
						{
							name: 'Mrs. Peacock',
						},
						{
							name: 'Professor Plum',
						},
						{
							name: 'Miss Scarlet',
						},
						{
							name: 'Mrs. White',
						},
						{
							name: '',
						},
						{
							name: '',
						},
					],
				},
				{
					name: 'How',
					items: [
						{
							name: 'Candlestick',
						},
						{
							name: 'Knife',
						},
						{
							name: 'Lead Pipe',
						},
						{
							name: 'Poison',
						},
						{
							name: 'Revolver',
						},
						{
							name: 'Rope',
						},
						{
							name: 'Wrench',
						},
						{
							name: '',
						},
					],
				},
				{
					name: 'Where',
					items: [
						{
							name: 'Conservatory',
						},
						{
							name: 'Billiard Room',
						},
						{
							name: 'Library',
						},
						{
							name: 'Study',
						},
						{
							name: 'Ballroom',
						},
						{
							name: 'Hall',
						},
						{
							name: 'Kitchen',
						},
						{
							name: 'Dining Room',
						},
						{
							name: 'Lounge',
						},
					],
				},
			],
		};
	},
	handleNameChange: function (groupIndex, itemIndex, e) {
		this.setState(React.addons.update(this.state, {
			groups: {
				[groupIndex]: {
					items: {
						[itemIndex]: {
							value: {$set: e.target.value},
						},
					},
				},
			},
		}));
	},
	render: function () {
		let cards = [];
		this.state.groups.forEach(group => group.items.forEach(item => cards.push(item)));

		return <div className="flex-row">
			<table id="input">
			{this.state.groups.map((group, i) => 
				<tbody key={i}>
					<tr><td>{group.name}</td></tr>
				{group.items.map((item, j) =>
					<tr key={j}>
						<td>
							<input placeholder={item.name} onChange={this.handleNameChange.bind(this, i, j)} />
						</td>
					</tr>
				)}
				</tbody>
			)}
			</table>
			<div id="content">
				<Board game={this.state.game} groups={this.state.groups} />
				<div id="sheets">
				{this.state.groups[0].items.map((item, i) => 
					<Sheet key={i} game={this.state.game} groups={this.state.groups} />
				)}
				</div>
				<div id="cards">
				{cards.map((item, i) => 
					<Card key={i} item={item} />
				)}
				</div>
			</div>
		</div>
	},
});

ReactDOM.render(
	<ClueGame />,
	document.getElementById('clue')
);