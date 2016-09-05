<?php
/**
 * The template for displaying 404 pages (Not Found).
 */

get_header(); ?>


<!-- BEGIN MAIN COLUMN -->
<article id="main-col">

	<section id="post-0" class="post error404">
		<h1 class="entry-title"><?php _e( 'Not Found', 'twentyten' ); ?></h1>
		<div class="entry-content">
			<p><?php _e( 'Apologies, but the page you requested could not be found. Click the back button on your browser to go back to the page you came from, or use the navigation menu to browse the site.', 'skeleton' ); ?></p>
		</div><!-- .entry-content -->
	</section><!-- #post-0 -->

</article>
<!-- END MAIN COLUMN -->

<?php get_footer(); ?>
