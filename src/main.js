//import React from 'react';
//import ReactDOM from 'react-dom';
//import FaUpload from 'react-icons/fa/upload';

let merge = function(...args) {
	args.unshift({});
	return Object.assign.apply(this, args.map(arg => arg || {}));
};


let Board = props =>
	<div className="board">
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
				<Board.Room item={props.items.find(item => item['.key'] === 'conservatory')} colSpan="5" rowSpan="6" />
				<td></td>
				<td></td>
				<Board.Room item={props.items.find(item => item['.key'] === 'billiard')} colSpan="5" rowSpan="6" />
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<Board.Room item={props.items.find(item => item['.key'] === 'study')} colSpan="4" rowSpan="7" />
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<Board.Room item={props.items.find(item => item['.key'] === 'library')} colSpan="5" rowSpan="6" />
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
				<Board.Room item={props.items.find(item => item['.key'] === 'ball')} colSpan="7" rowSpan="8" />
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
				<Board.Room item={props.game} colSpan="7" rowSpan="5" />
				<td></td>
				<Board.Room item={props.items.find(item => item['.key'] === 'hall')} colSpan="7" rowSpan="6" />
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
				<Board.Room item={props.items.find(item => item['.key'] === 'dining')} colSpan="7" rowSpan="8" />
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
				<Board.Room item={props.items.find(item => item['.key'] === 'lounge')} colSpan="6" rowSpan="7" />
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<Board.Room item={props.items.find(item => item['.key'] === 'kitchen')} colSpan="6" rowSpan="6" />
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
Board.defaultProps = {
	items: {},
};

Board.Room = props => {
	let {item, ...attrs} = props;
	return <td className="room" style={{backgroundImage: `url(${_.get(item, 'image.src') || ''})`}} {...attrs}>
		<div>{item.name}</div>
	</td>
};
Board.Room.defaultProps = {
	item: {},
};


let Sheet = props =>
	<div className="sheet">
		<header>
			<span>{props.game.name}</span>
		</header>
		<table cellSpacing="0" cellPadding="0">
		{props.groups.map(group =>
			<Sheet.Group key={group['.key']} group={group} items={props.items.filter(item => item.group === group['.key'])} />
		)}
		</table>
	</div>
Sheet.defaultProps = {
	game:   {},
	groups: [],
	items:  [],
};

Sheet.Group = props =>
	<tbody>
		<tr className="header">
			<td><div className={props.group['.key']}>{props.group.name}</div></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	{props.items.map(item =>
		<tr key={item['.key']}>
			<td><div>{item.name}</div></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	)}
	</tbody>
Sheet.Group.defaultProps = {
	group: {},
	items: [],
};


let Card = props =>
	<div className={`card ${props.item.group}`}>
		<header>
			<div>{props.item.name}</div>
		</header>
		<figure style={{backgroundImage: `url(${_.get(props, 'item.image.src') || ''})`}}></figure>
		<footer>
			<div>{props.item.name}</div>
		</footer>
	</div>
Card.defaultProps = {
	item: {},
};


