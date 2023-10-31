//Defininig a class called Person
class Person {
    constructor(name, place, days) {
        this.name = name;
        this.place = place;
        this.days = days;
    }

    introduce() {
        return `
        Hi, I am ${this.name}, and I come from ${this.place} in West Africa.
        I am participating in the ${this.days} days Javascript Challenge.
        `;
    }
}

const userOne = new Person("Ezra", "Ghana", 90);


console.log(userOne.introduce()); 
