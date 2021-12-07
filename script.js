window.onload = function () {
	let menu = document.querySelector(".menu-burguer");
	
	let check = 2;
	
	menu.addEventListener("click", ()=> {
		let clase = document.querySelector('.right');
			if ( check % 2 == 0) {
				clase.classList.add("difuminado");
			}
			else {
				clase.classList.remove("difuminado");
			}
			check++;
	});

	
}