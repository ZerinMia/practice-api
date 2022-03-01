const loadSingelUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingle(data.results[0]))
}
loadSingelUser()

const displaySingle = user => {
    console.log(user)
}



//mealdb

const toggelSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggelSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle;
}
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;

    //show spinner
    toggelSpinner('block');
    toggelSearchResult('none')

    loadMeals(searchText);
    document.getElementById('search-field').value = '';

}

const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

loadMeals('fish')

const displayMeals = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    meals?.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.innerHTML = `
           <h1>${meal.strMeal}</h1> 
           <button onclick="loadMealDetail('${meal.strMeal}')">Click Me</button>
        `;
        container.appendChild(div);
    })
    toggelSpinner('none');
    toggelSearchResult('block')
}
const loadMealDetail = mealName => {
    console.log(mealName);
}