// Release 0
class Animal{
  // Constructor
  constructor(name, legs = 4, cold_blooded = false){
    this._name = name;
    this._legs = legs;
    this._cold_blooded = cold_blooded;
  }

  // Mendapatkan value property name
  get name(){
    return this._name;
  }

  // Mendapatkan value property legs 
  get legs(){
    return this._legs;
  }

  // Mendapatkan value property cold_blooded
  get cold_blooded(){
    return this._cold_blooded;
  }
}


var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);





// Release 1
class Frog extends Animal{
  constructor(name, legs, cold_blooded){
    super(legs, cold_blooded);
    this._name = name;
  }

  jump(){
    console.log("hop hop");
  }

}

class Ape extends Animal{
  constructor(name, legs = 2, cold_blooded){
    super(cold_blooded);
    this._name = name;
    this._legs = legs;
  }

  yell(){
    console.log("Auooo");
  }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
