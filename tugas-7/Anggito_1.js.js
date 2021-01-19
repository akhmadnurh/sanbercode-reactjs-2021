//release 0
class Animal {
    // Code class di sini
    constructor(name, legs = 4, cold_blooded = false){
      this.animalname = name;
      this.animallegs = legs;
      this.animalblood = cold_blooded;
    }
    //Memanggil name
    get name(){
      return this.animalname;
    }
    //memanggil legs
    get legs(){
      return this.animallegs;
    }
    //memanggil cold_blooded
    get cold_blooded(){
      return this.animalblood;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//release 1
class Frog extends Animal{
  constructor(name, legs = 4, cold_blooded){
  super(legs, cold_blooded)
  this.animalname = name; 
  }

jump(){
  console.log("hop hop");
  }
}

class Ape extends Animal{
  constructor(name, legs = 2, cold_blooded){
    super(cold_blooded)
    this.animalname = name;
    this.animallegs = legs;
  }

yell(){
  console.log("Auooo");
  }
}
// Code class Ape dan class Frog di sini
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 