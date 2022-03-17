import React from 'react';
import './Box.css';

// this is the box component
const Box = (props) => {
	return (
		<div className="Box" style={ { backgroundColor: props.color } } >
		</div>
	);
};

export default Box;
