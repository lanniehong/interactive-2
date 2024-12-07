
$("#parent").draggable();
$("#child-1").draggable();
$("#child-2").draggable();
$("#child-3").draggable();
$("#child-4").draggable();
$("#child-5").draggable();
$("#child-6").draggable();
$("#child-7").draggable();
$("#child-8").draggable();



const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	$("#child-1").toggle();
	$("#child-2").toggle();
	$("#child-3").toggle();
	$("#child-4").toggle();
	$("#child-5").toggle();
	$("#child-6").toggle();
	$("#child-7").toggle();
	$("#child-8").toggle();
})