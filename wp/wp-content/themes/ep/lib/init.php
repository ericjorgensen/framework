<?php
//assets route
function ep_assets()
{
  $ep_assets = '../../assets';
  return apply_filters( 'template_directory_uri', $ep_assets );
}
//nav menus
register_nav_menus(array(
	'primary_navigation' => __('Primary Navigation', 'roots'),
));
//thumbnails
add_theme_support('post-thumbnails');