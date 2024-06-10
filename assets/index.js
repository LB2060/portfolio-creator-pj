














// section 2 -- companies

const swiper = new Swiper(".companies-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });


//   section 3 -- services

const services = new Swiper(".cards-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });

  //section 4 -- projects


  const projects = new Swiper(".projectSwp", {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
  });

 
//melumatlarin getirilmesi
 window.addEventListener("DOMContentLoaded", comeinfo)
const blog = document.getElementById("blog")
async function comeinfo() {
  const address = "https://jsonplaceholder.typicode.com/posts";

  try {
    const connect = await fetch(address);
    const info = await connect.json();
    console.log(info);

    const blog = document.getElementById('blog');

    for (let k = 0; k < 10; k++) {
      blog.innerHTML += `
        <div class="blog">
          <p><span id="date">April 16, 2021</span><span id="time">.6 mins</span></p>
          <h2 class="py-2">${info[k].title}</h2>
          <a href="#">Read the article <img class="px-4 py-4" src="./assets/pictures/section5-blogs/ox-white.svg" alt=""></a>
        </div>`;
    }
  } catch (error) {
    console.log(error.message);
  }
}

// section 6 -- testimonials


const about = new Swiper(".about-swp ", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".test-next-btn",
    prevEl: ".test-prev-btn",
  },
});





