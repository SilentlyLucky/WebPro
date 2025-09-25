document.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.dynamic-background');
    const cards = document.querySelectorAll('.gallery-card');
    const title = document.getElementById('main-title');
    const desc = document.getElementById('main-desc');
    const preview = document.querySelector('.preview-gallery');
    const prev_btn = document.querySelector('.nav-btn.prev-btn');
    const next_btn = document.querySelector('.nav-btn.next-btn');

    let curr = 2;
    const tot = cards.length;

    const data = [
        {
            title: "Kutai National Park",
            description: "Kutai National Park, located in East Kalimantan, Indonesia, is a vital conservation area known for its dense tropical forests and wild orangutans. The park provides a unique blend of ecotourism and scientific research, offering visitors opportunities to observe diverse endangered wildlife, including sun bears and proboscis monkeys, in their natural habitat.",
            image: "https://superlive.id/storage/superadventure/2019/04/05/xb16890395473.jpg.pagespeed.ic.dai0wxHAZk.webp",
            link:"https://id.wikipedia.org/wiki/Taman_Nasional_Kutai"
        },
        {
            title: "Bontang Kuala",
            description: "Bontang Kuala is a unique floating village located in the city of Bontang, East Kalimantan, Indonesia. This village is built on stilts over the water, offering a captivating glimpse into the traditional lifestyle of the local Bugis and Bajo communities. Its stilted houses, connected by wooden walkways, create a fascinating maze-like structure over the sea. Beyond its architectural charm, the village is renowned for its tranquil atmosphere and breathtaking panoramic views, particularly during sunset, making it a popular spot for both tourists and locals seeking a serene escape and a taste of authentic coastal living.",
            image: "https://space-kd.sgp1.cdn.digitaloceanspaces.com/pusaranmedia/lg/news-lg-1618052751.png",
            link:"https://id.wikipedia.org/wiki/Bontang_Kuala,_Bontang_Utara,_Bontang"
        },
        {
            title: "Taman Mangrove",
            description: "A peaceful nature reserve in Bontang where visitors can stroll along wooden walkways surrounded by lush mangrove trees. The area is not only rich in unique coastal vegetation but also home to various wildlife, including playful long-tailed monkeys that are often seen along the paths. It's a perfect spot to experience the balance of nature and enjoy the cool breeze while observing the harmony of flora and fauna in their natural habitat.",
            image: "https://bontangpost.id/wp-content/uploads/2018/02/TIKET-1.jpg",
            link:"https://kumparan.com/jendela-dunia/bontang-mangrove-park-tempat-wisata-edukasi-di-taman-nasional-kutai-22o823f2MhW/full"
        },
        {
            title: "Kutai National Park",
            description: "Kutai National Park in East Kalimantan is a vast conservation area spanning over 190,000 hectares of tropical rainforest. It is famous as a sanctuary for endangered orangutans, along with other wildlife such as sun bears, hornbills, and proboscis monkeys. Visitors can explore jungle trails, observe wildlife in their natural habitat, and experience one of Borneo's richest ecosystems that highlights the importance of rainforest conservation.",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJs0rSXx50u2tNv39WhYko-0zkCKS5Ku65wegAaMQYIgVuKhamJY1NMr9qZ0FST0rbVGHZYuwx8OmCsumezXCbMJiLAd5sOhrLGzuAZLJwoosAl92zBkLt1zz7H7_c3nZsPedMOvaDxnJT/s1600/DSC_0813.JPG",
            link:"https://id.wikipedia.org/wiki/Taman_Nasional_Kutai"
        },
        {
            title: "Pulau Beras Basah",
            description: "Beras Basah is a small tropical island off the coast of Bontang, known for its soft white sandy beaches and crystal-clear turquoise waters. It is a favorite destination for snorkeling, swimming, and relaxing under the sun while enjoying stunning views of the sea. The island's calm atmosphere makes it a perfect escape for both adventure seekers and those looking for peace and tranquility.",
            image: "https://pesutnews.id/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-09-at-22.50.27.jpeg",
            link:"https://id.wikipedia.org/wiki/Pulau_Beras_Basah"
        },
        {
            title: "Lembah Permai Adventure Park",
            description: "Lembah Permai Adventure Park, located in Bontang, East Kalimantan, is an integrated outdoor recreation destination that offers a blend of natural beauty and exciting activities suitable for families and adventure seekers. Nestled in a lush green valley, the park provides a refreshing escape with attractions like zip-lining, a water park with slides, swimming pools, and various outbound activities set against a scenic landscape. Its tranquil atmosphere combined with well-maintained recreational facilities makes it a popular spot for weekend getaways, gatherings, and enjoying nature without leaving the city far behind.",
            image: "assets/imgs/Lembah_permai.png",
            link:"https://atourin.com/destination/bontang/lembah-permai-adventure-park"
        },
    ];

    const update = (idx) => {
        const place = data[idx];
        bg.style.backgroundImage = `url(${place.image})`;
        title.textContent = place.title;
        desc.textContent = place.description;
    
        const exp_btn = document.querySelector('.explore-btn');
        exp_btn.setAttribute("href", place.link);
    
        cards.forEach((card, index) => {
            if (index === idx) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    };
    

const slide = (t_idx) => {
    const card_height = cards[0].offsetHeight;
    const gap = 1; 
    const con_height = preview.offsetHeight;

    const offset = -(t_idx * (card_height + gap)) 
                   + (con_height / 2 - card_height / 2);

    preview.style.transform = `translateY(${offset}px)`;
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

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            curr = index;
            slide(curr);
            update(curr);
        });
    });

    slide(curr);
    update(curr);
});
