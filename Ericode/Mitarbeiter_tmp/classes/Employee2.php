<?php

class Employee2
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

  /**
   * @return int
   */
  public function getActiveId(): int
  {
    if (file_exists(PK_PATH)) {
      $id = trim(file_get_contents(PK_PATH));
      $id++;
    } else {
      $id = 0;
    }
    return $id;
  }

  /**
   * @param bool $toEdit
   * @return array
   */
  public function getPlaceholders(bool $toEdit=true): array
  {
    $placeholders = [];
    if ($toEdit) {
      $emps = $this->read();
      // Daten zum Vorausfüllen des Formulars
      foreach ($emps as $emp) {
        if ($emp->getId() == $_GET['id']) {
          $placeholders['id'] = $emp->getId();
          $placeholders['vorname'] = $emp->getVorname();
          $placeholders['nachname'] = $emp->getNachname();
          $placeholders['abteilung'] = $emp->getAbteilungId();
          break;
        }
      }
    } else {
      $placeholders['id'] = "";
      $placeholders['vorname'] = "";
      $placeholders['nachname'] = "";
      $placeholders['abteilung'] = "";
    }
    return $placeholders;
  }

  /**
   * @return array
   */
  public function read(): array
  {
    $employees = [];
    $csvEmployees = explode("\n", file_get_contents(DATA_PATH));
    foreach ($csvEmployees as $line) {
      $data = explode(",", $line);
      $employees[] = new Employee2($data[0], $data[1], $data[2], $data[3]);
    }
    return $employees;
  }

  /**
   * @param $vorname
   * @param $nachname
   * @param $id
   * @return bool
   */
  public function validateInput($vorname, $nachname, $id): bool
  {
    if (file_exists(DATA_PATH)) {
      $emps = $this->read();
      foreach ($emps as $emp) {
        if ($emp->vorname == $vorname &&
          $emp->nachname == $nachname &&
          $emp->id != $id) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * @param int $id
   * @param string $vorname
   * @param string $nachname
   * @param int $abteilungId
   * @param bool $addNew
   * @return void
   */
  public function create(int $id, string $vorname, string $nachname,
                         int $abteilungId, bool $addNew = false): void
  {
    if (file_exists(DATA_PATH)) {
      $separator = "\n";
    } else {
      $separator = "";
    }
    $content = "$id,$vorname,$nachname,$abteilungId";
    file_put_contents(DATA_PATH, $separator . $content, FILE_APPEND);

    // update der laufenden id nur wenn neu angelegt wird
    // - nicht bei ändern und löschen!
    if ($addNew) {
      file_put_contents(PK_PATH, $id);
    }
  }


  /**
   * @param $id
   * @param $vorname
   * @param $nachname
   * @param $abteilungId
   * @return void
   */
  public function update($id, $vorname, $nachname, $abteilungId): void
  {
    $emps = $this->read();
    unlink(DATA_PATH);
    foreach ($emps as $emp) {
      if ($emp->id == $id) {
        $emp->vorname = $vorname;
        $emp->nachname = $nachname;
        $emp->abteilungId = $abteilungId;
        break;
      }
    }
    foreach ($emps as $emp) {
      $this->create($emp->id, $emp->vorname, $emp->nachname, $emp->abteilungId);
    }
  }

  /**
   * @param $id
   * @return void
   */
  public function delete($id): void
  {
    $emps = $this->read();
    unlink(DATA_PATH);
    foreach ($emps as $emp) {
      if (!($emp->id == $id)) {
        $this->create($emp->id, $emp->vorname, $emp->nachname, $emp->abteilungId);
      }
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