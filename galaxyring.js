// JavaScript to toggle the features section visibility
document.getElementById("more-info-btn").addEventListener("click", function() {
    const featuresSection = document.getElementById("features");
    featuresSection.classList.toggle("hidden"); // Toggle visibility of the features section
  });

  // script.js

// Get the button and the features section
const moreInfoButton = document.getElementById('more-info-btn');
const featuresSection = document.getElementById('features');

// Add an event listener to the button
moreInfoButton.addEventListener('click', () => {
  // Toggle the hidden class to show or hide the features section
  featuresSection.classList.toggle('hidden');

// If the section is being revealed, scroll smoothly to it
if (!featuresSection.classList.contains('hidden')) {
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  }
});
// script.js

// Get the button and the features section
const moreInfoButton = document.getElementById('more-info-btn');
const featuresSection = document.getElementById('features');

// Add an event listener to the button
moreInfoButton.addEventListener('click', () => {
  // Toggle the hidden class to show or hide the features section
  featuresSection.classList.toggle('hidden');

 // Change the button text based on visibility of the features section
 if (featuresSection.classList.contains('hidden')) {
    moreInfoButton.textContent = 'See More Features';
  } else {
    moreInfoButton.textContent = 'See Less Features';
  }

  // If the section is being revealed, scroll smoothly to it
  if (!featuresSection.classList.contains('hidden')) {
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  }
});
#features {
    background-color: #fff;
    padding: 20px;
    margin-top: 30px;
    border-radius: 10px;
    opacity: 0; /* Initially hidden */
    transition: opacity 0.5s ease;
  }
  
  #features.visible {
    opacity: 1; /* Visible */
  }