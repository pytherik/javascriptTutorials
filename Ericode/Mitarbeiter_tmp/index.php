<?php
include('config.php');
include('classes/Employee2.php');

$admin = new Employee2();
$action = $_GET['action'] ?? 'list';
$view = 'listView';

// noch keine Daten verfügbar: nach editCreate weiterleiten
if (!file_exists(DATA_PATH)) {
  $action = 'create';
}

switch ($action) {
  case 'list':
    $admin = new Employee2();
    $emps = $admin->read();
    $activity = 'liste';
    $view = 'listView';
    break;
  case 'create':
    $edit = false; // 'false' = hinzufügen, 'true' = editieren
    $id = $admin->getActiveId();
    $placeholders = $admin->getPlaceholders(false);
    $activity = 'erstellen';
    $view = 'editCreateView';
    break;
  case 'edit':
    $edit = true;
    $activity = 'editieren';
    $placeholders = $admin->getPlaceholders();
    $view = 'editCreateView';
    break;
  case 'delete':
    $admin->delete($_GET['id']);
    header('Location:index.php?action=list');
    break;
}

include 'views/header.php';
include sprintf("views/%s.php", $view);

$warning = "";

if (isset($_POST['save']) && isset($_POST['vorname']) &&
  isset($_POST['nachname']) && isset($_POST['abteilung'])) {
  $vorname = ucfirst($_POST['vorname']);
  $nachname = ucfirst($_POST['nachname']);
  $abteilungId = $_POST['abteilung'];
  if ($admin->validateInput($vorname, $nachname, $id)) {
    $warning = "&nbsp;Diesen Mitarbeiter gibt es schon!&nbsp;";
  } else {
    // edit Flag, gesetzt, wenn id mitgesendet wird
    if ($edit === true) {
      $admin->update($_GET['id'], $vorname, $nachname, $abteilungId);
    } else {
      $admin->create($id, $vorname, $nachname, $abteilungId, true);
    }
    header('Location:index.php');
  }
}