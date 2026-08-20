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

// Property Slider Controls
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const propertySlider = document.getElementById("propertySlider");

prevBtn?.addEventListener("click", () => {
  propertySlider?.scrollBy({ left: -380, behavior: "smooth" });
});

nextBtn?.addEventListener("click", () => {
  propertySlider?.scrollBy({ left: 380, behavior: "smooth" });
});

// Category Tab Filtering for "All Your Real Estate Needs" section
const tabBtns = document.querySelectorAll(".tab-btn");
const needCards = document.querySelectorAll(".need-card");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    needCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 200);
      }
    });
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
  .leader-stat-card,
  .listing-card,
  .journey-item,
  .need-card,
  .process-step-card,
  .direct-comm-card,
  .audience,
  .outcome-card {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity .65s ease, transform .65s ease;
  }

  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  @media (prefers-reduced-motion: reduce) {
    .leader-stat-card,
    .listing-card,
    .journey-item,
    .need-card,
    .process-step-card,
    .direct-comm-card,
    .audience,
    .outcome-card {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
`;
document.head.appendChild(revealStyle);

document.querySelectorAll(
  ".leader-stat-card, .listing-card, .journey-item, .need-card, .process-step-card, .direct-comm-card, .audience, .outcome-card"
).forEach((element) => observer.observe(element));

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});
