function myFunction() {
	var navbar = document.getElementById("nav");
	console.log(navbar);

	if (navbar.className === "nav") {
		navbar.className += " responsive";
		console.log("nav hambuger success");
	} else {
		navbar.className = "nav";
		console.log("nav hambuger didnt show");
	}
}
