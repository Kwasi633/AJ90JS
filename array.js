const prompt = require('prompt-sync')();

let toDo = [];
let answer = "";

while (answer !== "done") {

    answer = prompt("Add New Task: ");
    if(answer !== "done") {
        toDo.push(answer);
            }
}

console.log("");
console.log("TASK FOR TODAY\n"); 
for(var i = 0; i < toDo.length; i++)
{
    console.log(toDo[i]);
}
    
    






