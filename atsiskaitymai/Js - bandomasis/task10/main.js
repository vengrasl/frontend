import { asmuo1, asmuo2, asmuo3, asmuo4, asmuo5, asmuo6 } from "./scripts/data.js"; //importuojam asmenis
import { vardoIlgis } from "./scripts/vardoIlgis.js";
import { lytis } from "./scripts/lytis.js";
import { pilnametyste } from "./scripts/pilnametyste.js";

/*
  Sutvarkykite 10 užduoties failų kodą taip, kad veiktų main.js parašytas kodas.
*/

let pirmas = vardoIlgis(asmuo1);
let antras = lytis(asmuo2);
let trecias = pilnametyste(asmuo3);
let ketvirtas = vardoIlgis(asmuo4);
let penktas = lytis(asmuo5);
let sesi = pilnametyste(asmuo6);

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(ketvirtas);
console.log(penktas);
console.log(sesi);

