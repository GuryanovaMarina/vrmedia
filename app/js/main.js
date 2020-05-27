$(window).on('load', function () {
   $('.preloader path').each(function () {
      $(this).addClass('active')
   })
   setTimeout(function () {
      let preloader = $('#preloader');
      if (!preloader.hasClass('hide')) {
         preloader.addClass('hide')
      }
   }, 3200)
});




$(function () {
   //page news
   $('.news__tag__item').on('click', function () {
      $(this).toggleClass('active');
   });

   if($('.franchise__wrapper').length)
   {
      $(window).on('scroll', function () {

         if ($(window).scrollTop() > $('.franchise__first-title').offset().top) {
            $('.franchise__logo').removeClass('show')
            let slide = 0;
            for (let i = $('.franchise__slider > .franchise__slider-item').last().index(); i > 1; i--) {
               if ($('.franchise__slider-item')[i].offsetTop >= $(window).scrollTop()) {
                  slide = $('.franchise__slider-item')[i].getAttribute('id').match(/\d{1,2}/)[0];
               }
            }
            $('.franchise__slider-item').each(function () {
               if ($(this).attr('id').match(/\d{1,2}/)[0] == slide - 1) {
                  if ($(this).find('.franchise-title-global').text().trim() == '') {
                     for (let item of $(this).prevAll()) {
                        if (item.querySelector('.franchise-title-global') == null) { } else {
                           $('.franchise__text-flash').text(item.querySelector('.franchise-title-global').textContent);
                           return false;
                        }
                     }
                     $('.franchise__text-flash').text($(this).prev().find('.franchise-title-global').text());
                     return false;
                  }
                  if ($('.franchise__text-flash').text() == $(this).find('.franchise-title-global').text()) {
                     $('.franchise__text-flash').addClass('show')
                  } else {
                     $('.franchise__text-flash').text($(this).find('.franchise-title-global').text());
                     $('.franchise__text-flash').removeClass('show')
                  }
               }
            })
         } else {
            $('.franchise__logo').addClass('show')
            $('.franchise__text-flash').removeClass('show')
         }
      });
   }
   

   $('.franchise__burger').on('click', function () {
      $('.franchise__burger-menu').addClass('show')
      $('.franchise__burger-menu').removeClass('hide')
      let addDelay = 1.1;

      $('.franchise__burger-menu-inner li').each(function () {
         addDelay -= 0.1;
         $(this).find('a').css('transition-delay', addDelay + 's');
      })
   })
   $('.franchise__burger-close').on('click', function () {
      $('.franchise__burger-menu').removeClass('show')
      $('.franchise__burger-menu').addClass('hide')

      $('.franchise__burger-menu-inner li').each(function () {
         $(this).find('a').css('transition-delay', '0s');
      })
   })

   $(".franchise__burger-menu-inner").on("click", "a", function (e) {
      e.preventDefault();

      $('.franchise__burger-menu').removeClass('show')
      $('.franchise__burger-menu').addClass('hide')

      $('.franchise__burger-menu-inner li').each(function () {
         $(this).find('a').css('transition-delay', '0s');
      })

      var id = $(this).attr('href'),
         top = $(id).offset().top;

      $('body,html').animate({ scrollTop: top - 50 }, 500);

   });


   enquire.register("screen and (min-width:1000px)", {
      match: function () {
         $(document).mousemove(function (e) {
            if (e.clientX + 14 >= document.documentElement.clientWidth && e.clientY + 14 >= document.documentElement.clientHeight) {
               $('.cursor').css({ left: document.documentElement.clientWidth - 14, top: document.documentElement.clientHeight - 14 });
            } else if (e.clientX + 14 >= document.documentElement.clientWidth) {
               $('.cursor').css({ left: document.documentElement.clientWidth - 14, top: e.clientY });
            } else if (e.clientY + 14 >= document.documentElement.clientHeight) {
               $('.cursor').css({ top: document.documentElement.clientHeight - 14, left: e.clientX });
            }
            else {
               $('.cursor').css({ left: e.clientX, top: e.clientY, display: 'block' });
            }
            // console.log($('.franchise__dots li').find('button'))
            $('.franchise__dots li').each(function () {
               // console.log($(this).find($('button'))[0])
               if (e.target === $('a')[0] || e.target === $('button')[0] || e.target === $('.slick-next')[0] || e.target === $('.slick-prev')[0] || e.target === $('.franchise__twelfth .form__send')[0]) {
                  $('.cursor').removeClass('remove-hover');
                  $('.cursor').addClass('hover');
               }
               else {
                  $('.cursor').removeClass('hover')
                  $('.cursor').addClass('remove-hover')
               }
            })
            for (let j = 0; j <= $('.franchise__dots li').last().index(); j++) {
               if (e.target === $('.franchise__dots li').eq(j).find('button')[0]) {
                  $('.cursor').removeClass('remove-hover');
                  $('.cursor').addClass('hover');
               }
            }

         })
      },
      unmatch: function () {
         $('.cursor').remove();
      }
   })


   var wow = new WOW();
   wow.init();

   $('.technical__box.btn').on('click', function () {
      $(this).next().toggleClass('active');
      $(this).parent().toggleClass('active');
      $(this).toggleClass('active');
   })

   $('.burger').on('click', function () {
      $('.header__menu-list').addClass('active');
   })

   $('.header__close').on('click', function () {
      $('.header__menu-list').removeClass('active');
   })

   $('.header__arrow').on('click', function () {
      $(this).parent().toggleClass('active');
      $('.header__menu-list').toggleClass('item_clicked');
   });

   $('.header__menu-item.disable').on('click', function () {
      $(this).removeClass('active');
      $('.header__menu-list').removeClass('item_clicked');
   })

   $('.header__details').on('click', function () {
      var offset = $('.about__what').offset().top;
      $('html, body').animate({
         scrollTop: offset
      }, 700)
   })

   $('#form__number').mask("+7 (999) 999-99-99");


   if (window.innerWidth < 1175) {
      $('.about__what-title.first').hide();
      $('.about__what-title.second').show();
      $('.about__what-title.second').removeClass('hide');
   }
   if (window.innerWidth < 975) {
      $('.success__title.first').hide();
      $('.success__title.second').show();
      $('.success__title.second').removeClass('hide');
   }
   if (window.innerWidth < 400) {
      $('.news__item-title.first').hide();
      $('.news__item-title.second').show();
      $('.news__item-title.second').removeClass('hide');
   }
   if (window.innerWidth < 600) {
      $('.about__earn-text.first').hide();
      $('.about__earn-text.second').show();
      $('.about__earn-text.second').removeClass('hide');
      $('.about__earn-money').show();
   } else {
      $('.about__earn-money').hide();
   }


   // if(window.innerWidth < 1000){
   //    $('#form__name').on('focus',function () {
   //       $(this).prev().addClass('active');
   //       console.log('sdfsdfsdf')
   //    });

   //    $('#form__email').focus(function () {
   //       $(this).prev().addClass('active');
   //    });

   //    $('#form__text').focus(function () {
   //       $(this).prev().addClass('active');
   //    });
   // }

   // if ($('.header__top').hasClass('header__other-page')) {
   //    $(window).on('scroll', function () {
   //       var offset = 150;
   //       var html = $('html').scrollTop();
   //       if (offset <= html) {
   //          $('.header__top').addClass('active');
   //          $('.header__top').removeClass('active-static');
   //       }
   //       else {
   //          $('.header__top').removeClass('active');
   //          $('.header__top').addClass('active-static');
   //       }
   //    });
   // } else {
   //    $(window).on('scroll', function () {
   //       var offset = 150;
   //       var html = $('html').scrollTop();
   //       if (offset <= html) {
   //          $('.header__top').addClass('active');
   //       }
   //       else {
   //          $('.header__top').removeClass('active');
   //       }
   //    });
   // }


   $('.news__more').on('click', function () {
      $('.news__inner').addClass('active');
      $('.news__item').addClass('active');
      $(this).hide();
   });


   let quantity = $('.news__item').length - 2;

   if (quantity < 1) { } else {
      if (quantity === 1 || quantity % 10 === 1) {
         $('.news__more').text("Показать ещё " + quantity + " новость");
      } else if (quantity > 4 && quantity < 21) {
         $('.news__more').text("Показать ещё " + quantity + " новостей");
      } else if (quantity % 10 > 1 && quantity % 10 < 5) {
         $('.news__more').text("Показать ещё " + quantity + " новости");
      } else if (quantity % 10 > 4 || quantity % 10 === 0) {
         $('.news__more').text("Показать ещё " + quantity + " новостей");
      }
   }

   $('.slider__inner').slick({
      nextArrow: '<div class="slider__next controls"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"><g><g><path fill="#fff" d="M7.588 11.766l5.145-5.177a.813.813 0 0 0 0-1.144L7.588.268A.801.801 0 0 0 6.215.84c0 .207.079.414.235.572l3.774 3.617H.804C.36 5.029 0 5.57 0 6.017c0 .446.36.968.804.968h9.42L6.45 10.622a.814.814 0 0 0 0 1.144.8.8 0 0 0 1.138 0z"/></g></g></svg></div>',
      prevArrow: '<div class="slider__prev controls"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"><g><g><path fill="#fff" d="M5.412.234L.268 5.41a.813.813 0 0 0 0 1.144l5.145 5.177a.801.801 0 0 0 1.373-.572.81.81 0 0 0-.235-.571L2.776 6.971h9.42c.444 0 .804-.542.804-.989 0-.446-.36-.968-.804-.968h-9.42L6.55 1.378a.814.814 0 0 0 0-1.144.8.8 0 0 0-1.138 0z"/></g></g></svg></div>',
   });

   $("#lightgallery").lightGallery();

   // $('.verification__inner .tab').on('click', function (event) {
   //    var id = $(this).attr('data-id');
   //    $('.verification__inner').find('.tab-item').removeClass('active-tab').hide();
   //    $('.verification__inner .tabs').find('.tab').removeClass('active');
   //    $(this).addClass('active');
   //    $('#' + id).addClass('active-tab').fadeIn();
   //    return false;
   // });
   //
   // $('.verification__inner.verification-mobile .tab').on('click', function () {
   //    $(this).toggleClass('active-mobile');
   //    $(this).next().toggleClass('show');
   // });

   $('.create__item-1 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-1').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-1 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-2 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-2').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-2 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-3 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-3').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-3 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-4 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-4').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-4 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-5 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-5').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-5 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-6 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-6').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-6 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-7 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-7').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-7 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-8 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-8').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-8 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-9 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-9').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-9 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-10 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-10').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-10 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-11 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-11').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-11 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-12 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-12').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-12 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });




   $('.better__content').slick({
      dots: true,
      arrows: false,
      draggable: false,
      swipe: false,
      loop: false,
      responsive: [
         {
            breakpoint: 1060,
            settings: {
               draggable: false,
               loop: false
            }
         }
      ]
   });

   $('.better__content.create-mobile .tab').on('click', function () {
      $(this).toggleClass('active-mobile');
      $(this).next().toggleClass('show');
   });

   if (document.location.href.match(/(slide)\d/)) {
      let tmp = document.location.href.match(/(slide)\d{1,2}/)[0];



      let result = getSlideIndex(tmp) - 1;


      function getSlideIndex(tmp) {
         for (let item of $('.franchise__slider-item')) {
            let slideIndex = 0;
            if (item.attributes.id.value == tmp) {
               slideIndex = tmp.match(/\d{1,2}/)[0];
               return slideIndex;
            }
         }
      }
      var slider = $('.franchise__slider').slick({
         dots: true,
         arrows: true,
         draggable: false,
         swipe: false,
         loop: false,
         dotsClass: 'franchise__dots',
         fade: true,
         initialSlide: result,
         slidesToShow: 1,
         responsive: [
            {
               breakpoint: 1000,
               settings: "unslick"
            }
         ]
      });
      $('.franchise__join.franchise-hide').on('click', function () {
         slider.slick('slickGoTo', 10)
         for (let j = $('.franchise__dots li').last().index(); j > 0; j--) {
            $('.franchise__dots li').eq(j).addClass('active');
            $('.franchise__dots li').eq(j).removeClass('wait');
         }
      });
      for (let i = $('.franchise__dots li.slick-active').index(); i > 0; i--) {
         $('.franchise__dots li').eq(i).addClass('active');
      }
      $('.franchise__dots li.slick-active').each(function () {
         $('.franchise__wrapper').addClass('style-' + $(this).index())
      })
      for (let i = 3; i <= 5; i++) {
         if ($('.franchise__dots li').eq(i).hasClass('slick-active')) {
            $('.franchise__dots li').eq(2).addClass('wait');
            $('.franchise__dots li').eq(i).addClass('disable');
         }
      }
      if ($('.franchise__dots li').eq(6).hasClass('slick-active')) {
         $('.franchise__dots li').eq(2).removeClass('wait');
      }
      if ($('.franchise__dots li').eq(7).hasClass('slick-active')) {
         $('.franchise__dots li').eq(6).addClass('wait');
         $('.franchise__dots li').eq(7).addClass('disable');
      } else {
         $('.franchise__dots li').eq(6).removeClass('wait');
      }
      if ($('.franchise__dots li').eq(12).hasClass('slick-active')) {
         $('.franchise__dots li').eq(11).addClass('wait');
      }
      $('.franchise__join').on('click', function () {
         slider.slick('slickGoTo', 10);
         $('.franchise__wrapper .slick-next').css('display', 'none');
         if ($('.franchise__slider .slick-current').index() == $('.franchise__slider .slick-slide').last().index()) {
            $('.franchise__wrapper .slick-next').css('display', 'none');
            $(this).hide();
         }
         for (let j = $('.franchise__dots li').last().index(); j > 0; j--) {
            $('.franchise__dots li').eq(j).addClass('active');
            $('.franchise__dots li').eq(j).removeClass('wait');
         }
      });
   } else {
      var slider = $('.franchise__slider').slick({
         dots: true,
         arrows: true,
         draggable: false,
         swipe: false,
         loop: false,
         dotsClass: 'franchise__dots',
         fade: true,
         slidesToShow: 1,
         responsive: [
            {
               breakpoint: 1000,
               settings: "unslick"
            }
         ]
      });
      $('.franchise__join.franchise-hide').on('click', function () {
         slider.slick('slickGoTo', 10);
         $('.franchise__wrapper .slick-next').css('display', 'none');
         if ($('.franchise__slider .slick-current').index() == $('.franchise__slider .slick-slide').last().index()) {
            $('.franchise__wrapper .slick-next').css('display', 'none');
            $(this).hide();
         }
         for (let j = $('.franchise__dots li').last().index(); j > 0; j--) {
            $('.franchise__dots li').eq(j).addClass('active');
            $('.franchise__dots li').eq(j).removeClass('wait');
         }
      });
   }

   $('.franchise__slider .slick-slide').each(function () {

   })

   $('.franchise__twelfth .form__send').on('click', function () {
      $('.franchise__thirteenth').addClass('show');
      setTimeout(function () {
         slider.slick('slickGoTo', 0)
      }, 1000)
      setTimeout(function () {
         $('.franchise__thirteenth').removeClass('show');
      }, 3000)
   });


   $('.franchise__dots li').on('mouseover', function () {
      // if($(this).hasClass('active')){
      //    $(this).addClass('show-label slick-active');
      // }
      // else if($('.franchise__dots li').hasClass('show-label')){
      //    $('.franchise__dots li').not('.active.slick-active').removeClass('show-label slick-active')
      // } else {

      // }

      if ($(this).index() == 4 || $(this).index() == 5 || $(this).index() == 3 || $(this).index() == 7) {
         $(this).addClass('active-label');
      } else {
         $(this).addClass('show-label');
      }

      for (let j = 0; j <= $(this).index(); j++) {
         $('.franchise__dots li').eq(j).addClass('active-label');
      }

      if ($(this).index() >= 2 && $(this).index() < 6) {
         $('.franchise__dots li').eq(2).addClass('show-label');
      } else {
         $('.franchise__dots li').eq(2).removeClass('show-label');
      }

      if ($(this).index() == 6 || $(this).index() == 7) {
         $('.franchise__dots li').eq(6).addClass('show-label');
      } else {
         $('.franchise__dots li').eq(6).removeClass('show-label');
      }

      for (let i = 3; i <= 5; i++) {
         if ($('.franchise__dots li').eq(i).hasClass('slick-active')) {
            $('.franchise__dots li').eq(2).addClass('wait');
            $('.franchise__dots li').eq(i).addClass('disable');
         }
      }
      if ($('.franchise__dots li').eq(6).hasClass('slick-active')) {
         $('.franchise__dots li').eq(2).removeClass('wait');
      }
      if ($('.franchise__dots li').eq(7).hasClass('slick-active')) {
         $('.franchise__dots li').eq(6).addClass('wait');
         $('.franchise__dots li').eq(7).addClass('disable');
      } else {
         $('.franchise__dots li').eq(6).removeClass('wait');
      }
      if ($('.franchise__dots li').eq(12).hasClass('slick-active')) {
         $('.franchise__dots li').eq(11).addClass('wait');
      }
   })
   $('.franchise__dots li').on('mouseout', function () {
      for (let j = 0; j <= $(this).index(); j++) {
         $('.franchise__dots li').eq(j).removeClass('active-label');
      }
      if ($(this).index() == 4 || $(this).index() == 5 || $(this).index() == 3 || $(this).index() == 7) {
         $(this).removeClass('active-label');
      } else {
         $(this).removeClass('show-label');
      }
   })


   $('#form__name').focus(function () {
      $(this).prev().addClass('active');
   });

   $('#form__email').focus(function () {
      $(this).prev().addClass('active');
   });

   $('#form__text').focus(function () {
      $(this).prev().addClass('active');
   });

   $('#form__problem').focus(function () {
      $(this).prev().addClass('active');
   });




   $('#form__name').not('.franchise__form #form__name').focusout(function () {
      if ($(this).val() == '') {
         $('.form__block.name').addClass('active');
      } else if ($(this).val() !== '') {
         $('.form__block.name').removeClass('active');
      }
      if ($(this).val() == '') {
         $(this).prev().removeClass('active');
      }
   });

   $('.franchise__form #form__name').focusout(function () {
      if ($(this).val() == '') {
         $(this).prev().removeClass('active');
      }
   });

   $('#form__email').focusout(function () {
      if ($(this).val() == '') {
         $('.form__block.email').addClass('active');
      } else if ($(this).val() !== '') {
         $('.form__block.email').removeClass('active');
      }
      if ($(this).val() == '') {
         $(this).prev().removeClass('active');
      }
   });

   $('#form__text').focusout(function () {
      if ($(this).val() == '') {
         $('.form__block.text').addClass('active');
      } else if ($(this).val() !== '') {
         $('.form__block.text').removeClass('active');
      }
      if ($(this).val() == '') {
         $(this).prev().removeClass('active');
      }
   });

   $('.franchise__slider .slick-next').on('click', function () {
      $('.franchise__slider .slick-active').find('.franchise__inner > *').addClass('animate');
      $('.franchise__dots .slick-active').addClass('active');
      let prevIndex = $('.franchise__dots .slick-active').index() - 1;
      $('.franchise__dots li').eq(prevIndex).addClass('active');
      for (let i = 3; i <= 5; i++) {
         if ($('.franchise__dots li').eq(i).hasClass('slick-active')) {
            $('.franchise__dots li').eq(2).addClass('wait');
            $('.franchise__dots li').eq(i).addClass('disable');
         }
      }
      if ($('.franchise__dots li').eq(6).hasClass('slick-active')) {
         $('.franchise__dots li').eq(2).removeClass('wait');
      }
      if ($('.franchise__dots li').eq(7).hasClass('slick-active')) {
         $('.franchise__dots li').eq(6).addClass('wait');
         $('.franchise__dots li').eq(7).addClass('disable');
      } else {
         $('.franchise__dots li').eq(6).removeClass('wait');
      }
      // if ($('.franchise__dots li').eq(13).hasClass('slick-active')) {
      //    $('.franchise__dots li').css("display", "none");
      // }
      let index = $('.slick-current').index();
      $('.franchise__wrapper').addClass('style-' + index);
      $('.franchise__wrapper').removeClass('style-' + --index);
      if (index === 9) {
         $('.franchise__wrapper .slick-next').css("display", "none");
      } else {
         $('.franchise__wrapper .slick-next').css("display", "block");
      }
   })




   $('.franchise__dots li').on('click', function () {

      if ($('.franchise__slider .slick-current').index() == $('.franchise__slider .slick-slide').last().index()) {
         $('.franchise__join.franchise-hide').hide();
         $('.franchise__wrapper .slick-next').hide();
      } else {
         $('.franchise__join.franchise-hide').show();
         $('.franchise__wrapper .slick-next').show();
      }
      if ($(this).index() < 2 || $(this).index() > 6) {
         $('.franchise__dots li').eq(2).removeClass('wait');
      }
      for (let m = 0; m <= $(this).index(); m++) {
         $('.franchise__dots li').eq(m).addClass('active');
      }
      for (let i = 0; i < $(this).index(); i++) {
         let index = $('.slick-current').index();
         $('.franchise__wrapper').removeClass('style-' + i);
         $('.franchise__wrapper').addClass('style-' + index);
         $('.franchise__dots li').eq(i).addClass('active');
         for (let i = 3; i <= 5; i++) {
            if ($('.franchise__dots li').eq(i).hasClass('slick-active')) {
               $('.franchise__dots li').eq(2).addClass('wait');
               $('.franchise__dots li').eq(i).addClass('disable');
            }
         }
         if ($('.franchise__dots li').eq(6).hasClass('slick-active')) {
            $('.franchise__dots li').eq(2).removeClass('wait');
         }
         if ($('.franchise__dots li').eq(7).hasClass('slick-active')) {
            $('.franchise__dots li').eq(6).addClass('wait');
            $('.franchise__dots li').eq(7).addClass('disable');
         } else {
            $('.franchise__dots li').eq(6).removeClass('wait');
         }
         if ($('.franchise__dots li').eq(12).hasClass('slick-active')) {
            $('.franchise__dots li').eq(11).addClass('wait');
         }
      }
      for (let j = $('.franchise__dots li').last().index(); j > $(this).index(); j--) {
         $('.franchise__dots li').eq(j).removeClass('active');
         $('.franchise__dots li').eq(j + 1).removeClass('active');
         if ($(this).index() < 2 || $(this).index() > 6) {
            $('.franchise__dots li').eq(2).removeClass('wait');
         }
         let index1 = $('.slick-current').index();
         if (index1 === 10) {
            $('.franchise__wrapper .slick-next').css("display", "none");
         } else {
            $('.franchise__wrapper .slick-next').css("display", "block");
         }
         $('.franchise__wrapper').removeClass('style-' + j);
         $('.franchise__wrapper').addClass('style-' + index1);
         for (let i = 3; i <= 5; i++) {
            if ($('.franchise__dots li').eq(i).hasClass('slick-active')) {
               $('.franchise__dots li').eq(2).addClass('wait');
               $('.franchise__dots li').eq(i).addClass('disable');
            }
         }
         if ($('.franchise__dots li').eq(6).hasClass('slick-active')) {
            $('.franchise__dots li').eq(2).removeClass('wait');
         }
         if ($('.franchise__dots li').eq(7).hasClass('slick-active')) {
            $('.franchise__dots li').eq(6).addClass('wait');
            $('.franchise__dots li').eq(7).addClass('disable');
         } else {
            $('.franchise__dots li').eq(6).removeClass('wait');
         }
         if ($('.franchise__dots li').eq(8).hasClass('slick-active')) {
            $('.franchise__dots li').eq(9).removeClass('active');
         }
         if ($('.franchise__dots li').eq(12).hasClass('slick-active')) {
            $('.franchise__dots li').eq(11).addClass('wait');
         }
      }
   })

   let testBool = true;


   $('.franchise__slider').on('wheel', (function (e) {
      e.preventDefault();

      if ($('.franchise__slider .slick-current').index() == $('.franchise__slider .slick-slide').last().index()) {
         $('.franchise__join.franchise-hide').hide();
         $('.franchise__wrapper .slick-next').hide();
      } else {
         $('.franchise__join.franchise-hide').show();
         $('.franchise__wrapper .slick-next').show();
      }

      setTimeout(function () {
         testBool = false;
      }, 500)

      if (testBool == true) {
         $('.franchise__slider .slick-active').find('h1, h3').not('.test-div').addClass('animateHideTitle');
         $('.franchise__slider .slick-active').find('p, span, ul, a, button').not('.franchise__dots, .franchise__dots button').addClass('animateHideText');
         $('.franchise__slider .slick-active').find('.franchise__inner div').not('.test-div').addClass('animateHideBlock');
         $('.franchise__slider .slick-active').find('img').addClass('animateHideImg');

         $('.franchise__slider .slick-active').next().find('h1, h3').addClass('animateShowTitle');
         $('.franchise__slider .slick-active').next().find('p, span, ul, a, button').not('.franchise__dots, .franchise__dots button').addClass('animateShowText');
         $('.franchise__slider .slick-active').next().find('.franchise__inner div').not('.test-div').addClass('animateShowBlock');
         $('.franchise__slider .slick-active').next().find('img').addClass('animateShowImg');
         $('.franchise__dots .slick-active').next().addClass('animateDots');

         $('.franchise__slider .slick-active').prev().find('h1, h3').addClass('animateShowTitle');
         $('.franchise__slider .slick-active').prev().find('p, span, ul, a, button').not('.franchise__dots, .franchise__dots button').addClass('animateShowText');
         $('.franchise__slider .slick-active').prev().find('.franchise__inner div').not('.test-div').addClass('animateShowBlock');
         $('.franchise__slider .slick-active').prev().find('img').addClass('animateShowImg');
         $('.franchise__dots .slick-active').prev().addClass('animateDots');
         setTimeout(function () {
            if (e.originalEvent.deltaY < 0) {
               $('.franchise__slider').slick('slickPrev');
            } else {
               $('.franchise__slider').slick('slickNext');
            }
            if ($('.franchise__dots li').index() < 2 || $('.franchise__dots li').index() > 6) {
               $('.franchise__dots li').eq(2).removeClass('wait');
            }
            for (let i = 3; i <= 5; i++) {
               if ($('.franchise__dots li').eq(i).hasClass('slick-active')) {
                  $('.franchise__dots li').eq(2).addClass('wait');
                  $('.franchise__dots li').eq(i).addClass('disable');
               }
            }
            if ($('.franchise__dots li').eq(6).hasClass('slick-active')) {
               $('.franchise__dots li').eq(2).removeClass('wait');
            }
            if ($('.franchise__dots li').eq(7).hasClass('slick-active')) {
               $('.franchise__dots li').eq(6).addClass('wait');
               $('.franchise__dots li').eq(7).addClass('disable');
            } else {
               $('.franchise__dots li').eq(6).removeClass('wait');
            }
            if ($('.franchise__dots li').eq(13).hasClass('slick-active')) {
               $('.franchise__dots li').css("display", "none");
            }
            let index = $('.slick-current').index();
            if (index === 10 || index === 13) {
               $('.franchise__wrapper .slick-next').css("display", "none");
            } else {
               $('.franchise__wrapper .slick-next').css("display", "block");
            }
            // if (index === 13) {
            //    $('.franchise__wrapper .franchise__dots').css("display", "none");
            // } else {
            //    $('.franchise__wrapper .franchise__dots').css("display", "flex");
            // }
            for (let v = 0; v <= index; v++) {
               $('.franchise__dots li').eq(v).addClass('active');
            }
            for (let c = $('.franchise__dots li').last().index(); c >= index; c--) {
               $('.franchise__dots li').eq(c).removeClass('active');
            }
            $('.franchise__wrapper').addClass('style-' + index);
            $('.franchise__wrapper').removeClass('style-' + --index);
            $('.franchise__wrapper').removeClass('style-' + (index + 2));


            setTimeout(function () {
               $('*').removeClass('animateHideTitle');
               $('*').removeClass('animateHideText');
               $('*').removeClass('animateHideBlock');
               $('*').removeClass('animateHideImg');
            }, 500);
            setTimeout(function () {
               $('*').removeClass('animateShowTitle');
               $('*').removeClass('animateShowText');
               $('*').removeClass('animateShowBlock');
               $('*').removeClass('animateShowImg');
            }, 900);
         }, 1200);
         setTimeout(function () {
            testBool = true;
         }, 1500)
      }
   }));

   $('.franchise__burger-link').on('click', function (e) {
      e.preventDefault();
      $('.franchise__burger-menu-inner li').each(function () {
         $(this).find('a').css('transition-delay', '0s');
      })
      $('.franchise__burger-menu').addClass('hide');
      $('.franchise__burger-menu').removeClass('show');
      let top = $('#slide10').offset().top;
      $('body,html').animate({ scrollTop: top }, 500);
   })


   enquire.register("screen and (max-width:1000px)", {

      match: function () {
         $('.franchise__twelfth .form__send').on('click', function (e) {
            e.preventDefault();
            setTimeout(function () {
               let top = $('#slide0').offset().top;
               $('body,html').animate({ scrollTop: top }, 500);
            }, 500)
         })

         if (document.location.href.match(/(slide)\d/)) {
            let tmp = document.location.href.match(/(slide)\d{1,2}/)[0];

            let result = getSlideIndex(tmp) - 1;

            console.log(result)

            let top = $('#slide' + result).offset().top;
            $('body,html').animate({ scrollTop: top }, 500);

            function getSlideIndex(tmp) {
               for (let item of $('.franchise__slider-item')) {
                  let slideIndex = 0;
                  if (item.attributes.id.value == tmp) {
                     slideIndex = tmp.match(/\d{1,2}/)[0];
                     return slideIndex;
                  }
               }
            }
         }
      }

   });






   window.REMODAL_GLOBALS = {
      NAMESPACE: 'modal',
      DEFAULTS: {
      }
   };




})