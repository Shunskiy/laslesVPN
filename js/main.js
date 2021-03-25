new Glider(document.querySelector(".glider"), {
  slidesToShow: 6,
  dots: "#dots",
  arrows: {
    prev: ".review__arrow-button--left",
    next: ".review__arrow-button--right",
  },
  exactWidth: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 616,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
