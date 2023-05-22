  <a href="index.php">
    <button class="btn">Abbruch</button>
  </a>
  <form action="" method="post">
    <div class="table">
      <div class="row green">
        <!--        <div class="cell">ID</div>-->
        <div class="cell">Vorname</div>
        <div class="cell">Nachname</div>
        <div class="cell">Abteilung ID</div>
        <div class="cell">Speichern</div>
      </div>
      <div class="row">
        <!--        <div class="cell">-->
        <input type="hidden" name="id"
               value="<?php if (isset($employee)) echo $employee->getId() ?>">
        <!--        </div>-->
        <div class="cell">
          <input type="text" name="vorname"
                 value="<?php if (isset($employee)) echo $employee->getVorname() ?>"
                 size="18" autocomplete="off" autofocus required>
        </div>
        <div class="cell">
          <input type="text" name="nachname"
                 value="<?php if (isset($employee)) echo $employee->getNachname() ?>"
                 size="18" autocomplete="off" required>
        </div>
        <div class="cell">
          <input type="number" name="abteilungId"
                 value="<?php if (isset($employee)) echo $employee->getAbteilungId() ?>"
                 min="1" max="100" autocomplete="off" required>
        </div>
        <div class="cell">
          <input class="save" type="submit" name="save" value=&#10004;>
        </div>
      </div>
    </div>
    <div class="warning">
      <span class="message"></span>
    </div>
  </form>
</body>
</html>