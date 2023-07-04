// Execute when DOM content is loaded
window.addEventListener('DOMContentLoaded', (event) => {
  // Duration of the animation in milliseconds
  const animationDuration = 2000;

  // Calculate the progress increment interval
  const progressInterval = 100 / (animationDuration / 10);

  // Get the loading text and progress bar elements
  const loadingText = document.getElementById('loading-text');
  const progressBar = document.getElementById('progress-bar');

  // Start the animation
  animate();

  function animate() {
    let progress = 0;
    let intervalId = setInterval(frame, 10);

    function frame() {
      if (progress >= 100) {
        clearInterval(intervalId);
        // Animation complete, perform additional actions if needed
        loadingText.textContent = 'Loading Complete!';
      } else {
        progress += progressInterval;
        loadingText.textContent = `Loading ${Math.floor(progress)}%`;
        progressBar.style.width = `${progress}%`;
      }
    }
  }
});
