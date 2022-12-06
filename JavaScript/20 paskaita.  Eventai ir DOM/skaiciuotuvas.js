//  sukurti skaiciuotuvo funkcionaluma

let calculator = document.querySelector("#calc");

calculator.children.skaic.addEventListener('submit', function(e){
  e.preventDefault();
  console.dir(e);
  let skaicius1 = e.target.elements.skaicius1.valueAsNumber;
  let skaicius2 = e.target.elements.skaicius2.valueAsNumber;
  let veiksmas = e.target.elements.veiksmas.value;

  let atsakymas = 0;
  switch(veiksmas){
    case 'sudetis':
      atsakymas = skaicius1+skaicius2
    break
    case 'atimtis':
      atsakymas = skaicius1-skaicius2
    break
    case 'dauginimas':
      atsakymas = skaicius1*skaicius2
    break
    case 'dalinimas':
      atsakymas = skaicius1/skaicius2
    break
    case 'laipsnis':
      atsakymas = skaicius1**skaicius2
    break
    case 'saknis':
      atsakymas = skaicius1**(1/skaicius2)
    break
    case 'liekana':
      atsakymas = skaicius1&skaicius2
    break
    default:
      atsakymas = "negalimas veiksmas"
  }
  calculator.children.output.innerHTML = atsakymas // atsakymo isvedimas i sukurta output
});
