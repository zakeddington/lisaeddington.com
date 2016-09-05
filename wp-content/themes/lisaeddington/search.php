<?php

// The template for displaying Search Results pages.

get_header(); ?>

<?php get_sidebar( '1' ); ?>

<!-- BEGIN MAIN COLUMN -->
<article id="main-col">

	<?php if ( have_posts() ) : ?>
		<h1 class="page-title"><?php printf( __( 'Search Results for: %s', 'skeleton' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
		<?php
		 get_template_part( 'loop', 'search' );
		?>
	
	<?php else : ?>
		<section id="post-0" class="post no-results">
			<h2 class="entry-title"><?php _e( 'Nothing Found', 'skeleton' ); ?></h2>
			<div class="entry-content">
				<p><?php _e( 'Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'skeleton' ); ?></p>
				<?php get_search_form(); ?>
			</div>
		</section>
	
	<?php endif; ?>

</article>
<!-- END MAIN COLUMN -->

<?php get_sidebar('2'); ?>

<?php get_footer(); ?>
