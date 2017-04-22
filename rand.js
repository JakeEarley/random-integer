function randomInteger(low,high) {
	var rand = 0;
	var max = parseInt(high);
	var min = parseInt(low);
	if (min >= 0) {
		if (max <= 1000000 && max > min) {
			rand = Math.floor(Math.random() * (max - min)) + min;
			document.getElementById("output").textContent = rand;
		} else {
			document.getElementById("output").textContent = "Error";
		}
		
	} else {
		document.getElementById("output").textContent = "Error";
	}
}