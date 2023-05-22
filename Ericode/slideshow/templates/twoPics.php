<div class="container-row">
  <div class="buttons-col">
    <?php
    include 'templates/buttons-top.php';
    ?>
  </div>
  <?php
  while ($row = $result->fetch()) {
    ?>
    <div class="image two-pics">
      <img id="image<?= $index ?>" src="<?= $row['pic_path'] ?>" alt=""/>
    </div>
    <?php $index++;
  } ?>
  <div class="buttons-col">
    <?php
    include 'templates/buttons-top.php';
    ?>
  </div>
</div>
