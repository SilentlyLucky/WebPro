document.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.dynamic-background');
    const card = document.querySelectorAll('.food-card');
    const title = document.getElementById('food-title');
    const desc = document.getElementById('food-description');
    const preview = document.querySelector('.preview-gallery');
    const prev_btn = document.querySelector('.prev-btn');
    const next_btn = document.querySelector('.next-btn');
  
    let curr = 0;
    const tot = card.length;
  
    const data = [
      {
        title: "Gami Bawis",
        description: "A famous dish featuring the local bawis fish cooked in spicy chili sambal served on a hot clay plate.",
        image: "https://nibble-images.b-cdn.net/nibble/original_images/sambal_gami_4_553ea7d54c_UHBiOCym5.jpg?class=large",
        link: "https://jadesta.kemenparekraf.go.id/paket/gammi_bawis"
      },
      {
        title: "Amplang",
        description: "A crunchy cracker made from fish flour, a favorite snack in Bontang.",
        image: "https://rakaminstudent.com/wp-content/uploads/2021/10/amplang.jpg",
        link: "https://id.wikipedia.org/wiki/Amplang"
      },
      {
        title: "Pempek Ikan Tenggiri",
        description: "A savory Indonesian fishcake made from mackerel, served with tangy cuko sauce.",
        image: "https://rakaminstudent.com/wp-content/uploads/2021/10/1673915771704645-pempek-1024x731.jpg",
        link: "https://jadesta.kemenparekraf.go.id/paket/pempek_khas_bontangz"
      }
    ];
  
    const update = (dataIndex) => {
      const food = data[dataIndex];
      bg.style.backgroundImage = `url("${food.image}")`;
      title.textContent = food.title;
      desc.textContent = food.description;
  
      const exp_btn = document.querySelector('.explore-btn');
      exp_btn.setAttribute("href", food.link);
  
      card.forEach((card, index) => {
        card.classList.toggle('active', index === dataIndex);
      });
    };
  
    const slide = (targetIndex) => {
      const card_width = card[0].offsetWidth;
      const gap = 20;
      const con_width = preview.offsetWidth;
  
      const offset = -(targetIndex * (card_width + gap)) 
                   + (con_width / 2 - card_width / 2);
  
      preview.style.transform = `translateX(${offset}px)`;
    };
  
    next_btn.addEventListener('click', () => {
      curr = (curr + 1) % tot;
      slide(curr);
      update(curr);
    });
  
    prev_btn.addEventListener('click', () => {
      curr = (curr - 1 + tot) % tot;
      slide(curr);
      update(curr);
    });
  
    card.forEach((card, index) => {
      card.addEventListener('click', () => {
        curr = index;
        slide(curr);
        update(curr);
      });
    });
  
    slide(curr);
    update(curr);
  });
  