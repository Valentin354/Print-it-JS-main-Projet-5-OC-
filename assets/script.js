const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats en boutique et en ligne",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format pour vos bureaux et events",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs de CMJN aux pantones",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants avec découpe laser sur mesure",
  },
];

// Sélection des éléments HTML
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector(".banner-img");
const dots = document.querySelectorAll(".dot");
const text = document.querySelector("p");

var currentIndex = 0;
var totalSlides = slides.length;

// Clic flèche droite
arrowRight.addEventListener("click", function () {
  // Incrémenter l'index (changer slide)
  currentIndex++;

  // Vérifier si l'index > le nombre total de slide
  if (currentIndex >= totalSlides) {
    // Revenir à la première slide
    currentIndex = 0;
  }

  // Mettre à jour la slide affichée
  updateSlide();
});

// Clic flèche gauche
arrowLeft.addEventListener("click", function () {
  // Décrémenter l'index (changer slide)
  currentIndex--;

  // Vérifier si l'index est négatif (fin des slides)
  if (currentIndex < 0) {
    // Aller à la dernière slide
    currentIndex = totalSlides - 1;
  }

  // Mettre à jour la slide affichée
  updateSlide();
});

function updateSlide() {
  // Mise à jour img
  var imagePath = "./assets/images/slideshow/";
  var currentSlide = slides[currentIndex];
  var imageSource = imagePath + currentSlide.image;
  bannerImg.src = imageSource;

  // Mise à jour du p
  var slideText = currentSlide.tagLine;
  text.innerHTML = slideText;

  // Mise à jour des dots
  for (var i = 0; i < dots.length; i++) {
    // Vérifier si le dot est celui de l'image actuelle
    if (i === currentIndex) {
      // Ajouter la classe "dot_selected"
      var dot = dots[i];
      dot.classList.add("dot_selected");
    } else {
      // Supprimer la classe "dot_selected"
      var dot = dots[i];
      dot.classList.remove("dot_selected");
    }
  }
}

/*


---------------------------------------------SOLUTION 2----------------------------------------------------


const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Selection des éléments HTML
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector(".banner-img");
const dot = document.querySelectorAll(".dot");
const text = document.querySelector("p");

// Index de la diapo actuelle et nbr total de diapo
var currentIndex = 0;
var totalSlides = slides.length;

// Evenement au click sur les flèches - Modulo pour revenir à la première image
arrowRight.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
});

arrowLeft.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});

// Chemin d'accès aux images - Modifier <p> - Mise à jour dot actif

function updateSlide() {
  bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;
  text.innerHTML = slides[currentIndex].tagLine;

  for (var i = 0; i < dot.length; i++) {
    if (i === currentIndex) {
      dot[i].classList.add("dot_selected");
    } else {
      dot[i].classList.remove("dot_selected");
    }
  }
}
*/
