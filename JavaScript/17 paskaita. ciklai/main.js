//                 Kintamieji
/*
    Objektas - Object - {raktas:reiksme, raktas1:reiskme...} PS. eiliskumas nesvarbus
    Masyvas  - Array  - [reiksme, reiksme, reiskme...] PS. eiliskumas islieka

    Tiek objektas, tiek ir masyvas yra konteineriniai kintamieji. Tai reiškia, kad jų viduje galima talpinti keletą reikšmių (gali būti skirtingų kintamųjų tipų).
*/


//                Objektai
  
/*let vardas = "Lukas"
let pavarde = "Vengras"
let amzius = 26;
let vedes = false;
console.log(vardas);
console.log(pavarde);
console.log(amzius);
console.log(vedes);

let vardas1 = "Petras";
let pavarde1 = "Petrauskas";
let amzius1 = 55;
let vedes1 = true;
console.log(vardas1);
console.log(pavarde1);
*/

let zmogus = {
  vardas: "Lukas",
  pavarde: "Vengras",
  amzius: 26,
  vedes: false,
  gyvenamojiVieta: {
    miestas: "Kaunas",
    salis: "Lietuva"
  }
};
console.log(zmogus.vardas);
console.log(zmogus.pavarde);
console.log(zmogus.amzius);
console.log(zmogus.vedes);
console.log(zmogus.gyvenamojiVieta.salis);

let zmogus1 = {
  vardas: "Petras",
  pavarde: "Petrauskas",
  amzius: 55,
  vedes: true
}
console.log(zmogus1);
zmogus1.vardas = "Jonas";
zmogus1.ugis = 180;
console.log(zmogus1);


//          Masyvai

/* 
let menesis1 = "Sausis";
let menesis2 = "Vasaris";
let menesis3 = "Kovas";
let menesis4 = "Balandis";
let menesis5 = "Gegužė";
*/

let menesiai = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"];
console.log(menesiai[3]);

let masyvas = [654, 12, 555.555, [1, 2, 3, 4, "5", false], false, true, "žodžiai", "haha"];
console.log(masyvas);

masyvas[1] = 'pakeistas';
masyvas.push("reiksme"); //push - prie masyvo pabaigos prideda naują reikšmę
masyvas.unshift("unshift"); // unshit - prie masyvo pradžios prideda naują reikšmę
console.log(masyvas);
let masyvoMetoduBandymai = masyvas.pop(); // pop - išima paskutinį duomenį iš masyvo
masyvoMetoduBandymai = masyvas.shift(); // shift - išimą pirmą masyvo elementą
masyvoMetoduBandymai = masyvas.length; // lenght - masyvo ilgio duomuo (number)
console.log(masyvas);
console.log(masyvas[0]);
console.log(masyvas[masyvas.lenght - 1]);
console.log(masyvas);


//          Masyvai ir objektai
let mixed1 = {
  vardas: "Lukas",
  amzius: 26,
  vedes: false,
  gyvenamojiVieta: {
    miestas: "Vilnius",
    salis: "Lietuva"
  },
  pomegiai: ["Sportas", "Žaidimai", "Knygos", "IT"]
}
console.log(mixed1.vardas + " turi " + mixed1.pomegiai.length+ " pomėgius.");

console.log("Vienas iš " + mixed1.vardas + " pomėgių yra " + mixed1.pomegiai[Math.floor(Math.random()*mixed1.pomegiai.length)] + ".");

let mixed2 = [
  {
    vardas: "Lukas",
    amzius: 26
  },
  {
    vardas: "Petras",
    amzius: 50
  },
  {
    vardas: "Kazimieras",
    amzius: 5
  }
];
console.log(mixed2);


/*
1) Susikurti kintamuosius su reikšmingais pavadinimais ir informacija.
  1.1) 5 string.
  1.2) 5 int.
  1.3) 3 bool.
*/

let gyvunas1 = "Suo";
let gyvunas2 = "Kate";
let gyvunas3 = "Triusis";
let gyvunas4 = "Papuga";
let gyvunas5 = "Zuvis";

let atstumasCentimetrais = 100000
let atstumasMetrais = 1000;
let atstumasKilometrais = 1;

let aukstaTemperatura = true;
let vejuota = false;
let laisvadienis = true;

/*2) Susikurti konteinerius ir juos užpildyti reikšmėmis (bent po 1 kiekvieno tipo).
  2.1) Masyvas bent 6 ilgio. []
  2.2) Objektas bent 6 ilgio. {}
*/

let spalva = ["raudona", "geltona", "zalia", "pilka", "melyna", "juoda"];

