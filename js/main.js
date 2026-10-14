const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  hamburger.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".pager-dot").forEach((dot, index, dots) => {
  dot.addEventListener("click", () => {
    dots.forEach((d) => d.classList.remove("is-active"));
    dot.classList.add("is-active");
    const positions = ["62% 48%", "40% 60%", "78% 40%"];
    document.querySelector(".hero__media img").style.objectPosition = positions[index];
  });
});
