// //exmp1
// var boom = function() {
//     console.log("boom!");
// };

// var bang = function() {
//     console.log("bang!");
// };

// var doubleWham = function(sound1, sound2) {
//     sound1();
//     sound2();
// };

// doubleWham(boom, bang);

//exmp2
// var boom = function() {
//     return ("boom!");
// };

// var bang = function() {
//     return ("bang!");
// };

// var doubleWham = function(sound1, sound2) {
//     console.log("ready!");
//     let a = sound1();
//     let b = sound2();
//     console.log(a);
//     console.log(b);
// };
// doubleWham(boom, bang);


//PARTNER EXERICSE 2
var push = function() {
    console.log("pushing it!");
};

var pull = function() {
    console.log("pulling it!");
};
var pushPull = function(func) {
    func();
};

pushPull(push);
pushPull(pull);


//PARTNER EXERICSE 3
var getTime = function(func) {
    func(new Date());
};

var returnTime = function(time) {
    alert('The current time is: ' + time);
};
getTime(returnTime);


//PARTNER EXERCISE 4
// func expression
// var greet = function() { alert('hey there!'); };
// setTimeout(greet, 2000);

// setTimeout(function() {
//     alert('hey there!');
// }, 2000);


//MORE CALLBACKS IN THE WILD

//PARTNER EXERCISE 5
var saySomething = function() {
    alert("I'm saying stuff!");
};

//setTimeout(saySomething, 1000);

//anonymous
setTimeout(function() {
    alert("I'm saying stuff! (anonymous)");
}, 1000);