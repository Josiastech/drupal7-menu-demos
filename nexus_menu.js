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
  Drupal.behaviors.mobile_navigation = {
    attach: function(context) {
      if ($(Drupal.settings.mobile_navigation.menuSelector, context).length) {
        var settings = {
          showEffect       : Drupal.settings.mobile_navigation.showEffect,
          menuWidth        : Drupal.settings.mobile_navigation.menuWidth,
          useMask          : Drupal.settings.mobile_navigation.useMask
        };
        $(Drupal.settings.mobile_navigation.menuSelector, context).mobile_menu(settings);
      }
    }
  }

})(jQuery);
