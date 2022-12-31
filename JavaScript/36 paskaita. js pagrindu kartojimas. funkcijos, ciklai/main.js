/*                                            PAGRINDAI
1) Kintamieji:
  string
  number
  boolean
  array
  object


2) Operatoriai
  Matematiniai (+ trumpiniai)
  Palyginimo
  Loginiai (||, &&)


3) Sąlygos
  if (if else, if elseIf else...)
  switch
  ternary (sąlyga? tiesa:melas) (salyga&&tiesa)

4) Ciklai
  for (for in; for of)
  while (do while)
  iteraciniai masyvu metodai (forEach, map, filter, reduce)

5) Funkcijos
  paprastas funkcijos deklaravimas (senasis budas)
  anonimines 
  arrow/lambda

6) Metodai
  Number/Math
  String
  Array
  Object  

---7)  Destrukturizavimas---
*/


//                                                                js.array,string,number

console.groupCollapsed('js.array,string,number');

{

// 1) Pasirašyti / susikurti string kintamąjį.

let string = 'string';

// 2) Pasirašyti / susikurti number kintmąjį.

let number = 1;

// 3) Pasirašyti / susikurti masyvą tik su string kintamaisiais.

let stringArray = ["first string", 'second string', 'Me'];

// 4) Pasirašyti / susikurti masyvą tik su number kintamaisiais.

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 5) Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais.

let stringAndNumberArray =  ["first string", 'second string', 1, 2, 3, 4, 5]

// 6) Išvesti pirmąją 1'os užduoties kintamojo raidę.

let StringFirstLetter = string.charAt(0);
console.log(StringFirstLetter);

// 7) Išvesti paskutinę 1'os užduoties kintamojo raidę.

let StringLastLetter = string.charAt(string.length-1);
console.log(StringLastLetter);

// 8) Išvesti viduriniąją 1'os užduoties kintamojo raidę.

let StringMiddleLetter = string.charAt(string.length / 2);
console.log(StringMiddleLetter);

// 9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę (kelintąją). Pvz.:(uzd9("labas", 3) => "b").

let greetFunction = (string, n) => {
  console.log(string.charAt(n - 1));
}

greetFunction(string, 5);

// 10) Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius.

let ifNumberIsEven = number % 2 == 0;

console.log(ifNumberIsEven);

// 11) Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius.

let ifNumberIsNotEven = number % 2 !== 0;

console.log(ifNumberIsNotEven);

// 12) Patikrinti ar 2'os užduoties kintamasis yra sveikasis skaičius.

let ifNumberIsInteger = Number.isInteger(number);

console.log(ifNumberIsInteger);

// 13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius. Pvz.: (uzd13(5) => nelyginis);

let checkIfNumberIsInteger = (number) => {
  console.log(number % 2 == 0);
}

checkIfNumberIsInteger(101)


// 14) Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.

let newStringArray = [];

for(i = 0; i < stringArray.length; i++){
  if(stringArray[i].length > 5){
    newStringArray.push(stringArray[i]);
  }
}

console.log(newStringArray);



// 15) Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.

let newStringLessThanEight = [];

for(i = 0; i < stringArray.length; i++){
  if(stringArray[i].length < 8){
    newStringLessThanEight.push(stringArray[i]);
  }
}

console.log(newStringLessThanEight);


// 16+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.

let StringArrayFirstLetters = (array) =>{
  for(i = 0; i < array.length; i++){
    console.log(array[i].charAt(0))
  }
}

StringArrayFirstLetters(stringArray);



// 17+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.

let StringArrayLastLetters = (array) =>{
  for(i = 0; i < array.length; i++){
    console.log(array[i].charAt(array[i].length - 1));
  }
}

StringArrayLastLetters(stringArray);


// 18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas")

let stringArrayLongerThanAShorterThanB = (array, a, b) => {
  let specialArray = []
  for(i = 0; i < array.length; i++){
    if(array[i].length > a && array[i].length < b){
      specialArray.push(array[i])
    }
  }
  console.log(specialArray);
}

stringArrayLongerThanAShorterThanB(stringArray, 4, 20);


// 19) Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.

numberArrayValue = 0

for(i = 0; i < numberArray.length; i++){
 numberArrayValue = numberArrayValue + numberArray[i]
}
console.log(numberArrayValue)

// 20) Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.


let numberArrayEveryFourthValue = 0

