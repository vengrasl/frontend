// Uzduotys be ir su iteraciniais metodais

let zodziuMasvyas = ["labas", "iki", "gyvunas", "menuo", "metai", "labaijauilgaszodis", "rytmetis", "vakaras"];

let skaiciuMasyvas = [1, 2, 45, 46, 80, 90, -5, 666, 777, 18, 20];

let misrusMasyvas = ["kazkokszodis", 5, 6, true, false, 8, true, "kitaszodis", "sauleleidziasivakare"];





console.log("111111111111111111111111111111111111111111111111111111111111111111111111");

//1.parasyti funkcija, kuro i konsole isspsausdintu pateikto masyvo dumenis atskirose eilutese
// bus naudojamas for each, nes tiesiog norime isspausdinti visus elementus

//be metodu
let uzd1_be = (masyvas) => {
  for(let i = 0; i < masyvas.length; i++){
    console.log(masyvas[i]);
  }
};

uzd1_be(skaiciuMasyvas);

//su forEach
let uzd1_su = (masyvas) => {
  masyvas.forEach(element => console.log(element));  //pradzioje nuromome parametra(siuo atveju masyva), element - kiekvieno masyvo elemento pavadinimas
};

uzd1_su(skaiciuMasyvas);

console.log("111111111111111111111111111111111111111111111111111111111111111111111111");





console.log("222222222222222222222222222222222222222222222222222222222222222222222222");
//2. parasyti funkcija,kuri grazintu skaiciu masyva, kuriame skaiciai didesni uz 10, is jai pateikto masyvo
// jau vien tik salyga reikalauja 2 masyvu


let uzd2_be = (masyvas) => {
 let grazinamasMasyvas = [];
  for( let i = 0; i < masyvas.length; i++){
    if(masyvas[i] > 10){               //jei i didesnis nei 10
      grazinamasMasyvas.push(masyvas[i])        //i sukurta nauja masyva supushins tuos skaicius
    }
  }
  return grazinamasMasyvas;           //nes salyga praso grazinti
};

console.log((uzd2_be(skaiciuMasyvas)));


//su filter

let uzd2_su = (masyvas) => {
  return masyvas.filter(element => {         // filtuoti masyvo elementus
   return element > 10;               // ir grazinti kurie didesni uz 10
  });                                 
};

console.log((uzd2_su(skaiciuMasyvas)));

console.log("222222222222222222222222222222222222222222222222222222222222222222222222");



console.log("333333333333333333333333333333333333333333333333333333333333333333333333333");

//3 parasyti funkcija, kuri patikruntu, ar jai paduotame string masyve bent 1 elementas yra ilgesnis nei 5 raidziu zodis ir grazintu true arba false

let uzd_3_be = (masyvas) => {
  for(i = 0; i < masyvas.length; i++){
    if(masyvas[i].length > 5){
      return true;
    }
  }
  return false;
};

console.log(uzd_3_be(misrusMasyvas));


//some 
//su find irgi galima, bet butu sudetingiau

let uzd_3_su = (masyvas) => {
  return masyvas.some(element => { 
    return element.length > 5   //jei bent vienas zodis ilgesnis nei 5
  });
};

console.log(uzd_3_su(zodziuMasvyas));


console.log("333333333333333333333333333333333333333333333333333333333333333333333333333");

console.log("444444444444444444444444444444444444444444444444444444444444444444444444444");
// 4)parasyti funkcija, kuri jai paduotame misriame masyve rasatu ir grazintu pirmaji kintamaji, kuris yra skaicius

let uzd_4_be = (masyvas) => {
  for(let i = 0; i < masyvas.length; i++){
    if(typeof(masyvas[i]) === "number"){   //jei kiekvienas masyvo elementas
      return masyvas[i];
    }
  }
}

console.log(uzd_4_be(misrusMasyvas));


//naudojamas find

let uzd_4_su = (masyvas) =>{
  return masyvas.find(element => typeof(element) === "number");
}

console.log(uzd_4_su(misrusMasyvas));

console.log("444444444444444444444444444444444444444444444444444444444444444444444444444");



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      UZDUOTYS SU NEITERACINIAIS MASYVU METODAIS


//1 uzduotis su neiteraciniais metodais: suformuoti masyva ir grazinti string

let uzduotis1 = [1, 'a', ,'21 Dec', 5, 8, false];

let uzduotis1Funckija = () => {
  return uzduotis1.toString();    //i konsole net irasius uzduotis1Funckija() visus pavers i string
};

console.log(uzduotis1Funckija(uzduotis1));




//2 uzduotis. Parasyti funkcija, kuri atliktu ta pati, ka ir daro .reverse()


let uzduotis2 = [1,2,5, true, "ojei", "ne", "tau", 90, 80];

let uzduotis2funkcija = () => {
  return uzduotis2.reverse()             
};

console.log(uzduotis2funkcija(uzduotis2));

//----------------------------------------------------------------------------------------------------------------

let nuoGalo = (parametras) =>{
  for(i = parametras.length - 1; i >=0; i = i - 1){
    return parametras;
  }
}
console.log(nuoGalo(uzduotis2));


