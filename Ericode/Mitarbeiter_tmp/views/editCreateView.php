  <a href="index.php?action=list">
    <button class="btn">Abbruch</button>
  </a>
  <form action="" method="post">
    <div class="table">
      <div class="row green">
        <div class="cell">ID</div>
        <div class="cell">Vorname</div>
        <div class="cell">Nachname</div>
        <div class="cell">Abteilung ID</div>
        <div class="cell">Speichern</div>
      </div>
      <div class="row">
<!--        TODO placeholder durch objekt ersetzen und abfrage isset-->
        <div class="cell"><?= $placeholders['id'] ?></div>
        <div class="cell">
          <input type="text" name="vorname" value="<?= $placeholders['vorname'] ?>"
                 size="18" autocomplete="off" autofocus required>
        </div>
        <div class="cell">
          <input type="text" name="nachname" value="<?= $placeholders['nachname'] ?>"
                 size="18" autocomplete="off" required>
        </div>
        <div class="cell">
          <input type="number" name="abteilung" value="<?= $placeholders['abteilung'] ?>"
                 min="1" max="100" autocomplete="off" required>
        </div>
        <div class="cell">
          <input class="save" type="submit" name="save" value=&#10004;>
        </div>
      </div>
    </div>
    <div class="warning">
      <span class="message"><?= $warning ?></span>
    </div>
  </form>
</body>
</html>
