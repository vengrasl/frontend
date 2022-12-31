// CRUD su Fetch
/*
  C - create  - POST metodas
  R - read    - GET metodas (default)
  U - update  - PUT metodas
  D - delete  - DELETE metodas
*/

/* Fetch syntax
  fetch(link, {
    method: 'POST', // PUT
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
*/

let getiname = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log(data));
}

let postinam = () => {
  let newData = {
    body: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
    title: "Batukas",
    userId: 5
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
    .then(res => res.json())
    .then(data => console.log(data));
}

let triname = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/54', {
    method: "DELETE"
  })
  .then(res => res.json()) // DELETE nieko negrąžina
  .then(data => console.log(data)) // DELETE nieko negrąžina
}

let updateSuPUT = () => { // PUT ištrina buvusią ir įklijuoja naują info tame elemente, į kurį kreipiesi
  let newData = {
    body: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
  }
  fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(res => res.json())
  .then(data => console.log(data));
}

let updateSuPATCH = () => { // PATCH pakeičia arba papildo tik tą informaciją, kuri buvo perduota, tame elemente, į kurį kreipiesi
  let newData = {
    bodyNr2: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
  }
  fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: "PATCH",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(res => res.json())
  .then(data => console.log(data));
}


//--------------------------------UZDUOTIS---------------------------------------------------------------
// Naudojant https://robust-safe-crafter.glitch.me/ API
// Sukurti puslapį, kuriame būtų atvaizduojami visi butai.
//   fetch(nuoroda).then()
// Taip pat, turi būti galimybė pridėti naują butą.
//   fetch(nuoroda, {method:"POST", headers:{}, body:naujasButasJSONpavdialu}).then()
//   Naujo buto info paimama iš pateiktos formos.


//---------------------------------------SHOW ALL------------------------------------------------

let buttonShowAll = document.querySelector(".showAllAppartments");
console.log(buttonShowAll);

let allApartments = document.querySelector("#allAppartments");
console.log(allApartments);

let allApartmentsAfterPress = () => {
  fetch('https://robust-safe-crafter.glitch.me')
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        allApartments.innerHTML +=`
            <div class="cardDisplay">
              <img src="${item.image}" alt="" width="100">
            <div class="locationPrice">
              <p class="location">Miestas: ${item.city}</p>
              <p class="price">Kaina ${item.price} eu.</p>
            </div>
            <p class="description">${item.description}</p>
            </div>`
    })
  })
 }

buttonShowAll.addEventListener('click', (e)=>{
  console.log(e);
  e.preventDefault();
  allApartmentsAfterPress();
})

//---------------------------------------SUBMIT APPARTMENT------------------------------------------------

let form = document.querySelector("form");
console.log(form);

let imgInput = document.querySelector("#enterImage");
console.log(imgInput);

let locationInput = document.querySelector('#enterLocation');
console.log(locationInput);

let priceInput = document.querySelector('#enterPrice');
console.log(priceInput);

let descriptionInput = document.querySelector("#enterDescription");
console.log(descriptionInput);

let submitAppartmentButton = document.querySelector('#submitAppartment');
console.log(submitAppartmentButton);

form.addEventListener('submit', (e)=>{
  console.log(e);
  e.preventDefault();
  postAppartment();
})

 let postAppartment = () => {
  let newAppartment = {
    image: `${imgInput.value}`,
    city: `${locationInput.value}`,
    price: `${priceInput.value}`,
    description: `${descriptionInput.value}`
  }

  fetch("https://robust-safe-crafter.glitch.me", {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newAppartment)
  })
    .then(res => res.json())
    .then(data => console.log(data));

    allApartments.innerHTML +=
    `
    <div class="cardDisplay">
      <img src="${imgInput.value}" alt="" width="100">
    <div class="locationPrice">
      <p class="location">Miestas: ${locationInput.value}</p>
      <p class="price">Kaina ${priceInput.value} eu.</p>
    </div>
    <p class="description">${descriptionInput.value}</p>
    </div>
    `
    imgInput.value = '';
    locationInput.value = '';
    priceInput.value = '';
    descriptionInput.value = '';

 }

 