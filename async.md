**ASYNCHRONOUS JAVASCRIPT**

By default javascript is synchronous. This means that code is been executed line by line in the exact way we defined it. Each line of  code will always wait for the previous line of code to finish execution.

*Synchrounous Code*
```js
console.log("Hello")

console.log("Welcome to AJ90JS Challenge")

console.log('My name is Ezra')
```

Asynchronous code takes of how we execute tasks which take some time to complete. These tasks are called asynchrounous tasks. If we have a set of code to be executed and there is a section which contains asynchronous code which will take to complete, we cant wait wait for only that async section to complete before the other part of the code gets executed. 

*Some async operations which may take some time to complete a network request, fetching data from a database, requesting data from an API, etc.*

**setTimeOut**

An inbuilt async javascript function is `setTimeOut()`. It is used to handle asynchronous tasks. The `setTimeOut()` function takes 2 arguments which is a callback function and a delay time.

```js
console.log("Hello")

setTimeout(() => console.log("Welcome to AJ90JS Challenge"), 2000)

console.log("My name is Ezra")
```

**Promises**

A promise is placeholder for the future result of an asynchronous operation. In simple words, we can say it is a container for a future value.

`fetch()` is an asynchrounous function that is used to retrieve data from an external source. The `fetch()` takes in the url of the the external source as argument. What the fetch function returns before moving to a new line is called a `Promise`

```js
fetch('https://restcountries.com/v3.1/name/ghana')
.then(response => response.json())
.then(console.log(request));

console.log('Some Text').
```

The above code is using fetch to request data from an API: (’https://restcountries.com/v3.1/name/ghana’). A Promise is returned by the fetch() function when the above code is run.

**Promise States**

Promise has different states and results. When the Promise is created it becomes *`pending`* and when the given task is completed then the promise becomes *`settled`* After the promise is `*settled*`, we can have either a `fulfilled` or `rejected` promise state based on the outcome of the promise. We can handle these different `states` in different ways in our code.

**Consuming Promises**

Consuming a promise means that when we make a request, we wait for the result, `then` after the result arrives, we perform some operation on those results. We can consume a promise using the `then()` method on the promise.

```js
const request = fetch('https://restcountries.com/v3.1/name/ghana').then((response) =>{
    console.log(response);
    return response.json()
})
```

This code is using `.then()` method on the result of the **`fetch`** function. The **`.then()`** method is used to handle the asynchronous response from the HTTP request. It takes an arrow function: (response) =>{console.log(response);
    return response.json()
}) as an argument, which will be executed when the response is available.

This  `response` object will be printed to the console. The `response` object contains information about the HTTP response such as status codes, headers and the response body. `return` 

`return response.json();`: This line reads the response body as JSON data. The **`response.json()`** method is used to convert the response body, which is in JSON format into a JavaScript object. The **`return`** statement means that the result of this conversion operation is returned as the result of the callback function in `.then()` method.

```js
const request = fetch('https://restcountries.com/v3.1/name/ghana').then((response) =>{
    return response.json()
}
)
.then((data) =>{
    console.log(data);
})
```

```js
.then((data) =>{
    console.log(data);
}): This is another .then() block that receives the converted JSON data from the previous .then() block.
```

```js
console.log(data);: This line prints the converted JSON data to the console. data is now a JavaScript object containing the information from the API response, which can be easily accessed and used in the JavaScript code.
```

We can now access the properties of the data in our code.

Accessing population of Ghana from the data object.
```js
const request = fetch('https://restcountries.com/v3.1/name/ghana')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const population = data[0].population;
    console.log(`Population of Ghana: ${population}`);
  });
```

