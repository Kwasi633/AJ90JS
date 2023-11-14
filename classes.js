// let myDuck = {
//     name: "Aflac",
//     numLegs: 2,
//     sayName: function() {return `The name of this duck is  ${myDuck.name}` }
//   };

//   console.log(myDuck.sayName());

// let myDuck = {
//   name: "Aflac",
//   numLegs: 2,
//   sayName: function() {return `The name of this duck is  ${this.name}`}
// };

// console.log(myDuck.sayName())

// function Bird() {
//   this.name = "Albert";
//   this.color  = "blue";
//   this.numLegs = 2;
// }

// let blueBird = new Bird();

// console.log(blueBird.name);
// blueBird.color;
// blueBird.numLegs;

// function Student() {
//   this.firstName = "John";
//   this.lastName  = "Doe";
//   this.age = 20;
// }

// let student1 = new Student();
// student1.firstName = "Dennis"
// student1.lastName = "Ofori"
// student1.age = 22

// console.log(student1)
 
function Bird(name, color){
  this.name = name;
  this.color = color;
 }

 Bird.prototype.numLegs = 2;

let flamingo = new Bird("Coral", "pink");

console.log(flamingo.name)
console.log(flamingo.numLegs)
console.log(flamingo instanceof Bird);
