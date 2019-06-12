// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
var name = "Dora";
function sayHello() {
  return "Hey, my name is " + name + "!";
}

console.log(sayHello());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const counter = () => {
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  };
};

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let count = 0;

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
};

const newCounter2 = counterFactory();
console.log(newCounter2.increment());
console.log(newCounter2.decrement());
