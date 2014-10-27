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
            Plugin.prototype.bindUIActions(this.element, this.options);
        },

        bindUIActions: function(element, options) {
            $(element).on("click", function(e) {
                e.preventDefault();
                
                //Callback "beforeScroll"
                if(options.beforeScroll !== false){
                    options.beforeScroll();
                }
                
                Plugin.prototype.getTarget(element, options);
            });
        },

        getTarget: function(element, options){
            var target;
            if($(element).attr('href') !== undefined) {
                target = $(element).attr('href');
            }
            if($(element).data('target') !== undefined){
                target = $(element).data('target');
            }
            Plugin.prototype.checkTarget(target, element, options);
        },

        checkTarget: function(target, element, options){
            //Do some logic here to be sure to have a good target
            if (target.length) {
              Plugin.prototype.scrollToTarget(target, options.scrollDuration, options.scrollOffset, options.easing, options.afterScroll);
            }
        },

        scrollToTarget: function(target, scrollDuration, scrollOffset, easing, callback) {
            $('html,body').animate({
              scrollTop: $(target).offset().top + scrollOffset
            }, scrollDuration, easing, function() {
                if (typeof callback == 'function') {
                    callback();
                }
                callback = null;
            });
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