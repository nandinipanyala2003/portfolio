// 🔥 Smooth Scroll (only for internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// 🔥 Skills Fade-in Animation on Scroll
const skillCards = document.querySelectorAll(".skill-card");

function showSkills() {
  skillCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

// Initial state (hidden)
skillCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});

// Run on scroll
window.addEventListener("scroll", showSkills);

// Run once on load (important 🔥)
showSkills();


// 🔥 Projects Fade-in Animation
const projectCards = document.querySelectorAll(".project-card");

function showProjects() {
  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

// Initial state
projectCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});

// Scroll event
window.addEventListener("scroll", showProjects);

// Run once on load
showProjects();

// 🔥 Certificates Animation
const certCards = document.querySelectorAll(".cert-card");

function showCerts() {
  certCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

certCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", showCerts);
showCerts();

const images = document.querySelectorAll(".cert-card img");

images.forEach(img => {
  img.addEventListener("click", () => {
    img.style.transform = "scale(1.1)";
    setTimeout(() => {
      img.style.transform = "scale(1)";
    }, 200);
  });
});