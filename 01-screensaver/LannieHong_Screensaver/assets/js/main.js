
let person = document.querySelector(".person");
let scene = document.querySelector(".light");


function darkScreen(){
  scene.classList.toggle("dark-screen");
  person.classList.toggle("dark-screen");
};


function movingPerson(){
  let randomTop = Math.floor(Math.random() * 350);
  let randomLeft = Math.floor(Math.random() * 450);

  console.log(`Top value: ${randomTop}px, Left value: ${randomLeft}px`);

  person.style.left = `${randomLeft}px`;
  person.style.top = `${randomTop}px`;
};


setInterval(darkScreen, 1000);
setInterval(movingPerson, 1000);