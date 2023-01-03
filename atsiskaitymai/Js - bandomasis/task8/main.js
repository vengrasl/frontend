/*
  Surkite klasę "trueFalse", kuri turi 4 metodus:
    metodas1 priima skaičių ir grąžina true jei skaičius didesnis už 100 ir false kitu atveju.
    metodas2 priima žodį ir grąžina true jeigu jis prasideda didžiąja raide ir false kitu atveju.
    metodas3 priima skaičių ir grąžina true jeigu šis yra lyginis ir false kitu atveju.
    metodas4 priima žodį ir grąžina true jeigu šis yra ilgesnis nei 8 raidžių ir false kitu atveju.
*/


class trueFalse {
  constructor(number, string) {
    this.number = number;
    this.string = string;
  }
 methodOne(){
   if (this.number > 100) {
    return true
   } else {
    return false
   }
  }
  methodTwo(){
    if (this.string.charAt(0) == this.string.charAt(0).toUpperCase(0)){
      return true
    } else {
      return false
    }    
  }
  methodThree(){
    if(this.number % 2 == 0){
      return true
    } else {
      return false
    }
  }
  methodFor(){
    if (this.string.length > 8){
      return true
    } else{
      return false
    }
  }
  methodFive(number){
    this.number = number
    if (number > 100) {
      return true
     } else {
      return false
     }
  }
}

const object = new trueFalse (1000, "ilgas žodis");

console.log(object.methodOne())

console.log(object.methodTwo())

console.log(object.methodThree())

console.log(object.methodFor())

