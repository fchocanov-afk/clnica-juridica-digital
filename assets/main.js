const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
const heroDots = Array.from(document.querySelectorAll(".hero .dot"));
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const navGroups = Array.from(document.querySelectorAll(".nav-group"));
const revealItems = Array.from(document.querySelectorAll(".intro-layout, .news-card, .panel"));

let heroIndex = 0;

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

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => showHero(index));
});

setInterval(() => {
  showHero((heroIndex + 1) % heroSlides.length);
}, 5000);

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

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}
