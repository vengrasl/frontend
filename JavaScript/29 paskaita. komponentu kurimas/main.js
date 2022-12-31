import Heading, {helloWorld, tavoVardas as koksTavoVardas} //{galima keisti pavadinima funckijos, bet tada nauju vardu ir ja kviesti}
from './heading.js'; 

//              KOMPONENTAI


//sukurti kelis skirtingus paragrafus

class Paragraph{
  constructor(props){
    this.props = props;
  return this.render()
  }

  render = () =>{
    this.htmlElement = document.createElement('p');                       //visada nurodyti, koks bus kuriamas elementas
    this.textElement = document.createTextNode(this.props.paragraphText); // koks bus paragrafo tekstas
    this.htmlElement.append(this.textElement);                            // i paragrafa keliam teksta

    if (this.props.attributes){                                           // jei yra atributai. Galima pasitikrinti console.log. jei grazina undefined - nera. Jei grazina object - yra. Jei yra, kaip jie atrodo?
      Object.keys(this.props.attributes).forEach(raktas => {              //kadangi attributes yra objekte, 1) rasome Object(keys) - pavers juos i masyva 2) skliasuteliuose ivardijame ka verciame i masyva 3) sukame cikla (raktas-apibudinti sau per kokius elementus suksis)
        this.htmlElement.setAttribute(raktas, this.props.attributes[raktas]); //darome tokius veiksmus: 1)targetinam sukurta elementa 2)settinam jam atributa 3)nurodome, kad sugalvotas elementas eis per visus attributes 
      });
    }
    return this.htmlElement;
  }
}


let paragraph1 = new Paragraph({
  paragraphText: "Lorem lorem1",
  attributes: {
    class: "paragraph1",
    id: 'para1',
    style: 'color:brown'
  }
});
document.querySelector('body').append(paragraph1);

let paragraph2 = new Paragraph({
  paragraphText: "Kitas paragrafas",
  attributes: {
    class: "paragraph1",
    id: 'para1',
    style: 'color:grey'
  }
});
document.querySelector('body').append(paragraph2);

let paragraph3 = new Paragraph({
  paragraphText: "Nu ir dar vienas paragrafas",
  attributes: {
    class: "paragraph1",
    id: 'para1',
    style: 'color:black'
  }
});
document.querySelector('body').append(paragraph3);



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Button {
  constructor(props){
    this.props = props;
    return this.render();
  }


render = () => {
  this.htmlElement = document.createElement('button');
  this.textElement = document.createTextNode(this.props.buttonText);
  this.htmlElement.append(this.textElement);

  if (this.props.attributes){
    Object.keys(this.props.attributes).forEach(item =>{
      this.htmlElement.setAttribute(item, this.props.attributes[item])
    })
  }
  return this.htmlElement;
  }
}

let button = new Button({
  buttonText: 'Submit',
  attributes: {
    class: "buttonClass",
    style: 'border-radius: 5px'
  }
});

document.querySelector('body').append(button);



//      UL/OL 

  class List{
    constructor(props){
      this.props = props;
      return this.render();
    }

    render = () => {
      //----------------------------KURIAME UL---------------------------------------------------------
      this.htmlElement = document.createElement(this.props.type); //sukurs elementa pagal tipa 'ul'

      Object.keys(this.props.attributes).forEach(raktas => {  //ul turi keleta atributu, verciame juos is objektu i masyva
        this.htmlElement.setAttribute(raktas, this.props.attributes[raktas]); //kreipiames i ul, steinam atributus
      });
      // --------------------------KURIAME LI--------------------------------------------------------
      this.props.listItems.forEach(listItem => {  //sukame cikla per listItem. Object.keys() nereikia, nes jie patalpinti masyve
        this.li = document.createElement('li'); //susikuriame list item (tas pats kaip ir let li = ...). Klases viduje galima taip kurti
        this.liTextNode = document.createTextNode(listItem.text); //sukuriame teksta li elementui
        this.li.append(this.liTextNode); // i li elementa dedame li teksta
        Object.keys(listItem.attributes).forEach(raktas => { // listItem atributes verciam i masyva
          this.li.setAttribute(raktas, listItem.attributes[raktas]); //jam suteikiame atributus
        });
        this.htmlElement.append(this.li);    // i sukurta ul talpiname li
      });

      return this.htmlElement; //graziname ul
    }
  }

  let list = new List({
    type: 'ul', //nusirodome koks bus elemento tipas
    attributes: { // ul turi atributus:
      class: 'lightThemeList',    //clase
      id: 'superUnorderedList'    //ID
    },
    listItems: [ //kadangi nestinam, listItems skiriam per kableli ir pries tai nurodome, kad jie bus masyve
      {
        text: 'list item tekstas1',
        attributes: {
          class: 'listItem',
          style: 'color: hsl(143, 65%, 31%)'
        }
      },{
        text: 'list item tekstas2',
        attributes: {
          class: 'listItem',
          style: 'color: darkblue'
        }
      },{
        text: 'list item tekstas3',
        attributes: {
          class: 'listItem',
          style: 'color: darkorange'
        }
      }
    ]
  });

  document.querySelector("body").append(list);

 

