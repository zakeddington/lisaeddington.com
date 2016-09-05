<?php
 // Skeleton template for sidebar 1.
?>

<!-- BEGIN SIDEBAR 1 -->
<div id="sidebar-1" role="complementary">
	<ul class="widget-area">

<?php
	// call dynamic sidebar, use fallback widgets if no sidebar exists
	if ( ! dynamic_sidebar( 'sidebar1-widget-area' ) ) : ?>
	
		<li id="search">
			<?php get_search_form(); ?>
		</li>

		<li id="archives">
			<h3 class="widget-title"><?php _e( 'Archives', 'skeleton' ); ?></h3>
			<ul>
				<?php wp_get_archives( 'type=monthly' ); ?>
			</ul>
		</li>

		<li id="meta">
			<h3 class="widget-title"><?php _e( 'Meta', 'skeleton' ); ?></h3>
			<ul>
				<?php wp_register(); ?>
				<li><?php wp_loginout(); ?></li>
				<?php wp_meta(); ?>
			</ul>
		</li>

	<?php endif; // end primary widget area ?>
	</ul>
</div>
<!-- END SIDEBAR 1 -->
