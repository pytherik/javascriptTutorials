<?php
session_start();
if (!isset($_SESSION['numPics'])) {
  $_SESSION['numPics'] = 3;
} else if (isset($_POST['numPics'])) {
  $_SESSION['numPics'] = $_POST['numPics'];
}
?>
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>slideshow</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/x-icon" href="public/icons/favicon.ico">
  <link href="public/css/style.css" rel="stylesheet" type="text/css">
  <style>
      .container-pics,
      .container-row {
          width: 100%;
      }

      img {
          width: 100%;
      }
  </style>
</head>
<body>
<form class="buttons-row" method="post">
  <?php include 'templates/buttons-bottom.php' ?>
</form>
<div class="container">