for(i = 0; i < numberArray.length; i = i + 2){
  numberArrayEveryFourthValue = numberArrayEveryFourthValue + numberArray[i]
 }
 console.log(numberArrayEveryFourthValue)



// 21+) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.


let everyFourthArrayNumber = (array, n) => {
  arrayValue = 0
  for(i = 0; i < array.length; i = i + n){
    arrayValue = arrayValue + array[i]
  }
  console.log(arrayValue);
}

everyFourthArrayNumber(numberArray, 3)



// 22++) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8], 3, false) => 3)



// 23) Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.


let task23NewStringArray = [];

let task23NewNumberArray = [];

for(i = 0; i < stringAndNumberArray.length; i++){
  if(typeof(stringAndNumberArray[i]) === 'string'){
    task23NewStringArray.push(stringAndNumberArray[i])
  } else{
    task23NewNumberArray.push(stringAndNumberArray[i])
  }
}
console.log(task23NewStringArray);
console.log(task23NewNumberArray);


}

console.groupEnd('');



//                                                          JS array,string methods practice
console.groupCollapsed('JS array,string methods practice');

{
//1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.

let masyvas = [1, 2, true, 3, 4, 5, false, 'zodis'];

function returnString (array){
  return array.toString() 
}
console.log(returnString(masyvas));


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)

let longNumber = 8435406840;

function printNumber(number) {
  var numberString = number.toString();
  var numberArray = numberString.split('');
  var result = '';
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      result += numberArray[i] + '-';
    } else {
      result += numberArray[i];
    }
  }
  console.log(result);
}
printNumber(longNumber);



//3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)

let someArrayforReverse = ['one', true, 10000]

function reverse (someArray) {

  let newsmth = [];
  
  for(i = someArray.length - 1; i >= 0; i--){
    newsmth.push(someArray[i])
  }
  return newsmth;
}

console.log(reverse(someArrayforReverse));


//4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).


function removeNumbers(array, ...numbers) {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    if (numbers.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }
  console.log(result);
}
removeNumbers([1, 4, 5, 6, 4, 8, 4, 5], 4, 6, 8);





//5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.

let minMaxNumbersInArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findMinMax(someNumberArray){
  console.log(Math.max(...someNumberArray));
  console.log(Math.min(...someNumberArray));   
}

findMinMax(minMaxNumbersInArray);


//6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.

let arrayOne = [1, 2, 3, 4, 5, true, "word", "differend word"];
let arrayTwo = [1, 3, 5, 180000, true, false, "word", "some sentence"];

function sameValues(arr1, arr2){
  let newArray = [];
  for(i = 0; i < arr1.length; i++){
    if(arr2.includes(arr1[i])){
      newArray.push(arr1[i]);
    }
  }
  console.log(newArray);
}

sameValues(arrayOne, arrayTwo);

//7) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])

let firstArray = ["a","b","c","d","e","f"];

let secondArray = [0, 3, 4];

function newArrayFromTwoDifferent(arr1, arr2){
  let newArray = [];
  for(i = 0; i < arr2.length; i++){
    newArray.push(arr1[arr2[i]]);
  }
  console.log(newArray);
}

newArrayFromTwoDifferent(firstArray, secondArray);



//8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.

let uniqueArray1 = [1, 2, 2, 3, 4, 4, 5, 5, 6, true, false, false, "word", "word", "another word", "some sentence"];


function uniqueData(arr1){
    let newArray = [];
    for(i = 0; i < arr1.length; i++){
      if(!newArray.includes(arr1[i])){
        newArray.push(arr1[i]);
      }
    }
    console.log(newArray);
  }
  
  uniqueData(uniqueArray1);



 // 9) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.

  let arrayNrOne = [1, 2, 3, 4, 5, true, false, "word", "haha"];

  let arrayNrTwo = [1, 3, 5, 6, 7, true, "word", "hehehe"];

  let arryNrThree = [1, 5, true, false, 'word', 'muahahahaha'];


  function sameValuesFromArrays(arr1, arr2, arr3){
    let newArray = [];
    for(i = 0; i < arr1.length; i++){
      if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
        newArray.push(arr1[i]);
        }
      }
    console.log(newArray)
  }

  sameValuesFromArrays(arrayNrOne, arrayNrTwo, arryNrThree);


  //10) Parašykte funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).

  let Numbersarray = [12, 54, 1, 65, 78, 91, 45];

  function findThirdLargestumber(array, ThirdMax){
    let sortArray = array.sort(function(a,b){return a-b});
    for(i = 0; i < sortArray.length; i++){
      return sortArray[sortArray.length - ThirdMax]; 
    }
  }
  console.log(findThirdLargestumber(Numbersarray, 3))

}

