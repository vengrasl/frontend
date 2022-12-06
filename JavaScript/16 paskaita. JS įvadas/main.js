/* console.log("Labas rytas JS'e"); */

//      Kintamieji
/*
string        - zodinis kintamasis rašomas kabutėse '' / "" / ``
number        - skaitinis kintamasis
boolean/bool  - loginis kintamasis (true/false)

null          - tuščias
undefined     - neapibrėžtas
NaN           - Not a Number

array         - masyvas
object        - objektas

--------------------------------------------------------------------------

var/let/const - kintamųjų ribų nurodymai
nameOrSmth    - kintamojo vardas
value         - kintamojo reikšmė

*/

let manoVardas0 = "Lukas";
let manoVardas1 = 'Lukas';
let manoVardas2 = `Lukas`;

let manoAmzius0 = 26;
let manoAmzius1 = 26.2;
let manoAmzius2 = 26+0.2;

let vedesIrTuriVaiku = false;
let vedesIrNeTuriVaiku = true;

// 1 uzduotis

let miestas1 = "Vilnius";
let miestas2 = "Kaunas";
let miestas3 = "Klaipeda";
let miestas4 = "Panevezys";
let miestas5 = "Siauliai";

let metai1 = "2000";
let metai2 = "2001";
let metai3 = "2002";
let metai4 = "2003";
let metai5 = "2004";

let fainasMiestas = true;
let nefainasMiestas = false;

// ---------------------------------------------------------------

//        Operatoriai
/*
          Aritmetic
  +   - sudėtis
  -   - atimtis
  *   - daugyba
  /   - dalyba
  **  - kėlimas laipsniu (šaknies traukimas)
  %   - liekandos radimas

          Assigments
  =   - lygybė

          Shortcuts
  ++  - didėjimas vienetu (kažkas = kažkas + 1)
  --  - mažėjimas vienetu (kažkas = kažkas - 1)
  +=  - pridėjimas (kažkas = kažkas + kažkiek)
  -=  - atėmimas (kažkas = kažkas - kažkiek)
  *=  - dauginimas (kažkas = kažkas * kažkiek)
  /=  - dalinimas (kažkas = kažkas / kažkiek)
  %=  - liekanos radimas (kažkas = kažkas % kažkiek)
  **=  - laipnsio kėlimas / šaknies traukimas / (kažkas = kažkas ** kažkiek)

         Comparison
  ==  - ar lygu duomenys
  === - ar lygu duomenys ir tipas
  >   - daugiau negu
  <   - mažiau negu
  >=  - daugiau arba lygu negu
  <=  - mažiau arba lygu negu


          Logical
  !  - ne (apverčia reikšmę) (NOT)
  && - ir                    (AND)
  || - arba                   (OR)

          Type
  typeof      - tikrina tipą
*/

// 2 uzduotis

console.log('miestas1+miestas2', miestas1+miestas2);
console.log('metai1+metai2', metai1+metai2);
console.log('fainasMiestas+nefainasMiestas', fainasMiestas+nefainasMiestas);
console.log('miestas1+metai1', miestas1+metai1);
console.log('miestas1+fainasMiestas', miestas1+fainasMiestas);
console.log('metai1+fainasMiestas', metai1+fainasMiestas);

console.log('miestas1-miestas2', miestas1-miestas2);
console.log('metai1-metai2', metai1-metai2);
console.log('fainasMiestas-nefainasMiestas', fainasMiestas-nefainasMiestas);
console.log('miestas1-metai1', miestas1-metai1);
console.log('miestas1-fainasMiestas', miestas1-fainasMiestas);
console.log('metai1-fainasMiestas', metai1-fainasMiestas);

console.log('miestas1*miestas2', miestas1*miestas2);
console.log('metai1*metai2', metai1*metai2);
console.log('fainasMiestas*nefainasMiestas', fainasMiestas*nefainasMiestas);
console.log('miestas1*metai1', miestas1*metai1);
console.log('miestas1*fainasMiestas', miestas1*fainasMiestas);
console.log('metai1*fainasMiestas', metai1*fainasMiestas);

