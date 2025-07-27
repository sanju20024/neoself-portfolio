// Typing effect for hero text
const typedText = document.querySelector(".hero-text p");
const text = "Aspiring AI/ML + Cybersecurity Engineer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typedText.innerHTML = "";
typeEffect();

// Scroll animations
const faders = document.querySelectorAll(".card, .hero, .projects, footer");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
