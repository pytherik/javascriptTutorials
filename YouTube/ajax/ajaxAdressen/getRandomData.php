<?php
include 'config.php';
include 'ConnDB.php';

try {
  $dbh = ConnDb::connect();
  $sql = "SELECT strasse, ort FROM strPlzBerlin ORDER BY RAND() LIMIT 10";
  $result = $dbh->query($sql);
  $addressArr =[];
  while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $addressArr[] = $row;
  }
  echo json_encode($addressArr);
} catch (PDOException $e) {
  echo $e->getMessage();
}