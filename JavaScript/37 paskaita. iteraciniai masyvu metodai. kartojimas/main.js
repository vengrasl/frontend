// Filter
//   syntax:
//     filter((element, index, array) => { ... });
//   pvz:
//     items.filter( item => item > 10);
//   Ką daro:
//     Pereina per kiekvieną masyvo elementą ir jį prafiltruoja (taip kaip nurodyta iškviečiamojoje funkcijoje) ir sugrąžina tik tuos, kurie atitiko filtrą.
//
// Reduce
//   syntax:
//     reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue);
//   pvz:
//     items.reduce((total, current) => {total + current}, 0);
//   Ką daro:
//     Sudeda visus masyvo elementus rekursijos būdu. Galima nustatyti pradinę reikšmę(nuo kokio skaičiaus skaičiuos).


                                                                              // JS array filter_reduce.txt
//filter, map
console.groupCollapsed('2 uzduotis. filter, map, reduce');
{

// 1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]

const food = [
  {
  id: 0,
  name: "burger",
  inStock: true,
  primeCost: 2,
  cost: 5,
  orders: 2
  },
  {
    id: 1,
    name: "fish",
    inStock: false,
    primeCost: 3,
    cost: 7,
    orders: 3
  },{
    id: 2,
    name: "pizza",
    inStock: true,
    primeCost: 0.9,
    cost: 5,
    orders: 10
  },{
    id: 3,
    name: "salad",
    inStock: true,
    primeCost: 0.3,
    cost: 1,
    orders: 8
  },{
    id: 4,
    name: "Sandwich",
    inStock: false,
    primeCost: 1,
    cost: 2,
    orders: 6
  },{
    id: 5,
    name: "Steak",
    inStock: true,
    primeCost: 3,
    cost: 7,
    orders: 0
  },{
    id: 6,
    name: "Bread",
    inStock: true,
    primeCost: 0.3,
    cost: 1,
    orders: 0
  },{
    id: 7,
    name: "french fries",
    inStock: false,
    primeCost: 0.5,
    cost: 3,
    orders: 2
  },{
    id: 8,
    name: "Shrimp",
    inStock: true,
    primeCost: 4,
    cost: 10,
    orders: 7
  },{
    id: 9,
    name: "Rice",
    inStock: true,
    primeCost: 2,
    cost: 2.5,
    orders: 3
  },{
    id: 10,
    name: "Spaghetti",
    inStock: false,
    primeCost: 1,
    cost: 3,
    orders: 5
  },{
    id: 11,
    name: "Sausages",
    inStock: true,
    primeCost: 1,
    cost: 2.5,
    orders: 0
  },{
    id: 12,
    name: "Apple Juice",
    inStock: true,
    primeCost: 1,
    cost: 2.5,
    orders: 12
  },{
    id: 13,
    name: "Grape Juice",
    inStock: false,
    primeCost: 1,
    cost: 2.6,
    orders: 10
  },{
    id: 14,
    name: "Pie",
    inStock: true,
    primeCost: 1.2,
    cost: 4,
    orders: 2
  }
]

// 2.1) Naudojant filter - išfiltruoti tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje.

const isTheFoodInStock = food.filter(item => item.inStock === true);
console.log(isTheFoodInStock);

// 2.2) Naudojant map ir 2.1 masyvą - sukurti naują masyvą, kuriame būtų suskaičiuotas ir išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje.

const profit = isTheFoodInStock.map(item => item.cost - item.primeCost);
console.log(profit);

//2.3) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje. (galima sukurti kelis užsakymus)

const FoodOrderList = food.map(item => `${item.name} order value: ${item.orders}`);
console.log(FoodOrderList)

//   2.4) Naudojant reduce - suskaičiuoti kiek pelno suteiks 2.3 masyvo užsakymas ir tai atvaizduoti konsolėje. (arba užsakymai, jei 2.3 dalyje sukūrėte keletą užsakymų)

const foodProfit = food.reduce((total, food) => total + ((food.cost - food.primeCost)) * food.orders, 0);
console.log(foodProfit);


//   2.5) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje.

const foodOrdersPrice = food.map(item => `${item.name} orders: ${item.orders}. total cost is: ${item.orders*item.cost}`);
console.log(foodOrdersPrice)

}
console.groupEnd('');


