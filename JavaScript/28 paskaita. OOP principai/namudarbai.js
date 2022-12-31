/*

2) Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis).
  2.1) Per Klasę, sukuriamas objektas ir jis atvaizduojamas po forma (CSS'ą rašykite CSS'e) kaip atvaizduota nuotraukoje (./images/cars.PNG).
  3.1) Paspaudus ant automobilio bloko - turi alert išmesti kainą ir mileage. (gal su CSS'u gražiai padaryti, kad užėjus ant elemento su pele, atsiranda laukelis nuotraukoje...)
*/

class Cars{
  constructor(carBrand, model, mileage, price, image){
    this.carBrand = carBrand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image
  }
  atvaizdavimas(){
    let carBrand = document.createElement('h1');
    let carModel = document.createElement ('p');
    let carMileage = document.createElement('p');
    let carPrice = document.createElement('p');
    let carImage = document.createElement('img');
    let carDiv = document.createElement('div');
    carBrand.append(this.carBrand);
    carModel.append(this.model);
    carMileage.append(this.mileage);
    carPrice.append(this.price);
    carImage.src = this.image;
    carDiv.append(carBrand);
    carDiv.append(carModel);
    carDiv.append(carMileage);
    carDiv.append(carPrice);
    carDiv.append(carImage);
    let div = section.querySelector('#output');
    console.log(div);
    div.append(carDiv);
  }
}

let section = document.querySelector('#antra');
console.log(section);

let form = section.querySelector('form');
console.log(form);

form.addEventListener ('submit', (e) =>{
  e.preventDefault()
  console.log(e);
  let carBrand = form.querySelector('#carBrand').value;
  console.log(carBrand)
  let model = form.querySelector('#model').value;
  console.log(model);
  let mileage = form.querySelector('#mileage').value;
  console.log(mileage);
  let price = form.querySelector('#price').value;
  console.log(price);
  let image = form.querySelector("#image").value;
  console.log(image);

  let carDescription = new Cars(carBrand, model, mileage, price, image);
  console.log(carDescription)

  carDescription.atvaizdavimas();
})