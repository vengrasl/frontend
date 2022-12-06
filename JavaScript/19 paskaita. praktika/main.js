  //push
{
console.groupCollapsed("push");


  console.log("push" + " - prie masyvo pab. prideda reiksme");


console.groupEnd();
}

//unshift
{
  console.groupCollapsed("unshift");

  console.log("unshit" +  " - prie masyvo pradžios prideda naują reikšmę");

  console.groupEnd();
}


//pop
{
console.groupCollapsed("pop");

console.log("pop" + " - išima paskutinį duomenį iš masyvo");



console.groupEnd();
}


//shift
{
console.groupCollapsed("shift");

console.log("shift" + " - prideda naują reikšmę prie masyvo pradžios");

console.groupEnd();
}

let masyvas = [1, 5, 6, 7, false, "zodis"];
console.log(masyvas);



//6) Parašyti ciklą, kuris sukurtų 25 random skaičių (nuo 0 iki 50) masyvą.



let skaiciai = [];


console.log("6666666666666666666666666666666666666666666666666666666666666666666666666666666666666");
for(i = 0; i < 25; i++){
  skaiciai.push(Math.floor(Math.random() * 51));
}
console.log(skaiciai);
console.log("6666666666666666666666666666666666666666666666666666666666666666666666666666666666666");



console.log("7777777777777777777777777777777777777777777777777777777777777777777777777777777777777");
//7) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.
for(i = 0; i < skaiciai.length; i = i + 3){
  console.log(skaiciai[i]);
}
console.log("7777777777777777777777777777777777777777777777777777777777777777777777777777777777777");

console.log("8888888888888888888888888888888888888888888888888888888888888888888888888888888888888");
////8) Parašyti ciklą, kuris išspausdintų kas antrą masyvo elementą nuo galo.

for(i = skaiciai.length - 1; i > 0; i = i - 2){
  console.log(skaiciai[i]);
}
console.log("8888888888888888888888888888888888888888888888888888888888888888888888888888888888888");


console.log("9999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
//9) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 24.

for(i = 0; i < skaiciai.length; i = i + 1){
  if(i > 24){
    console.log(skaiciai[i]);
  }
}
console.log("9999999999999999999999999999999999999999999999999999999999999999999999999999999999999");


// ciklas nuo 5 iki 9 ++1.

//7 uzd ciklas taip pat nuo 5 iki 9.


let num = prompt("ivesk skaiciu")
if(num > 0){
  alert("teigiamas");
} else{
  alert("neigiamas")
}

console.log("=====================================================");


let skaiciuEile = [];

function isvedam(pirmas1, antras1){
  for(let i = pirmas1; i <= antras1; i++){
    skaiciuEile.push(i);
  }
return skaiciuEile;
}
