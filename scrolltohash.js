(function($) {

    $.fn.scrollToHash = function(options) {

      // Default options
      var settings = $.extend({
          scrollSpeed    : 1000,
          element        : null
      }, options);

      this.click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, settings.scrollSpeed);
            return false;
          }
        }
      });

    };

}(jQuery));