//                                                    KLASES

/*
  Klasė - objektų kūrumo šablonas. Class -> Object
  Klase privalo būti aprašyta prieš kreipiantis į ją
  Klasių pavadinimai rašomi iš didžiųjų raidžių
  Klasės konstruktoriuje this yra privalomas
*/

/*
  syntax
  class KlasesPav{
    constructor(par1, par2){
      this.par1 = par1;
      this.par2 = par2;
    }
    methods..
  }

*/

//pradine info apie klases
console.groupCollapsed('info ir pavyzdys su klasemis');
{ 
  class Rectangle { //kuriame klase. visada turi buti auksciau duomenu
    constructor (_width, _height, _color) {   //setup (kaip funckija). Veikia tik tuo metu, kai yra kuriamas objektas

      this.width = _width; //this.width bus zemiau ivardytos figuros plotis
      this.height = _height; //this.width bus zemiau ivardytos figuros aukstis
      this.color = _color; //this.width bus zemiau ivardytos figuros spalva
    }
    getArea() { //galima sukurti ir funckija, kuri siuo metu
      return this.width*this.height;  //padaugins ploti is aukscio
    }
    printDescription() { //si funkcija:
      return (`As figura, kuria sudaro plotis: ${this.width}, aukštis: ${this.height} bei esu ${this.color} spalvos`) // apibudins kuriama objekta
    }
  } 

  let figuros = [ //masyvo pavadinimas, kurio objektai bus kuriami
  new Rectangle(5, 3, "blue"),    // 1 figura su  duomenimis
  new Rectangle(10, 5, "red")     // 2 figura su duomenimis
];

  console.log(figuros[0].getArea());  //1 figuros masyvo elementui kvieciame funckija, kuri atlieka daugyba
  console.log(figuros[1].getArea());
  console.log(figuros[0].printDescription()); //1 figuros masyvo elementui kvieciame funkcija, kuri apibudina pati elementa
}
console.groupEnd();


console.groupCollapsed('kuriame objektu masyva klasiu pagalba')
{
// kuriame objektu masyva su klasiu pagalba
class Asmuo{ //kuriame klase
  constructor(_vardas, _amzius, _turiVaiku){     //duodame 3 parametrus
    this.vardas = _vardas.split(' ')[0];         // vardas = 1-sis duotas parametras. Taip pat jam pritaikomas split(atskirs varda ir pavarde ir pateiks 0-taji string).   
    this.pavarde = _vardas.split(' ')[1];        //taip pat yra galimybe sukurti nauja parametra. Jam bus duotas _vardas duomenys. Siuo atveju bus atskirtas vardas ir pavarde ir grazinta pavarde del split 
    this.amzius = _amzius;                       //_amzius,_turiVaiku - duomenys vadinami konstruktoriais
    this.turiVaiku = _turiVaiku;
  }
  pasisveikinaSu(vardas){
    return `${this.vardas} pasisveikina su ${vardas}`; //this.vardas jau yra aprasytas. Bet "pasisveikinaSu" funkcijoje yra papildomas parametras, kuri galime ivardyti iskviete funkcija
  }
}

let asmenysSuKlasemis = [
  new Asmuo ("petras Petraitis", 20, false),
  new Asmuo ("Juozas Juozaitis", 25, true)
];

console.log(asmenysSuKlasemis); //tiesiog pateikti masyvo objektu duomenys
console.log(asmenysSuKlasemis[0].pasisveikinaSu('Jonas'));  // asmenySsuKlasemis[0] yra pirmo kurto asmens duomenys, kuriam suteikta funckija paimti tik varda (this.vardas) is asmenySsuKlasemis[0] ir pridedamas parametras (fonas, kuris ivardytas funkcijoje);
}
console.groupEnd();



class Ledai{
  constructor(pavadinimas, skonis, kaina){
    this.pavadinimas = pavadinimas;
    this.skonis = skonis;
    this.kaina = kaina;
  }
  kainosKeitimas(keitimasProcentais){ //neigiamas % - kaina mazinama
    return this.kaina + this.kaina * keitimasProcentais/100
    //     pvz 1.2    +   1.2      * -37(nuoldaida)    /100
  }
}

