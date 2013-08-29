(function($) {
Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
  	// Alter li element 
    var menu = ('#gn-menu ul li.first');
    var menu2 = ('#main-menu ul li.first');

    $(menu).addClass('gn-trigger');
    $(menu2).addClass('gn-trigger');


    var menuIcon = ( 'li.gn-trigger a' );
    $(menuIcon).addClass('gn-icon gn-icon-menu');
    //$('.gn-menu-wrapper').hidde();
    $('.gn-menu-wrapper').insertAfter('.gn-icon-menu')

    //
    //$('<nav class="gn-menu-wrapper"><div class="gn-scroller"><ul class="gn-menu"><li class="gn-search-item"><input placeholder="Search" type="search" class="gn-search"><a class="gn-icon gn-icon-search"><span>Search</span></a></li><li><a class="gn-icon gn-icon-download">Downloads</a><ul class="gn-submenu"><li><a class="gn-icon gn-icon-illustrator">Vector Illustrations</a></li><li><a class="gn-icon gn-icon-photoshop">Photoshop files</a></li></ul></li><li><a class="gn-icon gn-icon-cog">Settings</a></li><li><a class="gn-icon gn-icon-help">Help</a></li><li><a class="gn-icon gn-icon-archive">Archives</a><ul class="gn-submenu"><li><a class="gn-icon gn-icon-article">Articles</a></li><li><a class="gn-icon gn-icon-pictures">Images</a></li><li><a class="gn-icon gn-icon-videos">Videos</a></li></ul></li></ul></div></nav>').insertAfter('.gn-icon-menu');
    //$("a.gn-icon-menu").removeAttr("href");

    function init(){
    	//new gnMenu( document.getElementById( 'main-menu' ) );
    	new gnMenu( document.getElementById( 'gn-menu' ) );
    }

	window.onload = init;


  }
};
})(jQuery);