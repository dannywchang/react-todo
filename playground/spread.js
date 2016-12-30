// function add (a ,b) {
//   return  a + b;
// }
//
// console.log (add(3,1));
//
//
// var toAdd =[9,5];
//
// console.log(add(...toAdd));

// var groupa = ['aaa','bbb'];
// var groupb = ['cccc','ddddd'];
//
// var final = [3,...groupa,...groupb];
//
// console.log(final);

var person = ['aaaaa',25];
var personTwo = ['bbbbb',18];

function greet(name, age){
  console.log('Hi' + name+' you are'+age);
}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew'];
final=[final,...names];
final.forEach(function (name){
  console.log('Hi'+name)
});
