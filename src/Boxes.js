import React, { useState } from 'react';
import Box from './Box';
import './Boxes.css';
import { choice } from './helpers';

const Boxes = (props) => {
	const [ boxes, setBoxes ] = useState(
		Array.from({ length: props.numBoxes }, () => choice(props.allColors)));


	// click event
	const handleClick = evt => {
		let index = Math.floor(Math.random() * props.numBoxes);

		setBoxes(boxes => {
			let boxCopy = [ ...boxes ];
			boxCopy[ index ] = choice(props.allColors);
			return boxCopy;
		});
	};

	const boxComponents = boxes.map((color, i) => <Box key={ i } color={ color } />);

	return (
		<div>
			<section className="Boxes"> { boxComponents } </section>
			<button onClick={ handleClick } >Change a Box Color</button>
		</div>
	);
};



// Boxes.defaultProps = {
// 	numBoxes: 16,
// 	allColors: [
// 		"Aqua",
// 		"Black",
// 		"BlanchedAlmond",
// 		"Blue",
// 		"Chocolate",
// 		"DodgerBlue",
// 		"Lavender",
// 		"LawnGreen",
// 		"Peru",
// 		"Plum",
// 		"SpringGreen",
// 		"SteelBlue",
// 		"Tan",
// 		"Teal",
// 		"Thistle",
// 		"Tomato",
// 		"Turquoise",
// 		"Violet",
// 		"Yellow",
// 		"YellowGreen"
// 	]
// };


Boxes.defaultProps = {
	numBoxes: 16,
	allColors: [
		"#BAA378",
		"#C0A172",
		"#BAA378",
		"#382E1C",
		"#453823",
		"#2C2416"
	]
};



export default Boxes;