/*

1) Naudodamiesi data[0] duomeninis atlikite šiuos veiksmus:
	1.1) JS'u sekcijoje sukurkite antraštę.
	1.2) JS'u sekciją papildykite paragrafu su tekstu.
	1.3) JS'u sekciją papildykite paveikslėliu.
	1.4) JS'u sekciją stilizuokite priskirdami klases.
2) Naudodamiesi data[1] duomenimis atlikite šiuos veiksmus:
	2.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
	2.2) JS'u sekciją stilizuokite priskirdami klases.
3) Naudodamiesi data[2] duomenimis atlikite šiuos veiksmus:
  3.0) Sutvarkykite data[2] viduje esančius duomenis.
	3.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
	3.2) JS'u sekciją papildykite paveiksliukų pavadinimais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
	3.3) JS'u sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
	3.4) JS'u sekciją stilizuokite priskirdami klases.
*/


//0) Sukurti funkcionalumą, kuris slėptų/rodytų sekcijose atvaizduotą informaciją. (žiūrėti paveikslėlį images/task1.PNG)

let pirmaSekcija = document.querySelector("#pirmaSekcija");
console.dir(pirmaSekcija);


let antrastesPavadinimas = `Pirmas paragrafas`;
let paragrafoTekstas = `Paragrafo tekstas`;


pirmaSekcija.innerHTML += 
`
<button class="nerodyti">Rodyti</button>
<button class="rodyti nonDisplay">Nerodyti</button>
<div>
  <h1>${antrastesPavadinimas}</h1>
  <p>${paragrafoTekstas}</p>
</div>
` 

//kuriame mygtuko funckionaluma
// paspaudus nerodyti, kad dingtu tekstas, rodyti mygtukas ir atsirastu nerodyti mygtukas

let nerodytiMygtukas = document.querySelector(".rodyti"); // selektinamas rodyti mygtukas, kuris ivestas JS'e

console.dir(nerodytiMygtukas); //kaip jis atrodo. node dalyje paziureti klasiu sarasa. svarbiausi: add, remove, toggle

let rodytiMygtukas = document.querySelector(".nerodyti") // selektinamas nerodyti mygtukas
console.dir(rodytiMygtukas);

console.dir(nerodytiMygtukas); //kaip jis atrodo. node dalyje paziureti kalsiu sarasa. svarbiausi: add, remove, toggle

nerodytiMygtukas.addEventListener('click', function(){ //rodyti mygtukui priskiriame eventlisteneri click
  nerodytiMygtukas.classList.add("nerodyti"); //kai paspaudziame ant mygtuko rodyti, suteikiame jam klase - nonDisplay (kuri jau ivesta i css). Jis vis dar egzistuoja, tiesiog jam buvo priskirta si klase (display:none)
  //dabar mygtukas pasleptas, bet tekstas nedingsta. Tam ,kad dingtu ir tekstas, reikia paslepti "pirmaSekcija" esanti div, kuris buvo sukurtas JS'e
  //patikrinam, kokie elementai sudaro sia sekcija (su console.dir). Tai padaryta uzduoties virsuje
  pirmaSekcija.children[2].classList.add("nerodyti"); //nuimamas tekstas
  rodytiMygtukas.classList.remove("nerodyti"); // paspaudus mygtuka "slepti, nuimamas kito mygtuko "rodyti" display:none
});

//dabar reikia, kad paspaudus mygtuka "rodyti", atsirastu tekstas, nerodyti mygtukas ir dingu 

rodytiMygtukas.addEventListener("click", function(){
  nerodytiMygtukas.classList.remove("nerodyti"); //graziname "nerodyti mygtuka"
  rodytiMygtukas.classList.add("nerodyti"); // pasaliname nerodyti myktuka
  pirmaSekcija.children[2].classList.remove("nerodyti"); // paspaudus mygtuka, grazinamas tekstas
})


// 0 uzduoties kitas budas su 1 mygtuku

//paselektiname sekcija
let antraSekcija = document.querySelector("#antraSekcija");
console.dir(antraSekcija);

let antrasParagrafas = `Antras paragrafas`;
let antroParagrafoTekstas = `Antro paragrafo tekstas`;

//siai sekcijai sukurti teksta ir mygtuka su klase is JS

antraSekcija.innerHTML +=`
<button class="sleptiOrRodyti">Nerodyti</button>
<div>
  <h1>${antrasParagrafas}</h1>
  <p>${antroParagrafoTekstas}</p>
</div>
`
//paselektinti mygtuka
let mygtukas = document.querySelector(".sleptiOrRodyti");
console.dir(mygtukas);

