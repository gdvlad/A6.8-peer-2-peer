function move1() {
	var elem = document.getElementById("greenBar1");

	var width = 0;

	var id = setInterval(frame, 50);
	function frame() {

		if (width >= 1) {

			clearInterval(id);

		} else {   width++;

			elem.style.width = width + '%';  

			elem.innerHTML = width * 1  + '%';
		}
	}
};	  	


function move2() {
	var elem = document.getElementById("greenBar2");

	var width = 0;

	var id = setInterval(frame, 50);
	function frame() {

		if (width >= 3) {

			clearInterval(id);

		} else {   width++;

			elem.style.width = width + '%';  

			elem.innerHTML = width * 1  + '%';
		}
	}
};	  	


function move3() {
	var elem = document.getElementById("greenBar3");

	var width = 0;

	var id = setInterval(frame, 50);
	function frame() {

		if (width >= 7) {

			clearInterval(id);

		} else {   width++;

			elem.style.width = width + '%';  

			elem.innerHTML = width * 1  + '%';
		}
	}
};  	