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

//https://addyosmani.com/blog/lazy-loading/ LAZY LOADING
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll("img.lazyload");
  images.forEach((img) => {
    img.src = img.src;
  });
} else {
  // Dynamically import the LazySizes library
  let script = document.createElement("script");
  script.async = true;
  script.src = "./js/lazysizes.min.js";
  document.body.appendChild(script);
}

var startVimeo = function () {
  $("#thumb-vimeo").css("display", "none");
  $("#vimeo-video").css("display", "block");
  document.getElementById("vimeo-video").innerHTML =
    '<iframe src="https://www.youtube-nocookie.com/embed/vPtbYmR2Xhk?feature=oembed&start&end&wmode=opaque&loop=0&controls=0&mute=0&rel=0&modestbranding=0&autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>';
};

var startYouTube = function () {
  $("#thumb-youtube").css("display", "none");
  $("#youtube-video").css("display", "block");
  document.getElementById("youtube-video").innerHTML =
    '<iframe class="elementor-video-iframe" allow="autoplay; fullscreen" allowfullscreen src="https://www.youtube.com/embed/0h4WRXc_OHw?autoplay=1&feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=0&amp;mute=0&amp;rel=0&amp;modestbranding=0"></iframe>';
};