const leduMasyvas = [
  new Ledai("Dadu", "karamelinis", 1.2),
  new Ledai("Tirpuko", "avietinis", 0.49),
  new Ledai("Nykštukas", "vanilinis", 1.5)
];

console.log(leduMasyvas);


//iskonsolinti visus ledus su ju savybemis (9)
console.groupCollapsed("ledu pavadinimai");
{
leduMasyvas.forEach(ledas => console.log(ledas.pavadinimas));  //norime grazinti visus ledu pavadinimus ju nekeiciant, todel taikome forEach(). Pirma nurodome is kur imti duomenis(leduMasyvas) -> forEach( (norimas pav. => normas pav.pavadinimas - paimtas is ) ), 
console.groupEnd();
}

console.groupCollapsed("ledu skoniai");
{
leduMasyvas.forEach(ledas => console.log(ledas.skonis));
console.groupEnd();
}

console.groupCollapsed("ledu kainos");
{
leduMasyvas.forEach(ledas => console.log(ledas.kaina.toFixed(2)));
}
console.groupEnd();

//pakeisi ledu kainas
console.groupCollapsed("ledu kainos su 37% nuolaida");
{
leduMasyvas.forEach(ledokaina => console.log(ledokaina.kainosKeitimas(-37).toFixed(2))); //siuo atveju ivardyti "kaina" nereikia, nes ji ivardyta funckijoje. Cia paimamas visas funkcijos rezultatas, kuris yra tik 1 skaicius "return this.kaina + this.kaina * keitimasProcentais/100" 
console.groupEnd();
}


//pakeisti pradines ledu kainas +10 centu

console.groupCollapsed("ledu kainos duomenu kitimas (+10ct)");
{
leduMasyvas.forEach(ledas => {ledas.kaina +=0.10 //imame masyva -> forEach(item => item kaina +=10 (pridedame prie kainos 10ct))
console.log(ledas.kaina);
})
}
console.groupEnd();



//  1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" parametrus. + 
//  1.1) Sukurkite papildomą parametrą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").
//  1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()
console.groupCollapsed("1 uzduotis");
{
class Car { //kuriame klase

  constructor(name, year) { 
    this.name = name; 
    this.year = year;
    this.helloCar = `Labas. Čia mano mašina ${this.name} ir ji buvo pagaminta ${this.year} metais`; 
  }
  age(){
    return new Date().getFullYear() - this.year //new Date().getFullYear() - šiandienos metai
  }
}

let carMasyvas = [
  new Car ("Volvo", 2015),
  new Car ("Subaru", 2022)
];

console.log(carMasyvas[0].helloCar); 

console.log(carMasyvas[0].age()); 
}
console.groupEnd();


//2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus.
// 2.1) Sukurkite papildomą parametrą "color" ir priskirkite jam randomly parinktą spalvą.
// 2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
// 2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.
console.groupCollapsed("2 uzduotis");
{
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
  }
  area(){
    return this.width * this.height;
  }
  perimeter(){
    return (this.width + this.height) * 2;
  }  
}


let RectangleMasyvas = new Rectangle (40, 60);

console.log(RectangleMasyvas);
console.log(RectangleMasyvas.area());
console.log(RectangleMasyvas.perimeter());
}
console.groupEnd();


//  3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus.
//  3.1) Sukurkite metodą "coordinates", kuris grąžina "x" ir "y" reikšmes.(x;y)
//  3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).
console.groupCollapsed("3 uzduotis");
{
class Point {
  constructor (x, y){
    this.x = x,
    this.y = y
  }
  coordinatesF(){
    return `${this.x};${this.y}`;
  }
  distance(){
    return Math.hypot();
  }
}

let coordinates =  new Point (5, 10);
let coordinates2 = new Point (-3, 6);

console.log(coordinates.coordinatesF());

console.log(coordinates.distance());
}
console.groupEnd();

//  4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus.
//  4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
//  4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
//  4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.
console.groupCollapsed("4 uzduotis");
{
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
}
console.groupEnd();


//  5+) Pabandyti sukurti UI (User Interface (Vartotojo Sąsaja)) 1-4 užduotims ir spausdinti informaciją į ekraną. (Kas nori pasižiūrėkite JS Canvas ir su juo pabandykite atvaizduoti figūras puslapyje(bent jau 2D))