<?php


echo "processing...";
if (isset($_GET['name'])) {
  echo "GET: your name is " . $_GET['name'];
}
if (isset($_POST['name'])) {
  echo "POST: your name is " . $_POST['name'];
  try {
    $dbh = new PDO("mysql:host=localhost;dbname=ajax_test", "erik", "321null");
    $name = $_POST['name'];
    $sql = "INSERT INTO users (name) VALUES(:name)";
    $stmt = $dbh->prepare($sql);
    $stmt->bindParam('name', $name);
    $stmt->execute();
    echo 'User added...';
  } catch (PDOException $e) {
    echo $e->getMessage();
  }
}
