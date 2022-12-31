// sukurti forma su input ir button

//submit -> kreipiamasi i https://www.themealdb.com/api.php su uzklausa, kuri grąžintų visus patiekalus, kurie turi nurodytą ingredientą kaip pagrindinį ingredientą. (PAGAL IVESTA RAKTAZODI)

//naudojantis svetaines data sukurti korteles su tokia info: paveiksliukas, pavadinimas. Paspaudus ant korteles, pateikiama platesne info: paveiksliukas, pavadinimas, ingridientai, receptas, video


//Meals API (https://www.themealdb.com/api.php)



let form = document.querySelector("form");
console.log(form)

let input = form.querySelector('#input');
console.log(input)

let output = document.querySelector("#output");
console.log(output)

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  output.innerHTML = ''
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input.value}`) //ieskom meals pagal ivesta igredienta (varotojo ivesta raktazodi)
  .then(res => res.json())                                                
  .then(data => {     
    console.log(data.meals)  //aptinkami receptai             
    data.meals.forEach(meal =>{ //sukam cikla per juos
    output.innerHTML += `
    <div class="meal" id="${meal.idMeal}"> 
    <h1>${meal.strMeal}</h1> 
    <img src="${meal.strMealThumb}" alt="meal thumb">
    </div>
    `              
    });
//----------------------------------2 veiksmas--------------------------------------------
  let mealDivs = output.getElementsByClassName('meal'); //selektinam visus rastus meals
  console.log(mealDivs) //html collection

  let mealArray = Array.from(mealDivs) //html collection verciam i array
  console.log(mealArray)

  mealArray.forEach(mealDiv =>{ // iteruojam
  console.log(mealDiv) //kiekvieno meal id

    mealDiv.addEventListener('click', (e) =>{
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDiv.id}`)
      .then(res => res.json())
      .then(data1 =>{
      mealDiv.innerHTML +=`
      <div>
      <a href="${data1.meals[0].strYoutube}">Click here to see how to make this meal</a>
      <p class="mealInstructions">${data1.meals[0].strInstructions}</p>
      </div>
      `  
      })
      })
    })
  })
})



//www.themealdb.com/api/json/v1/1/lookup.php?i=52772