console.groupEnd('');

//                                                          JS ciklai ir funkcijos 2.txt

console.groupCollapsed('JS ciklai ir funkcijos');

{
// 1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.

let array = [1, 2, 3, 4, "hehe", true, false, "some word"];

for (element of array) {
  console.log(element);
}

// 2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.

for(i = 0; i < array.length; i = i + 3){
  console.log(array[i]);
}

// 3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.

let printEveryN = (array, n) => {
  for(i = 0; i < array.length; i = i + n){
    console.log(array[i])
  }
}

printEveryN(array, 2);


// 4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.

let numbersArrayForLoop = [1, 2, 3, 4, 5, 54, 55, 56, 57, 58, 0];

for(i = 0; i <= numbersArrayForLoop.length; i++){
  if(numbersArrayForLoop[i] >= 54){
    console.log(numbersArrayForLoop[i])
  }
}

// 5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.

let wordArray = ['apple', 'bannana', 'citrus', 'amazon']

let PrintElementsWithParticulareFirstLetter = (array, firstLetter) => {
  for(i = 0; i < array.length; i++ ){
    if(array[i].charAt(0) === firstLetter){
      console.log(array[i]);
    }
  }
}

PrintElementsWithParticulareFirstLetter(wordArray, 'a');

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).

let stringArray = ['c', 'a', 'b'];

for(i = 0; i < stringArray; i++) {
 console.log(stringArray.sort(function(a,b){return a.localeCompare(b)}))
}


// 7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.


let arrayOfNumbers = [102, 8, 25, 32, 48, 16, 17, 20, 8, 9, 100];

let arrayEvenNumbers = (array) => {
  let evenNumbers = [];

  for(i = 0; i < array.length; i++){
    if(array[i] %2 == 0){
      evenNumbers.push(array[i]);
    }
  }
  console.log(evenNumbers.sort(function(a, b){return b - a;}));
}

arrayEvenNumbers(arrayOfNumbers)

}

console.groupEnd('');




//                                                  JS kartojimas ir HigherOrderFunctions

console.groupCollapsed('JS kartojimas ir HigherOrderFunctions');

