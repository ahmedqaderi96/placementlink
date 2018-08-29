<?php
//require_once ('../Models/UserDataSet.php');
include ('../requiredFiles.php');

$userDataSet = new UserDataSet();
$userDataSet->getPhoto($_REQUEST['id']);

