const animationDuration = 2000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round(animationDuration / frameDuration);
const easeOutQuad = (t) => t * (2 - t);

const animateCountUp = (el) => {
  let frame = 0;
  const countTo = el.getAttribute("datatarget");
  const counter = setInterval(() => {
    frame++;
    const progress = easeOutQuad(frame / totalFrames);
    const currentCount = Math.round(countTo * progress);

    if (parseInt(el.innerHtml, 10) !== currentCount) {
      el.style.width = `${currentCount}%`;
    }
    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

const runAnimations = () => {
  const countUpEls = document.querySelectorAll(".counterSkills");
  countUpEls.forEach(animateCountUp);
};

function changeVisibility(isVisible) {
  if (isVisible) {
    runAnimations();
  }
}

export { changeVisibility };