//      select

/*
  <select name="" id="">
    <option value="0">1</option>
    <option value="1">1</option>
    <option value="2">1</option>
  </select>
*/

 class Section{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render = () => {
    
    this.htmlElement = document.createElement('select'); //kuriame select

    Object.keys(this.props.attributes).forEach(key =>{ //sukame cikla per select atributus.
      this.htmlElement.setAttribute(key, this.props.attributes[key]) //section turi atributus
    });

    this.props.options.forEach(optionAttr => {
      this.option = document.createElement('option'); //sukurtas option
      this.optionTextNode = document.createTextNode(optionAttr.text); //sukurtas option tekstas
      this.option.append(this.optionTextNode); // options priskirtas tekstas
      Object.keys(optionAttr.attributes).forEach(key => { //options suteikiame atributus
        this.option.setAttribute(key, optionAttr.attributes[key]);
      })
      this.htmlElement.append(this.option);
    });
    return this.htmlElement;
  }

 }

  

let section = new Section({
  attributes:{
    name: 'section',
    id: 'section'
  },
  options: [
    {
      text: '1',
      attributes: {
        value: '1'
      }
    },{
      text: '2',
      attributes: {
        value: '2'
      }
    },{
      text: '3',
      attributes: {
        value: '3'
      }
    },{
      text: '4',
      attributes: {
        value: '4'
      }
    }
  ]
});

document.querySelector('body').append(section);




//    TABLE

class Table{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render = () => {
  
  this.table = document.createElement('table'); 
  Object.keys(this.props.attributes).forEach(key =>{ 
    this.table.setAttribute(key, this.props.attributes[key])
  });
  
  this.thead = document.createElement('thead'); 

  this.tr = document.createElement('tr'); 
  
  this.props.th.forEach(item =>{  
    this.th = document.createElement('th'); 
    this.thTextNode = document.createTextNode(item.text); 
    this.th.append(this.thTextNode); 
    Object.keys(item.attributes).forEach(key => { ///////////
      this.th.setAttribute(key, item.attributes[item]); 
    })
    this.tr.append(this.th); 
    this.thead.append(this.tr); 
    this.table.append(this.thead); 
  });

  this.tbody = document.createElement('tbody'); 
  this.tr = document.createElement('tr'); 
  this.props.td.forEach(item =>{
    this.td = document.createElement('td');
    this.tdTextNode = document.createTextNode(item.text);
    this.td.append(this.tdTextNode);
    Object.keys(item.attributes).forEach(key => {
      this.td.setAttribute(key, item.attributes[item]);
    })
    this.tr.append(this.td);
    this.tbody.append(this.tr);
    this.table.append(this.tbody);
  });

  return this.table;
 }
}


let table = new Table({
attributes:{
  class: 'table',
  style: 'border: 2px solid black'
},
//thead
//tr
th: [
  {
    text: "Name",
    attributes: {
      class: 'th',
      style: 'border: 2px solid black'
    }
  },{
    text: "Last Name",
    attributes: {
      class: 'th',
      style: 'border: 2px solid black'
    }
    },{
    text: "Age",
    attributes: {
      class: 'th',
      style: 'border: 2px solid black'
      }
  }  
], 
//tbody
//tr  
td: [
  {
    text: "Lukas",
    attributes: {
      class: 'td',
      style: 'border: 2px solid black'
    }
    },{
    text: "Vengras",
    attributes: {
      class: 'td',
      style: 'border: 2px solid black'
    }
    },{
    text: "26",
    attributes: {
      class: 'td',
      style: 'border: 2px solid black'
    }
  },
  
]

});
document.querySelector('body').append(table);



