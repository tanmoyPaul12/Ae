const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

const revealStyle = document.createElement("style");
revealStyle.textContent = `
  .quick-card,
  .property-card,
  .journey-item,
  .audience,
  .impact-list > div,
  .trust-right > div {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity .65s ease, transform .65s ease;
  }

  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  @media (prefers-reduced-motion: reduce) {
    .quick-card,
    .property-card,
    .journey-item,
    .audience,
    .impact-list > div,
    .trust-right > div {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
`;
document.head.appendChild(revealStyle);

document.querySelectorAll(
  ".quick-card, .property-card, .journey-item, .audience, .impact-list > div, .trust-right > div"
).forEach((element) => observer.observe(element));

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});
