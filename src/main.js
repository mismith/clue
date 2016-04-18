//import React from 'react';
//import ReactDOM from 'react-dom';
//import FaUpload from 'react-icons/fa/upload';

let val = item => item.value || item.name;
let LoremPixelCounter = 0;
function LoremPixel(type, w = 225, h = 350) {
	let image = '';
	image = '//lorempixel.com/225/350/';
	switch(type) {
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
	image += (++LoremPixelCounter % 9) + 1;
	return image;
}


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
				<td colSpan="5" rowSpan="6" className="room" style={{backgroundImage: `url(${props.groups[2].items[0].image || LoremPixel(props.groups[2].type)})`}}>
					<div>{val(props.groups[2].items[0])}
					</div>
				</td>
				<td></td>
				<td></td>
				<td colSpan="5" rowSpan="6" className="room" style={{backgroundImage: `url(${props.groups[2].items[1].image || LoremPixel(props.groups[2].type)})`}}>
					<div>{val(props.groups[2].items[1])}</div>
				</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td colSpan="4" rowSpan="7" className="room" style={{backgroundImage: `url(${props.groups[2].items[3].image || LoremPixel(props.groups[2].type)})`}}>
					<div>{val(props.groups[2].items[3])}</div>
				</td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td colSpan="5" rowSpan="6" className="room" style={{backgroundImage: `url(${props.groups[2].items[2].image || LoremPixel(props.groups[2].type)})`}}>
					<div>{val(props.groups[2].items[2])}</div>
				</td>
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
				<td colSpan="7" rowSpan="8" className="room" style={{backgroundImage: `url(${props.groups[2].items[4].image || LoremPixel(props.groups[2].type)})`}}>
					<div>{val(props.groups[2].items[4])}</div>
				</td>
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
				<td colSpan="7" rowSpan="5" className="room" style={{backgroundImage: `url(${props.game.image || LoremPixel()})`}}>
					<div>{val(props.game)}</div>
				</td>
				<td></td>
				<td colSpan="7" rowSpan="6" className="room" style={{backgroundImage: `url(${props.groups[2].items[5].image || LoremPixel(props.groups[2].type)})`}}>
					<div>{val(props.groups[2].items[5])}</div>
				</td>
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
				<td colSpan="7" rowSpan="8" className="room" style={{backgroundImage: `url(${props.groups[2].items[7].image || LoremPixel(props.groups[2].type)})`}}>
					<div>{val(props.groups[2].items[7])}</div>
				</td>
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
				<td colSpan="6" rowSpan="7" className="room" style={{backgroundImage: `url(${props.groups[2].items[8].image || LoremPixel(props.groups[2].type)})`}}>
					<div>{val(props.groups[2].items[8])}</div>
				</td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td colSpan="6" rowSpan="6" className="room" style={{backgroundImage: `url(${props.groups[2].items[6].image || LoremPixel(props.groups[2].type)})`}}>
					<div>{val(props.groups[2].items[6])}</div>
				</td>
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


let Sheet = props =>
	<div className="sheet">
		<header>
			<span>{val(props.game)}</span>
		</header>
		<table cellSpacing="0" cellPadding="0">
		{props.groups.map((group, i) =>
			<Sheet.Group key={i} name={group.name} type={group.type} items={group.items} />
		)}
		</table>
	</div>

Sheet.Group = props =>
	<tbody>
		<Sheet.Row.Header name={props.name} type={props.type} />
	{props.items.map((item, i) => 
		<Sheet.Row key={i} item={item} />
	)}
	</tbody>

Sheet.Row = props =>
	<tr>
		<td><div>{val(props.item)}</div></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>

Sheet.Row.Header = props =>
	<tr className="header">
		<td><div className={props.type}>{props.name}</div></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>


let Card = props => {
	let image = props.item.image || LoremPixel(props.type);

	return (
	<div className={`card ${props.type}`}>
		<header>
			<div>{val(props.item)}</div>
		</header>
		<figure style={{backgroundImage: `url(${image})`}}></figure>
		<footer>
			<div>{val(props.item)}</div>
		</footer>
	</div>
	)
}


let ClueGame = React.createClass({
	getInitialState() {
		return {
			game: {
				name: 'Clue',
			},
			groups: [
				{
					name: 'Who',
					type: 'character',
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
					type: 'weapon',
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
					type: 'room',
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
	handleChange(key, value, groupIndex, itemIndex) {
		if (arguments.length <= 2) {
			let game = Object.assign({}, this.state.game);
			game[key] = value;

			this.setState({game});
		} else {
			let groups = [].concat(this.state.groups);
			groups[groupIndex].items[itemIndex][key] = value;

			this.setState({groups});
		}
	},
	render() {
		return <div className="flex-row">
			<table id="input">
				<tbody>
					<tr><td colspan="2">Game</td></tr>
					<tr>
						<td><input placeholder={this.state.game.name} onChange={e => this.handleChange('value', e.target.value)} /></td>
						<td><ImgurUpload onUpload={data => this.handleChange('image', data.link)} onRemove={data => this.handleChange('image', null)} /></td>
					</tr>
				</tbody>
			{this.state.groups.map((group, i) => 
				<tbody key={i}>
					<tr><td>{group.name}</td></tr>
				{group.items.map((item, j) =>
					<tr key={j}>
						<td>
							<input placeholder={item.name} onChange={e => this.handleChange('value', e.target.value, i, j)} />
						</td>
						<td>
							<ImgurUpload onUpload={data => this.handleChange('image', data.link, i, j)} onRemove={data => this.handleChange('image', null, i, j)} />
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
				{this.state.groups.map((group, i) => group.items.map((item, j) => 
					<Card key={i+':'+j} type={group.type} item={item} />
				))}
				</div>
			</div>
		</div>
	},
});

let ImgurUpload = React.createClass({
	getDefaultProps() {
		return {
			onUpload: () => {},
			onRemove: () => {},
		};
	},
	getInitialState() {
		return {
			image: null,
		};
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
			.then(image => {
				this.setState({image});

				return this.props.onUpload(image);
			});
	},
	handleRemove(e) {
		this.imgur(`image/${this.state.image.deletehash}`, {
			method: 'DELETE',
		})
			.then(res => res.json())
			.then(json => json.data)
			.then(data => {
				this.setState({image: null});

				return this.props.onRemove(data);
			});
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
		return <div class="container">
			<button hidden={this.state.image} style={styles.inputWrapper}>
				<span className="ion-image" />
				<input type="file" accept="image/*" onChange={this.handleUpload} style={styles.input} />
			</button>
			<button hidden={!this.state.image} onClick={this.handleRemove}><span className="ion-close" /></button>
		</div>
	}
})

ReactDOM.render(
	<ClueGame />,
	document.getElementById('clue')
);