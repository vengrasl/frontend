//             metodai

//          Number/Math/number

// Math atlieka matematinius veiksmus, pateikia duomemis (pvz. PI). 

// numer atlieka pakitimus, konvertavimus

/*
  Kreipimasis i number metodus prasideda zodziu "Math" arba "number". uz jo parasome taska "." ir uz tasko rasome funkcijos pavanimima su skliausteliais ir galimais parametetrais. 

  pvz.:    Math.random(); ---------->random skaiciaus generavimas

  pvz.:   (45.98542).toFixed(3) ----------> grazins 45.985; Naudojamas apvalinant skaicius (gale skliaustuose nurodoma kiek skaiciu po kablelio bus apvalinama)
*/


let number = 50.1654654

console.log(number.toFixed(4)); // parasys 4 skaicius po kablelio
console.log(Math.floor(number)); // apvalins i apacia
console.log(Math.random() * number); // sugeneruos random skaiciu
console.log(number.toString()); //pakeis i zodine reiksme
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Math.pow(5,2));
console.log(".................."); // ju yra daug

//galima juos tarpusavyje maisyti


console.log((Math.random() * number).toFixed(3));  // sugeneruosim random skaiciu ir parasysim ji su 3sk po kablelio


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math - Math/number Metodai


//          String metodai

/*
Tai funcijos, kurios padeda atlikti veiksmus su duotuosiomis zodinemis reiksmemis.
Tam tikriems metodams parametrai reikalingi, kitiems ne.

*/

let zodis = "Labas  .     654   .  asd          B";

//String galime traktuoti kaip zodziu masyva

console.log(zodis.split("")); //isspausdins kiekviena raide
console.log(zodis.trim()); // panaikins tuscius tarpus
console.log(zodis.trim().split("")); //sutrimins ir tada splintins
console.log(zodis[0]); //grazins L raide
console.log(zodis.charAt(0)) //tasa pats kaip -> console.log(zodis[0])
console.log(zodis.length); // nurodo kiek raidziu simboliu sudaro string kintamaji
console.log(zodis.charAt(zodis.length-1)); //grazins paskutine raide
console.log(zodis.includes("s")); // ar zodyje yra s raide. Jei taip, grazins true
console.log(zodis.slice(5,10)); // grazins simbolius tarp 5 ir 10 pozicijos
console.log(zodis.replace(".", ",")); // taska keis kableliu. replaceAll keistu visus
console.log(zodis.concat(',', 'labas', zodis)) //prideda reiksmes
console.log(zodis.toUpperCase());

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//          RegExp - siame kurse nelabai verta mokyis
/*
RegExp skirti rasti patternams. Pvz ar stringe yra a raide
*/


//Number:
//  1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją console() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).
  console.log("--------------------------------------------------------------------------------------------------------------------------------");

  let milkPrice = 2;

  console.log(Number.isInteger(milkPrice)); //true, nes sveikasis skaicius


  function arReikesCentu (arSkaiciusSveikas){   //sukurta funkcija su parametru
    if (Number.isInteger(arSkaiciusSveikas)){   //jei skaicius yra sveikasis
      console.log("centu nereikes")             //jei true - console log isvesti true(centu nereikes)
                                                    
    } else{                         
      console.log("centu reikes");              //jei false - cosole.log isvesti false (centu reikes)

    }
    console.log(milkPrice.toFixed(2));          // papildoma milkPrice 2 skaaiciais po kablelio
  };

arReikesCentu(milkPrice);                       //funckijos iskvietimas su milkPrice kintamuoju

console.log("--------------------------------------------------------------------------------------------------------------------------------");



//  2) Pakoreguok pirmą pratimą, kad console taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).

// 2uzdavinys 87 eilute







//  3) Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trimis skaičias po kablelio,
// antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).

let uzduotis3 = document.querySelector("#kainaDegalai"); //selektinama visa sekcija
console.log(uzduotis3); //patikrinam ar paselektino

uzduotis3.innerHTML += //pridedam h1, kur bus vedamas atsakymas
`
<h1 class="hello"></h1>
`

let suma = document.querySelector(".hello");
console.log(suma)

uzduotis3.children[0].addEventListener('submit', (e)=>{ //pradedam ivyki, po kurio paspaudus submit nutiks veiksmai apacioje
e.preventDefault(); //nesirestartus
console.dir(e); //paziurim ar po submit ivyksta ivykis
kaina = document.getElementById("kaina").value; //selektinama kaina, kaip skaicius
kiekis = document.getElementById("kiekis").value; //selektinami degalai, kaip skaicius

suma.textContent = kaina*kiekis // kad gautume suma, reikia sukurto elemento(suma), kurio viduje yra kazkoks contentas prilyginti kainos ir degalu daugybai

});





//String:
//  1) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - console). Jei sveikas, po apačia 
//sukurk h1 elementą, kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
/*
let vardas = "Lukas";

let skaicius = 5;

function sukurkH1Elementa (vardas, kiek){
  if (Number.isInteger(kiek)){              //
    console.log("skaicius sveikas");
    for(i = 0; i < kiek; i++){
      //sukurti h1 elementa
    }
  } else{
    console.log("skaicius nera sveikas");
  }
}
*/


//.repeat()

//  2) Sukurk input, kur vartotojas įves savo vardą. Įvedus - console'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

//(zodis.length);

