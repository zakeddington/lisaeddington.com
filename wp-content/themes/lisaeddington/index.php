<?php
// Skeleton default blog feed template
?>

<?php get_header(); ?>

<?php get_sidebar( '1' ); ?>

<!-- BEGIN MAIN COLUMN -->
<article id="main-col">

	<?php
	// Run the loop to output the posts.
	 get_template_part( 'loop', 'index' );
	?>
			
</article>
<!-- END MAIN COLUMN -->

<?php get_sidebar('2'); ?>

<?php get_footer(); ?>
