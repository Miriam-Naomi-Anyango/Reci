function fetchRecipe(){
    fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=9d5c683165e7475fb37936ac8d20fe12')
    .then(response => response.json())
    .then(recipe => {
        console.log(recipe)
    })
}
fetchRecipe()