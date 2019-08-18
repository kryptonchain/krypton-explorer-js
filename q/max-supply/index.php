<?php
require '../util.php';
$config = (require '../../config.php');
$info = fetch_getinfo($config['api']);
$maxSupply = 88000000000000;
$fee = number_format($maxSupply / $config['coinUnits'], $config['coinDecimals'], ".", "");
print_r($fee);
