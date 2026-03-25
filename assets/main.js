const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
const heroDots = Array.from(document.querySelectorAll(".hero .dot"));
const testimonialSlides = Array.from(document.querySelectorAll(".testimonial"));
const testimonialDots = Array.from(document.querySelectorAll(".testimonial-dot"));
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const navGroups = Array.from(document.querySelectorAll(".nav-group"));

let heroIndex = 0;
let testimonialIndex = 0;

function activateSlide(items, dots, nextIndex, activeClass = "is-active") {
  items.forEach((item, index) => {
    item.classList.toggle(activeClass, index === nextIndex);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === nextIndex);
  });
}

function showHero(nextIndex) {
  heroIndex = nextIndex;
  activateSlide(heroSlides, heroDots, heroIndex);
}

function showTestimonial(nextIndex) {
  testimonialIndex = nextIndex;
  activateSlide(testimonialSlides, testimonialDots, testimonialIndex);
}

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => showHero(index));
});

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => showTestimonial(index));
});

setInterval(() => {
  showHero((heroIndex + 1) % heroSlides.length);
}, 5000);

setInterval(() => {
  showTestimonial((testimonialIndex + 1) % testimonialSlides.length);
}, 7000);

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mobileNav?.classList.toggle("is-open", !isExpanded);
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileNav?.classList.remove("is-open");
  });
});

function closeDropdowns(exceptGroup) {
  navGroups.forEach((group) => {
    const trigger = group.querySelector(".nav-trigger");
    const isTarget = group === exceptGroup;
    group.classList.toggle("is-open", isTarget);
    trigger?.setAttribute("aria-expanded", String(isTarget));
  });
}

navGroups.forEach((group) => {
  const trigger = group.querySelector(".nav-trigger");
  trigger?.addEventListener("click", (event) => {
    event.preventDefault();
    const willOpen = !group.classList.contains("is-open");
    closeDropdowns(willOpen ? group : null);
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (!target.closest(".nav-group")) {
    closeDropdowns(null);
  }
});
