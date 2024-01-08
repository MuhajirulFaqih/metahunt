(function ($) {
    "use strict";
    // Toggler navbar
    $('.toggle').click(function () {
        $('.nav-menu-content').toggleClass('active')
        $('.nav-overlay').toggleClass('active')
    })
    $('.toggle-close').click(function () {
        $('.nav-menu-content').toggleClass('active')
        $('.nav-overlay').toggleClass('active')
    })
    AOS.init({offset: 0, duration: 500});
})(window.jQuery);

$("a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html,body").animate({
                scrollTop: target
                    .offset()
                    .top - 80
            }, 200, 'swing', function () {
                window.location.hash = '';
            });
            return false;
        }
    }
});

$(window).scroll(function () {
  onScroll();
});

function onScroll() {
  var scrollPos = $(document).scrollTop();
  
  // try {
    // var heroElement = $(".header");
    // if (
      //     (heroElement.position().top - 100) <= scrollPos &&
      //     (heroElement.position().top - 100) + heroElement.height() > scrollPos
      // ) {
        //     $(".top-menu").removeClass("active");
        // } else {
    //     $(".top-menu").removeClass("active");
    //     $(".top-menu").addClass("active");
    // }
    // } catch (e) {
    // // Ignore href='javascript:;'
    // }

    $(".navigation a").each(function() {
      var currLink = $(this);

      try {
        var refElement = $(currLink.attr("href"));
        if (
          (refElement.position().top - 100) <= scrollPos &&
          (refElement.position().top - 100) + refElement.height() > scrollPos
        ) {
          $(".navigation li a").removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      } catch (e) {
        // Ignore href='javascript:;'
      }
    });
}

(function() {

  var surviveHeadline = $(".survive-headline-text");
  var surviveHeadlineIndex = -1;

  function showNextQuote() {
    ++surviveHeadlineIndex;
    surviveHeadline.eq(surviveHeadlineIndex % surviveHeadline.length)
      .fadeIn(400)
      .delay(2000)
      .fadeOut(400, showNextQuote);
  }

  showNextQuote();

})();


var owlSurvival = $('.owl-survival');
owlSurvival.owlCarousel({
    navigation: true,
    nav: true,
    dots: false,
    dotsEach: 1,
    autoWidth: false,
    loop: true,
    center: true,
    responsiveClass: true,
    margin: 0,
    items: 1,
    autoplayTimeout: 3000,
    autoplay: true,
    autoplayHoverPause: true,
    navText: ["<div class='arrow'><img src='assets/icons/arrow-left.svg' class='w-100'></div>", "<div class='arrow'><img src='assets/icons/arrow-right.svg' class='w-100'></div>"],
    animateIn: 'ease-in-out',
    animateOut: 'ease-in-out',
    responsive: {
        992: {
            items: 3,
        }
    }
});


var owlLeaderboard = $('.owl-leaderboard');
owlLeaderboard.owlCarousel({
    navigation: false,
    nav: false,
    dots: false,
    autoWidth: false,
    loop: false,
    responsiveClass: true,
    margin: 0,
    items: 1,
    animateIn: 'ease-in-out',
    animateOut: 'ease-in-out',
    responsive: {
        992: {
            items: 3,
        }
    }
});

var owlNews = $('.owl-news');
owlNews.owlCarousel({
    navigation: true,
    nav: true,
    dots: false,
    dotsEach: 1,
    autoWidth: false,
    loop: true,
    center: true,
    responsiveClass: true,
    margin: 0,
    items: 1,
    autoplayTimeout: 3000,
    autoplay: true,
    autoplayHoverPause: true,
    navText: ["<div class='arrow'><img src='assets/icons/arrow-left.svg' class='w-100'></div>", "<div class='arrow'><img src='assets/icons/arrow-right.svg' class='w-100'></div>"],
    animateIn: 'ease-in-out',
    animateOut: 'ease-in-out',
    responsive: {
        992: {
            items: 3,
        }
    }
});


var owlWeapon = $('.owl-weapon');
owlWeapon.owlCarousel({
    navigation: false,
    nav: false,
    dots: false,
    autoWidth: false,
    loop: false,
    responsiveClass: true,
    margin: 0,
    items: 1,
    animateIn: 'ease-in-out',
    animateOut: 'ease-in-out',
    responsive: {
        992: {
            items: 3,
        }
    }
});