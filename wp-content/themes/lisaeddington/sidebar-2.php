<?php
 // Skeleton template for sidebar 2.
?>

<?php
	// A second sidebar for widgets, displays only if in use
	if ( is_active_sidebar( 'sidebar2-widget-area' ) ) : ?>

		<!-- BEGIN SIDEBAR 2 -->
		<div id="sidebar-2">
			<ul class="widget-area">
				<?php dynamic_sidebar( 'sidebar2-widget-area' ); ?>
			</ul>
		</div>
		<!-- END SIDEBAR 2 -->		

<?php endif; ?>
