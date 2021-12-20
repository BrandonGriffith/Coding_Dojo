//problem 1
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
console.log(floor);
console.log(ceiling);
console.log(random);
//problem 2
function d6() {
    //var roll = Math.ceil(Math.random()*6);
    var roll = Math.floor(Math.random()*6) + 1;
    return roll;
}
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
//problem 3
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function randPick(){
    var roll = Math.floor(Math.random()*lifesAnswers.length);
    console.log(lifesAnswers.length);
    console.log(lifesAnswers[roll]);
    console.log(roll);
}
randPick();

var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}
    
// we can now still get all the delicious taco facts by
taco1.tacoInfo(); // note tacoInfo still gets called like a function
