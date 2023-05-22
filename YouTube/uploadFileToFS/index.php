<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <script src="main.js" defer></script>
  <title>Upload File to FS</title>
</head>
<body>
<form action="upload.php" method="POST" enctype="multipart/form-data">
  <input type="file" name="file">
  <button type="submit" name="submit">upload</button>
</form>
</body>
</html>