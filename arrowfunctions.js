// ** function declaration

function addition(a, b) {
  return a + b;
}

// function experssion

let addition2 = function addition(a, b) {
  return a + b;
};

let addition3 = function (a, b) {
  return a + b;
};

// Arrow function

let addition4 = (a, b) => a + b;

let fun1 = addition(10, 20);
console.log(fun1);
console.log(addition2(10, 20));
console.log(addition3(10, 20));
console.log(addition4(10, 20));

document.getElementById("a").addEventListener("clcik", () => {});
