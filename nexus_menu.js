 // function init(){
 // 	new gnMenu( document.getElementById( 'gn-menu' ) );	
 // }

 // window.onload = init;


 /**
 * @file
 * Mobile navigation behavior definition.
 *
 * Get fron Drupal the settings specified on mobile navigation administration page
 * and place them in a parameters structures to run the Mobile Menu plugin.
 */

(function($) {

  // Execute mobile-navigation construction with the settings on mobile_navigation.
	function init(){
		new gnMenu( document.getElementById( 'gn-menu' ) );	
	}

	window.onload = init;

})(jQuery);

