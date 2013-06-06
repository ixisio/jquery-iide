/*!
 * jquery.iide.js
 *
 * Immediate–Invoked–Data–Expressions (IIDE) for jQuery Plugins & Methods
 * https://github.com/asciidisco/jquery-iide
 *
 * Copyright (c) 2012 "ixisio" Andreas Klein
 * Licensed under the MIT license.
 */

!function ($) {

  "use strict"; // jshint ;_;

  var defaults = {
    attr: {
      invoke  : '[data-init]',
      options : '[data-options]' 
    }
  }

  // Constructor
  var jiide = function () {

    var _this = this;
    this.options = $.extend( defaults, {} );
    this.$elements = $( this.options.attr.invoke );

    // Iterate through each data-init elements
    $.each( this.$elements, function() {

      var   $el = $(this)
          , fn = $el.data('init')
          , options = $el.data('options') || {}
          , jqfn = $.fn[fn] || $[fn];

      if( typeof jqfn === 'function' )    
        _this.invoke( fn, $el, options )
      else
        throw fn + ' is not a jQuery function or plugin.';
    }); 

    return this;
  }

  // Invoke a jQuery function or jQuery Plugin
  // with the optional given parameters.
  jiide.prototype.invoke =  function( fn, $el, options ) {
      // Array.prototype.slice.call(arguments).slice(1)
      return $el[fn].apply( $el, typeof options === 'object' ? options : [options] );
  }


  // Self-Executing Plugin on DocumentReady
  // Initialize the jiide plugin
  $(function() {
    window.jiide = new jiide();
  });

}(window.jQuery);