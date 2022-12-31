//                                                                                         NUMBER METODAI
console.groupCollapsed('number metodai')
{

let number = 646435435

//Number.isFinite() - tikrina ar paskutine kintamojo reiksme yra skaicius. Jei tai skaicius, grazina true. Jei ne skaicius 0, infinity, -infinity grazina false
let isNumberFinite = Number.isFinite(number)
console.log(isNumberFinite) //true

//Number.isInteger() - tikrina ar reiskme yra sveikasis skaicius (be sk. po kablelio) Jei reiksme yra sveikasis, grazina true, jei ne - false
let isInteger = Number.isInteger(number);
console.log(isInteger) //true

//.isNaN() - tikrina ar reiksme yra NaN (not a number). Jei reiksme yra NaN, grazina true, jei ne - false
let isNumberNaN = Number.isNaN(number);
console.log(isNumberNaN) //false. tai skaicius

//.isSafeInteger() - tikrina ar skaicius yra sveikasis (ar papuola i IEEE-754 ribas? per ilgas sk grazins false..). grazina true, false
let numberIsSafeInteger = Number.isSafeInteger(number);
console.log(numberIsSafeInteger);

//.parseFloat() - paima skaiciu, esanti "string" kintamajame ir ji padaro number. paims pilna skaiciu (jei kaszkas yra po kablelio) . pvz 13.12, paims 13.12
let numberInString = '555.55555555'
let numberPasrseFloat = Number.parseFloat(numberInString);
console.log(numberPasrseFloat);

//.parseInt() - paima skaiciu, esanti "string" kintamajame ir pavercia ji skaiciumi. Skaicius po kablelio pasalins
let numberPrseInt = Number.parseInt(numberInString);
console.log(numberPrseInt);

//.toExponential() - naudojamas su labai dideliais skaicias. nurodo kiek sk po kablelio palikti skaiciu ir ji kelia laipsniu?
let numberToExponential = number.toExponential(2);
console.log(numberToExponential)

//.toFixed() - parasys nurodyta skaiciu po kablelio ir suapvalina paskutini sk
let numberFixed = 1.555555555;
let numberToFixed = numberFixed.toFixed(3);
console.log(numberToFixed); //1.556

//.toLocaleString() - konvertuoja sk del patogumo tarp skirtingu saliu zmoniu (`lt-LT`), (en-EN)....


//.toPrecision() - is visos skaiciu eilues parasys tik tiek skaicu, kiek ivesta skliaustuose (ir likusia dali pakels kvardatu?)
let numberToPrecision = number.toPrecision(1);
console.log(numberToPrecision);

//.toString - pavercia number i string
let numberToString = number.toString();
console.log(numberToString)

//.valueOf() - patikrina skaiciaus reiksme
let numberValueOf = number.valueOf();
console.log(numberValueOf)
}
console.groupEnd('');


//                                                                                         STRING METODAI


console.groupCollapsed('string metodai');
{
let string = "Some string"
let string2 = "Another string"

//charAt() - grazina nurodytos string kintamojo pozicijos raide 
let stringCharAt = string.charAt(0);
console.log(stringCharAt); //S

//charCodeAt() - grazina nurodytos string kintamojo pozicijos unicode
let stringCharCodeAt = string.charCodeAt(0);
console.log(stringCharCodeAt); //83

//codePointAt() - grazina nurodytos string kintamojo pozicijos koda (unicode), kuris yra skaicius
let stringCodePointAT = string.codePointAt(0);
console.log(stringCodePointAT); //83

//concat() - apjungia du stringus i viena
let stringconcat = string.concat(string2);
console.log(stringconcat);

//endsWith() - tikrina ar ar reiksme baigiasi "tinkamai". Jei baigiasi tinkamai, grazina true, jei ne - false
let stringEndWith = string.endsWith('g');
console.log(stringEndWith) //true, nes bagiasi g

//includes() - tikrina ar vieno kintamojo reiksme yra kitame kintamajame
let StringIncludes = string.includes('S');
console.log(StringIncludes) //true, nes yra S raide

//indexOf() - tikrina, kokia pirma string elemento vieta nuo pradzios. grazinamas neigiamas skaicius zymi, kad nera tokios reiksmes.
let stringIndexOf = string.indexOf('S');
console.log(stringIndexOf) //0

//lastIndexOf() - tikrina, kokia paskutine string elemento vieta nuo pradzios. grazinamas neigiamas skaicius zymi, kad nera tokios reiksmes ir grazina false
let stringLastIndexOf = string2.lastIndexOf('t');
console.log(stringLastIndexOf); //9

//.localeCompare() -  lygina 2 stringus? Kuris po kurio eina?
let stringLocalCompare = string.localeCompare(string2)
console.log(stringLocalCompare)

//.match() - tikrina, ar yra sutampanciu reiksmiu. grazina pirma
let stringMatch = string.match('o');
console.log(stringMatch);

//.matchAll() - 
// let stringMatchAll = string2.matchAll("t");
// console.log(stringMatchAll) 

//.normalize()
// let someString = "hi   hey"
// let stringNomalize = someString.normalize();
// console.log(stringNomalize)

//.padEnd() - nurodo, kur baigsis string ir kokia reiksme pridedama
let stringPadEnd = string.padEnd(13, '.')
console.log(stringPadEnd); // Some string..

//.padStart() - nurodo kaip prasides string (kokia reiksme) ir kiek uzims vietos visas string
let stringPadStart = string.padStart(20, '.')
console.log(stringPadStart); // .........Some string

//.raw() - pvz. gali nurodyti kelia i failus

//.repeat() - nurodoma, kiek kartu atkartoti pateiktus duomenis
let stringRepeat = string.repeat(2);
console.log(stringRepeat) // Some stringSome string

//.replace() - pakeicia pirma nurodyta reiksme
let stringReplace = string.replace('S', 's');
console.log(stringReplace);

//.replaceAll() - pakeicia visas nurodytas reiksmes
let string2ReplaceAll = string2.replaceAll('t', 'T');
console.log(string2ReplaceAll) //AnoTher sTring

//.search() - iesko nurodytos reiksmes ir grazina pozicija
let stringSearch = string.search('t');
console.log(stringSearch) //6

//.slice() - grazina reiksmes tarp nurodytu poziciju
let stringSlice = string.slice(1, 3);
console.log(stringSlice) //om

//.split() - atskiria reiksmes
let stringsplit = string.split(' '); //siuo atveju atskirs string per tarpa
console.log(stringsplit); // ['Some', 'string']

//.startsWith() - tikrina ar string prasideda su nurodyta reiksme
let stringStartswith = string.startsWith('S');
console.log(stringStartswith) //true

//.substring() -gali grazinti dali zodzio. nurodomos pozcijos ka grazinti. skiriasi nuo slice, nes neleidzia imti nuo galo
let stringSubstring = string.substring(1, 3);
console.log(stringSubstring); //om

//.toLocaleLowerCase() - grazina string raides mazosiomis, pritaikant en-us ir tr (del patogumo kitu saliu asmenims)
const dotted = 'İstanbul';
console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`); // expected output: "i̇stanbul"
console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`); // expected output: "istanbul"

