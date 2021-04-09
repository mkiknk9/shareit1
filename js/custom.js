$(function(){
  
//  var $subBoxLabel = $('.sub-box label'),
//      $subBoxInput = $subBoxLabel.next(),
//      $placeHolder = 
  
  $('.sub-box input[type="email"]').click(function(){
    $(this).siblings('label').hide();
  })
  
  var swiper = new Swiper('.category-slider', {
      slidesPerView: 7,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
      },
    });
  
  $('.category-slide a').hover(function(){ 
      $(this).find('img').attr("src", $(this).find('img').attr("src").replace(".svg", "_on.svg")); 
  }, function(){ 
      $(this).find('img').attr("src", $(this).find('img').attr("src").replace("_on.svg", ".svg")); 
  });
  
  
  var swiper = new Swiper('.list-slider', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
    });
  
  
  var myArray = ["01","01","02","03","04"];
  
  var SubSwiper = new Swiper('.special-desc-slider', {
      loop: true,
      controller: {
      control: MainSwiper,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + myArray[index + 1] + '</span>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
  var MainSwiper = new Swiper('.special-video-slider', {
      loop: true,
      effect: 'fade',
      controller: {
      control: SubSwiper,
      },
    });
  MainSwiper.controller.control = SubSwiper;
  SubSwiper.controller.control = MainSwiper;
  
  var swiper = new Swiper('.review-slider', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 80,
      loop: true,
      autoplay: {
        delay: 4000,
        speed: 500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
  $('.theme-menu a').click(function(e){
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.theme-box').hide();
    var target = $(this).attr('href');
    $(target).show();
  })
  $('.theme-menu a').eq(0).trigger('click');
})