//regex, filter, reduce
console.groupCollapsed('regex, filter, reduce')
{
// 3) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())

 const createArray = (a, b, c) => {
   let createdArray = [];
   for (i = 0; i < a; i++) {
    createdArray.push(Math.floor(Math.random() * (c - b + 1)) + b);
  }
  return createdArray;
}


console.log(createArray(10, 1, 5))


// 4) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).

let stringArray = (string) => {
  string = string.replace(/[,|.|?|!]/g,"") 
 return string.split(' ');
}

console.log(stringArray('Ar gerai? Taip, sekasi gerai. kaip tau?'));


// 5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.


let newArr = createArray(10, 1, 10);

let filteredNewArr = newArr.filter(item => item % 2 == 0)

console.log(filteredNewArr);

// 6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.

let oddNumber = newArr.filter(item => item % 2 !== 0)
console.log(oddNumber);

// 7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.

let integerNumbers = newArr.filter(item => Number.isInteger(item));
console.log(integerNumbers)

// 8) Sukurti funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).

let filterFunction = (array, a, b) => {
  return array.filter(item => {
  return item >= a && item <= b});
}
//console.log(filterFunction(newArr)) 

// 9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.

let arraySome = stringArray('Ar gerai? Taip, sekasi gerai. kaip tau?');

console.log(arraySome)

const capitalLetter = arraySome.filter(item => item[0] == item[0].toUpperCase())
console.log(capitalLetter)


// 10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.

const lowerLetter = arraySome.filter(item => item[0] == item[0].toLowerCase())
console.log(lowerLetter);

// 11) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.

const letterStart = (letter) => arraySome.filter(item => item[0] == letter.toLowerCase() || item[0] == letter.toUpperCase())
console.log(letterStart('t'));

// 12) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.

const letterEnd = (letter) => arraySome.filter(item => item.slice(-1) == letter.toLowerCase() || item.slice(-1) == letter.toUpperCase())

console.log(letterEnd('R'))

// 13) Naudojant reduce metodą suskaičiuoti 5'tos užduoties masyvo bendrą sumą.

let reduceFiftTask = filteredNewArr.reduce((total, number)=> total + number, 0)

console.log(reduceFiftTask);

// 14) Naudojant reduce metodą suskaičiuoti 6'tos užduoties masyvo bendrą sandaugą.

let multiplicationTask = oddNumber.reduce((total, number)=> total * number, 1)

console.log(multiplicationTask)

}
console.groupEnd('');

                                                                            // JS findIndex, find, some, every,



// FindIndex
//   Syntax:
//     findIndex((element, index, array) => { ... } )
//   Pvz:
//     const isLargeNumber = (element) => element > 13;
//   Ką daro:
//     Suranda ir grąžina indeksą to elemento esančio masyve, kuris pirmasis tenkina pateiktą salygą.
// 

// Find
//   Syntax:
//     find((element, index, array) => { ... } )
//   Pvz:
//     const found = array1.find(element => element > 10);
//   Ką daro:
//     Suranda ir grąžina tą masyvo elementą, kuris pirmasis tenkina pateiktą salygą.

// Some
//   Syntax:
//     some((element, index, array) => { ... } )
//   Pvz:
//     const even = (element) => element % 2 === 0;
//   Ką daro:
//     Tikrina ar bent vienas elementas masyve tenkina pateiktą salygą.

// Every
//   Syntax:
//     every((element, index, array) => { ... } )
//   Pvz:
//     const isBelowThreshold = (currentValue) => currentValue < 40;
//   Ką daro:
//     Tikrina ar visi elementas masyve tenkina pateiktą salygą.

// Includes
//   Syntax:
//     includes(searchElement, fromIndex)
//   Pvz:
//     pets.includes('cat');
//   Ką daro:
//     Patikrina ar masyve yra bent vienas nurodytas elementas ir grąžina true arba false.



  
//index of
console.groupCollapsed('indexOF');
{

// 1) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didenis už A (A - funkcijos parametras skaičius).

const findIndexLargerThanA = (array, a) => array.findIndex(number => number > a);
console.log(findIndexLargerThanA([1, 2, 3, 4, 5, 6], 2)); //ats 3, nes sk 2 antroje pozicijoje

// 2) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A (A - funkcijos parametras skaičius).

const findIndexLesserThanA = (array, a) => array.findIndex(number => number < a);
console.log(findIndexLesserThanA([1, 2, 3, 4, 5, 6], 2)); //ats 0, nes 1 0pozicijoje

// 3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.

const findIndexLowerLettter = (array) => array.findIndex(firstletter => firstletter.charAt(0) == firstletter.charAt(0).toLowerCase())
console.log(findIndexLowerLettter(['String', 'Another', 'third'])) //ats 2, nes 'third 2 pozic

// 4) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja raide.

const findIndexUpperLetter = (array) => array.findIndex(item => item.charAt(0) == item.charAt(0).toUpperCase())
console.log(findIndexUpperLetter(['String', 'Another', 'third'])) // ats 0

// 5+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

const findIndexLesserThanALargerThanB = (array, a, b) => array.findIndex(item => item < a && item > b);
console.log(findIndexLesserThanALargerThanB([1, 2, 3, 4, 5, 6], 5, 2)) // b < sk < a;  ats: 2 pozicija. Jis mazesnis uz 5, didesnis uz 2

// 6++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

const findIndex = (array, a, b) => array.findIndex(item => item.charAt(0) == item.charAt(0).toLowerCase() && item.length > a && item < item.length < b);
console.log(findIndex(['as', 'Zodis','lele', 'dar vienas', "Trecias"], 2, 5));

}
console.groupEnd('');


