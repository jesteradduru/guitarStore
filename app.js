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
const sectionImgs = document.querySelectorAll(".section__img");
const sections = document.querySelectorAll(".section");
const partnerBrandsSection = document.querySelector(".partner-brands");
const partnerBrandsIcon = document.querySelectorAll(".brand__icon");
const sectionTL = new TimelineMax();
const mainSectionTL = new TimelineMax();
const brandsTL = new TimelineMax();
const controller = new ScrollMagic.Controller();

partnerBrandsIcon.forEach((icon) => {
  brandsTL.fromTo(
    icon,
    0.4,
    { x: -30, opacity: 0, ease: Bounce.out },
    { x: 0, opacity: 1, ease: Back.easeOut }
  );
});
mainSectionTL
  .fromTo(
    sectionImgs[0],
    0.5,
    { opacity: 0 },
    { opacity: 1, ease: Back.easeOut }
  )
  .fromTo(
    sectionBodies[0],
    0.25,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut }
  );
sectionTL
  .fromTo(
    sectionImgs[1],
    0.5,
    { opacity: 0 },
    { opacity: 1, ease: Back.easeOut }
  )
  .fromTo(
    sectionBodies[1],
    0.25,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut }
  );

function scrollMagic(triggerElmnt, hook, tween) {
  new ScrollMagic.Scene({
    triggerElement: triggerElmnt,
    triggerHook: hook,
  })
    .setTween(tween)
    .addTo(controller);
}

scrollMagic(sections[0], 0.5, mainSectionTL);
scrollMagic(sections[1], 0.5, sectionTL);
scrollMagic(partnerBrandsSection, 0.5, brandsTL);
menuButton.addEventListener("click", toggleMenu);
