function Student() {
    this.name = 'Kofi Manu',
    this.age = 18
}
Student.prototype.school = 'AIT';

const student1 = new Student();
const student2 = new Student();

console.log(student1.school)

Student.prototype.greet = function() {
    console.log(`Welcome ${this.name}`);
}

Student.prototype.age = 20;
Student.prototype.school = 'Legon';

console.log(student1.school);
console.log(student2.school);

const student3 = new Student();

console.log(student3.school)
console.log(student3.age)