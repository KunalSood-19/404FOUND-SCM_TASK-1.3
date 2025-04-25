document.getElementById("productForm").addEventListener("submit", function (e) {
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

  const comparisonTable = document.getElementById("comparisonTable");

  comparisonTable.innerHTML = `
    <div class="product product-a">
      <h2>${productA.name}</h2>
      <img src="${productA.image}" alt="${productA.name}">
      <ul>
        <li><strong>Price:</strong> ₹${productA.price}</li>
        <li><strong>RAM:</strong> ${productA.ram}GB</li>
        <li><strong>Storage:</strong> ${productA.storage}GB</li>
        <li><strong>Camera:</strong> ${productA.camera}MP</li>
        <li><strong>Battery:</strong> ${productA.battery}mAh</li>
      </ul>
    </div>
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

  // Call the comparison highlight function after rendering
  highlightWinner();
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
