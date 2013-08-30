<?php

/**
 * @file
 * nexus menu admin page
 */
function nexus_menu_form($form, &$form_state){

	$form['nexus_menu_menuselector'] = array(
		'#type' => 'textfield',
	    '#title' => t('JQuery selector for Menu element'),
	    '#description' => t('The Selector for the menu element.'),
	    '#size' => 40,
	    '#maxlength' => 128,
	    '#required' => TRUE,
	    '#default_value' => variable_get('nexus_menu_menuselector', MENU_DEMO_SELECTOR),
	);

	$form['nexus_menu_showEffect'] = array(
	//$form['nexus_menu_behavior']['nexus_menu_showEffect'] = array(
	    '#type' => 'radios',
	    '#title' => t('Menu Effect'),
	    '#default_value' => variable_get('nexus_menu_showEffect', MENU_DEMO_SHOWEFFECT),
	    '#options' => nexus_menu_get_effects(),
	    '#description' => t('Choose an Effect to use for the mobile menu.'),
	  );

	

	return system_settings_form($form);
}
