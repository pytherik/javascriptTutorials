<?php

class CreateDB2 extends ConnectDB2
{
  private function getDataPath(): array
  {
    $dataPaths = [];
    $path1 = scandir(TABLE_DATA_PATH);
    $path2 = scandir(ADDRESS_DATA_PATH);
    foreach ($path1 as $path) {
      if (!str_starts_with($path, '.')) {
        $dataPaths[] = TABLE_DATA_PATH . '/' . $path;
      }
    }
    foreach ($path2 as $path) {
      if (!str_starts_with($path, '.')) {
        $dataPaths[] = ADDRESS_DATA_PATH . '/' . $path;
      }
    }

    return $dataPaths;
  }

  public function createAddressesTable(object $pdo, string $path, array $contents): void
  {
    $array = explode('/', $path);
    $tablename = substr(array_pop($array), 0, -4);
    $pdo->query("CREATE TABLE $tablename (id INT AUTO_INCREMENT PRIMARY KEY, strasse VARCHAR(100), plz INT, ort VARCHAR(50))");
    $stmt = $pdo->prepare("INSERT INTO $tablename (strasse, plz, ort) VALUES(:strasse, :plz, :ort)");
    $stmt->bindParam(':strasse', $strasse);
    $stmt->bindParam(':plz', $plz);
    $stmt->bindParam(':ort', $ort);
    foreach ($contents as $cont) {
      $content = explode(',', $cont);
      $strasse = $content[0];
      $plz = $content[2];
      $ort = $content[1];
      $stmt->execute();
    }
  }


  public function createDBwithTables(): void
  {
    $paths = $this->getDataPath();
    $pdo = $this->connect();
    $pdo->query("DROP DATABASE IF EXISTS arrayGenerator");
    $pdo->query("CREATE DATABASE arrayGenerator");
    $pdo->query("USE arrayGenerator");
    foreach ($paths as $path) {
      $contents = explode("\n", file_get_contents($path));
      if (count(explode(',', $contents[0])) > 1) {
        $this->createAddressesTable($pdo, $path, $contents);
        } else {
        $array = explode('/', $path);
        $tablename = substr(array_pop($array), 0, -4);
        $pdo->query("CREATE TABLE $tablename (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50))");
        $stmt = $pdo->prepare("INSERT INTO $tablename (name) VALUES(:name)");
        $stmt->bindParam(':name', $content);
        foreach ($contents as $content) {
          $stmt->execute();
        }
      }
    }
  }
}