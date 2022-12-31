/* youtube kanalai:

mosh - trumpi, bendrine info                            - https://www.youtube.com/@programmingwithmosh

traversyMedia (gera info)                               - https://www.youtube.com/@TraversyMedia

The net Ninja (geri issamus, geri tutorials)            - https://www.youtube.com/@NetNinja

FreeCodeCamp (apie labai daug ka)                       - https://www.youtube.com/@freecodecamp

CodingTrain (sekamos naujienos, not begginers friendly) - https://www.youtube.com/@TheCodingTrain

*/


//                                OOP Principai


/*
Inkapsuliacija - objekto vidiniai duomenys yra slepiami ir jais galima manipuliuoti ti naudojant objekto viešus metodus. GRUPUOTI IR MAŽINTI

Abstrakcija    - objekto nepriklausomumas nuo išorinių sudedamųjų dalių

Paveldėjimas   - viena klase gali buti kitos klases konkretizacija 

Polimorfizmas  - galimybe dirbti su objektu, nezinant jo tikslaus tipo ir strukturos

svarbiausia get ir set.

*/

// kuriame klase su privaciais duomenimis ir naudojame get/set, kad pakeistume duomenis
class Gyvunas{
  #pavadinimas;
  #kojuKiekis;
  constructor(pavadinimas, kojuKiekis){
    this.#pavadinimas = pavadinimas;
    this.#kojuKiekis = kojuKiekis;
  }
  getPavadinimas(){
    return this.#pavadinimas; //metodo metu su 'get' galima gauti gyvuno pavadinima, nors jis ir buvo su #
  }
  setPavadinimas(naujasPavadinimas){ //set suteikia nauja reiksme
    this.#pavadinimas = naujasPavadinimas
  }
  getkojuKiekis(){
    return this.#kojuKiekis;
  }
  setKojuKiekis(naujasKojuKiekis){
    return this.#kojuKiekis = naujasKojuKiekis;
  }
}


//norime sukurti nauja kintamaji i jau sukurta masyva "Gyvunas"
class Kate extends Gyvunas{ //kreipiames i gyvuna "Kate" (kurisme toki gyvuna), kuris paklius į "Gyvunas" masyva
  constructor(kojuKiekis){ 
    super('kate', kojuKiekis)     //super - is praeito paimu reiksmes/parametrus. Taip pat reikia nurodyti parametrus siuos parametrus, nebent ju nekeisime. siuo atveju. duosime pavadinima 'kate' ir paliksime koju parametra.
  }
  //galime sukurti katei papildomu nustatymu. pvz, kad miauksi
  miauksi(){
    return "miaaauuuuu...";
  }
}


let gyvunas = [
  new Gyvunas("katė", 4),
  new Kate(4)
]

console.groupCollapsed("konsolinti gyvunai");
{
console.log(gyvunas[0]); //leis paziureti visus duomenis

//#
console.log(gyvunas[0].pavadinimas); //bus undefined, nes prie this.pavadinimas nurodyta #


//------------------------------------------------------set ir get------------------------------------------------------------------

console.log(gyvunas[0].getPavadinimas()); //metodo pagalba galima isgauti gyvuno pavadinima, nors jis ir buvo su #get

console.log(gyvunas[0].setPavadinimas('suo')); //bus undefined, nes neprasome parodyti duomenu. tik keiciame pavadinima

console.log(gyvunas[0].getPavadinimas()); //dabar pakeistas pavadinimas

//---------------------------------------------------------------------------------------------------------------------------------

console.log(gyvunas); //bus pridetas antras gyvunas "kate";

console.log(gyvunas[1].miauksi())
}
console.groupEnd();

/*
1) Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname.
  1.1) JavaScripte pasirašykite klasę su konstruktoriumi, kuris turės vardą ir pavardę. Metodą - atsirasti lentelėje.
  1.2) Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization).
  1.3) Sukurkite objektą naudojant Klasę.
  1.4) Galiausiai iškvieskite metodą, kad pridėtų į lentelę.
  Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje esančioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

2) Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis).
  2.1) Per Klasę, sukuriamas objektas ir jis atvaizduojamas po forma (CSS'ą rašykite CSS'e) kaip atvaizduota nuotraukoje (./images/cars.PNG).
  3.1) Paspaudus ant automobilio bloko - turi alert išmesti kainą ir mileage. (gal su CSS'u gražiai padaryti, kad užėjus ant elemento su pele, atsiranda laukelis nuotraukoje...)
*/

const pirmaSekcija = document.querySelector('#pirma');
console.log(pirmaSekcija);


const forma = pirmaSekcija.querySelector('form');
console.log(forma);

class FullName{
  constructor(name, lastName){
    this.name = name;
    this.lastName = lastName;
  }
  addToTable(){
    let tdName = document.createElement('td');
    let tdLastName = document.createElement('td');

    tdName.append(this.name);

    tdLastName.append(this.lastName);
    
    let tr = document.createElement('tr');
    tr.append(tdName, tdLastName);
    let tbody = document.querySelector('.table tbody');
    console.log(tbody);
    tbody.append(tr);
  }
}


forma.addEventListener ('submit', (e) =>{
  e.preventDefault();
  console.log(e);
  let name = forma.querySelector("#pilnasVardas").value;

  let splitName = name.trim().split(' ');

  let fullName = new FullName(splitName[0], splitName[1]);

  console.log(fullName);
  
  fullName.addToTable();
})


// Susikurti (h1-h6) Antraštės Klasę su tekstu, atributais
class Heading{
  constructor(props){
    this.props = props;
    return this.render();
  }

  render = () =>{
    this.htmlElement = document.createElement(`h${this.props.dydis}`);
    this.textElement = document.createTextNode(this.props.tekstas);   
    this.htmlElement.append(this.textElement);

    if(this.props.atributai){
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });
    }

    return this.htmlElement;
  }
}

let antraste1 = new Heading({
  dydis: '1',
  tekstas: 'Kaimietiškai',
  atributai: {
    class: 'klasesVardas darVienaKlase',
    id: 'kazkoksId',
    style: 'color:red'
  }
});
document.querySelector("body").append(antraste1);

document.querySelector("body").append(new Heading({
  dydis:'5',
  tekstas:'Labas rytas',
  atributai: {
    style: 'font-size:50px'
  }
}));
document.querySelector("body").append(new Heading({
  dydis:'6',
  tekstas:'mažiukas'
}));
document.querySelector('body').append(new Heading({
  dydis: '4',
  tekstas:'vidutinis'
}));

