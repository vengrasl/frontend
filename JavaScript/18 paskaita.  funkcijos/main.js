//          Masyvų metodai
/*
  pop()       - isima is masyvo galo, modifikuoja
  shift()     - isima is masyvo pradzios, modifikuoja
  push()      - prideda prie masyvo galo, modifikuoja
  unshift()   - prideda prie masyvo pradzios, modifikuoja

  reverse()   - apsuka masyvą jį modifikuojant
  slice(nr1, nr2)  - paima nuo nr1 (imtinai) iki nr2 (neimtinai) masyvo elementus, ji nemodifikuojant
  splice(nr1, nr2, nr3, nr4, nr5....) - nuo nr1 trina nr2 kiekį elementų ir toje vietoje įterpia nr3, nr4, nr5.... elementus, mofifikuoja
  arr1.concat(arr2, arr3, arr4...) - prie arr1 prijungia arr2, arr3.... masyvus, NEmodifikuoja
  sort()    - išrikiuoja masyvą abecelės tvarka.
  skaiciu problema sprendziama su function(a,b){return a-b} ikelta i sort skliaustelius
  zodziu problema sprendziama su function(a,b){return a.localCompare(b)} ikelta i sort skliaustelius
*/


//parasyti funkcija kuri gautu 10 parametru ir jeigu parametras5 didesnis negu parametras6 isvesti paramatra7
// 5 > 3

function kvieciu (parametras1, parametras2, parametras3, parametras4, parametras5, parametras6, parametras7, parametras8, parametras9, parametras10){
  if (parametras5 > parametras6){
    console.log(parametras7);
  }
}

kvieciu("2", "3", "4", "8", "5", "3", "5");

kvieciu(10, 9, 8, 7, 6, 5, 4, 3, 2, 1);


console.log("=============================================");







//          Ciklai
/*
  do while - bent viena syki butu paleistas ciklas
  for in - suka ciklą per objektą
  for of - suka ciklą per masyvą
  

  array interations
  (https://www.w3schools.com/js/js_array_iteration.asp)
*/

//atliks 9 veiksmus, nes while vykdomas tol, kol tenkinama salyga
//let i = 1;
//while(i < 10){
//  console.log('veiksmai');
//  i++;
//}

//do while

let i = 1;
//while(i < 10){
//  console.log('veiksmai');
//  i++;
//}
do  {
  console.log('veiksmai');
  i++;
} while(i>10);

//for in
{
  console.groupCollapsed("ForIn");
  let objektas = {a:1, b:2, c:3, d:4, e:5};
  for(let raktas in objektas){
    console.log(raktas + " : " + objektas[raktas])
    console.log(raktas, ":", objektas[raktas]);
  }
console.log("zodis");
console.log("1");
console.log("true");
console.log(1);
console.log(false);
console.groupEnd();
}

// for of
{
  console.groupCollapsed('forOf');
  let masyvas = [5,8,9,4,1,false,false,true,'hallo,',46,1,5,4];
  //for(let i = 0; i <masyvas.length; i++){
  //  typeof(element) === "number" ? console.log(element) : null
  //}
  for(let element of masyvas){
    typeof(element) === "number" ? console.log(element) : null
  //  if(typeof(element) === "number"){
  //    console.log(element);
  //  }
  }
  console.groupEnd();
}
// forEach
{
  console.groupCollapsed('forOf');
{
  let masyvas = [5,8,9,4,1,false,false,true,'hallo,',46,1,5,4];
  masyvas.forEach(element => {console.log(element)});
  //masyvas.forEach(element => typeof(element) === "number" ? console.log(element) : null
}
console.groupEnd();
}
console.log("Hello ");
//            Funkcijos
{
console.groupCollapsed('funkcijos');
console.log("Hello ");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
/*
  Funkcija - veiksmų seka, kuri yra vykdoma tik tuomet, kai į tą funkciją yra kreipiamasi.
  Parametrai/Argumentai - duomenys, perduodami funkcijai jos iškvietimo metu, su kuriais funkcijos viduje bus atliekami kažkokie veiksmai.
  Return - funkcija gali kažką gražinti. funkcijos veiksmai vyksta iki tol kol pasiekiamas return.
*/

function hello(vardas){
  console.log("Hello " + vardas);
}

function sudetis(nr1, nr2){
    let atsakymas = nr1 + nr2;
    return atsakymas;
  }
  console.log("not happening"); // po return veiksmai nebevyksta
}

// 1 užduotis - sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus su duotaisiais parametrais (du parametrai). (4 funkcijos) (optional su 7)

function atimtis(sk1, sk2){
    return sk1 - sk2;
}

