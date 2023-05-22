<?php

class Mitarbeiter extends ConnectDB
{
  private int $id;
  private string $vorname;
  private string $nachname;
  private int $abteilungId;

  /**
   * @param int|null $id
   * @param string|null $vorname
   * @param string|null $nachname
   * @param int|null $abteilungId
   */
  public function __construct(?int    $id = null, ?string $vorname = null,
                              ?string $nachname = null, ?int $abteilungId = null)
  {
    if (isset($id) && isset($vorname) && isset($nachname) && isset($abteilungId)) {
      $this->id = $id;
      $this->vorname = $vorname;
      $this->nachname = $nachname;
      $this->abteilungId = $abteilungId;
    }
  }

  public function tableExists($table): bool
  {
    try {
      $pdo = $this->connect();
      $pdo->query("SELECT 1 FROM $table LIMIT 1");
    } catch (PDOException $e) {
      return false;
    }
    return true;
  }

  public function createTable(string $table): void
  {
    $pdo = $this->connect();
    $pdo->query("CREATE TABLE IF NOT EXISTS $table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vorname VARCHAR(50),
    nachname VARCHAR(50),
    abteilungId INT)");
  }

  public function getAllEmployees(): array
  {
    $empsArr = [];
    $pdo = $this->connect();
    try {
      $result = $pdo->query("SELECT * FROM employees");
      while ($row = $result->fetch()) {
        $empsArr[] = new Mitarbeiter($row[0], $row[1], $row[2], $row[3]);
      }
    } catch (PDOException $e) {
      return $empsArr;
    }
    return $empsArr;
  }

  public function getEmployee($id): object
  {
    $pdo = $this->connect();
    try {
      $result = $pdo->query("SELECT * FROM employees WHERE id='$id'");
      $emp = $result->fetch();
    } catch (PDOException $e) {
      echo "Nope: " . $e->getMessage();
    }
    return new Mitarbeiter($emp[0], $emp[1], $emp[2], $emp[3]);
  }

  public function delete(int $id): void
  {
    $pdo = $this->connect();
    try {
      $pdo->query("DELETE FROM employees WHERE id='$id'");
    } catch (PDOException $e) {
      echo "Da ist was faul: " . $e->getMessage();
    }
  }

  public function validateInput(string $vorname, string $nachname): bool
  {
    $pdo = $this->connect();
    try {
      $result = $pdo->query("SELECT * FROM employees WHERE vorname='$vorname'
                          AND nachname='$nachname'");
      if($row = $result->fetch()){
        $exists = true;
      } else {
        $exists = false;
      }
    } catch (PDOException $e) {
      echo "Query ist fehlerhaft: " . $e->getMessage();
    }
    return $exists;
  }

  public function update($id, $vorname, $nachname, $abteilungId): void
  {
    $pdo = $this->connect();
    try {
      $pdo->query("UPDATE employees SET vorname='$vorname',
                     nachname='$nachname', abteilungId='$abteilungId' WHERE id='$id'");
    } catch (PDOException $e) {
      echo "Scheiss was: " . $e->getMessage();
    }
  }

  public function create($vorname, $nachname, $abteilungId): void
  {
    $pdo = $this->connect();
    try {
      $pdo->query("INSERT INTO employees VALUES(NULL, '$vorname',
                             '$nachname', '$abteilungId')");
    } catch (PDOException $e) {
      echo "Scheiss was: " . $e->getMessage();
    }
  }

  /**
   * @return int
   */
  public function getId(): int
  {
    return $this->id;
  }

  /**
   * @return string
   */
  public function getVorname(): string
  {
    return $this->vorname;
  }

  /**
   * @return string
   */
  public function getNachname(): string
  {
    return $this->nachname;
  }

  /**
   * @return int
   */
  public function getAbteilungId(): int
  {
    return $this->abteilungId;
  }

}