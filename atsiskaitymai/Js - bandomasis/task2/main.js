/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/

const batmanImg = document.querySelector('.batmanimg');

const batmanOutput = document.querySelector('.batmanOutput');

const supermanImg = document.querySelector('.supermanimg');

const supermanOutput = document.querySelector('.supermanOuput');

let atsakymas = 0

batmanImg.addEventListener('click', () => {
  atsakymas++;
  batmanOutput.textContent = atsakymas;
})

supermanImg.addEventListener('click', ()=>{
  atsakymas++
  supermanOutput.textContent = atsakymas;
})