let knyga = {
  pavadimias: "Idomi knyga",
  knygosAutorius: "Marcinkevicius",
  puslapiuSkaicius: 400,
  skyriuSkaicius: 10,
  arIdomiKnyga: true,
  arSkaitomaKnyga: false
}

/*2.3) Masyvas bent 4 ilgio, kurio viduje būtų kitas masyvas bent 4 ilgio.
  2.4) Masyvas bent 4 ilgio, kurio viduje būtų objektas bent 4 ilgio.
  2.5) Objektas bent 4 ilgio, kurio viduje būtų masyvas bent 4 ilgio.
  2.6) Objektas bent 4 ilgio, kurio viduje būtų objektas bent 4 ilgio.
*/

// 2.3

let issilavinimas = ["pagrindinis", "vidurinis", ["zemi rez", "vidutiniai rez", "auksti rez", "amazing rez"], "koleginis", "ausktasis"];

// 2.4

let masyvas2_4 = [1,2,3,{pirmas: "vienuoliktas", antras: "dvyliktas", trečias: false, ketvirtas: 5000}];

//2.5
let zmogausSavybes = {
  buvoSavybe: ["draugiskas", "paslaugus", "nuolankus", "kalbus"],
  ugisCm: 180,
  statusas: "dirba",
  arTuriVaiku: false
}

//2.6
 let namuTipas = { 
 pirmasTipas: {
  pirmoTipoPirmasTipas: true,
  pirmoTipoAntrasTipas: "antras",
  pirmoTipoTreciasTipas: 15,
  pirmoTipoKetvirtasTipas: "ketvirtas"
 },
 antrasTipas: "butas",
 treciasTipas: "kotedzas",
 ketvirtasTipas: "Nuosavas Namas"
}

/*
3) Į konsolę išvesti:
  3.1) Bent po 2 reikšmes iš 2.1 ir 2.2 konteinerių.
  3.2) Bent po 3 reikšmes iš 2.3-2.6 konteinerių su bent 1 reikšme esančia konteinerio konteineryje.
*/

//3.1
console.log(spalva[2], spalva[3]);
console.log(knyga.pavadimias, knyga.puslapiuSkaicius);


//3.2
console.log(issilavinimas[0], issilavinimas[1], issilavinimas[2][0]);

console.log(masyvas2_4[0], masyvas2_4[1], masyvas2_4[3].ketvirtas);

console.log(zmogausSavybes.ugisCm, zmogausSavybes.arTuriVaiku, zmogausSavybes.buvoSavybe[2]);

console.log(namuTipas.antrasTipas, namuTipas.ketvirtasTipas, namuTipas.pirmasTipas.pirmoTipoKetvirtasTipas);


// 4) Palyginti ir į konsolę išvesti kokias nors:
// 4.1) 2.1 konteinerio reikšmes.

if("raudona" == "geltona"){
  console.log("tiesa");
} else{
  console.log("netiesa");
}

//  4.2) 2.2 konteinerio reikšmes.

if(knyga.pavadimias == knyga.skyriuSkaicius){
  console.log("tiesa");
} else{
  console.log("deja, melas");
}

// 4.3) 2.3-2.6 konteinerių reikšmes su jų viduje esančių konteinerių reikšmėmis.

if(issilavinimas[0, 1, 3, 4] == issilavinimas [2][0, 1, 2, 3]){
  console.log("tiesa");
} else{
  console.log("tikras melas");
}

if(masyvas2_4[0, 1, 2] == masyvas2_4[3]){
  console.log("Tiesa");
} else{
  console.log("MELAS");
}

if(zmogausSavybes.arTuriVaiku, zmogausSavybes.statusas, zmogausSavybes.ugisCm == zmogausSavybes.buvoSavybe){
  console.log("yra tiesa");
} else{
  console.log("nera teisinga");
}

if(namuTipas.antrasTipas, namuTipas.treciasTipas, namuTipas.ketvirtasTipas == namuTipas.pirmasTipas){
  console.log("tai tiesa");
} else{
  console.log("tai netiesa");
}

//4.4) 2.3-2.6 konteinerių reikšmes su kitų konteinerių reikšmėmis (3kartus skirtingas reikšmes).

if(issilavinimas == namuTipas, masyvas2_4, zmogausSavybes){
  console.log("tiesa");
} else{
  console.log("melas");
}

if(masyvas2_4 == issilavinimas, namuTipas, zmogausSavybes){
  console.log("tiesa");
} else{
  console.log("melas");
}

