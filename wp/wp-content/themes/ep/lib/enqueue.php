<?php

function ep_scripts() 
{
  wp_enqueue_style('ep_main', '/assets/css/styles.css', false, '9dada84be109d0f0c9749bcf63b41b27');

  if (is_single() && comments_open() && get_option('thread_comments')) 
  {
    wp_enqueue_script('comment-reply');
  }

  wp_deregister_script('jquery');
  wp_register_script( 'jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js'); 

  wp_register_script('modernizr_and_respond', ep_assets().'/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js', array(), null, false);
  wp_register_script('ep_scripts', ep_assets().'/js/scripts.min.js', array(), 'dfa91ab73dcfe688e24ef8a7e1701370', true);
  wp_enqueue_script('modernizr_and_respond');
  wp_enqueue_script('jquery');
  wp_enqueue_script('ep_scripts');
}

add_action('wp_enqueue_scripts', 'ep_scripts');