//sukurti mygtuko funckionaluma

mygtukas.addEventListener("click", function(){ //sukuriamas eventas su click funkcija
  if(mygtukas.innerText === "Nerodyti"){     //jei mygtuko tekstas = rodyti
    mygtukas.innerText === "Rodyti";         //pakeisti mygtuko teksta i rodyti
    antraSekcija.children[1].classList.toggle("display"); //toggle reiskia, jei nera-prideda, jei yra,atima
  } else if(mygtukas.innerText === "Rodyti"){
    mygtukas.innerText === "Nerodyti";
    antraSekcija.children[1].classList.toggle("display");
  }
})

/*
1) Naudodamiesi data[0] duomeninis atlikite šiuos veiksmus:
	1.1) JS'u sekcijoje sukurkite antraštę.
	1.2) JS'u sekciją papildykite paragrafu su tekstu.
	1.3) JS'u sekciją papildykite paveikslėliu.
	1.4) JS'u sekciją stilizuokite priskirdami klases.
2) Naudodamiesi data[1] duomenimis atlikite šiuos veiksmus:
	2.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
	2.2) JS'u sekciją stilizuokite priskirdami klases.
3) Naudodamiesi data[2] duomenimis atlikite šiuos veiksmus:
  3.0) Sutvarkykite data[2] viduje esančius duomenis.
	3.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
	3.2) JS'u sekciją papildykite paveiksliukų pavadinimais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
	3.3) JS'u sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
	3.4) JS'u sekciją stilizuokite priskirdami klases.
*/

// 1.1

const data = [
  {
    title: "Mona Lisa",
    paragraph: "Mona Lisa, also called Portrait of Lisa Gherardini, wife of Francesco del Giocondo, Italian La Gioconda, or French La Joconde, oil painting on a poplar wood panel by Leonardo da Vinci, probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.",
    image: "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg"
  }, {
    title: "Leonardo da Vinci paintings",
    images: [
      "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
      "https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg",
      "https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg"
    ]
  }, {
    title: "Works of Greatests of Artists",
    imagesTitles: ["Mona Lisa", "Last Supper", "Lady With An Ermine", "David", "The Creation of Adam", "Venus de Milo"],
    images: [
      "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
      "https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg",
      "https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg",
      "https://cdn.britannica.com/06/60906-050-FECBBC51/David-marble-sculpture-Michelangelo-Accademia-Florence.jpg",
      "https://www.michelangelo.org/images/artworks/the-creation-of-adam.jpg",
      "https://cdn.britannica.com/02/222202-050-40E1A83B/Statue-of-Venus-de-Milo-Louvre-Paris-France.jpg"
    ],
    paragraphs: [
      "Mona Lisa, also called Portrait of Lisa Gherardini, wife of Francesco del Giocondo, Italian La Gioconda, or French La Joconde, oil painting on a poplar wood panel by Leonardo da Vinci, probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.",
      "Last Supper, Italian Cenacolo, one of the most famous artworks in the world, painted by Leonardo da Vinci probably between 1495 and 1498 for the Dominican monastery Santa Maria delle Grazie in Milan. It depicts the dramatic scene described in several closely connected moments in the Gospels, including Matthew 26:21–28, in which Jesus declares that one of the Apostles will betray him and later institutes the Eucharist. According to Leonardo’s belief that posture, gesture, and expression should manifest the “notions of the mind,” each one of the 12 disciples reacts in a manner that Leonardo considered fit for that man’s personality. The result is a complex study of varied human emotion, rendered in a deceptively simple composition.",
      "Lady with an Ermine is a painting by Leonardo da Vinci, from around 1489-1490. That stunning picture is 40.3 cm wide and 54.8 cm high, oil on walnut board. Unfortunately, the original background has been overlaid probably in the 17th c. The subject of the portrait is identified as Cecilia Gallerani, and was probably painted at a time when she was the mistress of Lodovico Sforza, Duke of Milan and Leonardo was in the service of the Duke.",
      "David, marble sculpture executed from 1501 to 1504 by the Italian Renaissance artist Michelangelo. The statue was commissioned for one of the buttresses of the cathedral of Florence and was carved from a block of marble that had been partially blocked out by other sculptors and left outdoors. After Michelangelo completed the sculpture, the Florentine government decided instead to place it in front of the Palazzo Vecchio. The original is now in the Accademia, and copies have been installed in the Piazza della Signoria and the Piazzale Michelangelo, which overlooks Florence.",
      "Of all the marvelous images that crowd the immense complex of the Sistine Ceiling, The Creation of Adam is undoubtedly the one which has most deeply impressed posterity. No wonder, for here we are given a single overwhelming vision of the sublimity of God and the potential nobility of man unprecedented and unrivaled in the entire history of visual art. No longer standing upon earth with closed eyes and mantle, the Lord floats through the heavens, His mantle widespread and bursting with angelic forms, and His calm gaze accompanying and reinforcing the movement of His mighty arm. He extends His forefinger, about to touch that of Adam, who reclines on the barren coast of earth, barely able as yet to lift his hand. The divine form is convex, explosive, paternal; the human concave, receptive, and conspicuously impotent. The incipient, fecundating contact about to take place between the two index fingers has often been described as a spark or a current, a modern electrical metaphor doubtless foreign to the sixteenth century, but natural enough considering the river of life which seems about to flow into the waiting body.",
      "Venus de Milo, ancient statue commonly thought to represent Aphrodite, now in Paris at the Louvre. It was carved from marble by Alexandros, a sculptor of Antioch on the Maeander River about 150 BCE. It was found in pieces on the Aegean island of Melos on April 8, 1820, and was subsequently presented to Louis XVIII (who then donated it to the Louvre in 1821). Though it was reconstructed to a standing posture, the statue’s arms were never found. An inscription that is not displayed with the statue states that “Alexandros, son of Menides, citizen of Antioch of Maeander made the statue.” The figure’s origin on the island of Melos has led some to think she may be Amphitrite, the Greek goddess of the sea."
    ]
  }
];
  
