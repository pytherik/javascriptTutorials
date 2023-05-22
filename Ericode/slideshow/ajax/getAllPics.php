<?php
include ('../classes/Database.php');

$pdo = new Database();
$picData = [];

$row = $pdo->getNumRandomPics(0);

while($pic = $row->fetch()) {
  $picData[] = $pic['pic_path'];
}

echo json_encode($picData);