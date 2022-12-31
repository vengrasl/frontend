/*
  Parašyti JS kodą, kuris turėtų funkciją.
  Funkcija kaip argumentą priima masyvą. Funkcija grąžina skaičių.
  Funkcija turi suskaičiuoti, koks yra vartotojų mašinų gamybos metų vidurkis.
*/

const asmenys = [
  { id: '1', name: 'Petras', masina: "Ford", masinosGamybosMetai: 1990},
  { id: '2', name: 'Jonas', masina: "Audi", masinosGamybosMetai: 1995 },
  { id: '3', name: 'Rokas', masina: "Fiat", masinosGamybosMetai: 2001 },
  { id: '4', name: 'Tomas', masina: "Peugeot", masinosGamybosMetai: 2005 },
  { id: '5', name: 'Sima', masina: "Audi", masinosGamybosMetai: 1996 },
  { id: '6', name: 'Kamilė', masina: "BMW", masinosGamybosMetai: 1999 },
  { id: '7', name: 'Aloyzas', masina: "Honda", masinosGamybosMetai: 2010 }
];

const avarageCarYears = asmenys.reduce((total, item) => total + (item.masinosGamybosMetai / 7), 0) //kas vietoj 7?
console.log(avarageCarYears)

let avarageYeasFunction = (array) => array.reduce((total, item) => total + (item.masinosGamybosMetai / 7), 0) 
console.log(avarageYeasFunction(asmenys));