const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

// =========================
// Mobile Navigation
// =========================

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");

  if (open) {
    nav.style.display = "flex";
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "24px 6vw";
    nav.style.background = "#f5f3ee";
    nav.style.flexDirection = "column";
    nav.style.borderBottom = "1px solid #dddcd5";
  } else {
    nav.removeAttribute("style");
  }
});


// =========================
// Scroll Reveal Animation
// =========================

const reveal = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        reveal.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


// Elements to animate

document
  .querySelectorAll(
    ".ai-card, .outcomes div, .audience-card, .trust-list div, .eco-node"
  )
  .forEach((element) => {

    element.classList.add("reveal");

    reveal.observe(element);

  });


// =========================
// Animation Styles
// =========================

const style = document.createElement("style");

style.textContent = `

.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.65s ease,
    transform 0.65s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

`;

document.head.appendChild(style);
