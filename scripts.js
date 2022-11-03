let slider = tns({
    container : ".my-slider",
    "slideBy" : "4",
    "speed" : 1200,
    "nav" : false,
    autoplay:true,
    controls: false,


    autoplayButtonOutput : false,
    responsive : {
        1600: {
            items: 8,
            gutter : 20
        },
        1200: {
            items: 8,
            gutter:20
        },
        990:{
            items:7,
            gutter:20
        },
        768:{
            items: 6,
            gutter: 20
        },
        480:{
            items:5,
            gutter:20
        },

    }
      })
