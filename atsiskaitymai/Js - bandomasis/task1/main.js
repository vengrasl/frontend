/*
  Parašyti JS kodą, kuris leis vartotojui įvesti temperatūrą celsijumi arba farenheitu.
  Įvedus celsijų - parodoma kiek temperatūros tai būtų farenheitu | įvedus farenheitą - parodoma kiek temperatūros tai būtų celsijumi.
*/



let celciusToFr = (celcius) => {
  return (celcius * 9/5) + 32
}

let frToCelcius = (fr) => {
  return (fr - 32) * 5 / 9
}

console.log(celciusToFr(5));
console.log(frToCelcius(1));


const celciusInput = document.querySelector('#celciusFr');
const celciusFrButton = document.querySelector('.cecliusFrButton');
const celciusToFrForm = document.querySelector('.celciusToFrForm');
const celciusFrOutput = document.querySelector('.outPut');

celciusToFrForm.addEventListener('submit', (e) => {
  e.preventDefault();
  atsakymas = celciusToFr(celciusInput.valueAsNumber);
  celciusFrOutput.textContent = atsakymas;
})

const fahrenheitInput = document.querySelector('#frCelcius');
const fahrenheitCelciusButton = document.querySelector('.frCelciusButton');
const fhrenheitCelciusForm = document.querySelector('.frToCelciusForm');
const frCelciusOutput = document.querySelector('.frCelciusOutPut');

fhrenheitCelciusForm.addEventListener('submit', (e) => {
  e.preventDefault();
  atsakymas = frToCelcius(fahrenheitInput.valueAsNumber).toFixed(2);
  frCelciusOutput.textContent = atsakymas;
})

//su switch
const optionalform = document.querySelector('.optionalform');
const optionalInput = document.querySelector('.value');
const selectCelciuFr = document.querySelector('#optianal');
const optionalOutput = document.querySelector('.optionalOutpu');

optionalform.addEventListener('submit', (e) => {
  console.log(e)
  e.preventDefault();
  console.log(optionalInput.valueAsNumber);

  let atsakymas = 0
  switch(selectCelciuFr.value){
    case 'optionCelciusToFr':
      atsakymas = (optionalInput.valueAsNumber) * 9/5 + 32
    break
    case 'optionFrToCelcius':
      atsakymas = ((optionalInput.valueAsNumber) - 32 * 5 / 9).toFixed(2)
    break
  }
  optionalOutput.textContent = atsakymas
})





