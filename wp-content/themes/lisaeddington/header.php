<?php
// Skeleton Header
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<link href="/favicon.ico" rel="shortcut icon" />

<title>
<?php
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | Home | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'skeleton' ), max( $paged, $page ) );
?>
</title>

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<!--[if lt IE 9]><script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->


<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
<script>
	$(function() {
    	$('p.wp-caption-text').insertAfter('h1.entry-title');
	});

	$(document).ready(function(){
	    var full_path = location.href.split("#")[0];
	    $("#post-thumb-nav a").each(function(){
	        var $this = $(this);
	        if($this.prop("href").split("#")[0] == full_path) {
	            $this.parent().addClass("active");
	        }
	    });
	});
</script>

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<!-- BEGIN MAIN CONTAINER -->
<div id="container" class="hfeed">
	
	<!-- BEGIN HEADER -->
	<header id="header">
		<nav>
			<ul>
				<li class="shop">
					<a href="http://lisalego.etsy.com" target="_blank">
						<img class="hover" src="<?php bloginfo( 'template_directory' ); ?>/_ui/img/nav-shop-hover.png" alt="Shop" />
						<img src="<?php bloginfo( 'template_directory' ); ?>/_ui/img/nav-shop.png" alt="Shop" />
					</a>
				</li>
				<li class="about">
					<a href="/about-me/">
						<img class="hover" src="<?php bloginfo( 'template_directory' ); ?>/_ui/img/nav-about-hover.png" alt="About Me" />
						<img src="<?php bloginfo( 'template_directory' ); ?>/_ui/img/nav-about.png" alt="About Me" />
					</a>
				</li>
				<li class="gallery">
					<a href="/gallery/all-art/">
						<img class="hover" src="<?php bloginfo( 'template_directory' ); ?>/_ui/img/nav-gallery-hover.png" alt="All Art" />
						<img src="<?php bloginfo( 'template_directory' ); ?>/_ui/img/nav-gallery.png" alt="All Art" />
					</a>
				</li>
			</ul>
		</nav>
		<hgroup>
			<h1 id="site-title">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<img src="<?php bloginfo( 'template_directory' ); ?>/_ui/img/header.png" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" />
				</a>
			</h1>
		</hgroup>

	</header>
	<!-- END HEADER -->