{

// 1.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A.

let someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayMoreThanA (array, a){
  let arrayBiggerThanA = [];
  for(i = 0; i < array.length; i++){
    if(array[i] > a){
      arrayBiggerThanA.push(array[i]);
    } 
  } 
  return arrayBiggerThanA
}

console.log(arrayMoreThanA(someArray, 5));


// 1.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B.

function arrayMoreThanAlessThanB(array, a, b){
  let arrayMoreThanAlessThanB = [];
  for(i = 0; i < array.length; i++){
    if(array[i] > a && array[i] < b){
      arrayMoreThanAlessThanB.push(array[i])
    }
  }
  return arrayMoreThanAlessThanB
}

console.log(arrayMoreThanAlessThanB(someArray, 2, 8))





// 1.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B ir yra lyginiai arba nelyginiai (true/false).

function arrayception(array, a, b){
  let arrayMoreThanAlessThanB = [];
  for(i = 0; i < array.length; i++){
    if(array[i] > a && array[i] < b && array[i] %2 == 0){
      arrayMoreThanAlessThanB.push(array[i])
    }
  }
  return arrayMoreThanAlessThanB
}


console.log(arrayception(someArray, 2, 8));

// Parašykite funkcija naudojant lambda ir  metodus, kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A.


let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arrowFirst = (array, a) => {
 return array.filter(element => {
  return element > a
 })
}
console.log(arrowFirst(newArr, 5))


// // Parašykite funkcija naudojant lambda ir  metodus, kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A bet mazesni nei B.

let arrowSecond = (array, a, b) => {
  return array.filter(element => {
    return (element > a && element < b)
  })
}

console.log(arrowSecond(newArr, 2, 6))


let arrowThird = (array, a, b) => {
  return array.filter(element => {
    return (element > a && element < b && element %2 == 0)
  })
}

console.log(arrowThird(newArr, 2, 6))



// 2.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 2.1, 2.2 ir 2.3 užduotis.

//2.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A.

let wordArray = ['pirmas zodis', 'antras', 'Du', 'nuirtoksilgasvienasdar'];

function arrayLenghtMoreThanA (array, a){
  let newArr = [];
  for(i = 0; i < array.length; i++){
    if(array[i].length > a){
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(arrayLenghtMoreThanA(wordArray, 3));



//2.1) Parašykite funkciją naudojant lambda, metodus, kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A.


let arrowTwoOne = (array, a) =>{
  return array.filter(element =>{
    return element.length > a
  })
}

console.log(arrowTwoOne(wordArray, 1))



//2.2) Parašykite funkciją naudojant lambda, bei metodus, kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B.


let arrowTwoTwo = (array, a, b) =>{
  return array.filter(element =>{
    return element.length > a && element.length < b
  })
}

console.log(arrowTwoTwo(wordArray, 1, 8))


//!!!!!!!!!!!!!!!!!!!!!!
//2.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B ir prasideda didžiąja arba mažąja raidėmis (true/false).

function somethingNew(array, a, b){
  let newArr = [];
  for(i = 0; i < array.length; i++){
    if (array[i].length > a && array[i].length < b && array[i].charAt(0) === array[i].toLowerCase()){
      newArr.push(array[i])
    }
  }
  return newArr;
}

console.log(somethingNew(wordArray, 1, 20))

//2.3) naudojant metodus, Parašykite lambda, kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B ir prasideda didžiąja arba mažąja raidėmis.

let arrowTwoThree = (array, a, b) =>{
  return array.filter(element =>{
   return element.length > a && element.length < b && element[0] === element[0].toUpperCase()
  })
}


console.log(arrowTwoTwo(wordArray, 1, 8))


// 3 užduoties galutinės versijos funkcijos ir jos kvietimo pvz.: 
// 	funkcija vardas(masyvas, numberArString, didejimoArMazejimo, minimum, maximum);
// 	let rikiuotas = vardas(masyvas3, true, false, 3, 6) -> kintamajam "rikiuotas" grąžina masyvą, kuris susideda iš masyvas3 buvusių elementų, kurie yra: true - number, false - mažėjimo tvarka, 3 - didesni negu 3, 6 - mažesni negu 6.

// 3) Parašykite funkciją, kuri iš mišraus masyvo atrinktų tik number arba tik string kintamuosiuos (true/false).
let mixedArray = [1, "apple", -3, "orange", 0.5, "banana", "cherry", "mango", -0.5, "lemon"];

let twoArrays = (mixedArray) => {
  let stringArray = [];
  let numberArray = [];
  mixedArray.forEach(element => {
    if(typeof element === 'string'){
      stringArray.push(element)
    } else{
      numberArray.push(element)
    }
  })
  return [stringArray, numberArray];
}

console.log(twoArrays(mixedArray))



// 3.1.1) Jeigu atrinkinėja skaičius, tai juos surikiuoti didėjimo arba mažėjimo tvarka (true/false) ir grąžintų sutvarkytą masyvą.

let newMixedArray = [1, "apple", -3, "orange", 0.5, "banana", "cherry", "mango", -0.5, "lemon"];

let filter = (mixedArray, type, order) => {
  let filteredArray = mixedArray.filter(item => {
    return typeof item === type;
  });
  if (order) {
    return filteredArray.sort(function(a,b){return a-b})
  }
};
console.log(filter(mixedArray, "number", true));



// 3.1.2) Prie 3.1.1 pridėti ir dydžio tikrinimą (ne mažesni negu A ir ne didesni negu B skaičiai (A<skaičius<B)).

let newFilter = (mixedArray, type, order, a, b) => {

    let filteredArray = mixedArray.filter(item => {
      return typeof item === type && item >= a && item <= b
    });
    if (order) {
      return filteredArray.sort(function(a,b){return a-b})
    }
  };

console.log(newFilter(newMixedArray, "number", true, -2, 0.5));



//su zodzias
// 3.2.2) Prie 3.2.1 pridėti ir ilgio tikrinimą (ne trumpesni negu A ir ne ilgesni negu B žodžiai (A<=žodis.length<=B)).

let filterWords = (mixedArray, type, order, a, b) => {
  let filteredArray = mixedArray.filter(item => {
    return typeof item === type && item.length <= a && item.length >= b;
  });
  if (order) {
    return filteredArray.sort(function(a,b){return a.localeCompare(b)})
  }
};
console.log(filterWords(mixedArray, "string", true, 5, 5))

}

console.groupEnd('');