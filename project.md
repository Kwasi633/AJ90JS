**PROTOTYPES**

In JavaScript, every function and object has a property named `prototype` by default.

```js
function Person () {
    this.name = 'John',
    this.age = 23
}

const person = new Person();

console.log(Person.prototype); 
```
Trying to access the prototype property of a `Person` constructor function.

Since the prototype property has no value at the moment, the output will be `{}`

**INHERITANCE**
In JavaScript, a prototype can be used to add `properties` and `methods` to a constructor function. And objects `inherit` properties and methods from a prototype.

The syntax to add the property to an object constructor function is:
```javascript
objectConstructorName.prototype.key = 'value';
```

**Adding Methods to a Constructor**

New methods can be added to a constructor function using prototype. 

**Changing Prototype**

If a prototype value is changed, then all the new objects will have the changed property value. All the previously created objects will have the previous value. 

**Prototype Chaining**

If an object tries to access the same property that is in the constructor function and the prototype object at the same time, the object takes the property from the constructor function.

**GETTERS AND SETTERS**

Getters and setters are functions that allow you to get and set object values, respectively. Getter functions return the value of the specified property, while setter functions can set the value of the specified property.

In Javascript, getters and setters are defined using the Object.defineProperty() method.

```js
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
```

```js
student.name = "Ama Serwaa";
```
the **setter function** is invoked here: `student.name = "Ama Serwaa"`

```js
set: function(value) {
    //Sets the value of the private property '_name' to the provided 'value'.
    this._name = value;
}
```
**value** parameter will receive `Ama Serwaa` as argument and the private property `_name` is updated with the new value `"Ama Serwaa"`

**USES OF GETTERS AND SETTERS**

Getters and setters are commonly used to control access to the properties of an object. They provide a way to encapsulate the internal state of an object and add an extra layer of logic when getting or setting values.