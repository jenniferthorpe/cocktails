function search() {
  let input, filter, ul, li, name, i, txtValue;
  input = document.getElementById("nameSearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("resultList");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    name = li[i].getElementsByTagName("p")[0];
    txtValue = name.textContent || name.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


function filterValue(element) {
  let checked = element.checked;
  let choice = element.value;
  let ingredientList = document.getElementById('resultList');
  let items = Array.from(ingredientList.children);
  if (checked) {
    for (let i = 0; i < items.length; i++) {
      found = items[i].querySelector('[data="' + choice + '"]');
      if (found == null) {
        items[i].style.display = "none";
      }
    }
  }
  else {
    for (let i = 0; i < items.length; i++) {
      found = items[i].querySelector('[data="' + choice + '"]');
      if (found == null) {
        items[i].style.display = "block";
      }
    }
  }
}



function showIngredients(num) {
  let ingredients = document.getElementsByClassName("ingredients")[num];
  if (ingredients.style.display === "none") {
    ingredients.style.display = "block";
  } else {
    ingredients.style.display = "none";
  }
}