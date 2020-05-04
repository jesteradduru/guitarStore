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
    menuButton.style.pointerEvents = "none";
  },
});

tl.to(navList, 0.4, { height: "90vh", opacity: 1 });
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  tl.reversed() ? tl.play() : tl.reverse();
  body.style.overflowY = "auto";
}