//                MODULIAI

/*
Moduliai - kitu js failu importavimas ir naudojimas

import - ka from 'isKur'; - faile kuriame norime naudoti importus (main.js)
type='module' - nusirodyti atributa type su nustatymu 'module' JS failo prijungime (HTML'e)
export default something(){}; 'iskur' faile reikia nurodyti ka jis eksportuoja.

galima rasyti export default, tiek export;

export default bus numatytasis eksportas, kuri priimsi rasydamas - import anyNameIwant from 'exportFiles.js'. Vardas, kuri nurodai neprivalo sutapti su export default vardu esanciu exportFile.js visviena bus exportuojamas vienas vienintelis elementas, kuris turi default prierasa.

export - paprastas eksportas, kuri priimsi rasydamas - import { exportedName, exportedName2} from 'exportFile.js. Priimsi butent tuos elementus, kuriu vardus parasei ir kurie yra paprasti export'ai. Priimti paprastus eksportus galima kokiais tik nori pavadinimais naudojant 'as' prierasa: import {exportedName as primas, exportedName2 as antras} from 'exportedFile.js'.
*/


//29 paskaitoje susikuriame heading.js ir is 28 paskaitos ikopijuojame i ji class Header
//virsuje (1 eiluteje apsirasome, kaip importuoti)

let antraste1 = new Heading({
  dydis: '1',
  tekstas: 'Kaimietiškai',
  atributai: {
    class: 'klasesVardas darVienaKlase',
    id: 'kazkoksId',
    style: 'color:red'
  }
});

console.log(antraste1);

helloWorld();
koksTavoVardas();

//                                 Duomenu saugojimas vartotojo dalyje

//cookie

document.cookie = `vardas=tinklapis; expires=${new Date('2022 12 17 ')}`;

//session storage

document.querySelector('body').addEventListener('click', () => {
  sessionStorage.setItem('vardas', 'Lukas');
  sessionStorage.setItem('pavarde', 'Vengras');
  sessionStorage.setItem('amzius', '30');
});


//local storage

//              Duomenų saugojimas vartotojo dalyje
//  cookie
document.cookie = `vardas=kazkoks; expires=${new Date('2022 12 17')}`;
document.cookie = `kitas=kazkoks; expires=${new Date('2022 12 17')}`;
document.cookie = `vardas=kitoks; expires=${new Date('2022 12 17')}`;

// session storage
document.querySelector('body').addEventListener('click', () => {
  sessionStorage.setItem('vardas', 'Lukas');
  sessionStorage.setItem('pavarde', 'Vengras');
  sessionStorage.setItem('lvlOfTired', '30');
});
// local storage
document.querySelector('body').addEventListener('click', () => {
  localStorage.setItem('vardas', 'Lukas');
  localStorage.setItem('pavarde', 'Vengras');
  localStorage.setItem('pomegiai', ['game','sport','tv']);
  let data = {
    planeta: "Žemė",
    zemynas: "Europa",
    salis: "Lietuva"
  }
  console.log(data);
  console.log(JSON.stringify(data));

  localStorage.setItem('gyvenamojiVieta', JSON.stringify(data));


  /*
Syntax
  Save Data to Local Storage. localStorage.setItem(key, value);
  Read Data from Local Storage. let lastname = localStorage.getItem(key);
  Remove Data from Local Storage. localStorage.removeItem(key);
  Remove All (Clear Local Storage) localStorage.clear();

  */

  // localStorage.clear(); // išvalo visą storage
  // console.log(localStorage.key(0));
  // console.log(localStorage.getItem(localStorage.key(0)));
  // localStorage.removeItem(localStorage.key(0));
});

// JSON.stringify(object) -> paverčia objektą į string'ą
// JSON.parse(stringifiedObject) -> paverčia string'ą į objektą





