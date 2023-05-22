<?php
include 'classes/ConnectDB.php';
include 'classes/Mitarbeiter.php';

$admin = new Mitarbeiter();

if(!($admin->tableExists('employees'))) {
  $admin->createTable('employees');
  $action = 'create';
} else {
  $emps = $admin->getAllEmployees();
  if($emps == []){
    $action = 'create';
  }
}
$warning = "";
$action = $_GET['action'] ?? 'list';
$view = 'listView';


switch ($action) {
  case 'list':
    $emps = $admin->getAllEmployees();
    $activity = 'liste';
    $view = 'listView';
    break;
  case 'create':
    $edit = false; // 'false' = hinzufügen, 'true' = editieren
    $activity = 'erstellen';
    $view = 'editCreateView';
    break;
  case 'edit':
    $edit = true;
    $activity = 'editieren';
    $employee = $admin->getEmployee($_GET['id']);
    $view = 'editCreateView';
    break;
  case 'delete':
    $admin->delete($_GET['id']);
    header('Location:index.php?action=list');
    break;
}

include 'views/header.php';
include sprintf("views/%s.php", $view);


if (isset($_POST['save']) && isset($_POST['vorname']) &&
  isset($_POST['nachname']) && isset($_POST['abteilungId'])) {
  $vorname = ucfirst($_POST['vorname']);
  $nachname = ucfirst($_POST['nachname']);
  $abteilungId = $_POST['abteilungId'];
  if ($admin->validateInput($vorname, $nachname)) {
    $warning = "&nbsp;Diesen Mitarbeiter gibt es schon!&nbsp;";
  } else {
    // edit Flag, gesetzt, wenn id mitgesendet wird
    if ($edit === true) {
      $admin->update($_GET['id'], $vorname, $nachname, $abteilungId);
    } else {
      $admin->create($vorname, $nachname, $abteilungId);
    }
    header('Location:index.php?action=list');
  }
}
