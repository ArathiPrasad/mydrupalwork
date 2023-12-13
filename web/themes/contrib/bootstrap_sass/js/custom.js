/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_sass = {
    attach: function(context, settings) {

      // Custom code here
      $('.conference-slider .view-content', context).slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        nextArrow: '<div class="right"><i class="fa fa-angle-right"></i></div>',
        prevArrow: '<div class="left"><i class="fa fa-angle-left"></i></div>',
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            nextArrow: false,
            prevArrow: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            nextArrow: false,
            prevArrow: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            nextArrow: false,
            prevArrow: false,
            dots: true
          }
        }
        ]
      });

      var header = $('.conference-slider .view-header').clone();
      $('.conference-quicktab', context).prepend(header);
      $('.conference-slider .view-header').remove();

      var src = $('.conference-image img', context).attr('src');
      $('.conference-image img').attr('src', src).on("error", function(e) {
        var title = $('.conference-image img').attr("title");
        $(this).replaceWith("<span>" + title + "</span>");
      });
    }
  };

})(jQuery, Drupal);