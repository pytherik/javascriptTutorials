<?php
include 'config.php';
include 'classes/ConnectDB2.php';
include 'classes/CreateDB2.php';
include 'classes/Delivery.php';

//todo create method refreshDb
//(new CreateDB2())->createDBwithTables();

$numDatasets = $_POST['numDatasets'] ?? '';
$numDatasets = ($numDatasets == '') ? 10 : (int)$numDatasets;
$addressData = [];
$tablename = $_POST['tablename'] ?? '';
$tablename = ($tablename == '') ? 'table' : $tablename;
$style = $_POST['arrayStyle'] ?? '';

if (isset($_POST['addressArray']) && !in_array('null', $_POST['addressArray'])) {
  $houseNum = in_array('houseNum', $_POST['addressArray']);
  if ($houseNum) unset($_POST['addressArray'][array_search('houseNum', $_POST['addressArray'])]);
  $addressData = (new Delivery())->getAddressData($_POST['addressArray'], $houseNum, $numDatasets);
}

if (isset($_POST['others'])) {
  $others = $_POST['others'];
  if(!in_array('null', $others)){
    $othersData = (new Delivery())->getOthersData($others, $numDatasets);
    foreach ($othersData as $other){
    $addressData = array_merge([$other], $addressData);
    }
  }
}

if (isset($_POST['lastnames'])) {
  $lastnamesData = (new Delivery())->getLastnamesData($numDatasets);
  $addressData = array_merge([$lastnamesData], $addressData);
}

if (isset($_POST['firstnames'])) {
  $genders = explode(',', $_POST['firstnames']);
  if (!in_array('null', $genders)) {
    $firstnamesData = (new Delivery())->getFirstnamesData($genders, $numDatasets);
    $addressData = array_merge([$firstnamesData], $addressData);
  }
}


include './views/formView.php';