console.log('miestas1/miestas2', miestas1/miestas2);
console.log('metai1/metai2', metai1/metai2);
console.log('fainasMiestas/nefainasMiestas', fainasMiestas/nefainasMiestas);
console.log('miestas1/metai1', miestas1/metai1);
console.log('miestas1/fainasMiestas', miestas1/fainasMiestas);
console.log('metai1/fainasMiestas', metai1/fainasMiestas);

console.log('miestas1**miestas2', miestas1**miestas2);
console.log('metai1**metai2', metai1**metai2);
console.log('fainasMiestas**nefainasMiestas', fainasMiestas**nefainasMiestas);
console.log('miestas1**metai1', miestas1**metai1);
console.log('miestas1**fainasMiestas', miestas1**fainasMiestas);
console.log('metai1**fainasMiestas', metai1**fainasMiestas);

console.log('miestas1%miestas2', miestas1%miestas2);
console.log('metai1%metai2', metai1%metai2);
console.log('fainasMiestas%nefainasMiestas', fainasMiestas%nefainasMiestas);
console.log('miestas1%metai1', miestas1%metai1);
console.log('miestas1%fainasMiestas', miestas1%fainasMiestas);
console.log('metai1%fainasMiestas', metai1%fainasMiestas);

console.log('miestas1++', miestas1++);
console.log('metai1++', metai1++);
console.log('fainasMiestas++', fainasMiestas++);
console.log('miestas1++', miestas1++);
console.log('miestas1++', miestas1++);
console.log('metai1++', metai1++);

console.log('miestas1--', miestas1--);
console.log('metai1--', metai1--);
console.log('fainasMiestas--', fainasMiestas--);
console.log('miestas1--', miestas1--);
console.log('miestas1--', miestas1--);
console.log('metai1--', metai1--);

//Naudojant matematinius operatorius su boolean tipo kintamaisiais, kintamieji yra verčiami į 0 ir 1. false -> 0; true -> 1

// 3 užduotis
console.log('metai1+=metai2', metai1+=metai2);
console.log('metai3-=metai2', metai3-=metai2);
console.log('metai1*=metai2', metai1*=metai2);
console.log('metai3/=metai3', metai3/=metai3);
console.log('metai4%=metai3',metai4%=metai3);
console.log('metai4**=metai3',metai4**=metai3);

// 4 užduotis
console.log('metai1==metai2', metai1==metai2);
console.log('metai3===metai3', metai3===metai3);
console.log('metai1>metai1', metai1>metai1);
console.log('metai3<metai2', metai3<metai2);
console.log('metai3>=metai2', metai3>=metai2);
console.log('metai5<=metai5', metai5<=metai5);

// Sąlygos
/*
  -if Else-
  if      - pradinė sąlgyga
  else if - papildoma s1lyga, kuri tikrinama tik jeigu aukščiau esanti/čios salyga/os gražino false
  else if .....
  else    - vykdomas jeigu visos aukščiau esančios sąlygos grąžino false

  -Nesting-
  Sąlygos viduje rašoma kita sąlyga
*/
      // 5 užduotis
let amzius = 150;

if(amzius >= 18){
  console.log('Jus esate pilnametis');
  if(amzius >= 65 && amzius < 130){
    console.log('Esate pensijino amziaus');
  } else if (amzius < 90){
    console.log('esate darbingo amziaus');
  }  else{
      console.log('kaip tu dar gyvas?')
  }
} else if(amzius > 7) {
  console.log('Deja, Jus esate iki mokyklinio amziaus');
} else{
  console.log('Esi mokyklinukas');
}


      // 6 užduotis
let ArTuriteVairuotojoTeises = true;
let ArTuriteAutomobili = false;
let ArEsateBlaivas = false;

