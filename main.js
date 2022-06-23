// function fetchRecipe(){
//     fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=9d5c683165e7475fb37936ac8d20fe12')
//     .then(response => response.json())
//     .then(recipe => {
//         console.log(recipe)
//     })
// }
// fetchRecipe()


// function fetchFood(){
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
//     .then(res => res.json())
//     .then(meals => {
//         console.log(meals)
//         document.getElementsByClassName('search-action').addEventListener('submit',function(){
//             const log = document.getElementById('log')
//             function logSubmit(){
//             log.textContent = meals
//         })
// }


// function fetchMeals(){
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
//     .then(response => response.json())
//     .then(meals => {
//         console.log(meals)
//         document.querySelector('.search-action').addEventListener('submit',function(){
//             document.querySelector('#log').innerText = meals.meals[0].strMeal
//         })
//     })
// }
// fetchMeals()