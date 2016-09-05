<?php
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// SKELETON FUNCTIONS - COMMON & USEFUL FUNCTIONS //
////////////////////////////////////////////////////
////////////////////////////////////////////////////


// THEME SUPPORT //

// Tell WordPress to run skeleton_setup() when the 'after_setup_theme' hook is run.
add_action( 'after_setup_theme', 'skeleton_setup' );

// set up support for Wordpress3.0+ functionality
function skeleton_setup() {
	// support post thumbnails
	add_theme_support( 'post-thumbnails', array( 'post', 'page' ) );
	
	// default register any navigation menus
	register_nav_menus( array(
		'primary' => __( 'Primary Navigation', 'skeleton' ),
	) );
}



// DATA OUTPUT OR FORMAT MODIFICATIONS //

// options for changing excerpt 'length' and 'more' link output
function skeleton_excerpt_length( $length ) {
	return 100;
}
add_filter( 'excerpt_length', 'skeleton_excerpt_length' );

function skeleton_auto_excerpt_more( $more ) {
	return '<a href="'. get_permalink() . '">Continue reading <span class="meta-nav">&rarr;</span></a>';
}
add_filter( 'excerpt_more', 'skeleton_auto_excerpt_more' );



// CREATE WIDGET-ENABLED AREAS (sidebars) //

// register widget-enabled areas
function skeleton_widgets_init() {
	// Area 1, a sidebar.
	register_sidebar( array(
		'name' => __( 'Sidebar 1', 'skeleton' ),
		'id' => 'sidebar1-widget-area',
		'description' => __( 'Sidebar 1', 'skeleton' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	// Area 3, located in the footer. Empty by default, displayed only when in use.
	register_sidebar( array(
		'name' => __( 'Footer Widget Area', 'skeleton' ),
		'id' => 'footer-widget-area',
		'description' => __( 'Footer widget area', 'skeleton' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
}
// Register sidebars by running skeleton_widgets_init() on the widgets_init hook.
add_action( 'widgets_init', 'skeleton_widgets_init' );

?>