<?php  while ($row = $result->fetch()) {
  ?>
  <div class="container-pics">
    <div class="image">
      <img id="image<?= $index ?>" src="<?= $row['pic_path'] ?>" alt=""/>
    </div>
    <div class="buttons-row">
      <?php
      include 'templates/buttons-top.php';
      ?>
    </div>
    <!--      <div class="buttons-row">-->
    <!--        --><?php
    //        include 'templates/buttons-bottom.php';
    //        ?>
    <!--      </div>-->
  </div>
  <?php $index++;
} ?>
</div>
