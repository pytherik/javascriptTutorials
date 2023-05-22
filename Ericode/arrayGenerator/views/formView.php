<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="public/css/style.css">
  <link href="public/prismTomorrowNight/prism.css" rel="stylesheet"/>
  <title>arrayGenerator</title>
</head>
<body>
<div class="container">
  <div class="heading"><h1>Array Generator</h1></div>
    <form method="POST">
  <div class="form-container">
      <div class="input-container select-container">
        <label for="arrayStyle">Array-Stil</label><br>
        <select name="arrayStyle" id="arrayStyle">
          <option value="sql">SQL</option>
          <option value="php" selected>php</option>
          <option value="js">javaScript</option>
        </select><br>
        <label for="tablename">Name</label><br>
        <input type="text" name="tablename" id="tablename" size="10"
               placeholder="table" autocomplete="off"><br>
        <label for="numDatasets">Anzahl</label><br>
        <input type="number" name="numDatasets" id="numDatasets"
               min="1" max="100" placeholder="10"><br>
      </div>
      <div class="input-container select-container">
        <label for="firstnames">Vornamen</label><br>
        <select name="firstnames" id="firstnames">
          <option name="firstnames" value="female_firstnames">weiblich</option>
          <option value="male_firstnames">männlich</option>
          <option value="female_firstnames, male_firstnames" selected>m + w</option>
          <option value="null">keine</option>
        </select><br>
<!--      </div>-->
<!--      <div class="input-container checkbox-container">-->
        <label for="surnames">Nachnamen</label><br>
        <input type="checkbox" name="lastnames" id="surnames" value="lastnames" checked>
      </div>
      <div class="input-container select-container">
        <label for="addressArray">Adresse</label><br>
        <select name="addressArray[]" id="addressArray" multiple>
          <option value="strasse" selected>Strasse</option>
          <option value="houseNum" selected>Hausnr.</option>
          <option value="ort" selected>Ort</option>
          <option value="plz" selected>Plz</option>
          <option value="null">keine</option>
        </select><br>
      </div>
      <div class="input-container select-container">
        <label for="others">Andere</label><br>
        <select name="others[]" id="others" multiple>
          <?php
          $paths = scandir(TABLE_DATA_PATH);
          foreach ($paths as $path) {
            if (!str_starts_with($path, '.')) {
              $path = substr($path, 0, -4);
              ?>
            <option value="<?= $path ?>"><?= ucfirst($path) ?></option>
           <?php
            }
          }
           ?>
          <option value="null" selected>keine</option>
        </select><br>
      </div>
  </div>
      <div class="input-container">
        <button class="start" type="submit">los geht's</button>
      </div>
    </form>
  <div class="code-container">
    <div class="code">
      <?php
      if (isset($_POST['addressArray']) || isset($_POST['firstnames']) || isset($_POST['lastnames'])) {
        echo "<pre><code class='language-$style'>" . (new Delivery())->createQueryTemplate($addressData, $style, $tablename) . "</code></pre>";
      }
      ?>
    </div>
  </div>
</div>
<script src="public/prismTomorrowNight/prism.js"></script>
<script src="https://code.jquery.com/jquery-3.6.4.js"
        integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
        crossorigin="anonymous"></script>
<script src="public/js/app.js"></script>
</body>
</html>
<?php
