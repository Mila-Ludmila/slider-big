$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:true,
    adaptiveHeight:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    easing:'linear',
    infinite:false,
    initialSlide:0,
    autoplay:false,
    autoplaySpeed:1500,
    pauseOnFocus:true,
    pauseOnHover:true,
    pauseOnDotsHover:true,
    draggable:false,
    swipe:true,
    touchThreshold:10,
    touchMove:true,
    waitForAnimate:true,
    centerMode:true,
    variableWidth:false,
    rows:1,
    slidesPerRow:1,
    vertical:false,
    verticalSwiping:true,
    asNavFor:'.sliderbig',
    responsive:[
      {
      breakpoint: 768,
      settings:{
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings:{
        slidesToShow: 1,
      }
    }
    ],
    mobileFirst:true
  });
  $('.sliderbig').slick({
    arrows:false,
    fade:true,
    asNavFor:'.slider'
    
  });
});