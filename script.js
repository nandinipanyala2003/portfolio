// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// 🔥 ONE FUNCTION FOR ALL CARDS
const allCards = document.querySelectorAll(
  ".skill-card, .project-card, .cert-card, .contact-card"
);

function showCards() {
  allCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 60) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

// Apply transition once
allCards.forEach(card => {
  card.style.transition = "all 0.6s ease";
});

// Scroll event
window.addEventListener("scroll", showCards);

// Run once
showCards();


// 🔥 CERT IMAGE CLICK EFFECT
document.querySelectorAll(".cert-card img").forEach(img => {
  img.addEventListener("click", () => {
    img.style.transform = "scale(1.1)";
    setTimeout(() => {
      img.style.transform = "scale(1)";
    }, 200);
  });
});