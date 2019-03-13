//Sökfunktionen anrops varje gång användaren skriver något i sökfältet
function search() {
  let input, filter, li, cocktailNames, i, cocktailNamesTxt;
  input = document.getElementById("nameSearch"); 
  filter = input.value.toUpperCase(); //läser in allt som står i sökfältet
  li = document.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) { //loopar igenom listan med drinkar
    cocktailNames = li[i].getElementsByTagName("p")[0]; //hämtar drinknamnen
    cocktailNamesTxt = cocktailNames.textContent || cocktailNames.innerText;
    if (cocktailNamesTxt.toUpperCase().indexOf(filter) > -1) { //indexOf returnerar -1 om sökkriteriet inte finns, 
      li[i].style.display = "block";                           //därför används detta för att testa match mot filtret
    } else {
      li[i].style.display = "none";
    }
  }
}


//Filterfunktion
function filterValue(element) {
  let checked = element.checked;
  let choice = element.value;
  let ingredientList = document.getElementById('resultList');
  let items = Array.from(ingredientList.children); 
  if (checked) {
    for (let i = 0; i < items.length; i++) {
      found = items[i].querySelector('[data="' + choice + '"]'); //letar igenom hela listan med sökresultat efter 
      if (found == null) {                                       //de element som innehåller data + användarens val.
        items[i].style.display = "none";
      }
    }
  }
  else {
    for (let i = 0; i < items.length; i++) {
      found = items[i].querySelector('[data="' + choice + '"]'); 
      if (found == null) {
        items[i].style.display = "block";  //gör tvärt om från if-satsen för att visa element när en checkbox bockas ur.
      }
    }
  }
}


//Funktionen visar divarna med ingredienser när användaren klickar på bild/namn
function showIngredients(num) {
  let ingredients = document.getElementsByClassName("ingredients")[num]; //num används för att visa rätt rätt div
  if (ingredients.style.display === "none") {
    ingredients.style.display = "block";
  } else {
    ingredients.style.display = "none";
  }
}