const inputBtn = document.getElementById("inputBtn");
inputBtn.addEventListener("click", () => {
const inputName = document.getElementById("myInput").value;
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
const displayMeals = meals => {
    const itemArea = document.getElementById("meals-area");
    itemArea.innerHTML = '';
    meals.forEach(meal => {
    const itemBox = document.createElement("div");
    itemBox.className = "meal-box";
    const mealInfo = `;
    <div onclick="displayMealDetail('${meal.idMeal}')">
    <img src="${meal.strMealThumb}">
    <h1>${meal.strMeal}</h1>
    </div>
    `;
    itemBox.innerHTML = mealInfo;
    itemArea.appendChild(itemBox);
    });
}
})
const displayMealDetail = id => {
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]))
}
const renderMealInfo = meal => {
const mealDetail = document.getElementById("meal-detail");
    mealDetail.innerHTML = `<img src="${meal.strMealThumb}">
<h1>${meal.strMeal}</h1>
<h3>Ingredients</h3>
<ul type="none">
<li>${meal.strIngredient1}</li>
<li>${meal.strIngredient2}</li>
<li>${meal.strIngredient3}</li>
<li>${meal.strIngredient4}</li>
<li>${meal.strIngredient5}</li>
<li>${meal.strIngredient6}</li>
</ul>
`;
}