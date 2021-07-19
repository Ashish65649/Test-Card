import React from 'react';
import './Greet.css';

let time;
const obj = new Date();
let cssObject = {};
let hrs = obj.getHours();

if (hrs >= 6 && hrs <= 11) {
	cssObject.color = 'Green';
	time = 'Good Morning';
}
else if (hrs >= 12 && hrs <= 15) {
	cssObject.color = 'Red';
	time = 'Good Afternoon';
}
else if (hrs >= 16 && hrs <= 19) {
	cssObject.color = 'Pink';
	time = 'Good Evening';
}
else {
	cssObject.color = 'Cyan';
	time = 'Good Night';
}

function Greet() {
	return (
		<h1 className="greet"> Hello Sir, <span style={cssObject}> {time} </span> </h1>
	);
}

export default Greet;