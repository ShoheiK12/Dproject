/* Light and Dark mode*/
var icon = document.querySelector("#icon");

icon.onclick = () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.src = icon.dataset.sun;
  } else {
    icon.src = icon.dataset.moon;
  }
};

/* Starfall animation */
let starContainer = document.querySelector(".star-container");

const craeteStar = () => {
  /* Generate star elements */
  let star = document.createElement("span");
  star.className = "star";

  minSize = 5;
  maxSize = 30;

  /* Assign the size of star randomly */
  let starSize = Math.random() * (maxSize - minSize) + minSize;

  star.style.width = starSize + "px";
  star.style.height = starSize + "px";

  /* Assign the position of starfall (calculate from left) */
  star.style.left = Math.random() * 100 + "%";

  /* Put star span in star container*/
  starContainer.appendChild(star);

  /* Melt in 10 seconds */
  setTimeout(() => {
    star.remove();
  }, 10000);
};

/* Call createStar function every 0.1 seconds for starfall*/
setInterval(craeteStar, 100);

/* Scroll animation */
ScrollReveal({ reset: true, distance: '60px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.content img', { 
  delay: 200, 
  origin: 'left'
});
ScrollReveal().reveal('.content-title', { 
  delay: 200, 
  origin: 'right'});
ScrollReveal().reveal('#top p', { 
  delay: 200, 
  origin: 'right',
  distance: '60px' 
});
ScrollReveal().reveal('.section-title', {
  delay: 200, 
  origin: 'left'
});
ScrollReveal().reveal('.material-icons, .project-img', { 
  delay: 200, 
  origin: 'bottom'
});
ScrollReveal().reveal('#about .content', { 
  delay: 200, 
  origin: 'right',
  distance: '60px' 
});
ScrollReveal().reveal('.profile-intro', { 
  delay: 200, 
  origin: 'right',
  distance: '60px' 
});
ScrollReveal().reveal('.timeline-content', { 
  delay: 300, 
  origin: 'right'
});
ScrollReveal().reveal('#contact h3', { 
  delay: 200, 
  origin: 'right',
  distance: '60px' 
});
ScrollReveal().reveal('.contact-details', { 
  delay: 300, 
  origin: 'bottom', 
  interval: 200
});