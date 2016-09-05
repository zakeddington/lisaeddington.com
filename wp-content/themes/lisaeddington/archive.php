<?php

// The template for displaying Archive pages.


get_header(); ?>

<?php get_sidebar( '1' ); ?>

<!-- BEGIN MAIN COLUMN -->
<article id="main-col">

<?php
	// Queue the first post to get date info - loop rewinds later on
	if ( have_posts() )
		the_post();
?>

	<h1 class="page-title">
	<?php if ( is_day() ) : ?>
		<?php printf( __( 'Daily Archives: <span>%s</span>', 'skeleton' ), get_the_date() ); ?>
	<?php elseif ( is_month() ) : ?>
		<?php printf( __( 'Monthly Archives: <span>%s</span>', 'skeleton' ), get_the_date('F Y') ); ?>
	<?php elseif ( is_year() ) : ?>
		<?php printf( __( 'Yearly Archives: <span>%s</span>', 'skeleton' ), get_the_date('Y') ); ?>
	<?php else : ?>
		<?php _e( 'Post Archives', 'skeleton' ); ?>
	<?php endif; ?>
	</h1>

<?php
	// rewind the loop
	rewind_posts();

	get_template_part( 'loop', 'archive' );
?>

</article>
<!-- END MAIN COLUMN -->

<?php get_sidebar('2'); ?>

<?php get_footer(); ?>

