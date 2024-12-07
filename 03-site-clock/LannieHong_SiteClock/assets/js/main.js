
function shadowClock() {
	const today = new Date();
	const hour = today.getHours();

	const sun = document.querySelector(".sun");
	const triangle = document.querySelector(".triangle");
	const body = document.querySelector("body");

	if (hour == 12) { // 12pm noon
		sun.style.bottom = "900px";
		triangle.style.borderLeft = "50px solid transparent";
		triangle.style.borderRight = "50px solid transparent";
		body.style.backgroundColor = "#ADE0F7";
	} else if (hour == 14) { // 2pm
		sun.style.bottom = "700px";
		triangle.style.borderLeft = "70px solid transparent";
		triangle.style.borderRight = "70px solid transparent";
		body.style.backgroundColor = "#ADE0F7";

	} else if (hour == 15) { // 3pm
		sun.style.bottom = "600px";
		triangle.style.borderLeft = "100px solid transparent";
		triangle.style.borderRight = "100px solid transparent";
		body.style.backgroundColor = "#93d6f5";

	} else if (hour == 16) { // 4pm
		sun.style.bottom = "550px";
		triangle.style.borderLeft = "150px solid transparent";
		triangle.style.borderRight = "150px solid transparent";
		body.style.backgroundColor = "#93d6f5";
	} else if (hour == 17) { // 5pm
		sun.style.bottom = "550px";
		triangle.style.borderLeft = "230px solid transparent";
		triangle.style.borderRight = "230px solid transparent";
		body.style.backgroundColor = "#6fa0f2";
	} else if (hour == 18) { // 6pm sunset
		sun.style.bottom = "250px";
		triangle.style.borderLeft = "300px solid transparent";
		triangle.style.borderRight = "300px solid transparent";
		body.style.backgroundColor = "#eba7b3";
	} else if (hour == 19) { // 7pm
		sun.style.bottom = "150px";
		triangle.style.borderLeft = "3700px solid transparent";
		triangle.style.borderRight = "370px solid transparent";
		body.style.backgroundColor = "#c74e9a";
	} else if (hour == 20) { // 8pm
		sun.style.bottom = "90px";
		triangle.style.borderLeft = "600px solid transparent";
		triangle.style.borderRight = "600px solid transparent";
		body.style.backgroundColor = "#5f4c9c";
	} else if (hour == 22) { // 10pm
		sun.style.bottom = "0px";
		triangle.style.borderLeft = "0px solid transparent";
		triangle.style.borderRight = "0px solid transparent";
		body.style.backgroundColor = "#0c3270";
	} else if (hour == 0) { //12am midnight
		sun.style.bottom = "0px";
		triangle.style.borderLeft = "10px solid transparent";
		triangle.style.borderRight = "10px solid transparent";
		body.style.backgroundColor = "#021533";
	} else if (hour == 6) { // 6am sunrise
		sun.style.bottom = "100px";
		triangle.style.borderLeft = "600px solid transparent";
		triangle.style.borderRight = "600px solid transparent";
		body.style.backgroundColor = "#f09075";
	}
}
shadowClock();
setInterval(shadowClock, 1000);


