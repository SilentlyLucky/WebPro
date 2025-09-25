document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".journey-gallery");
  
    if (gallery) {
      const cards = Array.from(gallery.children);
      const len = card.length;
  
      cards.forEach(card => {
        const dupe = card.cloneNode(true);
        dupe.setAttribute('aria-hidden', true); 
        gallery.appendChild(dupe);
      });
  
      let scroll = 0;
      const scrollSpeed = 0.5;
      let pause = false;
      let frameid;
  
      function anims_scroll() {
        if (pause) {
          frameid = requestAnimationFrame(anims_scroll);
          return;
        }
        
        scroll -= scrollSpeed;
        
        const offset = (card[0].offsetWidth + 30) * len;
  
        if (Math.abs(scroll) >= offset) {
          scroll = 0;
        }
  
        gallery.style.transform = `translateX(${scroll}px)`;
        
        frameid = requestAnimationFrame(anims_scroll);
      }
  
      gallery.addEventListener('mouseenter', () => pause = true);
      gallery.addEventListener('mouseleave', () => pause = false);
      
      anims_scroll();
    }
  });
  
