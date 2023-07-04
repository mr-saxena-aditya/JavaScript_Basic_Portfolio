const circle = document.getElementById('circle');
const imageContainer = document.getElementById('image-container');

circle.addEventListener('click', toggleImage);

function toggleImage() {
  imageContainer.style.display = imageContainer.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('click', function(event) {
  if (!circle.contains(event.target) && !imageContainer.contains(event.target)) {
    imageContainer.style.display = 'none';
  }
});
