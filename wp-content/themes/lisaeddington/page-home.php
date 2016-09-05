<?php
/*
Template Name: Homepage
*/
?>

<?php get_header(); ?>

<!-- BEGIN MAIN COLUMN -->
<article id="main-col" class="home">

	<?php
		query_posts('category_name=Featured&posts_per_page=1');
		while (have_posts()) : the_post(); 

			echo "<a href='";
			the_permalink();
			echo "' title='View the Gallery'>"; 
			the_post_thumbnail('large'); 
			echo "</a>";

		endwhile;
	?>
	
</article>
<!-- END MAIN COLUMN -->

<?php get_footer(); ?>
