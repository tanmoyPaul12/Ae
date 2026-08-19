const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");

menu?.addEventListener("click", () => {
  const navLinks = nav.querySelector("nav");

  const visible = navLinks.style.display === "flex";

  navLinks.style.display = visible ? "" : "flex";
  navLinks.style.position = "absolute";
  navLinks.style.top = "76px";
  navLinks.style.left = "0";
  navLinks.style.right = "0";
  navLinks.style.padding = "24px 6vw";
  navLinks.style.background = "#f5f3ee";
  navLinks.style.flexDirection = "column";
  navLinks.style.borderBottom = "1px solid #dcdad2";
});


// Scroll reveal animation

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.12
  }
);


// Elements that animate when they enter the viewport

document
  .querySelectorAll(
    ".impact-card, .audience-card, .trust-item, .proof-card"
  )
  .forEach((el) => {

    el.style.opacity = "0";

    el.style.transform = "translateY(22px)";

    el.style.transition =
      "opacity .7s ease, transform .7s ease";

    observer.observe(el);
  });
