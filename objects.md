Day 25 - 27 Complete! 🚀

**Objects**
An object is a collection of key-value pairs, where each value is associated with a unique key. These key-value pairs are often referred to as properties of the object. The key is the variable name and the value is the data type. Each object has a set of properties(keys).




**Object Syntax**
```javascript
const myObject = {
  key1: value1,
  key2: value2,
}
```

**Eg of an object**
```javascript
const kofi = {
  firstName: "John",
  lastName: "Doe",
  gender: "male",
  height: "tall",
  legs: 2
};
```

Retrieving data from objects

The dot notation(`.`) is used to access `properties` inside an object.

```javascript
const books = {
		title: "Blue Army",
		cost: 250,
		pages: 300,
		author: "Michael Clark",
}

console.log(books.author) //Michael Clark
```

Adding new properties to an object 
```javascript
const books = {
		title: "Blue Army",
		cost: 250,
		pages: 300,
		author: "Michael Clark",
}

//Adding new property
books.colors = ["red", "blue", "yellow"]

console.log(books)
```
Changing property values in an object
```javascript
    const books = {
		title: "Blue Army",
		cost: 250,
		pages: 300,
		author: "Michael Clark",
}

//Changing property value
books.cost = 500

console.log(books)
```

To delete properties in a JavaScript object, you can use the `delete` operator. Here's how you can delete properties from an object.
```javascript
    const person = {
    name: "John",
    age: 30,
    city: "Accra",
};

//Deleting a property
delete person.age;

console.log(person); 
```

Properties can have the value of `Numbers`, `Strings`, `Objects`, `Arrays` or `Functions`


**Set and Map**
A Set is a collection of distinct values, which means each value can only occur once in a set. Sets are useful when you want to store a list of unique items. 

*Creating a Set*
```javascript
const person = new Set();
```

Adding and deleting elements in Set
```javascript

person.add("John");
person.add("Doe");

person.delete("Doe");
```

Verify if an element is in Set

```javascript
   person.has("John"); // true
   person.has("Ama"); // false
```

The `forEach` method can be used to loop through sets.
```javascript
    person.forEach((value) => {
    console.log(value);
});
```


**Map**
A Map is a collection of key-value pairs where each key can map to a specific value. Maps are useful for storing and retrieving data based on keys.

Creating a Map
```javascript
    const person = new Map();
```

Adding and Deleting Key Value Pairs
```javascript
person.set("firstName", "John");
person.set("lastName", "Doe");

person.delete("lastName");
```

Accessing Values in Map
```javascript
person.get("firstName"); //"John"
person.get("hobby"); //undefined
```

Verify if an element exist
```javascript
    person.has("fistName"); // true
    person.has("age"); // false
```

The `forEach` method can also be used to loop through maps.
```javascript
   person.forEach((value, key) => {
    console.log(key + ": " + value);
});
```
