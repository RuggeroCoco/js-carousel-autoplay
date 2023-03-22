const imagesArray = [
  "../assets/01.jpg",
  "../assets/02.jpg",
  "../assets/03.jpg",
  "../assets/04.jpg",
  "../assets/05.jpg",
];

const scrollImages = document.querySelector(".scroll-images");

for (let i = 0; i < imagesArray.length; i++) {
  const image = `
    <div class="container-images">
     <img class="image" src="${imagesArray[i]}" alt="image-${i}" />
     </div> `;
  scrollImages.innerHTML += image;
}

const images = document.getElementsByClassName("image");
const prevBtn = document.getElementsByClassName("prev")[0];
const nextBtn = document.getElementsByClassName("next")[0];
const mainImage = document.getElementById("main-image");
let activeItem = 0;

images[activeItem].classList.add("active");

function setActiveImage(activeImage) {
  images[activeImage].classList.add("active");
  mainImage.src = imagesArray[activeImage];
}

function disableImage(activeImage) {
  activeImage.classList.remove("active");
}

const timer = setInterval(nextImage, 3000);

function nextImage() {
  if (activeItem === imagesArray.length - 1) {
    activeItem = 0;
    setActiveImage(activeItem);
    disableImage(images[imagesArray.length - 1]);
  } else if (activeItem === 0) {
    activeItem++;
    setActiveImage(activeItem);
    disableImage(images[0]);
  } else {
    activeItem++;
    setActiveImage(activeItem);
    disableImage(images[activeItem - 1]);
  }
}

nextBtn.addEventListener("click", function () {
  stopTimer();
  nextImage();
  startTimer();
});

startTimer();

prevBtn.addEventListener("click", function () {
  if (activeItem === 0) {
    activeItem = imagesArray.length - 1;
    setActiveImage(activeItem);
    disableImage(images[0]);
  } else if (activeItem === imagesArray.length - 1) {
    activeItem--;
    setActiveImage(activeItem);
    disableImage(images[imagesArray.length - 1]);
  } else {
    activeItem--;
    setActiveImage(activeItem);
    disableImage(images[activeItem + 1]);
  }
});