//  3) Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.


//  4) Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis. Jeigu žodžių daugiau negu du, tuomet antrąjį, trečiąjį ir visus likusius išvesti į antrąjį h1 laukelį.

//function fullNameSplit(fullname){ // 1 pilna varda turi isskleisti i dvi dalis
//  console.log(fullname.indexOf(" "));         //su index of - ties kuria vieta ranamdas pirmas tarpelis (nes nurodeme sklaisutusoe reiskem). ties 5 pozicija baigiasi primas zodis
//  
//  let = firstSpace = full.indexOf(' ');
//  let name1 = fullName.slice(0, firstSpace);
//  let name2 = fullname.slice(firstSpace);
//  console.log(name1 + '-----' + name2); //pasistestuoti su +1 po firstspace
//}


//let kaGaunam = fullNameSplit("Rokas Banaitis trečiasis");  //kvietimas funkcijos, su tokiais duomenimis



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects


                                                                             //KONSPEKTAI

//                                                                          Number METODAI
/*

.isFinite() - tikrina ar paskutine kintamojo reiksme yra skaicius. Jei tai skaicius, grazina true. Jei ne skaicius arba 0, grazina false

.isInteger() - tikrina ar reiskme yra sveikasis skaicius. Jei reiksme yra sveikasis, grazina true, jei ne - false

.isNaN() - tikrina ar reiksme yra NaN (not a number). Jei reiksme yra Nan, grazina true, jei ne - false

.isSafeInteger() - tikrina ar skaicius yra sveikasis. grazina true, false

.parseFloat() - paima skaiciu, esanti "string" kintamajame. paims pilna skaiciu (jei kaszkas yra po kablelio) . pvz 13.12, paims 13.12

.parseInt() - paima skaiciu, esanti "string" kintamajame ir pavercia ji skaiciumi. Nepaims skaiciu po kablelio. pvz 13.12 -> 13

.toExponential() - 

.toFixed() - parasys nurodyta skaiciu po kablelio

.toLocaleString() -

.toPrecision() - is visos skaiciu eilues parasys tik tiek skaicu, kiek ivesta skliaustusoe

.toString - pavercia number i string

.valueOf() - kaip ir to.String?




                                                                            String Metodai

!charAt() - grazina nurodytos string kintamojo pozicijos raide      

charCodeAt() - grazina nurodytos string kintamojo pozicijos koda (unicode), kuris yra skaicius (apverstas charAt?)

codePointAt() - grazina nurodytos string kintamojo pozicijos koda (unicode), kuris yra skaicius

!concat() - apjungia du stringus

endsWith() - tikrina ar ar reiksme baigiasi "tinkamai". Jei baigiasi tinkamai, grazina true, jei ne - false

includes() - tikrina ar vieno kintamojo reiksme yra kitame kintamajame

indexOf() - tikrina, kokia string elemento pozicija nuo pradzios. grazinamas neigiamas skaicius zymi, kad nera tokios reiksmes ir grazina false. ties kuria vieta ranamdas pirmas tarpelis

lastIndexOf() - tikrina, kokia string elemento pozicija nuo galo. grazinamas neigiamas skaicius zymi, kad nera tokios reiksmes ir grazina false

.prototype.localeCompare() -  grazina skaiciu

.match() - tikrina, ar yra sutampanciu reiksmiu

.matchAll()

.normalize()

.padEnd()

.padStart()

.raw()

.repeat() - nurodoma, kiek kartu atkartoti pateiktus duomenis

.replace() - pakeicia nurodytas reiksmes

.replaceAll()

.search() - iesko pasiskartojancios reiksmes ir grazina pozicija

.slice() - grazina simbolius tarp nurodytu poziciju

.split() - atskiria reiksmes

.startsWith() - tikrina ar string prasideda su nurodyta reiksme

.substring() -gali grazinti dali zodzio. nurodomos pozcijos ka grazinti

.toLocaleLowerCase() - grazina string raides mazosiomis, pritaikant en-us ir tr

.toLocaleUpperCase() - grazina string raides didziosiomis, pritaikant en-us ir tr

.toLowerCase() - grazina string i mazasias raides

.toString() - grazina i string kintamaji (pvz gal is esancio objekte?)

.toUpperCase() - visus i didziasias raides

.trim() - istrina tarpelius pries ir po string

.trimEnd() - istrina tarpelius po string

.trimStart() - istrina tarpelius pries string

.valueOf() - grazina pirmine string reiksme?

                                                                    Math metodai

Math.abs() - grazina teikiama skaiciaus reiksme

Math.acos() - 

Math.acosh()

Math.asin()

Math.asinh()

Math.atan()

Math.atan2()

Math.atanh()

Math.cbrt()

Math.ceil() - suavalina iki lubu

Math.clz32()

Math.cos()

Math.cosh()

Math.exp()

Math.expm1()

Math.floor() - suapvalina iki lubu

Math.fround()

Math.hypot()

Math.imul()

Math.log()

Math.log10()

Math.log1p()

Math.log2()

Math.max() -suranda didziausia skaiciu

Math.min() - suranda maziausia skaiciu

Math.pow()

Math.random() - is duotu skaiciu isveda random

Math.round()

Math.sign()

Math.sin()

Math.sinh()

Math.sqrt()

Math.tan()

Math.tanh()

Math.trunc()


*/

