if(ArTuriteVairuotojoTeises === true){
  console.log('Jus galite vairuoti Automobili');
  if(ArTuriteAutomobili === true && ArEsateBlaivas === true){
    console.log('galite sesti i savo automobili ir vaziuoti');
  } else if(ArTuriteAutomobili === false){
    console.log('Jei automobilio neturite, tai ir vaziuoti negalite');
  } else {
    console.log("nesi blaivas, vairuoti negali");
  }
} else{
  console.log('Deja, automobilio vairuoti negalite');
}
//    AND ir OR
/*
  Naudojant && tikrinama ar abejose pusėse yra tiesa. Jei bent vienoje pusėje yra melas - grąžina melą. Jeigu kairėje pusėje yra melas - dešinės pusės net netikrina/nevykdo.

  Naudojant || tikrina ar bent vienoje pusėje yra tiesa. Jei bent vienoje pusėje yra tiesa - grąžina tiesą. Jeigu kairėje pusėje yra tiesa - dešinės pusės net netikrina/nevykdo.
*/
if(5 == '5' && typeof('5') == typeof(5)){
  console.log('lygu');
} else {
  console.log('nelygu');
}
if(false || false){
  console.log('tiesa');
} else {
  console.log('melas');
}

//      Truthy ir Falsy
/*
  truthy  - true  | not 0 number | 'string'           | array/masyvas | objektas | funkcija
  falsy   - false | 0            |  '' (emty string)  | undefined     | null     | NaN
*/

if(0){
  console.log("truthy");
} else {
  console.log("falsy");
}

//      Switch

let megstamiausiaSpalva = "ruda";

switch(megstamiausiaSpalva){
  case 'geltona':
  case 'raudona':
    console.log("Tu megsti ryskias spalvas.");
    break;
  case 'melyna':
  case 'ruda':
    console.log("Tu megsti tamsias spalvas.");
    break;
}

//let miestas = prompt("Iš kurio miesto esate?");
let miestas = "kaunas";

switch(miestas){
  case "kaunas":
    console.log("Kaunas yra Lietuvos širdis, jei Vilniečiai neužpyks");
    break;
  case "vilnius":
    console.log("vilnius yra Lietuvos sostinė, shshh Kauniečiai su savo laikinąja.");
    break;
  case "klaipėda":
    console.log("klaipėda vienintelis Lietuvos miestas su normaliu uostu.");
    break;
  default:
    // window.alert("Nėr tokio miesto!");
    console.log("Nėr tokio miesto!");
}

/*
8) Padaryti taip, kad puslapis su tavimi pasisveikintu, patikrintu kokiame mieste gyveni ir išvestų su tai susijusią info (pasakytų ką nors gražaus apie tavo miestą(galima tobulinti išskiriant keletą miestų, o ne išvedant tą pačią žinutę apie visus)).
  Naudoti:
    1) let/const - kurti kintamuosius
    2) prompt - gauti tavo info.
    3) alert/console.log - grąžintų atsakymus.
    4) if/elseIf/else - kas be ko...
*/

alert("Sveiki, prieš pradėdami, atsakykite į šiuos klausimus!");

let ivestis = prompt ("Sveiki, kur gyvenate?");

if (ivestis == "Vilnius"){
  alert("Labas, vilniau");

} else if (ivestis == "Kaunas"){
  alert("LLabas, Kaune");

} else if (ivestis == "Klaipeda"){
  alert("Labas, Klaipeda");
}

/*
9) Parašyti switch'ą, kuris tikrintų koks dabar mėnuo ir grąžintų koks yra metų laikas
  Naudoti:
    1) let/const - kurti kintamuosius.
    2) prompt - gauti mėnesį.
    3) alert/console.log - grąžinti atsakymą.
    4) switch - kas be ko...

*/

alert("Taip pat idomu suzinoti koks dabar metu laikas")

metuLaikas = prompt ("nurodykite, koks dabar mėnuo?")

switch(metuLaikas){
  case "gruods":
  case "sausis":
  case "vasaris":
    alert ("Dabar žiemos metas");
  break;
  case "kovas":
  case "balandis":
  case "gegužė":
    alert ("Dabas rudens metas");
  break;
  case "birželis":
  case "liepa":
  case "rugpjūtis":
    alert ("Dabar Žiemos metas");
  break;
  case "rugsėjis":
  case "spalis":
  case "lapkritis":
    alert ("Dabar pavasario metas");
  break;
  default:
    alert ("Nera tokio metu menesio");
}