<?php

/**
 * @file
 * nexus menu admin page
 */
function nexus_menu_form($form, &$form_state){
	$form['nexus_menu_form'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Nexus test from admin'),
	    '#default_value' => variable_get('nexus_menu_form', 3),
	    '#size' => 2,
	    '#maxlength' => 2,
	    '#description' => t('Test.'),
	    '#required' => TRUE,
	);

	return system_settings_form($form);
}
