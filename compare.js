document.getElementById("productForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const getValue = id => document.getElementById(id).value;
  
    const productA = {
        name: getValue("nameA"),
        image: getValue("imageA"),
        price: +getValue("priceA"),
        ram: +getValue("ramA"),
        storage: +getValue("storageA"),
        camera: +getValue("cameraA"),
        battery: +getValue("batteryA"),
      };
      const productB = {
        name: getValue("nameB"),
        image: getValue("imageB"),
        price: +getValue("priceB"),
        ram: +getValue("ramB"),
        storage: +getValue("storageB"),
        camera: +getValue("cameraB"),
        battery: +getValue("batteryB"),
      };
      feat: render productA details in comparison table
      <div class="product product-b">
        <h2>${productB.name}</h2>
        <img src="${productB.image}" alt="${productB.name}">
        <ul>
          <li><strong>Price:</strong> ₹${productB.price}</li>
          <li><strong>RAM:</strong> ${productB.ram}GB</li>
          <li><strong>Storage:</strong> ${productB.storage}GB</li>
          <li><strong>Camera:</strong> ${productB.camera}MP</li>
          <li><strong>Battery:</strong> ${productB.battery}mAh</li>
        </ul>
      </div>
    `;
  });
  function highlightWinner() {
    const productA = document.querySelector('.product-a ul').children;
    const productB = document.querySelector('.product-b ul').children;
  
    // Reset all styles first
    for (let i = 0; i < productA.length; i++) {
      productA[i].style.backgroundColor = 'rgba(0,0,0,0.3)';
      productB[i].style.backgroundColor = 'rgba(0,0,0,0.3)';
    }
  
    // Compare values and highlight the better one
    for (let i = 0; i < productA.length; i++) {
      const valA = parseInt(productA[i].textContent.replace(/[^0-9]/g, ''));
      const valB = parseInt(productB[i].textContent.replace(/[^0-9]/g, ''));
  
      if (!isNaN(valA) && !isNaN(valB)) {
        if (valA > valB) {
          productA[i].style.backgroundColor = '#14ff85'; // green for better
        } else if (valB > valA) {
          productB[i].style.backgroundColor = '#14ff85';
        } else {
            // Equal values – highlight both
            productA[i].style.backgroundColor = '#e4d00a'; // yellow
            productB[i].style.backgroundColor = '#e4d00a';
          }
        }
      }
    }