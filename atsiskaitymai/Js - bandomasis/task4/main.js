/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai+pavardės).
*/

const output = document.querySelector('#kazkoki');
console.log(output)

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    data.movies.forEach(item => {
      output.innerHTML = `
      <p>${item.castAndCrew.actors[0].name}</p>
      `
    })
  })