function chooseMap() {
	let size = prompt("Choose size board! (1-100)", '');
	if (size <= 0 || size > 100) {
		alert('Ops, You have mistakes, change answer, please!')
	}
	map(size);
}

function map(size) {

	function createMap() {
		document.getElementsByClassName('grid-container')[0].style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
		document.getElementsByClassName('grid-container')[0].style.gridTemplateRows = "repeat(" + size + ", 1fr)";

		for (let i = 0; i < (size * size); i++) {

			const div = document.createElement('div');			

			div.setAttribute('id', 'grid');
			gridContainer.appendChild(div);
		}
	}

	gridContainer = document.getElementById('gridContainer');

	if (gridContainer.firstElementChild) {
		while (gridContainer.firstChild) {
    		gridContainer.removeChild(gridContainer.firstChild);
		}

		createMap(size);

	} else {

		createMap(size);

	}
}

function reset() {
	const  divList1 = document.querySelectorAll('#grid');
	
  	divList1.forEach(div => div.style.backgroundColor = '#fff');
}

function randomColor() {
	let randomColor = Math.floor(Math.random() * (256 - 1)) + 2;
	return randomColor;
}

function random() {

	const divList2 = document.querySelectorAll('#grid');

	divList2.forEach(div => div.addEventListener('mouseover', function(e){
	div.style.backgroundColor = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
	}));
}

function defaultColor() {

	const divList2 = document.querySelectorAll('#grid');

	divList2.forEach(div => div.addEventListener('mouseover', function(e){
	div.style.backgroundColor = 'black';
	}));
}

/*function gradient() {

	const divList2 = document.querySelectorAll('#grid');

	divList2.forEach(div => div.addEventListener('mouseover', function(e){

	 	let grids = document.getElementById('grid');
		const divList2 = document.querySelectorAll('#grid');
		let styles = grids.style.backgroundColor;

		if (styles === '') {

		let newStyles = grids.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.1 + ')';

		} else {

			let styles1 = styles.split(',')[3];
		    let val = parseFloat(styles1);

			val = val + 0.1;

			const divList2 = document.querySelectorAll('#grid');
			divList2.forEach(div => div.addEventListener('mouseover', function(e){
			div.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + val + ')';
			}));
		}
	}));
}*/





