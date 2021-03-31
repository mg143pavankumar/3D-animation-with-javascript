// Movement Animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const desc = document.querySelector(".desc");
const sizes = document.querySelector(".sizes");

// Moving Animation Event

container.addEventListener("mousemove", (e) => {
  let xAsix = (window.innerWidth / 2 - e.pageX) / 25;
  let yAsix = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAsix}deg) rotateX(${yAsix}deg)`;
});

// Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "all 0.1s ease";

  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotate(-45deg) ";
  desc.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

// Animate back-to normal
container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "all 0.5s ease";

  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotate(0deg) ";
  purchase.style.transform = "translateZ(0px)";
  desc.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});
