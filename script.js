// STICKY NAVBAR MENU + HAMBURGER

const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");

window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// TYPING TEXT ANIMATION

let words = ["Developer", "Enginner", "Passionate"],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skipCount = 0,
  skipDelay = 15,
  speed = 70;
const wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skipCount;
        if (skipCount == skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substring(0, offset);
    if (skipCount == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

// IMG 3D MOTION //

const card = document.querySelector(".card");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}
