const allInOneBtn = document.getElementById("all-in-one-btn");
const image = document.getElementById("target-image");

// allInOneBtn.style.backgroundColor = "cyan";
allInOneBtn.addEventListener("click", () => {
	image.classList.toggle("grayscale");
	allInOneBtn.textContent = "desaturate";
});

allInOneBtn.addEventListener("dblclick", () => {
	image.classList.toggle("shrink");
	allInOneBtn.textContent = "shrink";
});

allInOneBtn.addEventListener("mouseleave", () => {
	allInOneBtn.textContent = "my-all-in-one";
	//image.style.borderRadius = "0";
});

allInOneBtn.addEventListener("mousemove", (event) => {
	const xPos = event.clientX;
	const yPos = event.clientY;
	allInOneBtn.textContent = xPos;
	image.style.width = `${xPos}vw`;
});

allInOneBtn.addEventListener("mouseover", () => {
	image.classList.toggle("reshape");
});

allInOneBtn.addEventListener("mousecenter", () => {
	image.style.borderRadius = "50%";
});