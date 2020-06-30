var observer = lozad();
observer.observe();

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  lazy: true,

  slidesPerView: 2,
  spaceBetween: 10,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1366: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$("#hideContentText").click(function () {
  $("#text-content").hide();
  $("#slide-content").show();
});

var startVimeo = function () {
  $("#thumb-vimeo").css("display", "none");
  $("#vimeo-video").css("display", "block");
  document.getElementById("vimeo-video").innerHTML =
    '<iframe src="https://www.youtube-nocookie.com/embed/vPtbYmR2Xhk?feature=oembed&start&end&wmode=opaque&loop=0&controls=0&mute=0&rel=0&modestbranding=0&autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>';
};

