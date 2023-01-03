/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai+pavardės).
*/

const output = document.querySelector('#kazkoki');
console.log(output)

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    data.movies.forEach(item => { //for each per obj
      const itemDiv = document.createElement('h1'); //sukuriam h1 for title
      itemDiv.setAttribute('class', 'itemDiv') 
      itemDiv.innerText = item.title; // object.title
      output.append(itemDiv); // ikeliam pavadinima i output
      item.castAndCrew.actors.forEach(element => { 
        const nameDiv = document.createElement('p');
        nameDiv.setAttribute('class', 'nameDiv')
        nameDiv.innerText = element.name;
        output.append(nameDiv);
      })
    })
  })
