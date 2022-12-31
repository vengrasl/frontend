//                                lamdba/arrow function


// (par1, par2) => par1*par2 - tokia butu bevarde

//lambda syntax 

/*
  parametras => veiksmas

  (parametras1, parametras2) => veiksmas    //nereikia lauztiniu skliaustu su 1 funkcija

  (parametras1, parametras2) => {return veiksmas}   //reikia lauztiniu skliaustu su 1 funkcija ir return
 -----------------------------------------------------------------------
  (parametras1, parametras2) => {     //su keliomis funkcijomis reikia lauztiniu ir gale return
    veiksmas1
    veiksmas2


    return ats;
  }
----------------------------------------------------------------------

let pavadinimas = (parametras1, parametras2) => {return veiksmas} // jei funkcijai priskiriame varda. tas pats kaip - function pavadinimas

*/

//lambda tiesiog yra naujoviskas funkcijos rasymo sutrimpinimo budas. Realiai tai tapo standartas

// senuoju

function daugyba0(par1, par2){
  return par1*par2
}

//naujas 

let daugyba1 = (par1, par2) => {return par1*par2};  //siuo metu return nera butinas, nes atliekamas 1 veiksmas




// uzduotys

//1) Parašykite lambda, kuri grąžina tekstą "Labas!".

let pasisveikinimas = () => {return "Labas, Lukai"}; //sukurtas funckijis vardas be parametru, kuris ja iskvietus grazins "Labas, Lukai"



//2) Parašykite lambda, kuri grąžina dviejų kintamųjų sudėtį.

let sudetis = (skaicius1, skaicius2) => {return skaicius1 + skaicius2}; //sukurtas funkcija su 2 parametrais, kuria iskvietus atliks sudeti su 2 nurodytais parametrais



//3) Parašykite lambda, kuri grąžina jai paduoto teksto ilgį.

let tekstoIlgis = () => {return "Kazkoks parasytas tekstas".length}; //sukurta funkcija be paremetro(nes jis tik 1) ir nurodytas teksta, kurio norime suzinoti ilgi



//4) Parašykite lambda, kuri grąžina jai paduoto teksto pirmąją raidę.

let pirmaRaide = () => {return "nepasikiskiakopusteliaudamas"[0]}; //po zodzio[0] grains pirma raide  //geriau daryti su charat?



//5) Parašykite lambda, kuri grąžina jai paduoto teksto paskutinę raidę.

let paskutineRaide = () => {return "zodis".length - 1}; //grazina ne paskutine raide, bet paskutines raides pozicija nuo priekio

let paskutineRaide1 = () => {return "zodis"[4]};  // grazins paskutine zodzio raide pagal nurodyta pozicija


//6) Parašykite lambda, kuri grąžina jai paduoto skaičiaus kvadratą.

let skaciausKvadratas = () => {return Math.pow(6,2)}; //grazins skaiciaus 6 kvadrata


//7) Parašykite lambda, kuri iš jai paduoto masyvo išveda visus kintamuosius į konsolę.

let masyvas = [5, 10, 20, 30, 40];

let masyvoIsvedimas = () => {return masyvas};
console.log(masyvoIsvedimas()); //isves i konsole

//8) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas antrą kintamąjį į konsolę.


let kasAntrasIsMasyvo = (masyvas) => {                     //ivedus consolei KasAntrasIsMasyvo([2,3,4,5,6]) isves kas antra elementa
  for(i = 0; i < masyvas.length; i = i + 2){
   console.log(masyvas[i]);
   }
};
kasAntrasIsMasyvo(masyvas); //iskart veda i konsole


//9++) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas kažkelintą (nurodytą) kintamąjį į konsolę.

let uzd9 = (masyvas, kasKelintas) => { //parametrai: 1-masyvas, 2-kas kazkelintas kintamasis
  for(let i = 0; i < masyvas.length; i = i + kasKelintas){ //eis per kiekviena masyvo elementa iki jos viso ilgio. i + kelintas reiks, kas kelintas elementas bus isvestas
    console.log(masyvas[i]); //funkcija suprogramuota taip, kad isvestu paduoto masyvo(parametro) kiekviena elementa
  }
}; //funkcija darba baige


