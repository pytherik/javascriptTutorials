<?php

class Delivery extends ConnectDB2
{

  public function getAddressData(array $addressItems, bool $houseNum, int $numDatasets): array
  {
    try {
      $items = implode(',', $addressItems);
      $pdo = $this->connect();
      $result = $pdo->query("SELECT $items FROM strPlzBerlin ORDER BY RAND() LIMIT $numDatasets");
//      $result = $pdo->query("SELECT $items FROM strPlzBerlin
//             WHERE (plz BETWEEN 12200 AND 12300) OR (plz BETWEEN 14000 AND 14500) ORDER BY RAND() LIMIT $numDatasets");
      while ($row = $result->fetch()) {
        foreach($addressItems as $index => $item){
          $addresses[$index][] = ($item == 'strasse' && $houseNum) ? $row[$item].' '.rand(1,100) : $row[$item];
        }
      }
    } catch (PDOException $e) {
      echo $e->getMessage();
    }
    return $addresses;
  }

  public function getFirstnamesData(array $genders, int $numDatasets): array
  {
    $firstnames = [];
    try {
      $pdo = $this->connect();
      foreach ($genders as $gender) {
        $result = $pdo->query("SELECT name FROM $gender ORDER BY RAND() LIMIT $numDatasets");
        while ($row = $result->fetch()) {
          $firstnames[] = (strlen($row['name']) == 1) ? $row['name'].'.' : $row['name'];
        }
      }
    } catch (PDOException $e) {
      echo $e->getMessage();
    }
    shuffle($firstnames);
    return array_slice($firstnames, 0, $numDatasets);
  }

  public function getLastnamesData(int $numDatasets): array
  {
    $lastnames = [];
    try {
      $pdo = $this->connect();
      $result = $pdo->query("SELECT name FROM surnames ORDER BY RAND() LIMIT $numDatasets");
      while ($row = $result->fetch()) {
        $lastnames[] = $row['name'];
      }
    } catch (PDOException $e) {
      echo $e->getMessage();
    }
    return $lastnames;
  }

  public function getOthersData(array $others, int $numDatasets): array
  {
    $othersData = [];
    try {
      $pdo = $this->connect();
      foreach($others as $index => $other){
      $result = $pdo->query("SELECT name FROM $other ORDER BY RAND() LIMIT $numDatasets");
      while ($row = $result->fetch()) {
        $othersData[$index][] = $row['name'];
      }
      }
    } catch (PDOException $e) {
      echo $e->getMessage();
    }
    return $othersData;
  }

  public function createQueryTemplate(array $addressArray, string $style ,string $tablename = 'table'): string
  {
    $styles = [
      "sql" =>
        [
          "dec" => "INSERT INTO $tablename VALUES\n",
          "open" => "\t(NULL, ",
          "close" => "'),\n",
          "end" => "');"
        ],
      "php" =>
        [
          "dec" => '$'."$tablename = [\n",
          "open" => "\t[",
          "close" => "'],\n",
          "end" => "']\n];"
        ],
      "js" =>
        [
          "dec" => "const $tablename = [\n",
          "open" => "\t[",
          "close" => "'],\n",
          "end" => "']\n];"
        ]
    ];
    $inner = count($addressArray);
    $outer = count($addressArray[0]);
    $valNum = ($style != 'sql') ? $inner : $inner + 1;
    $html = $styles[$style]['dec'];
    for ($j = 0; $j < $outer; $j++) {
      $html .= ($valNum > 1) ? $styles[$style]['open'] : '';
      for ($i = 0; $i < $inner; $i++) {
        if ($valNum > 1){
          $endOfLine = ($i < $inner - 1) ? "', " : $styles[$style]['close'];
        } else {
          $endOfLine = "',\n";
        }
        if (($i == $inner - 1) && $j == ($outer - 1)) {
          $endOfLine = ($valNum > 1) ? $styles[$style]['end'] : "'\n];";
        }
        $html .= "'" . $addressArray[$i][$j] . $endOfLine;
      }
    }
    return $html;
  }
}