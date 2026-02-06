/* 
const stellarCatalog = [
  {
    designation: "Alpha Centauri",
    type: "binary",
    magnitude: -0.27,
    distanceLy: 4.37,
    habitableZone: true,
  },
  {
    designation: "Betelgeuse",
    type: "red supergiant",
    magnitude: 0.5,
    distanceLy: 642.5,
    habitableZone: false,
  },
  {
    designation: "Vega",
    type: "white main sequence",
    magnitude: 0.03,
    distanceLy: 25.04,
    habitableZone: false,
  },
  {
    designation: "TRAPPIST-1",
    type: "red dwarf",
    magnitude: 18.8,
    distanceLy: 39.6,
    habitableZone: true,
  },
  {
    designation: "Sirius",
    type: "binary",
    magnitude: -1.46,
    distanceLy: 8.6,
    habitableZone: false,
  },
  {
    designation: "Kepler-442b",
    type: "exoplanet host",
    magnitude: 14.5,
    distanceLy: 120.6,
    habitableZone: true,
  },
];

//task 1.1 //
let changedData = stellarCatalog.map(uppercase);

let forEach = stellarCatalog.forEach(uppercase);
let reduce = stellarCatalog.reduce(magSum, -Infinity);

function uppercase(element) {
  console.log("PROCESSING:", element.designation);
  return element.designation.toUpperCase();
}

console.log(changedData);
console.log(forEach);

let result = [];

stellarCatalog.forEach((e) => {
  result.push(e.designation.toUpperCase());
});

console.log(result);

function magSum(accumelator, element) {
  console.log("ACC:", accumelator, "ELEM:", element.magnitude);
  return Math.max(accumelator, element.magnitude);
}

console.log(reduce);


        // task 1.2 //

const inventory = [
  { item: "nebula", qty: 5, price: 12, category: "cosmic" },
  { item: "quasar", qty: 3, price: 25, category: "energy" },
  { item: "pulsar", qty: 8, price: 8, category: "cosmic" },
  { item: "singularity", qty: 1, price: 100, category: "extreme" },
  { item: "void", qty: 0, price: 50, category: "mystery" },
  { item: "supernova", qty: 2, price: 75, category: "energy" },
  { item: "darkMatter", qty: 12, price: 5, category: "mystery" },
  { item: "wormhole", qty: 1, price: 200, category: "extreme" },
  { item: "exoplanet", qty: 7, price: 15, category: "cosmic" },
  { item: "eventHorizon", qty: 4, price: 40, category: "extreme" },
];

let filltered = inventory.filter((e) => {
  return e.qty > 5
  
  
})

let reduceTotal = filltered.reduce((e, h)=> {
    return e + h.price
}, 0)

console.log(filltered, reduceTotal);

// Condition 1: qty > 5
let filtered1 = inventory.filter((e) => e.qty > 5);
let total1 = filtered1.reduce((sum, e) => sum + (e.price * e.qty), 0);
console.log("QTY>5:", total1);

// Condition 2: price > 50
let filtered2 = inventory.filter((e) => e.price > 50);
let total2 = filtered2.reduce((sum, e) => sum + (e.price * e.qty), 0);
console.log("PRICE>50:", total2);


//  task 1.3 //
const inventory1 = [
  { item: "nebula", qty: 5, price: 12, category: "cosmic" },
  { item: "quasar", qty: 3, price: 25, category: "energy" },
  { item: "pulsar", qty: 8, price: 8, category: "cosmic" },
  { item: "singularity", qty: 1, price: 100, category: "extreme" },
  { item: "void", qty: 0, price: 50, category: "mystery" },
  { item: "supernova", qty: 2, price: 75, category: "energy" },
  { item: "darkMatter", qty: 12, price: 5, category: "mystery" },
  { item: "wormhole", qty: 1, price: 200, category: "extreme" },
  { item: "exoplanet", qty: 7, price: 15, category: "cosmic" },
  { item: "eventHorizon", qty: 4, price: 40, category: "extreme" },
];


// function filter (array , callback) {

//   let result = []
//  for (let i = 0; i < inventory1.length; i++) {
//   if (inventory1[i].item === 'exoplanet') {
//     result.push(inventory1[i])
//   }
  
//  }
//   console.log(result);
//  return result

 
// }
function filter (array, callback) {
  let result = []
for (let i = 0; i < inventory1.length; i++) {
   console.log("CALLBACK-for:", array[i].item);
  if (callback(array[i])) {
    result.push(array[i])
  }
  
}
return result
}

filter(inventory1, (item) => item.item === "exoplanet");







//  task 2.1


// testing hoisting
console.log(a);
var a = 5;
console.log(a);

// let try
try {
console.log(b);
} catch (e) {
console.log(e);
}
let b = 10;

// function
console.log(foo());
function foo() {
return "hi";
}

// var function
console.log(bar);
var bar = function() {
return "hello";
};
console.log(bar());

// arrow
try {
console.log(baz());
} catch (err) {
console.log(err);
}
const baz = () => "world";
console.log(baz());

var c = 3;
let d = 4;
console.log(c,d);


//   task 2.2 //

// before asynchronous operation code works
function c() {
  console.log("enter-C");
  let total = a() + b();
  console.log("Exit-C", total);
}

function a() {
  console.log("enter-a");
  let sum = 1 + 2;
  console.log("exit-a");
  return sum;
}

function b() {
  console.log("enter-b");
  let num = 2 * 3;
  console.log("exit-b");
  return num;
}

c();

// after asynchronous operation code gets an issue

   
function d() {
  console.log("enter-C");
  let total = e() + g();
  console.log("Exit-C", total);
}

function e() {
  console.log("enter-a");
  let sum = 1 + 2;
  console.log("exit-a");
  return sum;
}

function g() {
  setTimeout(() => {
    console.log("enter-b");
    let num = 2 * 3;
    console.log("exit-b");
    return num;
  }, 4000);
}

d();   


// task 2.3 //

function closer () {

  let message = "hello zain"

let anotherFun = function () {
  console.log(message);
}
  let changeMessage = function (newMessage) {
    message = newMessage;
  };

anotherFun()
message = "hello talal"
return {anotherFun, changeMessage}
}
 let c = closer()
 c.anotherFun()

 c.changeMessage("hello salman")
 c.anotherFun()

 // clourses retain the varible name its such a w


 // task 3.1 //

 const user = {
   name: "zain",
   age: 20,
   active: true,

   courses: ["javascript", "python", "react"],
   address: {
     city: "karachi",
     country: "pakistan",
   },
   joined: "2024-01-15",
 };

 const {name, age, active, role = "teacher"} = user

 console.log(name,age,active,role);
 
 // what i saw was that the values were no longer an object and i removed the role but it still showed the role by seting a defult value

 // task 3.2 //

 function openFridge(...foods) {

  let totalItems = foods.length
  let firstItem = foods[0] || "empty"
  let lastItem = foods[foods.length-1] || 'empty'
  let mealPlan = foods.join(" + ")

    console.log(`Fridge has ${totalItems} items: ${mealPlan}`);
    console.log(`First: ${firstItem}, Last: ${lastItem}`);
  
 }

 const food1 = "pizza"
  const food2 = "green-beans";
   const food3 = "fries";
    const food4 = "ramen";
     const food5 = "hamburger";
      const food6 = "chesse";

openFridge(food1,food2,food3,food4,food5,food6)
openFridge(food1,food4,food2)


// task 3.3 //

const original = {
  name: "zain",
  age: 20,
  skills: ["javascript", "python"],
  address: {
    city: "karachi",
    country: "pakistan",
  },
};

const referanceCopy = original



// Dataset
const items = [
  { name: "apple", price: 10, qty: 5 },
  { name: "banana", price: 5, qty: 0 },
  { name: "cherry", price: 15, qty: 3 }
];

// Closure: multiplier function
function makeMultiplier(amount) {
  return function(num) {
    return num * amount;  // factor captured from outer scope
  };
}

const double = makeMultiplier(2);

// Pipeline
console.log("START");

const result = items.map(({ name, price, qty }) => {
    const itemTotal = double(price);  // use closure
    console.log(`MAP: ${name} doubled = ${itemTotal}`);
    return { name, itemTotal, qty };
  })
  .filter((item) => {
    const keep = item.qty > 0;
    console.log(`FILTER: ${item.name}, inStock=${keep}`);
    return keep;
  })
  .reduce((sum, item) => {
    const newSum = sum + item.itemTotal;
    console.log(`REDUCE: ${item.name}, running total = ${newSum}`);
    return newSum;
  }, 0);

console.log("FINAL:", result);

// Experiment Logs
/*
1. Closure: factor stays 2 even after makeMultiplier finishes
2. Filter removed banana (qty 0) before reduce ran
3. Reduce started at 0 because I provided initial value
*/