document.addEventListener('DOMContentLoaded', function() {
    // Get the paragraph element
    let paragraph = document.getElementById('paragraph');
  
    // Get the button element
    let changeStyleBtn = document.getElementById('changeStyleBtn');
  
    // Add click event listener to the button
    changeStyleBtn.addEventListener('click', function() {
      // Change font, font size, and color of the paragraph
      paragraph.style.fontFamily = 'Arial, sans-serif';
      paragraph.style.fontSize = '24px';
      paragraph.style.color = 'green';
    });
  });
  