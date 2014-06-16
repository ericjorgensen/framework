<?php
function ep_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'knockknockstuff' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>',
	) );
}
add_action( 'widgets_init', 'is_widgets_init' );

add_action( 'body_class', 'is_add_my_bodyclass');
function ep_add_my_bodyclass( $classes ) {
  $classes[] = 'my-custom-class';
  return $classes;
}