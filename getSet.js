
let student = {
    _name: "Kofi Manu"//private property '_name'
};

// Define property 'name' on object student
Object.defineProperty(student, 'name', {
    //Getter function for property 'name'.
    get: function() {
        //Return the value of the private property '_name'.
        return this._name;
    },
    //Setter function for property 'name'.
    set: function(value) {
        // Set the value of the private property '_name' to the provided 'value'.
        this._name = value;
    }
});

student.name = "Ama Serwaa"

console.log(student)

//data validation using get() and set()
let person = {
    _age: 0,
    get age() {
        return this._age;
    },
    set age(value) {
        if (value >= 0 && Number.isInteger(value)) {
            this._age = value;
        } else {
            console.log("Invalid age value");
        }
    }
};

person.age = 25; 
person.age = -5; 
