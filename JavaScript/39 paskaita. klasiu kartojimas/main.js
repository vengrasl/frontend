//                                          Klasiu uzduotys

// 1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" atributus.
// 1.1) Sukurkite papildomą atributą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").
// 1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').


class Car{
  constructor(name, year, month, date){
    this.name = name;
    this.year = year;
    this.month = month;
    this.date = date;
    this.helloCar = `Hi. This is my car ${this.name}. It was created in ${this.year} / ${this.month} / ${this.date} `
  }
  age(){
    let todayYear = new Date().getFullYear()
    let todayMonth = new Date().getMonth() + 1
    let todayDay = new Date().getDate()
    return (todayYear - this.year) + ` years / ` + (todayMonth - this.month) + ` monthts / ` + (todayDay - this.date) + ` days`
  }
}

let carArray = [
  new Car ('Toyota', 2000, 12, 10),
  new Car ('Opel', 2015, 10, 1)
]

console.log(carArray[0].age())
console.log(carArray[0].helloCar)


// 2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" atributus.
// 2.1) Sukurkite papildomą atributą "color" ir priskirkite jam randomly parinktą spalvą.
// 2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
// 2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }
  area(){
    return this.width * this.height
  }
  perimeter(){
    return 2 * (this.width + this.height)
  }
}

let rectangle = [
  new Rectangle (2, 3),
  new Rectangle (3, 6)
];

console.log(rectangle[0].color);
console.log(rectangle[1].area());
console.log(rectangle[0].perimeter());




// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" atributus.
// 3.1) Sukurkite papildomą atributą "coordinates" ir priskirkite jam "x" ir "y" reikšmes.
// 3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).


class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.coordinates = `${this.x}, ${this.y}`
  }
  distance(kitasTaskas) {
    return `Atstumas tarp kordinačių: ${Math.hypot(this.x - kitasTaskas.x, this.y - kitasTaskas.y)}`
  }
}


let point = [
  new Point (1, 2),
  new Point (2, 4)
]

console.log(point)
console.log(point[0].distance(point[1]))


// 4) Sukurkite klasę vardu "3D_Rectangle" ir duokite jai "width", "height" ir "depth" atributus.
// 4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
// 4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
// 4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.


class Rectangle_3D{
  constructor(width, height, depth){
    this.width = width,
    this.height = height,
    this.depth = depth
  }
  volume(){
    return this.width * this.height * this.depth
  }
  surfaceArea(){
    return 2 * ((this.width * this.height) + (this.width * this.depth) + (this.height * this.depth));
  }
  perimeter(){
    return 4 * (this.width + this.height + this.depth); // dauginti visas krastines is 4, nes 3d figura (aukstis, plotis, gylis turi po 4 krastines)
  }
}

let Figura = new Rectangle_3D (10, 15, 20);

console.log(Figura)
console.log(Figura.volume());
console.log(Figura.surfaceArea());
console.log(Figura.perimeter());