/*
  Parašyti JS kodą, kuris vartotojui paspaudus ant mygtuko "Rodyti Vartotoją" užkrautų vartotoją iš API į ekraną. (Mygtukas neberodomas ekrane po jo paspaudimo. Nebūtina ekrane rodyti visos informacijos apie vartotoją.)
  API nuoroda: https://randomuser.me/api/
*/

const button = document.querySelector('button');
console.log(button);

const output = document.querySelector('div');
console.log(output)

button.addEventListener('click', (e) => {
  console.log(e);
  e.preventDefault();
  button.classList.add('buttonAfterclick')
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      console.log(data.results[0].gender)
      data.results.forEach(item =>{
        output.innerHTML = 
        `<p>Gender: ${item.gender}</p>
        <p>Full name: ${item.name.title}. ${item.name.first} ${item.name.last}</p>
        <p>Lives in: ${item.location.country}</p>`
      })
    })   
})