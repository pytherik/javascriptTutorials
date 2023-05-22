const imageContainers = document.querySelectorAll('.image-container');
let draggedImage = null;

// Event Listener für Drag-and-Drop
imageContainers.forEach(imageContainer => {
  const image = imageContainer.querySelector('.pic');

  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('drop', drop);

  // Zurücksetzen der Deckkraft nach dem Ziehen
  image.addEventListener('dragend', () => {
    image.style.opacity = '1';
  });
});

function dragStart(e) {
  draggedImage = e.target;
  e.dataTransfer.setData('text/plain', e.target.parentNode.id);
  // Verringern der Deckkraft des gezogenen Bildes
  e.target.style.opacity = '0.5';
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const droppedContainer = document.getElementById(data);

  if (droppedContainer && droppedContainer !== e.target.parentNode) {
    const container = e.target.parentNode;
    const droppedImage = droppedContainer.querySelector('.pic');
    const currentImage = container.querySelector('.pic');

    container.removeChild(currentImage);
    droppedContainer.removeChild(droppedImage);

    container.appendChild(droppedImage);
    droppedContainer.appendChild(currentImage);
  }

  draggedImage = null;
}
