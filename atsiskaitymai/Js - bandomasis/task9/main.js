/*
  Sukurkite klasę, kuri priima 4 savybes ir turi 2 metodus.
  Savybės: masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai.
  Metodai:
    1 metodas tikrina ar mašina brangesnė negu 10 000 eurų ir grąžina true|false.
    2 metodas tikrina ar mašina senesnė negu 2010 ir grąžina mašinos amžių ir tekstą "Antikvaras"|"Šviežiena".
*/

class Car{
  constructor(masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai){
    this.masinosMarke = masinosMarke;
    this.masinosModelis = masinosModelis;
    this.masinosKaina = masinosKaina;
    this.masinosGamybosMetai = masinosGamybosMetai;
  }
  methodOne(){
    if (this.masinosKaina > 10000){
    return true
    }else {
      return false
    }
  }
  methodTwo(){
    if (this.masinosGamybosMetai < 2010){
    return "Antikvaras"
  }else{
    return "Šviežiena"
  }
  }
}
let car = new Car("toyota", "verso", 9000, 2018);

console.log(car.methodOne())
console.log(car.methodTwo())