/*
1) Naudodamiesi data[0] duomeninis atlikite šiuos veiksmus:
	1.1) JS'u sekcijoje sukurkite antraštę. + 
	1.2) JS'u sekciją papildykite paragrafu su tekstu. +
	1.3) JS'u sekciją papildykite paveikslėliu. +
	1.4) JS'u sekciją stilizuokite priskirdami klases +
*/


let task2 = document.querySelector("#task2");
console.log(task2)

task2.innerHTML +=
`
<div>
  <h1 class="task2Antraste">${data[0].title}</h1>
  <div class="task2Display">
    <p class="task2paragrafas">${data[0].paragraph}</p>
    <img src="${data[0].image}" alt="Mona-lisa-img" class="MonaLisaImg"></img>
  </div>
</div>
`;

/*
2) Naudodamiesi data[1] duomenimis atlikite šiuos veiksmus:
	2.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
	2.2) JS'u sekciją stilizuokite priskirdami klases.
*/
 
let task3 = document.querySelector("#task3");
console.log(task3);

task3.innerHTML += `
<div class="task2">
  <h1 class="task3Title">${data[1].title}</h1>
  <div class="task3ImageContainer">
  ${
    data[1].images.map(function(image){
    return `<img src="${image}">`;
    })
    }
  </div>
</div>
`;


// 2 uzduoties geresnis budas
//task3.innerHTML += `
//<div class="task2">
//  <h1 class="task3Title">${data[1].title}</h1>
//  <div class="task3ImageContainer">
//  ${
//    data[1].images.map(function(image){
//    return `<img src="${image}">`;
//    })
//    }
//  </div>
//</div>
//`;


//for(let image of data[1].images){
// console.log(image);  
//}

// for each - kiekvienas atlieka veiksmą su kiekvienu. NEGRAZINA
//pirma nurodyti su kokiais duomenimis bus atliktas veiksmas -> data [1].images.
//irasomas forEach.
//(function)(image(KAIP VADINU JO ELEMENTUS)).
//lauztiniai skliaustai {}, jų viduje nurodomas sukamo ciklo elementas elementas.

//ATRODO TAIP:

// data[1].images.forEach(function(image){
// `<img src="${image}">`;
// });

//--------------------------------------------------------

//for map - kiekvienas atlieka veiksma su kiekvienu. GRAZINA






/*
3) Naudodamiesi data[2] duomenimis atlikite šiuos veiksmus:
  3.0) Sutvarkykite data[2] viduje esančius duomenis.
	3.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
	3.2) JS'u sekciją papildykite paveiksliukų pavadinimais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
	3.3) JS'u sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
	3.4) JS'u sekciją stilizuokite priskirdami klases.
*/

let task4 = document.querySelector("#task4");
console.log(task4);

task4.innerHTML +=
`<h1 class="task4Title">${data[2].title}</h1>`;

for(let i = 0; i < data[2].images.length; i++){
task4.innerHTML +=
`
<div class="task4div">
    <h2>${data[2].imagesTitles[i]}</h2>
    <img src="${data[2].images[i]}" alt="imgages" class="task4images"></img>
    <p class="t4p">${data[2].paragraphs[i]}</p>
</div>
`;
}