if(namuTipas == masyvas2_4, issilavinimas, zmogausSavybes){
  console.log("tiesa");
 } else{
  console.log("melas");
 }

 if(zmogausSavybes == namuTipas, zmogausSavybes, masyvas2_4){
  console.log("tiesa");
 } else{
  console.log("melas");
 }

// 5) Parašyti if'ą, kuris tikrintų kokia tavo lytis (tikrinimas turi vykti iš object kintamojo (object kintamasis turi turėti bent 4 kintamuosiuos savo viduje)).


let tavoLytis = {
  tavoLytis1: "moteris",
  tavoLytis2: "vyras",
  tavoLytis3: "transgender",
  tavoLytis4: "nenoriu pateikti atsakymo"
}

if (tavoLytis == tavoLytis.tavoLytis1){
  console.log("Tu esi moteris");
} 



/*
window.alert("Sveiki, prieš pradėdami, nurodykite, kokia jūsų lytis");
let kokiaTavoLytisKlausimas = prompt("Jūsų lytis?");
if(kokiaTavoLytisKlausimas = tavoLytis){
window.alert("ačiū");
} else{
  window.alert('deja, neteisingai įvesta lytis');
}

*/


//            Sąlygos

/*
  If Else
  Switch
  Ternary (max trumpintas if else)
  sąlyga ? jeiguTiesa : jeiguMelas    - if else
  OR / AND - galimas if sąlygų trumpinimas
*/
//            Ternary

if(10 > 5){
  console.log("tiesa");
} else{
  console.log("melas");
}
//10 > 5 ? console.log("tiesa") : console.log("melas");




let number = 10;
if(number > 20){
  console.log("20 -> infinity")
} else if(number <=0){
  console.log("-infinity -> 0")
} else{
  console.log("0 -> 20")
}


number > 20 ? console.log("20 -> infinity") : number <= 0 
            ? console.log("-infinity -> 0") : console.log("0 -> 20");





//            Ciklai
/*
  for
  while


  Ciklai - yra kartojami nurodyti veiksmai, tol kol yra tenkinama pateikta sąlyga.

for(iteratorius, salyga(suIteratoriumi) , iteratoriausKitimas){
  //veiksmai
}
*/
//  for ciklas naudojamas tuomet, kada gali paskaičiuoti kiek sykių kartosis ciklas  


// console.log(1);
  // console.log(2);
  // console.log(3);
  // console.log(4);
  // console.log(5);
  // console.log(6);
  // console.log(7);
  // console.log(8);
  // console.log(9);
  // console.log(10);
  for(let i = 1; i <= 10; i++){
    console.log(i);
  }
  
  let masyvas0 = [9,5,4,6,1,2,1,2,3,4,5,6,7,8,9];
  console.log(masyvas0);
  for(let i = 0; i < masyvas0.length; i++){
    console.log(masyvas0[i]);
  }
  console.log(masyvas0);

//      while
// while ciklas naudojamas tuomet, kai negali apskaičiuoti kiek kartų reikės vykdyti ciklą.


let i = 0; 

while(i <= 10){ //kol skaicius yra maziau lygu 0
  console.log(i); //console.log skaiciu
  i++              // didinti cikla +1
}

let masyvas7 = [9,5,4,6,1,2,1,2,3,4,5,6,7,8,9];
console.log(masyvas7);

while(masyvas7.length){
  console.log(masyvas7.shift());
}
console.log(masyvas7);


//6) Parašyti ciklą, kuris sukurtų 50 random skaičių (nuo 0 iki 100) masyvą.
//7) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.
//8) Parašyti ciklą, kuris išspausdintų kas antrą masyvo elementą nuo galo.
//9) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.
//10) Parašyti ciklą, kuris iš masyvo išspausdintų tik lyginius/nelyginius skaičius. 

// 6 uzduotis

let masyvas = [];
for(i = 0; i < 50; i++){
  masyvas.push(Math.floor(Math.random()*101));
}
console.log(masyvas);

//7 uzduotis

for(i=0; i <= masyvas.length - 1; i = i + 3){
  console.log(masyvas[i]);
}


//8 uzduotis
for(i = masyvas.length - 1; i >= 0; i = i - 2){
  console.log(masyvas[i]);
}


//9 uzduotis
for(i = 0; i <= masyvas.length - 1; i++){
  if (masyvas[i] > 54){
    console.log(masyvas[i]);
  }
}

//10 uzduotis

for(i = 0; i <= masyvas.length - 1; i++){
  if (masyvas[i] % 2){
    console.log(masyvas[i]);
  }
}

