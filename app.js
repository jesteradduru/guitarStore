const menuButton = document.querySelector(".navbar__hamburger");
const navList = document.querySelector(".nav__list");
const body = document.querySelector("body");
const tl = new TimelineMax({
  paused: true,
  reversed: true,
  onComplete: () => {
    navList.style.pointerEvents = "all";
    menuButton.style.pointerEvents = "all";
    body.style.overflowY = "hidden";
  },
  onStart: () => {
    navList.style.pointerEvents = "none";
    body.style.overflowY = "hidden";
    menuButton.style.pointerEvents = "none";
  },
});
tl.to(navList, 0.4, { height: "90vh", opacity: 1 });

function toggleMenu() {
  tl.reversed() ? tl.play() : tl.reverse();
  body.style.overflowY = "auto";
}
// section body animation
const sectionBodies = document.querySelectorAll(".section__body");
const sections = document.querySelectorAll(".section");
const partnerBrandsSection = document.querySelector(".partner-brands");
const partnerBrandsIcon = document.querySelectorAll(".brand__icon");
const sectionTL = new TimelineMax();
const brandsTL = new TimelineMax();
const controller = new ScrollMagic.Controller();

partnerBrandsIcon.forEach((icon) => {
  brandsTL.fromTo(
    icon,
    0.5,
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1, ease: Back.easeOut }
  );
});

sectionTL.fromTo(
  sectionBodies[1],
  0.5,
  { y: -50, opacity: 0 },
  { y: 0, opacity: 1, ease: Back.easeOut }
);

new ScrollMagic.Scene({
  triggerElement: sections[1],
  triggerHook: 0.25,
})
  .setTween(sectionTL)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: partnerBrandsSection,
  triggerHook: 0.5,
})
  .setTween(brandsTL)
  .addTo(controller);

menuButton.addEventListener("click", toggleMenu);
