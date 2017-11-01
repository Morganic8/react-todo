// function add(a,b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));
//
// var groupA = ['Tyler, Hughie'];
// var groupB = ['Trevor'];
//
// var final = [3, ...groupA];
//
// console.log(final);


var person = ['Morgan', 31];
var personTwo = ['Rachel', 28];
//Hi Morgan, you are 25

function message(name, age){
  return console.log("Hi " + name + ", you are " + age);
};

message(...person);
message(...personTwo);
var names = ['Mike', 'Ben'];
var final = ['Morgan', ...names];
//Hi Andrew

final.forEach(function(name){
  console.log("Hi " + name);
});
