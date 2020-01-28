const meals = ["chinese", "indian", "pizza", "italian", "fish and chips", "burgers", "chicken", "mexican"];

function chooseMeal() {
    var randomMeal = meals[Math.floor(Math.random()*meals.length)];
    document.getElementById("demo").innerHTML = randomMeal;

}

