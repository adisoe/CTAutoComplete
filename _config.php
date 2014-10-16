<?php
	
$dirname = dirname(__FILE__);
//$basename = basename(dirname(__FILE__));
$sub = str_replace(BASE_PATH, '', $dirname);
$sub = substr($sub, 1);
$sub = str_replace('\\', "/", $sub);
//echo $sub.' '.BASE_PATH;die();
define('AUTOCOMPLETEFIELD_DIR', $sub);