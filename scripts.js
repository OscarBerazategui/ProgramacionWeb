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
        1024: {
            items: 8,
            gutter:20
        },
        768:{
            items: 4,
            gutter: 20
        },
        480:{
            items:3,
            gutter:20
        },
        320:{
            items:3,
            gutter:20
        }
    }
      })