//find
console.groupCollapsed('find');
{
// 7) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra didenis už A (A - funkcijos parametras skaičius).
const firstLetterGreater = (array, a) => array.find(letter => letter > a)
console.log(firstLetterGreater([1,2,3,4,5,6,7,8,9,10], 2)) //ats 3


// 8) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
const firstletterLesser = (array, a) => array.find(letter => letter < a);
console.log(firstletterLesser([1,2,3,4,5,6,7,8,9,10], 2)); //ats 1


// 9) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda mažąja raide.
const findFirstLowerLetter = (array) => array.find(letter => letter.charAt(0) == letter.charAt(0).toLowerCase());
console.log(findFirstLowerLetter(['Zodis', 'dar vienas', "trecias"]))

// 10) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja raide.
const findFirstCapitalLetter = (array) => array.find(letter => letter.charAt(0) == letter.charAt(0).toUpperCase());
console.log(findFirstCapitalLetter(['Zodis', 'dar vienas', "Trecias"]));

// 11+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
const findSmallerBigger = (array, a, b) =>array.find(number => number < a && number > b);
console.log(findSmallerBigger([1,2,3,4,5,6,7,8,9,10], 8, 6)) //ats 7. mazesnis uz 8, didesnis uz 6

// 12++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

const finalFind = (array, a, b) => array.find(word => word.charAt(0) == word.charAt(0).toLowerCase() && word.length > a && word.length < b);
console.log(finalFind(['as', 'Zodis','lele', 'dar vienas', "Trecias"], 2, 5))
}
console.groupEnd('');


