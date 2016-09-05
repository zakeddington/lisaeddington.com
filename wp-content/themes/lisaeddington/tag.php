<?php

// The template for displaying Tag Archive pages.

get_header(); ?>

<?php get_sidebar( '1' ); ?>

<!-- BEGIN MAIN COLUMN -->
<article id="main-col">

	<h1 class="page-title"><?php printf( __( 'Tag Archives: %s', 'skeleton' ), '<span>' . single_tag_title( '', false ) . '</span>' ); ?></h1>

	<?php
	get_template_part( 'loop', 'tag' );
	?>

</article>
<!-- END MAIN COLUMN -->

<?php get_sidebar('2'); ?>

<?php get_footer(); ?>
