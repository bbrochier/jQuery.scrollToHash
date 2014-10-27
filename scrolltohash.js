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
            scrollDuration  : 1000,
            target          : null,
            scrollOffset    : 0,
            easing          : "swing",
            beforeScroll    : false,
            afterScroll     : false
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
            var s = this,
                iScrollDuration = s.options.scrollDuration,
                iScrollOffset = s.options.scrollOffset,
                sEasing = s.options.easing;

            $(this.element).on("click", function(e) {
              e.preventDefault();

              //beforeScroll Callback
              if(s.options.beforeScroll !== false){
                s.options.beforeScroll();
              }
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  Plugin.prototype.scrollToTarget(target, iScrollDuration, iScrollOffset, sEasing, s.options.afterScroll);
                }
              }

            });
        },

        scrollToTarget: function(target, scrollDuration, scrollOffset, easing, callback) {
            $('html,body').animate({
              scrollTop: target.offset().top + scrollOffset
            }, scrollDuration, easing, function() {
                if (typeof callback == 'function') {
                    callback();
                }
                callback = null;
            });
            return false;
        },

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
    //       scrollDuration    : 1000,
    //       element        : null
    //   }, options);

    //   this.click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, settings.scrollDuration);
    //         return false;
    //       }
    //     }
    //   });

    // };

}(jQuery, window, document));