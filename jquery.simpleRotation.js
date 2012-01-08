/* 
 * simpleRotation jQuery Plugin v0.1.0
 * Copyright (c) 2012 Jorge Álvarez
 *
 * Licensed under the MIT license
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
  $.fn.simpleRotation = function(options) {
    
    var settings,
		    $this = $(this);
		    
		settings = $.extend({
      'timeTransition'  : 10000,
      'speedTransition' : 900
    }, options);
    
    $this.children(':not(:first)').css({opacity: 0});
    
    next(settings);
    
    function next(settings){      
      setInterval(function() {
        $this.children(':first').animate({opacity: 0}, settings.speedTransition, function() {	
          $this.children(':first').appendTo($this);
          $this.children(':first').animate({opacity: 1}, settings.speedTransition);
        })
      }, settings.timeTransition);
    }

  };
})(jQuery);