//3 uzduotis. parasyti funkcija, kuri is jai paduoto masyvo randa ir isspausdina didziausia ir maziausia skaicius (galima su for)

let uzduotis3 = [0,1,2,3,4,5,6,6,6,7];

let uzduotis_3_funkcija = (masyvas) =>{
  let minValue = [0];     //  maziausia reiksme bus masyve  
  let maxValue = [0];        // didziausia reiksme bus masyve

for(i = 0; i < masyvas.length; i ++){ 
  if(masyvas[i] <= minValue){         //jei kazkuri masyvo reiksme maziauLygu min reiksmei,
    minValue = masyvas[i];              // tegul si min reiksme buna lygi maziausiausiai masyvo reiksmei 
  } else if(masyvas[i] >= maxValue){      //jei kazkuri masyvo reiksme didesne arba lygi didziausiai reiksmei
    maxValue = masyvas[i];                //tegul si reiksme prilygsta didziausiai masyvo reiksmei
    }
  }
  return [minValue, maxValue];
};


console.log(uzduotis_3_funkcija(uzduotis3));

let UZDUOTIS3 = (masyvas5) => {
  console.log(Math.max(...masyvas5));  //eina per visa masyva
  console.log(Math.min(...masyvas5));   //eina per visa masyva
}

UZDUOTIS3(uzduotis3);

//4 uzduotis. Parasyti funkcija, kuri is 2 jai paduotu masyvu grazina(isveda i konsole) isveda pasikartojancias reiksmes (jei yra 2 vienodos reiksmes abejuose masyvuose, ta reiksme turi buti isvesta i konsole)

let masyvas1 = [5, 18, false, "zodis", 250, "ate", "katinas", true];
let masyvas2 = [10, 25, false, "kiti zodziai", "lygu", "astoniolika", "yes", 5];

let vienodosReiksmes = (masyvas1, masyvas2) => {
 NAUJASmasyvas = [];
  
 for(i = 0; i < masyvas1.length; i++){          //eina pirmas ciklas
   for(j = 0; j < masyvas2.length; j++){        //eina antras
     if(masyvas1[i] === masyvas2[j]){           //jei pirmo masyvo i reiksme atinkta 2 masyvo j reiksmei
      NAUJASmasyvas.push(masyvas1[i]);          //tegul i nauja masyva supushina pirmo masyvo i reiksme,kuri atinka 2 masyvo i reiksmei
     }
   }
 }
 return NAUJASmasyvas
}

console.log(vienodosReiksmes(masyvas1, masyvas2));

//------------------------------------------------------------------------------------------------------------
//kitas budas su .includes()

let mass1 = [1,2,3,4,5,6];

let mass2 = [4,5,9,8,7,6];

let vienodi = (arr1, arr2) =>{
  let newarr =[];
  for(i = 0; i < arr1.length; i++){
    arr1.includes(arr2[i]) ? console.log(arr2[i]) : null
  }
}

vienodi(mass1, mass2);


//5.parasyti funckija, kuriai padavus du masyvus(pirmas:informacijos, antras: indeksu). suformuotu nauja masyva is pirmojo, paimdamas tik tas reiksmes, kurios nurodytos indeksuose. (pirmas=["a","b","c", "d", "e," "f"], antras =[0,3,4, naujas = "a", "d", "e"])



//24 pask, 5
let masyvas5 = ["a","b","c","d","e","f",];
let masyvas8 = [0,3,4];


function grazinkIndekstus(mas1, mas2) {       //funkcija reikalauja 2 parametru 
  let naujasMasyvas = [];                     //praso sukurti nauja masyva

let kiek = mas2.length;

for (let i = 0; i < kiek; i++)
{
  let indeksas = mas2[i];
naujasMasyvas.push(mas1[indeksas]);
}


return naujasMasyvas;
}


console.log(grazinkIndekstus(masyvas5, masyvas8))




//                                       ITERACINIU METRODY MASUVU UZDUOTYS
                 
 
//1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
//2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

const cars = ["BMW", "VW", "Audi"]

pirmasIrAntras = (item) => {    //1 parametras
  item.forEach((item, index) => console.log(index + ':' + item));  // => index nusako pozicija, item - koks elementas
}

pirmasIrAntras(cars)

//3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

let draugai3 = ["antaNas", "povilaS", "daRius", "mariUs"];

let trecias = (drauguvardai) =>{
  return drauguvardai.map((item) => console.log(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())); //paimti visas 0 pozicijoje esancias raides(charAT(0)), jas pavers didz raidemis (toUpperCase() + paimsim likusias raides nuo 1 pozicjos (slice1) ir paversim jas i mazasias raides.
}

trecias(draugai3);

//4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

let draugai = [50,6,18,17,10,11,13,16,80,30,1,2,3]

let KETVIRTA = (drauguAmzius) => {
  return drauguAmzius.filter(item =>{
    return item >=18
  })
}

console.log(KETVIRTA(draugai));



// 5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
let miestai = ['Vilnius', 'Kaunas'];

