<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

tx_weccontentelements_lib::addContentElement($_EXTKEY, 'typoScriptDemo');
tx_weccontentelements_lib::addContentElement($_EXTKEY, 'flexFormSectionDemo');
tx_weccontentelements_lib::addContentElement($_EXTKEY, 'fluidDemo');

?>
