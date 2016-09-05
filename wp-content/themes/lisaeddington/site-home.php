<?php
/*
Template Name: Site Home
*/
?>

<?php

get_header(); ?>

<?php get_sidebar( '1' ); ?>

<!-- BEGIN MAIN COLUMN -->
<article id="main-col">
	
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	<section id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<h1 class="entry-title"><?php the_title(); ?></h1>
		<div class="entry-content">
			<?php the_content(); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'skeleton' ), 'after' => '</div>' ) ); ?>
			<?php edit_post_link( __( 'Edit', 'twentyten' ), '<span class="edit-link">', '</span>' ); ?>
		</div><!-- .entry-content -->
	</section><!-- #post-## -->

	<?php // comments_template( '', true ); - turned off on pages by default ?>

<?php endwhile; ?>

</article>
<!-- END MAIN COLUMN -->

<?php get_sidebar('2'); ?>

<?php get_footer(); ?>