<?php

// The template for displaying Category Archive pages.


get_header(); ?>

<!-- BEGIN MAIN COLUMN -->
<article id="main-col">
	
	<h2 class="cat-landing">Please select an image</h2>

</article>
<!-- END MAIN COLUMN -->

<nav id="post-thumb-nav">
	<ul>
		<?php while ( have_posts() ) : the_post(); ?>
		<li>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_post_thumbnail('thumbnail'); ?></a>
		</li>
		<?php endwhile; // End the loop. ?>
	</ul>
</nav>

<?php get_footer(); ?>
