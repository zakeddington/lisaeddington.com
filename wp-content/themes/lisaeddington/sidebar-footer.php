<?php
// Skeleton Footer Widget Area
?>

<?php
	// The footer widget area is triggered if any of the areas have widgets.
	if (   ! is_active_sidebar( 'footer-widget-area' ))
		return;
?>

<!-- BEGIN FOOTER WIDGET AREA -->
<div id="footer-widget-area" role="complementary">

<?php if ( is_active_sidebar( 'footer-widget-area' ) ) : ?>
	<ul class="widget-area">
		<?php dynamic_sidebar( 'footer-widget-area' ); ?>
	</ul>
<?php endif; ?>

</div>
<!-- END FOOTER WIDGET AREA -->

