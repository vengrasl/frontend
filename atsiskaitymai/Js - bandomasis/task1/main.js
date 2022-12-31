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


