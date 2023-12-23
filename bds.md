**JAVASCRIPT BEHIND THE SCENES**
**JavaScript Engine**

The JavaScript Engine is a crucial component that interprets and executes JavaScript code. It includes the interpreter, the runtime environment and the call stack.

**Event Loop**
The Event Loop is a core concept in JavaScript that handles asynchronous operations. It continuously checks the message queue for events and executes them in a non-blocking manner.

**Heap**
The Heap is the region in memory where dynamic memory allocation occurs. In JavaScript, it is used for storing objects and is managed by the garbage collector.

**Call Stack**
The Call Stack is a data structure that keeps track of function calls in a program. It operates on a Last In First Out (LIFO) basis, managing the flow of execution.

**Callback Queue**
The Callback Queue is a part of the event loop where `asynchronous callback functions` are placed after completing their execution. They wait for the call stack to be empty before being processed.

**Execution Context**
An Execution Context is a container that stores information about the environment in which code is executed. It includes variables, scope chain and the reference to the outer environment.

**Scope and TDZ**
Scope defines the visibility and accessibility of variables in a particular context. Temporal Dead Zone (TDZ) is the phase during which a variable cannot be accessed due to hoisting until it's declared.

**`this` Keyword**
The this keyword in JavaScript refers to the object it belongs to in the current context. Its value is determined by how a function is called and is not static.

**Closure**
A Closure is a function that has access to its own scope, the outer enclosing function's scope and the global scope. It allows for maintaining state across multiple invocations.