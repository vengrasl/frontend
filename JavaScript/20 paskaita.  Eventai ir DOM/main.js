                  // SELECTORS
let renkames1 = document.querySelectorAll('p');
console.dir(renkames1);
console.log(renkames1);
// dir ir log
// dir - grąžina interaktyvų elemento savybių sąrašą
// log - grąžina elementą

                  // EVENTS
for(let i = 0; i < renkames1.length; i++){
  renkames1[i].addEventListener('click', function(event){
    console.dir(event);
    console.log('Paspaudei ant ' + i + "'ojo, paragrafo.");
  });
}

let renkames2 = document.querySelector('body');
renkames2.addEventListener('keydown', function(event){
  console.dir(event);
  console.log('Paspaudei ' + event.code + ' mygtuką.');
});

let visiH1 = document.querySelectorAll("h1");
for(let i = 0; i < visiH1.length; i++){
  console.dir(visiH1[i]);
  visiH1[i].textContent += " :)";
  visiH1[i].style.color = 'red';
}


//1)   Pasikonspektuoti Event'us ir DOM.
//2)   Iš JS'o selektinti elementus 10 naudojant skirtingų selektorių.
//3)   Išbandyti 5 skirtingus event'ų listener'ius.
//4)   Uždėti vienodą event'ą, 5'iems vienu metu selektintiems elementams.

//1) Iš JS'o selektinti elementus 10 naudojant skirtingų selektorių.

let viskas = document.querySelector("*");
console.log(viskas);

let element = document.querySelectorAll("h2");
console.log(element);

let ID = document.querySelector("#grandparent-id");
console.log(ID);

let _class = document.querySelector(".grandparent");
console.log(_class);

let twoClass = document.querySelectorAll(".parent1, .parent2");
console.log(twoClass);

let visiChildParent1Viduje = document.querySelectorAll(".parent1 div");
console.log(visiChildParent1Viduje);

let pirmasChild1ParentViduje = document.querySelector(".parent1 > .child1");
console.log(pirmasChild1ParentViduje);

let visiLiPoZalioLi = document.querySelectorAll("li.green ~ li");
console.log(visiLiPoZalioLi);

let vienasLiPoZalioLi = document.querySelector(".green + li");
console.log(vienasLiPoZalioLi);

let liFirstChild = document.querySelector("li:first-child");
console.log(liFirstChild);

let liNthChild = document.querySelector("li:nth-child(4)");
console.log(liNthChild);

//3)   Išbandyti 5 skirtingus event'ų listener'ius.

let protevis = document.querySelector(".protevis");
console.log(protevis);

let tevas = document.querySelector(".tevas");
console.log(tevas);

let vaikas = document.querySelector(".vaikas");
console.log(vaikas);

protevis.addEventListener("click", function(event){
  console.log(event);
});

tevas.addEventListener("click", function(event){
  console.log(event);
});

vaikas.addEventListener("click", function(event){
  console.log(event);
});


//        DOM kūrimas iš JS'o
let DOM_is_JS = document.querySelector('#DOM_is_JS');



let paragrafas = document.createElement("p");
console.dir(paragrafas);

let tekstas = document.createTextNode("Text node");
paragrafas.append(tekstas);
DOM_is_JS.append(paragrafas);

let image = document.createElement('img');
image.setAttribute('src', 'https://media.istockphoto.com/id/975157976/vector/browser-window.jpg?s=612x612&w=0&k=20&c=flrP7NkQORpJdvzPHUrR0pcfD-eMizn25-1U44_EVtQ=');
DOM_is_JS.append(image);


//        DOM stilizavimas iŠ JS'o
paragrafas.style.color = '#f00';
// paragrafas.className = 'tekstas';
// paragrafas.setAttribute('class', 'tekstas');
paragrafas.classList.add('tekstas');