//console.log svet. ivedus uzd9([1,2,3,4,5], 2) isves kas antra skaiciu nuo pirmo masyve


//10+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik lyginius skaičius.

let lyginiaiSkaiciai = (masyvas) => {
  for(i=0; i < masyvas.length; i++){ //eis ciklas per visus mysyvo duomenis
    if (masyvas[i] % 2 == 0){        //jei masyvo reiksme neturi liekanos
      console.log(masyvas[i]);       //i konsole isves tas reiksmes
    }
  }
}


//11+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik nelyginius skaičius. 

let nelyginiaiSkaiciai = (masyvas) => {
  for(i=0; i < masyvas.length; i++){ //eis ciklas per visus mysyvo duomenis
    if (masyvas[i] % 2 !== 0){        //jei masyvo reiksme turi liekana
      console.log(masyvas[i]);       //i konsole isves tas reiksmes
    }
  }
}



//12+) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius ilgesnius nei 3 simbolių. 




//13++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie prasideda kažkokia (nurodyta) raide.





//14+++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie yra ilgesni nei A, bet trumpesni nei B ir prasideda mažąja raide. (A - trumpiausias galimas žodžio ilgis, B - ilgiausias galimas žodžio ilgis).





//15+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais.
//16++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie yra ilgesni nei A. (A - trumpiausias galimas žodžio ilgis).
//17++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie prasideda didžiąja raide.
//18+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais.
//19+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A. (A - mažiausias galimas skaičius).
//20+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra mažesni negu A. (A - didžiausias galimas skaičius).
//21++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B. (A - mažiausias galimas skaičius, B - didžiausias galimas skaičius).
//22+++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B ir lyginiai arba nelyginiai (lyginis - true, nelyginis - false) (arba galima priskirti raides, tarkim jei nori lyginių, parašai "l" kaip parametrą, jei nelyginių, parašai "n" kaip parametrą ir pns.)



//                                                Masyvu metodai


                                            //neiteraciniai masyvu metodai

//iterator() - 

//.at() - nurodo kelinta elementa grazinti masyve

//.concat() - nurodo kuriuos masyvus sujungti i 1

//.copyWithin() - nukopijuos kazkoki elementa ir istatys i pateikta vieta

//.entries() - nurodo kurioje pozicijoje yra elementas

//.fill() - iterps kazkoki elementa i nurodyta vieta 

//findLast() - nuo masyvo galo ieskos match'o ir nurodys jo pozicija

//flat - masyva masyve pavercia vienu bendru

//.from() - is vieno elemento juos darys i atskirus masyve

//.includes() tikrina ar masyve yra kazkoks elementas. grazins true arba false

// grazina pirma indeksa is masyvo. jei jo nera, grazina -1

//.isArray() - tikrina ar elementas yra masyvas

//.join() - is masyvo sujungia elementus i viena kintamaji

//.keys() - is skirtingu elementu masyve sujungia i viena

//.of - is irasytu kintamuju sukurs masyva

//.pop() - is masyvo galo paims elementa ir ji grazins

//.push() - prie masyvo galo prides nauja elementa

//reverse() - viename masyve esancius elementus apvers

//.shift() - is masyvo priekio isims elementa

//.slice() - is vieno masyvo nukopijuos nurodyta ilgi i nauja masyva

//some() - ieskos ar kazkuris masyvo lemenetas yra mazenis,lygus ar didesnis pateiktam elementui

//.sort() - sutvarko eiliskuma

//.splice() - pakeis masyva is jo isemant arba keiciant naujais elementais

//.toLocaleString() - masyva pavers stringu

//.toString() - masyva pavers stringu

//.unshift() - prie masyvo pradzios prides elementa

//.values() - isspausdins masyvo reiksmes






                                                //Iteraciniai masyvu metodai: judejimas per masyva atliekant kazkokius veiksmus


// ypac naudinga naudoti, kai neleidziama naudoti for'ofas

//

