<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
      body {
          background: #444;
          color: #ddd;
          font-size: 1.4rem;
      }
  </style>
</head>
<body>
<?php

$addressData = explode("\n", file_get_contents('tableData/.addresses_berlin.txt', 'r'));
$prenameDataM = explode("\n", file_get_contents('tableData/male_firstnames.txt'));
$prenameDataW = explode("\n", file_get_contents('tableData/female_firstnames.txt'));
$surnameData = explode("\n", file_get_contents('tableData/surnames.txt'));
$prenameDataMW = [];

$max = 10;

// Build name, address, districts Arrays

$districts = [];
foreach ($addressData as $line => $data) {
  $addArray = explode(',', $data);
  if (count(explode('/',$addArray[2])) > 1 ){
    echo $line."<br/>";
  }
  $addressArray[] = [$address[0], $addres[1], $address[2]] = $addArray;
  if (!in_array($addArray[2], $districts) && $addArray[2] != '') {
    $districts[] = $addArray[2];
  }
}

$allData = [$prenameDataM, $prenameDataW, $surnameData, $addressArray];

sort($districts);

echo "INSERT INTO ort VALUES <br>";
foreach ($districts as $line => $district) {
  $endOfLine = ($line + 1 < count($districts)) ?  "')," :  "');";
  echo "(NULL, '$district$endOfLine<br/>";
}

echo "<br/><br>";

echo 'INSERT INTO kunde VALUES <br>';
for ($i = 0; $i < $max; $i++) {
  $prename = rand(0, 1);
  $address = $allData[3][rand(0, count($allData[3]))];
  foreach($districts as $line => $district) {
    if ($address[2] == $district) {
      $ortId = $line + 1;
      break;
    }
  }
  $endOfLine = ($i < $max - 1) ?  "),<br/>" :  ");<br/>";
  echo "(NULL, '" . $allData[$prename][rand(0, count($allData[$prename]))] . "', '" .
    $allData[2][rand(0, count($allData[2]))] . "', '" .
    $address[0] . "', '" . $address[1] . "', ".$ortId.  $endOfLine;

}

//echo "<br/><br>";
//echo '$array = [<br/>';
//for ($i = 0; $i < $max; $i++) {
//  $prename = rand(0, 1);
//  $address = $allData[3][rand(0, count($allData[3]))];
//  ($i < $max - 1) ? $lastChar = '"],<br/>' : $lastChar = '"]<br/>];';
//  echo '["' . $allData[$prename][rand(0, count($allData[$prename]))] . '", "' .
//    $allData[2][rand(0, count($allData[2]))] . '", "' .
//    $address[0] . '", "' . $address[1] . '", "' . $address[2] . $lastChar;
//}
?>
</body>
</html>