//.toLocaleUpperCase() - grazina string raides didziosiomis, pritaikant en-us ir tr (del patogumo kitu saliu asmenims)
const city = 'istanbul';
console.log(city.toLocaleUpperCase('en-US')); // expected output: "ISTANBUL"
console.log(city.toLocaleUpperCase('TR')); // expected output: "İSTANBUL"


//.toUpperCase() - visus i didziasias raides
let stringToUpperCase = string.toUpperCase();
console.log(stringToUpperCase);

//.toLowerCase() - grazina string i mazasias raides
let stringToLowerCase = string.toLowerCase();
console.log(stringToLowerCase);

//.toString() - pavers i string
let something = 2
let stringTostring = something.toString()
console.log(stringTostring) // '2'

//.trim() - istrina tarpelius pries ir po string
let someString2 = ' yeyey          ';
let stringTrim = someString2.trim('');
console.log(stringTrim);

//.trimEnd() - istrina tarpelius po string
let stringTrimEnd = someString2.trimEnd('');
console.log(stringTrimEnd);

//.trimStart() - istrina tarpelius pries string
let stringTrimStart = someString2.trimStart('');
console.log(stringTrimStart);

//.valueOf() - grazina pirmine string reiksme is objekto?

const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.valueOf());
// expected output: "foo"

}
console.groupEnd('');

//                                                                                          UZDUOTIS

// Pateikiamas 9 aukštų daugiabučio parduodamų butų sąrašas.
// Kiekviename laiptinės aukšte yra po 3 butus.
// Daugiabučio laiptinių skaičius yra mažesnis, nei 20.

// Duomenys tokie: buto numeris, bendras plotas, kambarių skaičius, pardavimo kaina, telefono numeris. Duomenys talpinami faile 'duomenys.json'. (reiktų bent 10 butų)

// Suraskite butus, kurie turi nurodytą kambarių skaičių, yra nurodytame aukšte ir kurių kaina neviršija nurodytos kainos, ir juos išveskite į ekraną/konsolę/failą 'atsakymas.json'.

// Aukšto numeris nurodomas intervalu [nuo, iki]. Aukšto numeris išskaičiuojamas iš buto numerio. Butų numeriai yra iš aibės [1, laiptinių skaičius daugintas iš 27].

//ivedus kambariu skaiciu (nuo 2 iki 4), auksto numeri (nuo 1 iki 9), kaina (iki kazkiek) -> grazininamas buto nr, plotas, kamb sk, kaina, tel.nr

let form = document.querySelector('form');

let roomsMin = document.querySelector('#appartmentRoomsMin');

let roomsMax = document.querySelector('#appartmentRoomsMax');

let floorMin = document.querySelector('#appartmentFloorMin');

let floorMax = document.querySelector('#appartmentFloorMax');

let appartmentPrice = document.querySelector('#appartmentPrice');

let buttonToSeacrchAppartment = document.querySelector('button');



  fetch("./duomenys.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    console.log(data.appartments)
    let filtered = lookforAppartment(data.appartments, 2, 4, 5, 9, 186000); //parametrai kaip input.values
    console.log(filtered)


  })

  //funkcija
  const lookforAppartment = (array, numberOfRoomsMin, numberOfRoomsMax, floorMin, floorMax, priceMax) => {
    return array.filter((element) => {
      const floor = appartmentFloor(element.appartmentNumber)
      return element.numberOfRooms >= numberOfRoomsMin &&
        element.numberOfRooms <= numberOfRoomsMax &&
        floor >= floorMin &&
        floor <= floorMax &&
        element.price <= priceMax
    })
  }

  const apts_on_floor = 3 //butu 1 aukste
  const apts_on_stairway = 27;  //butu laiptineje

  function appartmentFloor(apt_nr) {
    let stairway_nr = Math.floor( ( apt_nr - 1 ) / apts_on_stairway) // laptine = buto nr / kiek is viso butu laiptineje
    console.log(stairway_nr)
		let first_apt_on_stairway = stairway_nr * apts_on_stairway;
    console.log(first_apt_on_stairway)
		let apt_nr_on_stairway = apt_nr - first_apt_on_stairway;
  	let floor = Math.floor( ( apt_nr_on_stairway - 1 ) / apts_on_floor);
    return floor + 1
  }


