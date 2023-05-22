<?php

if(isset($_POST['submit'])) {
  $file = $_FILES['file'];
  echo "<pre>";
  print_r($file);
  echo "</pre>";
  $fileName = $file['name'];
  $fileTmpName = $file['tmp_name'];
  $fileSize = $file['size'];
  $fileError = $file['error'];
  $fileType = $file['type'];

  $fileExt = explode('.', $fileName);
  $fileActualExt = strtolower(end($fileExt));

  $allow = ['jpg', 'jpeg', 'png', 'pdf'];

  if (in_array($fileActualExt, $allow)) {
    if($fileError === 0) {
      if($fileSize < 50000000) {
        $fileNameNew = uniqid('', true) . "." . $fileActualExt;
        $fileDestination = 'uploads/' . $fileNameNew;
        move_uploaded_file($fileTmpName, $fileDestination);
        header("Location:index.php?uploadsuccess");
      } else {
        echo 'your file is too big';
      }
    } else {
      echo 'there was an error uploading your file';
    }
  } else {
    echo 'you cannot upload files of this type';
  }
}