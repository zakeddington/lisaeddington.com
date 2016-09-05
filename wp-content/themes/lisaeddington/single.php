<?php
// skeleton default single post template

get_header(); ?>


<!-- BEGIN MAIN COLUMN -->
<article id="main-col">

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	<nav class="next-prev">
		<ul>
			<li class="prev">
				<?php next_post('%', 'Prev', 'no'); ?>
			</li>
			<li class="next">
				<?php previous_post('%', 'Next', 'no'); ?>
			</li>
		</ul>
	</nav>

	<section id="post-<?php the_ID(); ?>" class="entry">

		<div class="entry-content">
			<?php the_content(); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'skeleton' ), 'after' => '</div>' ) ); ?>
		</div><!-- .entry-content -->
		<h1 id="page-title" class="entry-title"><?php the_title(); ?></h1>

	</section><!-- #post-## -->

<?php endwhile; // end of the loop. ?>

</article>
<!-- END MAIN COLUMN -->
<!-- Post Thumbnails Nav -->
<nav id="post-thumb-nav">
	<ul>
		<?php
			$IDOutsideLoop = $post->ID;

			while( have_posts() ) {
				the_post();

				foreach( ( get_category(1) ) as $category )
					// switched to show only category 1 since not Featured wasn't working as expected
					//if (!($category->category_name=='Featured')) {

						//$my_query = new WP_Query('category_name=' . $category->category_nicename . '&orderby=title&order=asc&showposts=100');
						$my_query = new WP_Query('category_name=' . $category->category_nicename . '&showposts=100');
						if( $my_query ) {
							while ( $my_query->have_posts() ) {
								$my_query->the_post(); ?>
								<li>
									<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_post_thumbnail('thumbnail'); ?></a>
								</li>
							<?php
							}
						}
					//}
			}
		?>
	</ul>
</nav>


<?php get_footer(); ?>