function daugyba(skaic1, skaic2){
  if(typeof(skaic1)==="number" && typeof(skaic2)==="number"){
    let daugybosAtsakymas = skaic1 * skaic2;
  return daugybosAtsakymas;
  } else {
    return "daugybos error"
  }
}

function dalyba(skaicius1, skaicius2){
  if(typeof(skaicius1)==="number" && typeof(skaicius2)==="number"){
    let dalybosAtsakymas = skaicius1 / skaicius2;
    return dalybosAtsakymas;
  } else {
    return "dalybos error"
  }
}

function kiekStringuMasyve(array){
  let kiek = 0;
  for(let i = 0; i < array.lenght; i++){
    if(typeof(array[i]) === "string"){
      kiek++;
    }
  }
  return kiek;
}

//2 uzduotis. sukurti funkcija, kuri i konsole isvestu visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.
function firstToLast(array){
  for(let element of array){
    console.log(element);
  }
}
//3 uzduotis. sukurti funkcija, kuri i konsole isvestu visus jai duotojo masyvo elementus nuo paskutinio iki pirmojo.

  function LastToToFirst(array){
    for(let i = array.lenght - 1; i >= 0; i--){
      console.log(array[i]);
    }
  }
  console.groupEnd();

//  array.reverse();
//    for(let element of array){
//      console.log(element);
//  }

{
  console.groupCollapsed("masyvu metodai");
let masyvas = [1,2,3,4,5,6,7,8,9];
let gabaliukas = masyvas.slice(3, 6);
let iskirptas = masyvas[3];
masyvas.splice(3, 1, 9, 8, 7);

let sujungtas = masyvas.concat(['labas', 'Ąs', 'esu', 'naujas', 'masyvas'], [false, 0, 'unfdefined', 'null', 90, 1110, 654]);

// sujungtas.sort(function(a,b){return a-b});    //sprendzia sk problema

let zodziuMasyvas = ['labas', 'Ąs', 'esu', 'naujas', 'masyvas'];

zodziuMasyvas.sort(function(a,b){return a.localeCompare(b)});

console.groupEnd();
}

//4) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.
{
  let zodziuMasyvas = ['labas', 'Ąs', 'esu', 'naujas', 'masyvas'];
  
  function zodziuRikiavimas(parametras){
    return parametras.sort(function(a,b){return a.localeCompare(b)});
  }
  
}


//5) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.


  let task2 = [1,5,6,7,8,1,4,6,1,6,-4,654,-1,46541,-441,1];
  function rikiuojameSkaiciusMasyva(arr1){
    return arr1.sort(function(a,b){return a-b});
  }



//6 6) Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai). (paduodu 5,9 => grąžina 5,6,7,8,9)

{
  function nuoIki(nr1, nr2){
    let arrayToReturn = [];
    for(let i = nr1; i <= nr2; i++){
      arrayToReturn.push(i)
    }
    console.log(arrayToReturn)
  }
  nuoIki(5, 9);
}


//7) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo parametro (imtinai). (paduodu 2,5,9 => grąžina 5,7,9). NE SPLICE?
console.log("777777777777777777777777777777777")

function isvestine(kartotinis, pradzia, pabaiga){
  
  let kiek = pabaiga - pradzia;

  for(let i = 0; i <= kiek; i++){
  
    if(i%kartotinis==0) {
  
      console.log(pradzia+i);
  
    }
    

  }
  console.log("Funkcija darba baige");
}


console.log("777777777777777777777777777777777")


//8) Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).

function vardasIrPavarde(vardas, pavarde) {
        
  return vardas.length + pavarde.length;
  
  }
  
  console.log(vardasIrPavarde("Petras","Petrauskas"))

//9) Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.

function abecele(skaicius) {
        
  let abecelesMasyvas = [
  "",
  "A",
  "B",
  "C",
  "D"
  ];
   return abecelesMasyvas[skaicius];
  }
  
  console.log(abecele(4));

//10) Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

function suma (skaicius1, skaicius2, operatorius){
        
        
  if(operatorius == "+"){
  return skaicius1 + skaicius2;
  }
  if (operatorius == "-") {
  return skaicius1 - skaicius2;
  }
  
  }
  
  console.log(suma(3,2, "+" ));
  console.log(suma(3,2, "-" ));

//11) Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function randomNumber_1_To_10(){
return Math.ceil(Math.random()*10);
}
function squareNumber(sk){
return randomNumber_1_To_10;
}

console.log(squareNumber());


//13
let masyvas1 = [1, 2, 3, 4, 5, 6, 7];
let masyvas2 = ["a", "b", "c"];

function fancyMasyvuPrijungimas(arr1, arr2){
 while(arr2.lenght){
  arr1.splice(arr2.lenght, 0, arr2.shift())
 }
 return arr1;
}
console.log(fancyMasyvuPrijungimas(masyvas1, masyvas2));