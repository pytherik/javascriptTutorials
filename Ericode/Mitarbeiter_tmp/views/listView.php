
    <a href="index.php?action=create">
        <button class="btn">MA hinzufügen</button>
    </a>
    <div class="table">
        <div class="row header">
            <div class="cell">ID</div>
            <div class="cell">Vorname</div>
            <div class="cell">Nachname</div>
            <div class="cell">Abteilung ID</div>
            <div class="cell">Löschen</div>
            <div class="cell">Ändern</div>
        </div>
        <?php
        foreach ($emps as $emp) {
        ?>
        <div class="row">
            <div class="cell"><?php echo $emp->getId() ?></div>
            <div class="cell"><?php echo $emp->getVorname() ?></div>
            <div class="cell"><?php echo $emp->getNachname() ?></div>
            <div class="cell"><?php echo $emp->getAbteilungId() ?></div>
            <div class="cell">
                <a href="index.php?id=<?php echo $emp->getId()?>&action=delete">
<!--                    <img src="icons/delete.png" alt="delete" width="25">-->
                  <button class="delete">&#10006;</button>
                </a>
            </div>
            <div class="cell">
                <a href="index.php?id=<?php echo $emp->getId()?>&action=edit">

                  <button><img src="icons/edit.png" alt="edit" width="15"></button>
<!--                  <button>&#10000;</button>-->
                </a>
            </div>
        </div>
        <?php
        }
        ?>
</div>
</body>
</html>