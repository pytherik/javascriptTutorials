<?php


try {
  $dbh = new PDO("mysql:host=localhost;dbname=ajax_test", "erik", "321null");
  $sql = "SELECT * FROM users";
  $stmt = $dbh->query($sql);
  $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($users);
} catch (PDOException $e) {
  echo $e->getMessage();
}
