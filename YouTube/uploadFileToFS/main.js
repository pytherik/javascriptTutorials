const inpFile = document.getElementById('inpFile');
const btnUpload = document.getElementById('btnUpload');

btnUpload.addEventListener('click', function() {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();

  for (const file of inpFile.files) {
    //info instead of using the input name attribute
    // the ajax way is use myFiles Array inside append method
    formData.append('myFiles[]', file);
  }
  xhr.open('POST', 'upload.php')
  xhr.send(formData);
})