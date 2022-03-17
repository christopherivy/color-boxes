
const choice = (items) => {
	let index = Math.floor(Math.random() * items.length);
	return items[ index ];
};


const remove = (item, items) => {
	for(let i = 0; i < items.length; i++) {
		if(items[ i ] === item) {
			return [ ...items.slice(0, i), ...items.slice(i + 1) ];
		}
	}
};



export { remove, choice };
