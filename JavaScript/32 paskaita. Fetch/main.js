//                  JSON

/*
JSON - Java Script Object Notacion

JSON skiriasi nuo object tuo, kad :
  JSON raktiniai zodziai yra kabutese
  JSON ignoruoja/nesaugo metodu

  https://jsonlint.com/ tikrina ar geras JSON
*/
const object = {
  raktu : 'reiksme',
  tiesa : 'true',
  skaicius : 645,
  masyvas : ['labas', 'ate'],
  objektas : {hi: 'ha', du: 2},
  funkcija(zodis){                    //funckijos JSON negrazins
    return `pasakei ${zodis}`
  }
}

const objectAsJSON = JSON.stringify(object); //padarys JSON skaitomu




//                  Fetch


/* syntax

fetch('url');
  .then(res => res.text() || JSON.parse(res))

*/

/*
  fetch skirtas paimti duomenis is nurodyto failo ar url.
*/


//fetch data.txt
fetch("./data.txt")
  .then(response => response.text()) //responsui naudojam text metoda, kuris paima tekstine info ir perduoda kitam .then
  .then(data => {
    console.log(data); //isspausdinti teksta
    let dataAsArray= data.split('\n'); // \n eilutes luzis. ten kur eilutes luziai, sudedame stringus
   // console.log(dataAsArray);
    // dataAsArray = dataAsArray.map(item => item.split(' '));
    // console.log(dataAsArray)
    dataAsArray.forEach(line => {
      document.querySelector('#tekstinis').innerHTML += `<p>${line}</p>` //grazins kiekviena eilute i psl
    });
  }) 


//data.json
fetch("./data/data.json")
  .then(response => response.json())
  .then(data => {
   // console.log(data);
    Object.keys(data).forEach(key =>{
      document.querySelector('#jsonSimple').innerHTML += `<p>${data[key]}</p>`
    })
  })

  //--------------------------------1 UZDUOTIS---------------------------------------

  // 1) movies.json

  // 1.1) Susikurti movies.json failą, jame sukurti 3 filmus. Kiekvienas filmas turi:
  //   1.1.1) Pavadinimą
  //   1.1.2) Poster (nuotraukos url)
  //   1.1.3) Ilgis minutėmis
  //   1.1.4) Bent 2 aktoriai
  // 1.2) Nuskaityti movies.json failą JS'e. ir į ekraną išvesti informaciją apie filmus:
  //   1.2.1) Pavadinimas
  //   1.2.2) Poster'is (nuotrauka)
  //   1.2.3) Ilgis valandomis ir minutėmis
  //   1.2.4) Bent 2 aktoriai (suktas ciklas per masyvą)
  // 1.3) Jeigu yra laiko ir noro - stilizuoti.

  fetch("./data/movies.json")
    .then(responsive => responsive.json())
    .then(data => {
      console.log(data[0].aktoriai.map(aktoriai => `<li>${aktoriai}</li>`).toString().replaceAll(',','')) //data yra
      data.forEach(movie => {
        document.querySelector('#movies').innerHTML +=`
        <div class="movie">
          <h1>${movie.pavadinimas}</h1>
          <img src="${movie.nuotrauka}" alt="${movie.pavadinimas} nuotrauka">
          <p> Trukmė: ${Math.floor(movie.trukme/60)} valandos, ${movie.trukme%60} min</p>
          <p>Vaidina: ${movie.aktoriai[0]}, ${movie.aktoriai[1]} ir kt.</p>
        </div>
        `
      })
    });

    //------------------------------------------------------2 UZDUOTIS----------------------------------------
    //randomuser.me/api (api - duomenys)

    // 2) Pasiimkite duomenis iš https://randomuser.me/api/ ir juos atvaizduokite puslapyje.
    // Duomenys galėtų būti atvaizduoti kortelėje.
    // Atvaizduoti nuotrauką, vardą, amžių, adresą ir el. paštą.
    // Galima padaryti mygtuką, kurį paspaudus užkraunamas naujas random asmuo.
    // Kas be ko - pastilizuoti.



    let section = document.querySelector("#person");

    let form = document.querySelector('#form');
    console.log(form);

    section.addEventListener('click', (e)=>{
      e.preventDefault();
      console.log(e);
      fetch('https://randomuser.me/api') //duodam svetaine
      .then(responsive => responsive.json()) 
      .then(data => {
        console.log(data.results[0]); //duomenu faile visi duomenys yra objekte(results), o jie patalpinti i masyva
        console.log(data.results);
        data.results.forEach(item => {

          section.innerHTML =
          `
            <div class="personCard">
              <div class="info">
                <p> Full name: ${item.name.first} ${item.name.last}</p>
                <p> Age: ${item.registered.age}
                <p> Gender: ${item.gender}</p>
              </div>
              <img src="${item.picture.large}" alt="asmens nuotrauka"
              <div class="living place">
                <p class="livinPlace">Person is living in:</p>
                <ul>
                  <li>country: ${item.location.country}</li>
                  <li>city: ${item.location.city}</li>
                </ul>
                <p>contact via: ${item.email}</p>
              </div>
            </div>
          `
        })
      });
    })






    


