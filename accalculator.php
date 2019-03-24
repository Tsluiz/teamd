<?php
/*
 * @package accalculator
 * /
/*
 * Plugin Name: Accalculator
 * Plugin URI: https://www.emaildrips.com/plugin
 * Description:  plugin to add accalculator to wp site
 * Version: 0.0.1
 * Author: Digital Web Buddy
 * Author URI: https://www.digitalwebbuddy.com
 * License: GPLv2 or later
 * Date: 2019-03-23
 * Time: 10:25
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

Copyright Automattic, Inc.
*/

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );


class Accalculator {

	function __construct() {

		add_action( init, array( $this, 'accalculator_shortcode' ) );
		// use shortcode [accalculator width="xx" height="xx"]
		add_shortcode( 'accalculator', 'accalculator_shortcode' );
	}//methods

	function activate() {

		$this->accalculator_shortcode();
		//
		flush_rewrite_rules();
	}

	function deactivate() {

		//
		flush_rewrite_rules();
	}

	function uninstall() {
	}

	public function accalculator_shortcode( $atts, $content_null, $accalculator_shortcode ) {
		$a = ( shortcode_atts( array(
			"width"  => '',
			"height" => '',
		), $atts ) );
		wp_register_style( 'myPluginStyle', plugins_url( '/stylesheets/activeCampaignStyles.css', __FILE__ ) );
		wp_enqueue_style( 'myPluginStyle' );
		add_action( 'wp_enqueue_scripts', 'myPluginStyle', 99 );
		wp_register_script( 'myPluginScript', plugins_url( '/javascripts/activeCampaignScripts.js', __FILE__ ) ));
		wp_enqueue_script( 'myPluginScript' );
		add_action( 'wp_enqueue_scripts', 'myPluginScript', 99 );
		plugin_dir_path( 'html/activeCampaign.html' );
		return '<section max-width="' . $a['width'] . '" height="' . $a['height'] . '"> <?php   ></section>';
		}
}


if ( class_exists( 'Accalculator' ) ) {
	$accalculator = new Accalcutor();
	$accalculator->accalculator_shortcode();
}

//activation
register_activation_hook( __FILE__, array( $accalculator, 'activate' ) );

//deactivation
register_deactivation_hook( __FILE__, array( $accalculator, 'deactivate' ) );


