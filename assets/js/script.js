var owl = $('.owl-carousel');
owl.owlCarousel({
items:1,
loop:true,
margin:10,
autoplay:true,
autoplayTimeout:10000,
autoplayHoverPause:true
});
$('.play').on('click',function(){
owl.trigger('play.owl.autoplay',[10000])
})
$('.stop').on('click',function(){
owl.trigger('stop.owl.autoplay')
});



$(".owl-carousel").owlCarousel({
    autoplayTimeout:5000,
    autoplay:true,
    center: true,
    mouseDrag: true,
    pullDrag: true,
    // stagePadding: 50,
    items: 1,
    // loop: true,
    // margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
