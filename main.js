
// array to contain meal options
const meals = ["chinese", "indian", "pizza", "italian", "fish and chips", "burgers", "chicken", "mexican"];

// function to randomly choose an item form the array
function chooseMeal() {

    var newMealsList = document.getElementsByClassName('mealsArrayItem');
    var newMealsArray = newMealsList;
    var randomMeal = newMealsArray[Math.floor(Math.random()*newMealsArray.length)];

    document.getElementById("demo").innerHTML = randomMeal.textContent;
}



function createNewCheckboxt(name, id){
    var checkbox = document.createElement('input'); 
    checkbox.type= 'checkbox';
    checkbox.name = name;
    checkbox.id = id;
    return checkbox;
}


// function for the button to toggle display/hide of array items for user
function showMealList() {
    var x = document.getElementById("mealsList");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


// function to grab items from the array and display on screen
function getList() {
  var holder = document.getElementById("listOfMeals");
  var checkbox = document.createElement('input');

  checkbox.type = "checkbox"; 
  checkbox.name = "name"; 
  checkbox.value = "value"; 
  checkbox.id = "id"; 

  for(var i=0; i < meals.length; i++)
    holder.innerHTML += "<li class='mealsArrayItem' id='arrayItem' >"+meals[i]+" "+"<input type='button' onclick='deleteItem()' id='delete-button' value='X' class='delete-button edit' style='display: none'>"+"</li>";

 

  }

getList();

// function to add checkboxes to array items

function addCheckbox() {
  var x = document.getElementsByClassName("edit");

  for (var i=0; i<x.length; i++) {
    if (x[i].style.display === "inline") {
    x[i].style.display = "none";
  } else {
    x[i].style.display = "inline";
  }

  }
  
}

// function add item to array



var inputElement = document.getElementById('addItem');
var errorElement = document.getElementById('error');
var wordsElement = document.getElementById('listOfMeals');

function addWord() {
  errorElement.innerHTML = "";
  var word = inputElement.value;
  var wordsElement = document.getElementById('listOfMeals');
  
  // li.appendChild(button);
  // li.setAttribute("id","element4");
  // ul.appendChild(li);
  // var lastArrayItem = meals[meals.length - 1];
  // if (word.trim() === "")
  //   errorElement.innerHTML = "Empty input";
  // else
    meals.push(word);
  var addNewItem = inputElement.value;  
  wordsElement.innerHTML += "<li class='mealsArrayItem' id='arrayItem'>"+addNewItem+" "+"<input type='button' onclick='deleteItem()' id='delete-button'  value='X' class='delete-button edit' style='display: inline'>" +"</li>";
}





// function to delete items from list


function deleteItem() {

  var index = document.getElementsByClassName('mealsArrayItem');

  $('.delete-button').on('click', function(){
    $(this).parent().remove();
  });

}