//some
console.groupCollapsed('some');
{

// 13) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra didenis už A (A - funkcijos parametras skaičius).
const someLargerThanA = (array, a) => array.some(number => number > a);
console.log(someLargerThanA([10,20,30], 31)) //false


// 14) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A (A - funkcijos parametras skaičius).
const someLesserThanA = (array, a) => array.some(number => number < a);
console.log(someLesserThanA([10,20,30], 31)) //true


// 15) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda mažąja raide.
const someWordLowerCase = (array) => array.some(word => word.charAt(0) == word.charAt(0).toLowerCase())
console.log(someWordLowerCase(['Zodis', 'dar vienas', "Trecias"])) //true


// 16) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja raide.
const someWordUpperCase = (array) => array.some(word => word.charAt(0) == word.charAt(0).toUpperCase())
console.log(someWordUpperCase(['Zodis', 'dar vienas', "Trecias"])) // true


// 17+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
const someGreaterLesser = (array, a, b) => array.some(number => number < a && number > b);
console.log(someGreaterLesser([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 1)) // true.  mazesnis uz 3, didesnis uz 1


// 18++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
const someFinal = (array, a, b) => array.some(word => word.charAt(0) == word.charAt(0).toLowerCase() && word.length > a && word.length < b);
console.log(someFinal(['as', 'Zodis','lele', 'dar vienas', "Trecias"], 2, 10)) //true

}
console.groupEnd('');


//every
console.groupCollapsed('every');
{
// 19) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra didenis už A (A - funkcijos parametras skaičius).
const allLargerThanA = (array, a) => array.every((number => number > a));
console.log(allLargerThanA([10, 20, 30], 1)) //true


// 20) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A (A - funkcijos parametras skaičius).
const allLesserThanA = (array, a) => array.every((number => number < a));
console.log(allLesserThanA([10, 20, 30], 31)) //true


// 21) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda mažąja raide.
const everyFirstLetterLoweCase = (array) => array.every(word => word.charAt(0) == word.charAt(0).toLowerCase());
console.log(everyFirstLetterLoweCase(['Zodis', 'dar vienas', "Trecias"])); //false

// 22) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja raide.
const everyFirstLetterUpperCase = (array) => array.every(word => word.charAt(0) == word.charAt(0).toUpperCase());
console.log(everyFirstLetterUpperCase(['Zodis', 'dar vienas', "Trecias"])); //false

// 23+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
const everySmallerThanALargerThanB = (array, a, b) => array.every(number => number < a && number > b);
console.log(everySmallerThanALargerThanB([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11, 0)); //true

// 24++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius). 
const everyFinal = (array, a, b) => array.every(word => word.charAt(0) == word.charAt(0).toLowerCase() && word.length > a && word.length < b);
console.log(everyFinal(['as', 'zodis','lele', 'dar vienas', "trecias"], 0, 20)) //true
}
console.groupEnd('')


//includes
console.groupCollapsed('includes');
{
// 25) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė.
let random = [1,2,3,4,5,6,7,8,9,10]
const includesValue = (arrayValue) => random.includes(arrayValue);
console.log(includesValue(5))


// 26) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė, nuo pasirinkto indekso.

let strings = ['as', 'tu', 'jus'];

const includesString = (includeTheString, fromIndex) => {
  let stringsFromIndex = strings.slice(fromIndex)
  return stringsFromIndex.includes(includeTheString)
} 

console.log(includesString('tu', 1))

}
console.groupEnd('');


// forEach, Filter, Map, Sort
console.groupCollapsed('forEach, Filter, Map, Sort');
{

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


                                                      //forEach

// isvesti i konsole visus ages reiksmes (be funkcijos)
let allAges = ages.forEach(age => console.log(age));

//sukurti funkcija, kuri i konsole isves visas ages reiksmes
let justForEach = (array) => array.forEach(age => console.log(age))
justForEach(ages)

//sukurti funkcija, kuri i konsole isves visas "companies" kintamojo pavadinimus(name)
let forEachCompanyName = (array) => array.forEach(companyName => console.log(companyName.name)) //ComapnyName.name bus = companies.name
forEachCompanyName(companies)


                                                    //filter (pvz isrinkti vyresnius nei 10 metu)
//get 21 and older (be funkcijos)
let canDrink = ages.filter(age => age >= 21)
console.log(canDrink)

//get companies that lasted 10+ years (be funkcijos)
const lasted10Years = companies.filter(company => company.end - company.start > 10)
console.log(lasted10Years);

//get companies that lased +10 years su funkcija
const lamdaCompaniesLasted10Years = (lasted10years) => lasted10years.filter(element => element.end - element.start > 10)
console.log(lamdaCompaniesLasted10Years(companies));

//get 21 and younger su funkcija
let cantDrink = (ages) => ages.filter(age => age <= 21)
console.log(cantDrink(ages))


//filter retail companies su funkcija
let findRetailCompanies = (companyCategory) => companyCategory.filter(element => element.category === "Retail")
console.log(findRetailCompanies(companies))


//filter all companies that started 1980's, ended 1989's su funkcija
let findAllCompaniesByDate = (array) => (array.filter(element => element.start >= 1980 && element.end <= 1989));
console.log(findAllCompaniesByDate(companies))


                                                        //map (leidzia sukurti nauja array)
// create array of company names
const companyNames = companies.map(company => company.name)
console.log(companyNames)

//create a function that creates an array of company start
let createCompanyArrayWithStartDate = (array) => (array.map(element => element.start));
console.log(createCompanyArrayWithStartDate(companies));

//create an array of companies name and their start-end period
const companyNamebyStartEnd = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyNamebyStartEnd)

//istraukti sakni is ages kintamojo reiksmiu
const agesSquare = ages.map(age => Math.sqrt(age))
console.log(agesSquare)

//prie ages reiksmiu prideti po 10
const agesPlus10Years = ages.map(item => item + 10);
console.log(agesPlus10Years)

                                                        //sort (rikiuoja)
// isrikiuoti companies pagal start metus
const companiesbystart = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(companiesbystart);

// sort ages
const allAgesSorted = ages.sort((a, b) => a - b);
console.log(allAgesSorted)
                                                        
                                                       //reduce

//add all the ages together

let ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum)

// get total years for all companies

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears)

}
console.groupEnd('');