let ClueGame = React.createClass({
	mixins: [
		ReactFireMixin,
	],
	getInitialState() {
		return {
			game:   {},
			groups: [],
			items:  [],
			rooms:  {},
			overrides: {
				game:  {},
				items: {},
			},
		};
	},
	componentWillMount() {
		this.firebase = new Firebase('https://mismith.firebaseio.com/clue');

		let defaults = this.firebase.child('defaults');
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
	handleChange(path, key, value) {
		this.firebase.child('games').child(this.props.id).child(path).child(key).set(value || null);
	},
	render() {
		let game  = merge(this.state.game, this.state.overrides.game || {}),
			items = this.state.items.map(item => merge(item, (this.state.overrides.items || {})[item['.key']]));
		return <div className="flex-row">
			<table id="input">
				<tbody>
					<tr><td colspan="2">Game</td></tr>
					<ClueGame.ItemInput
						item={this.state.overrides.game}
						default={this.state.game}
						onChange={e => this.handleChange('game', 'name', e.target.value)}
						onUpload={data => this.handleChange('game', 'image', {src: data.link, deletehash: data.deletehash})}
						onRemove={data => this.handleChange('game', 'image', null)}
					/>
				</tbody>
			{this.state.groups.map(group => 
				<tbody key={group['.key']}>
					<tr><td>{group.name}</td></tr>
				{this.state.items.filter(item => item.group === group['.key']).map(item =>
					<ClueGame.ItemInput
						key={item['.key']}
						item={(this.state.overrides.items || {})[item['.key']]}
						default={item}
						onChange={e => this.handleChange(`items/${item['.key']}`, 'name', e.target.value)}
						onUpload={data => this.handleChange(`items/${item['.key']}`, 'image', {src: data.link, deletehash: data.deletehash})}
						onRemove={data => this.handleChange(`items/${item['.key']}`, 'image', null)}
					/>
				)}
				</tbody>
			)}
			</table>
			<div id="content">
				<Board game={game} items={items} />
				<div id="sheets">
				{[1,2,3,4,5,6,7,8].map(i => 
					<Sheet key={'s'+i} game={game} groups={this.state.groups} items={items} />
				)}
				</div>
				<div id="cards">
				{items.map(item => 
					<Card key={item['.key']} game={game} item={item} />
				)}
				</div>
			</div>
		</div>
	},
});

ClueGame.ItemInput = props =>
	<tr>
		<td>
			<input value={props.item.name} placeholder={props.default.name} onChange={props.onChange} />
		</td>
		<td>
			<ImgurUpload image={props.item.image} onUpload={props.onUpload} onRemove={props.onRemove} />
		</td>
	</tr>
ClueGame.ItemInput.defaultProps = {
	item:     {},
	default:  {},
	onChange: () => {},
	onUpload: () => {},
	onRemove: () => {},
};


let ImgurUpload = React.createClass({
	getDefaultProps() {
		return {
			image:    null,
			onUpload: () => {},
			onRemove: () => {},
		};
	},
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.image !== nextProps.image;
	},

	imgur(method, options = {}) {
		return fetch(`https://api.imgur.com/3/${method}`, Object.assign({
			headers: {Authorization: 'Client-ID 6c8483b3b8e6fb9'},
		}, options));
	},

	handleUpload(e) {
		let data = new FormData();
		data.append('image', e.target.files[0]);

		this.imgur('upload', {
			method: 'POST',
			body: data,
		})
			.then(res => res.json())
			.then(json => json.data)
			.then(image => this.props.onUpload(image));
	},
	handleEdit(e) {
		window.open(`https://imgur.com/edit/advanced?deletehash=${this.props.image.deletehash}`);
	},
	handleRemove(e) {
		this.imgur(`image/${this.props.image.deletehash}`, {
			method: 'DELETE',
		})
			.then(res => res.json())
			.then(json => json.data)
			.then(data => this.props.onRemove(data));
	},

	render() {
		let styles = {
			inputWrapper: {
				position: 'relative',
				overflow: 'hidden',
			},
			input: {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				fontSize: 100,
				opacity: 0,
				cursor: 'pointer',
			},
		};
		let hasImage = !!this.props.image;
		return <div class="container">
			<button hidden={hasImage} style={styles.inputWrapper}>
				<span className="ion-image" />
				<input type="file" accept="image/*" onChange={this.handleUpload} style={styles.input} />
			</button>
			<button hidden={!hasImage} onClick={this.handleEdit}><span className="ion-edit" /></button>
			<button hidden={!hasImage} onClick={this.handleRemove}><span className="ion-android-close" /></button>
		</div>
	},
})


ReactDOM.render(
	<ClueGame id={location.hash.replace(/^#?/, '')} />,
	document.getElementById('app')
);