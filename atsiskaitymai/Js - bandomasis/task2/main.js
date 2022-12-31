/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/

const batmanImg = document.querySelector('.batmanimg');

const batmanOutput = document.querySelector('.batmanOutput');

const supermanImg = document.querySelector('.supermanimg');

const supermanOutput = document.querySelector('.supermanOuput');

let atsakymasBatman = 0

batmanImg.addEventListener('click', () => {
  atsakymasBatman++;
  batmanOutput.textContent = atsakymasBatman;
})


let atsakymasSuperman = 0
supermanImg.addEventListener('click', ()=>{
  atsakymasSuperman++
  supermanOutput.textContent = atsakymasSuperman;
})