let PENKTA = (MiestaiIsK) => { 
  return MiestaiIsK.find(item => item[0] === 'K');    //padavus parametra, ieskoti string, kuriu 0 pozicija prasideda raide K
}

console.log(PENKTA(miestai));

  
//6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

let SESTA = (miestaiIsk) => {
  return miestaiIsk.some(item => item.charAt(0) === 'k');
}

console.log(SESTA(miestai));

//7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.

let septinta = (visiMiestaiIsk) =>{
  return visiMiestaiIsk.every(item => item.charAt(0) === 'k');
}

console.log(septinta(miestai));

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                            //Destrukturizavimas

// Destruktūrizavimas
/*
  Destruktūrizavimas - kažkokio elemento/ų išskirstymas dalimis.
  Video:
    https://youtu.be/UgEaJBz3bjY
    https://youtu.be/NIq3qLaHCIs
    https://youtu.be/-vR3a11Wzt0
  array destructuring syntax
    let [a, b] = masyvas; (priskyrimas paeiliui)
    let [a, , b] = masyvas; (elemento praleidimas)
    let [a, , b, ...c] = masyvas; (likusių elementų priskyrimas)
    let [a = 'default value', , b, ...c] = masyvas; (galima priskirti numatytas reikšmės, kurios bus priskirtos tokiu atveju, kai destruktūrizuojamame elemente ta reikšmė bus undefined)
  object destructuring syntax
    let {a, b} = objektas; (priskyrimas pagal raktinius žodžius)
    let {a, b : kitasB} = objektas; (priskyrimas pagal pervadintą raktinį žodį)
    let {a, b : kitasB, ...like} = objektas; (priskyrimas neparinktų elementų)
    let {a, b : kitasB, c = "c default", ...like} = objektas; (nerastų raktinių žodžių default reikšmes nustatymas)
*/

// arr be destr...
let masyvas = [undefined, 54, true, 'zodis', 54, 78];
let a = masyvas[0];
let b = masyvas[1];
console.log(a, b);

// arr su destr...
let [z = 'default value', , x, ...visiLike] = masyvas;
console.log(z, x, visiLike);

// function
let destrF = (arg1, arg2, ...args) => {
  console.log(arg1, arg2, args);
}
destrF(1,2,3,4,5,6,7,8,9);

// obj be destr...
let objektas = {
  vardas: "Rokas",
  amzius: 26,
  gyvenamojiVieta: {
    salis: "Lietuva",
    miestas: "Kaunas"
  },
  batai: "žieminiai"
  // pavarde: "Banaitis"
}
// let vardas = objektas.vardas;
// let amzius = objektas.amzius;
// console.log(vardas, amzius);

let { amzius, vardas: pilnasVardas, pavarde = 'Pavardenis', ...kitkas} = objektas;
console.log(pilnasVardas, amzius, pavarde, kitkas);

// 2 kintamuju reiksmiu sukeitimas


//be destrukt
let a1 = 5;
let b1 = 10;


let saugykla = a1; //laikinas kintamasis

a1 = b1;

b1 = saugykla;

console.log(a1, b1);


//su sdestrukt
let a2 = 5;
let b2 = 10;

[a2, b2] = [b2, a2];
console.log(a2, b2);


//yra dar 1 budas

let a3 = 5;

let b3 = 10;

a3 = a3 + b3 //15

b3 = a3 - b3 //5

a3 = a3 - b3 //10

console.log(a3, b3);


//Destruktūrizavimas:


//  1) Naudodami destructuring priskirkite 2 kintamiesiems 2 reikšmes.

let [sk1, sk2] = [1, 2]; //sk1 priskirta 1, sk2 - 2

console.log(sk1, sk2);

//  2) Naudodami destructuring priskirkite 10 kintamųjų 10 reikšmių.

let [vienas, du, trys, keturi, penki, sesi, septyni, astuoni, devyni, desimt] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(vienas, du, trys, keturi, penki, sesi, septyni, astuoni, devyni, desimt);

//  3) Naudodami destructuring priskirkite 3 kintamiesiems 5 reikšmes.

let [pirmas, antras, ...trecias3] = [1, 2, 3, 4, 5]; // pirmas = 1, antras = 2, trecias = 3, 4, 5

console.log(pirmas, antras, trecias3);

//  4) Naudodami destructuring priskirkite 1 kintamajam visas reikšmes išskyrus pirmas 3.

let [,,,...visosIskyrusTrys] = [1,2,3,4,5,6,7,8,9,10];

console.log(visosIskyrusTrys);

//  5) Naudodami destructuring priskirkite 3 kintamiesiems 3 reikšmes paimtas iš objekto.

let Objektas2 = {
  pirmaInfo: "svarbiausia info",
  antraInfo: "netokia svarbi info",
  treciaInfo: "is vis nesvarbi info"
}

let {pirmaInfo, antraInfo, treciaInfo} = {Objektas2};

console.log(Objektas2);


//  6) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.

let O = 1;

let P = 2;

[O, P] = [P, O];

console.log(O, P);