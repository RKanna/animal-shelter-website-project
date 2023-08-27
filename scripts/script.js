"use strict";

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "flex";
  setTimeout(carousel, 10000);
}

const container = document.querySelector(".slider-image-container");
const images = container.querySelectorAll("img");
const imageWidth = images[0].clientWidth;
let currentPosition = 0;
let currentImageIndex = 0;

function moveImages() {
  currentPosition = -currentImageIndex * imageWidth;
  container.style.transition = "transform 1s ease-in-out";
  container.style.transform = `translateX(${currentPosition}px)`;

  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(moveImages, 1000);
