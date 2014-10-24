/*
 *  Project: JQuery ScrollToHash
 *  Description: 
 *  Author: Benoit Brochier
 *  Version: 0.1
 */

;(function ( $, window, document, undefined ) {

    // Default options
    var pluginName = "scrollToHash",
        defaults = {
            scrollSpeed   : 1000,
            target        : null,
            scrollOffset  : 0,
        };


    // Plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            var iScrollSpeed = this.options.scrollSpeed,
                iScrollOffset = this.options.scrollOffset;

            $(this.element).on("click", function(e) {
              e.preventDefault();
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  Plugin.prototype.scrollToTarget(target, iScrollSpeed, iScrollOffset);
                }
              }
            });
        },

        scrollToTarget: function(target, scrollSpeed, scrollOffset) {
            $('html,body').animate({
              scrollTop: target.offset().top + scrollOffset
            }, scrollSpeed);
            return false;
        }

    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };



    // $.fn.scrollToHash = function(options) {

    //   // Default options
    //   var settings = $.extend({
    //       scrollSpeed    : 1000,
    //       element        : null
    //   }, options);

    //   this.click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, settings.scrollSpeed);
    //         return false;
    //       }
    //     }
    //   });

    // };

}(jQuery, window, document));