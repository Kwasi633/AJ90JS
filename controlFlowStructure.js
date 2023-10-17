//if statement
const money = 4000;

//money >= 3000 will return true or false
if (money >= 3000) {
 console.log("You can buy iphoneX");
} 

//if_else statemnt
const amount = 2000;

if (amount >= 3000 ) {
 console.log("You can buy iphoneX");
}
else{
	console.log("You don't have money to buy iphoneX")
}

//if else_if 
const amt = 800;

if (amt >= 3000 ) {
 console.log("You can buy iphoneX");
}
else if(amt >= 5000){
	console.log("You can buy iphone11")
}
else if(amt >= 6000){
	console.log("You can buy iphone12")
}
else{
console.log("You dont have money to buy the latest iphone")
}

//Tenary operator
const pay = 4000;

(pay >= 3000 ) ? console.log("You can buy iphoneX") : console.log("You don't have money to buy iphoneX")

const price = 6000;

//switch statement
switch(price){
    case 3000:
        console.log('You can buy iphoneX')
        break;
    
    case 5000:
            console.log("You can buy iphone11")
            break;
    case 6000:
        console.log("You can buy iphone12")
        break;
    default:
        console.log("You dont have monney to buy the latest iphone")    
}