
// array to contain meal options
const meals = ["Chinese", "Indian", "Pizza", "Italian", "Fish and Chips", "Burgers", "Chicken", "Mexican"];


// function to randomly choose an item form the array
function chooseMeal() {

    var newMealsList = document.getElementsByClassName('mealsArrayItem');
    var newMealsArray = newMealsList;
    var randomMeal = newMealsArray[Math.floor(Math.random()*newMealsArray.length)];

    document.getElementById("demo").innerHTML = randomMeal.textContent;
}




// function for the button to toggle display/hide of array items for user
function showMealList() {
    var x = document.getElementById("mealsList");
    var y = document.getElementById("toggle");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "Hide Options"
    } else {
      x.style.display = "none";
      y.innerHTML = "Edit Options"
    }
  }


// function to grab items from the array and display on screen
function getList() {
  var holder = document.getElementById("listOfMeals");
 

  for(var i=0; i < meals.length; i++)
    holder.innerHTML += "<li class='mealsArrayItem' id='arrayItem' >"+meals[i]+" "+"<input type='button' onclick='deleteItem()' id='delete-button' value='X' class='delete-button edit'>"+"</li>";

  }

getList();




// function add item to array

var inputElement = document.getElementById('addItem');
var errorElement = document.getElementById('error');
var wordsElement = document.getElementById('listOfMeals');

function addWord() {
  var word = inputElement.value;
  var wordsElement = document.getElementById('listOfMeals');
  var addNewItem = inputElement.value;  
  
  meals.push(word);
  wordsElement.innerHTML += "<li class='mealsArrayItem' id='arrayItem'>"+addNewItem+" "+"<input type='button' onclick='deleteItem()' id='delete-button'  value='X' class='delete-button edit' >" +"</li>";
  document.getElementById('addItem').value = "";
}




// function to delete items from list


function deleteItem() {

  var index = document.getElementsByClassName('mealsArrayItem');

  $('.delete-button').on('click', function(){
    $(this).parent().remove();
  });

}



