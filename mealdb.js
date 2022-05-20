const mealDB = () => {
  document.getElementById("food_button").addEventListener("click", async () => {
    let foodId = document.getElementById("food_id");
    let foodName = foodId.value;
    foodId.value = " ";

    let uri = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(uri)
      .then(res => res.json())
      .then(data => getFoods(data.meals));

    spinnerToggle("flex", "none");
  });
};

// spinner function

const spinnerToggle = (spinnerDisplay, maindivDisplay) => {
  document.getElementById("spinner").style.display = spinnerDisplay;
  document.getElementById("main_div").style.display = maindivDisplay;
};

const getFoods = foods => {
  let mainDiv = document.getElementById("main_div");
  mainDiv.textContent = " ";
  for (let food of foods) {
    let div = document.createElement("div");

    div.classList.add("col");

    div.innerHTML = `

    <div class="col">
        <div class="card">
          <img src="${food.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    
    `;
    spinnerToggle("none", "flex");
    mainDiv.appendChild(div);
  }
};

mealDB();
