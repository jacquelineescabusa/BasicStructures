var age = 15;
var pi = 3.1416;
var date = new Date();
var computeArea= function(l,w){
    return l*w;
};
var name="John Joseph Cero";

console.log('Age:' + age);
console.log('PI:' + pi.toFixed(2));
console.log(date);
console.log(name);
console.log(computeArea(10,60));


var x = 1;
var y =null;
var nothing=undefined;
if (x)
console.log('x is true');
if (!y)
console.log('y is false');
if(!nothing)
console.log('nothing is undefined');


// ==========JSON Javascript Object Notation;
var jsonObject = {
    name: 'Wishart',
    lastname: 'Escabusa',
    address: 'Paper Towns'
};
console.log(jsonObject.name);
console.log(jsonObject.lastname);
console.log(jsonObject.address);
console.log(jsonObject);