/*
Iteraciniai masyvu metodai: tai metodai, kurie su kiekvienu elementu  kazka daro(vykdo iteracijas)

!!!forEach() - Iteruoja per masyvo elementus atlikdamas kazkokius veiksmus
!!!map() - grazina nauja modifikuota masyva
!!!filter() - grazina nauja masyva, kuris atitinka nurodyta salyga
!!!reduce() - grazina reiksme, kuri susideda is viso masyvo modifikuotu elementu judant nuo pradzios iki galo


reduceRight() - grazina reiksme, kuri susideda is viso masyvo modifikuotu elementu judant nuo galo iki pradzios
some()        - tikrina ar BENT VIENAS masyvo elementas atitinka salyga ir grazina true/false 
every()       - tikrina ar VISI masyvo elementai atitinka salyga ir grazina true/false
find()        - iesko masyve salyga atitinkancio pirmo elemento ir ji grazina (jei neranda, grazina undefined)
findLast()   - iesko masyve salyga atitinkancio paskutinio elemento ir ji grazina (jei neranda, grazina undefined)
findIndex()   - iesko masyve, salyga atitinkancio pirmo elemento, ir grazino jo indexa(nuo 0 iki belegalybes). Jei neranda, grazina -1
findLastIndex()- iesko masyve, salyga atitinkancio paskutinio elemento, ir grazino jo indexa(nuo 0 iki belegalybes). Jei neranda, grazina -1

flatMap()      - grazina nauja masyva, kuriame visi elementai yra vienu lygmeniu maziau su galimybe ji modifikuoti


sort() -naudojamas kai kreipiesi i funckija, paduodamas jai kita funkcija, kaip parametra // sort video medziaga prie galo (mazdaug 4 val)
*/

//visu iteraciniu metodu sintakse: (iskyrus reduce, reduceRight, sort)

//someArray.forEach(element => veiksmai)
//someArray.forEach((element, iteration) => veiksmai)
//someArray.forEach((element, iteration, array) => veiksmai)



                                        // forEach()
let moksloTikslai = [4,6,8,1,"zodis", true, true]
// neatlieka kazko extra - tik iteruoja per masyva

//1 targetinam norma masyva
//2.forEach
//3(nurodomaselementas) 



//minusai
//negali buti sustabdytas, eis per visus
//negrazina jokios reiksmes (return neveikia)


moksloTikslai.forEach(elementas => console.log("Mesvyvo elementas: ", elementas));

console.log("------------------------------------------------------------------------");

moksloTikslai.forEach((elementas, iteracija) => console.log("Masvyvo" + iteracija +" elementas: ", elementas));

console.log('------------------------------------------------------------------------');

moksloTikslai.forEach((elementas, iteracija, array) => console.log("Masvyvo" + iteracija +" elementas: ", elementas, 'Sekantis elementas yra', array[iteracija]+1)); //realiai nelabai naudojamas. Nemanau, kad prireiks. Svarbesni auksciau esantys





                                        // map()

//map leidzia MODIFIKUOTI DUOMENIS ir grazinti modifikuota masyva     
let naujasMasyvas = moksloTikslai.map(elementas => elementas+5); //siuo atveju prie kiekvienos reiksmes prideda 5
console.log(naujasMasyvas);   
console.log(moksloTikslai);      

                                        // filter()

//grazina nauja masyva, kuris atitinka nurodyta salyga

let = naujasFiltruotasMasyvas = moksloTikslai.filter(element => typeof(element) === "number"); //arba !==  grazins tik ne skaicius
// pvz salyga - atrinkti tik skaicius. tai siuo atveju eis per visus ir grazins tik skaicius
console.log(naujasFiltruotasMasyvas);

                                          //reduce

// reduce - grazina reiksme, kuri susideda is viso masyvo modifikuotu elementu 



// sintakse:

//someArray.reduce((accumulator, element) => veiksmai)
//someArray.reduce((accumulator, element, iteration) => veiksmai)
//someArray.reduce((accumulator, element, iteration, array) => veiksmai)

//someArray.reduce((accumulator, element) => veiksmai, initialValue)
//someArray.reduce((accumulator, element, iteration) => veiksmai, initialValue)
//someArray.reduce((accumulator, element, iteration, array) => veiksmai, initialValue)

let reduceMasyvas = moksloTikslai.reduce((bendras, elementas) => {
  console.log(bendras);
  return bendras + ' ' + elementas;
}, "pradzia"); 
console.log(reduceMasyvas);