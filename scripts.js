    const carouselExampleControls = document.querySelector
    ("#carouselExampleConstrols");
    if (window.matchMedia("(min-width: 600px)").matches) {
    const carousel = new bootstrap.Carousel(carouselExampleControls, {
      interval: false,
    });

    var carouselWidth = $(".carousel-contenedor")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    
    var scrollPosition = 0;
    
    $(".carousel-control-next").on("click", function () {
      if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
        console.log("next");
        scrollPosition += cardWidth;
        $(".carousel-contenedor").animate({scrollLeft: scrollPosition},
          600);
      }
    });
    $(".carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        console.log("prev");
        scrollPosition -= cardWidth;
        $(".carousel-contenedor").animate({scrollLeft: scrollPosition},
          600);
      }
    });
  } else {
    $(carouselExampleControls).addClass("slide");
  }