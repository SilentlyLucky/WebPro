document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".journey-gallery");

  if (gallery) {
    const cards = Array.from(gallery.children);
    const len = cards.length;

    cards.forEach(c => {
      const dupe = c.cloneNode(true);
      dupe.setAttribute("aria-hidden", true);
      gallery.appendChild(dupe);
    });

    let scroll = 0;
    const scrollSpeed = 0.5;
    let pause = false;
    let frameId;

    function animsScroll() {
      if (pause) {
        frameId = requestAnimationFrame(animsScroll);
        return;
      }

      scroll -= scrollSpeed;

      const offset = (cards[0].offsetWidth + 30) * len;

      if (Math.abs(scroll) >= offset) {
        scroll = 0;
      }

      gallery.style.transform = `translateX(${scroll}px)`;

      frameId = requestAnimationFrame(animsScroll);
    }

    gallery.addEventListener("mouseenter", () => (pause = true));
    gallery.addEventListener("mouseleave", () => (pause = false));

    animsScroll();
  }
});
