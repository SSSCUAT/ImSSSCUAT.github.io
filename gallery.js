// Gallery Carousel Functionality (for each gallery item)
document.querySelectorAll('.gallery-carousel-container').forEach(function(container) {
  const images = container.querySelectorAll('.gallery-carousel-image');
  const leftArrow = container.querySelector('.gallery-left-arrow');
  const rightArrow = container.querySelector('.gallery-right-arrow');
  let index = 0;
  function showImage(idx) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === idx);
    });
  }
  // Ensure SVG arrows match index.html
  if (leftArrow && leftArrow.querySelector('svg')) {
    leftArrow.querySelector('svg').innerHTML = '<circle cx="12" cy="12" r="12" fill="none" /><polyline points="15 6 9 12 15 18" stroke="#232526" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />';
  }
  if (rightArrow && rightArrow.querySelector('svg')) {
    rightArrow.querySelector('svg').innerHTML = '<circle cx="12" cy="12" r="12" fill="none" /><polyline points="9 6 15 12 9 18" stroke="#232526" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />';
  }
  leftArrow.addEventListener('click', function() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });
  rightArrow.addEventListener('click', function() {
    index = (index + 1) % images.length;
    showImage(index);
  });
});
