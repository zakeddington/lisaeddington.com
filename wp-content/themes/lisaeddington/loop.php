<?php
// Skeleton standard loop template
?>

<?php // Display navigation to next/previous pages when applicable  ?>
<?php if ( $wp_query->max_num_pages > 1 ) : ?>
	<div id="page-nav-above">
		<?php next_posts_link( __( '<span class="next-link">&larr;</span> Older posts', 'skeleton' ) ); ?>
		<?php previous_posts_link( __( 'Newer posts <span class="prev-link">&rarr;</span>', 'skeleton' ) ); ?>
	</div>
<?php endif; ?>

<?php // If there are no posts to display, such as an empty archive page ?>
<?php if ( ! have_posts() ) : ?>
	<div class="post error404">
		<h1 class="entry-title"><?php _e( 'Not Found', 'skeleton' ); ?></h1>
		<div class="entry">
			<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'skeleton' ); ?></p>
			<?php get_search_form(); ?>
		</div>
	</div>
<?php endif; ?>

<?php // start the loop ?>
<?php while ( have_posts() ) : the_post(); ?>

	<div id="post-<?php the_ID(); ?>" class="entry" <?php post_class(); ?>>
		
		<h2 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'skeleton' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
		<div class="entry-meta">
			<span class="post-date"><?php the_time(__('F jS, Y', 'kubrick')) ?></span> | By: <span class="post-author"><?php the_author() ?></span>
		</div><!-- .entry-meta -->

		<?php if ( is_archive() || is_search() ) : // Only display excerpts for archives and search. ?>
		<div class="entry-summary">
			<?php the_excerpt(); ?>
		</div><!-- .entry-summary -->

		<?php else : ?>
		<div class="entry-content">
			<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'skeleton' ) ); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'skeleton' ), 'after' => '</div>' ) ); ?>
		</div><!-- .entry-content -->
		<?php endif; ?>

		<div class="entry-utility">
			<?php if ( count( get_the_category() ) ) : ?>
				<span class="cat-links">
					<?php printf( __( 'Posted in: %s', 'skeleton' ), get_the_category_list( ', ' ) ); ?>
				</span>
			<?php endif; ?>
			<?php
				$tags_list = get_the_tag_list( '', ', ' );
				if ( $tags_list ):
			?>
				<span class="tag-links">
					<?php printf( __( ' | Tagged with: %s', 'skeleton' ), $tags_list ); ?>
				</span>
			<?php endif; ?>
			<span class="comments-link"> | <?php comments_popup_link( __( 'Leave a comment', 'skeleton' ), __( '1 Comment', 'skeleton' ), __( '% Comments', 'skeleton' ) ); ?></span>
			<?php edit_post_link( __( 'Edit', 'skeleton' ), ' | <span class="edit-link">', '</span>' ); ?>
		</div><!-- .entry-utility -->
	</div><!-- #post-## -->

	<?php comments_template( '', true ); ?>

<?php endwhile; // End the loop. ?>

<?php // Display navigation to next/previous pages when applicable ?>
<?php if (  $wp_query->max_num_pages > 1 ) : ?>
	<div id="page-nav-below">
		<?php next_posts_link( __( '<span class="next-link">&larr;</span> Older posts', 'skeleton' ) ); ?>
		<?php previous_posts_link( __( 'Newer posts <span class="prev-link">&rarr;</span>', 'skeleton' ) ); ?>
	</div>
<?php endif; ?>
