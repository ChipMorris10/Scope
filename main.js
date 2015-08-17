// This is from a discussion on Scope
console.log "hello"

var globalVar = "Chip";

var sum = function(x, y) {
  // called hiding when you have a var inside a var
  var result = x + y;
  return result;
};

sum(4, 6);

console.log(result);

// why is scope important

var scoped = function(name) {
  var greeting = "Hello " +name;
  return greeting;
};

var hello = scoped("Yusef");
console.log(hello);

// var keyword and scope
var greeting = "Hello";

var scoped = function(name) {
  // hiding
  // local variable
  bar greeting = "Hello " +name;
  return greeting;
};

// functions arguments - optional

function  multiply(num1, num2) {
  if (num2 === undefined) {
    num2 = 2;
  }
  var result = num1 * num2;
  return result;
}

var result1 = multiply(4, 5);
console.log(result1);

var resule2 = multiply(5);
console.log(result2);
