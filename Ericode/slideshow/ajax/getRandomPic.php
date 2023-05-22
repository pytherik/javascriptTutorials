<?php
include ('../classes/Database.php');

$pdo = new Database();

$row = $pdo->getNumRandomPics(1);
$pic = $row->fetch();

echo json_encode($pic['pic_path']);