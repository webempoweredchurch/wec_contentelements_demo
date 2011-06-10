<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

tx_weccontentelements_lib::addFluid($_EXTKEY, 'fluidDemo');
tx_weccontentelements_lib::addTyposcript($_EXTKEY, 'flexFormSectionDemo');
tx_weccontentelements_lib::addTyposcript($_EXTKEY, 'typoScriptDemo');

?>
