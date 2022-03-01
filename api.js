//meal db
/*----------- STEP3------------- */
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle;
}
/* --------------------STEP2------------- */
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    //show spinner
    toggleSpinner('block');
    toggleSearchResult('none');

    loadMeals(searchText);
    document.getElementById('search-field').value = '';
}

/* ----------------STEP 1---------------- */
const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
loadMeals('fish');

const displayMeals = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    meals?.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
           <h1>${meal.strMeal}</h1> 
           <button onclick="loadMealDetail('${meal.strMeal}')">Click Me</button>
        `;
        container.appendChild(div);
    })
    toggleSpinner('none');
    toggleSearchResult('block')
}
const loadMealDetail = mealName => {
    console.log(mealName)
}