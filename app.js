// Import the cars object from object.js
import cars from "./object.js";

// Call the displayProducts function to display all products initially
displayProducts(cars);

function displayProducts(carsData) {
  let productsOnDom = document.getElementById("productsOnDom");
  let searchInput = document.querySelector("#searchInput");
  let searchButton = document
    .querySelector("#searchButton")
    .addEventListener("click", () => {
      displayFilteredProducts(carsData, searchInput.value);
    });

  if (searchInput.value === "") {
    // If the search input is empty, display all products
    for (var brand in cars) {
      for (var model in cars[brand]) {
        var currentModel = cars[brand][model];

        productsOnDom.innerHTML += `
          <div class="card my-2" style="width: 18rem;">
            <img src="${currentModel.img}" class="card-img-top news-img" alt="...">
            <div class="card-body">
              <h3 class="card-title">${currentModel.name}</h3>
              <p class="card-text">${currentModel.city}</p>
              <p class="card-text">${currentModel.brand}</p>
              <button type="button" class="btn btn-info my-1">${currentModel.price}</button>
              <button type="button" class="btn btn-warning my-1">rating : ${currentModel.rating}</button>
              <button type="button" class="btn btn-success" onclick="addToCart('${currentModel.name}', '${currentModel.price}')">
                <i class="fas fa-cart-plus"> </i> Add to Cart
              </button>
            </div>
          </div>
        `;
      }
    }
  } else {
    // If the search input is not empty, display filtered products
    displayFilteredProducts(carsData, searchInput.value);
  }
}

function displayFilteredProducts(carsData, searchTerm) {
  let productsOnDom = document.getElementById("productsOnDom");
  productsOnDom.innerHTML = ''; // Clear previous products

  for (var brand in carsData) {
    for (var model in carsData[brand]) {
      var currentModel = carsData[brand][model];

      // Check if the current model's name includes the search input (case-insensitive)
      if (currentModel.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        productsOnDom.innerHTML += `
          <div class="card my-2" style="width: 18rem;">
            <img src="${currentModel.img}" class="card-img-top news-img" alt="...">
            <div class="card-body">
              <h3 class="card-title">${currentModel.name}</h3>
              <p class="card-text">${currentModel.city}</p>
              <p class="card-text">${currentModel.brand}</p>
              <button type="button" class="btn btn-info my-1">${currentModel.price}</button>
              <button type="button" class="btn btn-warning my-1">rating : ${currentModel.rating}</button>
              <button type="button" class="btn btn-success" onclick="addToCart('${currentModel.name}', '${currentModel.price}')">
                <i class="fas fa-cart-plus"> </i> Add to Cart
              </button>
            </div>
          </div>
        `;
      }
    }
  }
}