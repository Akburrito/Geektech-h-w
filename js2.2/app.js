function timer(from = 1) {
	let current = from;

	let timerId = setInterval(function() {
		console.log(current);
		// if (current == to) {
		// 	clearInterval(timerId);
		// }
		current++;
	}, 1000)
}

timer();