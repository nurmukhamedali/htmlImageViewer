
var figure = document.getElementById("image");
var image = figure.getElementsByTagName("img")[0];
var loc = document.getElementById("location");
var next = document.getElementById("next").onclick = setImage();

var keys = {
	'W':87,
	'S':83,
	'A':65,
	'D':68,
	'RIGHT':39,
	'LEFT':37
}

document.onclick = e => {
			if (e.target.classList.contains('next')) {
				setImage("right");
			}
			if (e.target.classList.contains('prev')) {
				setImage("left");
			}
		}
document.onkeydown = (e) => {
	let keyCode = e.key;
	if (keyCode == "ArrowRight"){
		setImage("right");
	} else if(keyCode == "ArrowLeft"){
		setImage("left");
	}
}

function setImage(direction){
	let source = image.getAttribute("src");
	let paths = source.replace(loc.value, "");

	let current_idx = filenames.indexOf(paths);
	if (current_idx == -1) {
		current_idx = 0;
	}
	let next_file = filenames[current_idx];;
	if (direction == "right"){
		let x = current_idx + 1;
		if (x >= filenames.length){
			x = 0;
		}
		next_file = filenames[x];
	} else if(direction == "left"){
		let x = current_idx - 1;
		if (x < 0){
			x = filenames.length - 1;
		}
		next_file = filenames[x];
	}
	image.setAttribute("src", loc.value + next_file);
}