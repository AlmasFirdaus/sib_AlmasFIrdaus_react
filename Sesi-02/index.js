/*========== DESTRUCTURING OBJECT ==========*/

// const user = {};
// user.name = "Adi Nugroho";
// user.handle = "@adinugroho";
// user.location = "Jakarta, Indonesia";

// const user = {
//   name: "Adi Nugroho",
//   handle: "@adinugroho",
//   location: "Jakarta, Indonesia",
// };

// extraction
// const name = user.name;
// const handle = user.handle;
// const location = user.location;
// console.log(name, handle, location);

// const user = {
//   name: "Adi Nugroho",
//   handle: "@adinugroho",
//   location: "Jakarta, Indonesia",
// };

// // extraction;
// const { name, handle, location } = user;
// console.log(name, handle, location);

/*========== DESTRUCTURING FUNCTION RESULT ==========*/

// const getUser = () => {
//   return {
//     name: "Adi Nugroho",
//     handle: "@adinugroho",
//     location: "Jakarta, Indonesia",
//   };
// };

// // extraction
// const { name, handle, location } = getUser();
// console.log(name, handle, location);

/*========== DESTRUCTURING ARRAY ==========*/

// const csv = "1997,Ford,F350,Must Sell!";

// const [year, make, model, description] = csv.split(",");

/*========== ALIASING OBJECT PROPERTIES ==========*/

// const user = {
//   n: "Adi Nugroho",
//   h: "@adinugroho",
//   l: "Jakarta, Indonesia",
// };

// // ectraction
// const { n: name, h: handle, l: location } = user;
// console.log(name, handle, location);

/* ========= THIS KEYWORD ========= */
// function changeColor() {
//   this.document.body.style.backgroudColor = '#bada55a'
// }

// $('.button').click((e, t) => {
//   this.style.backgroudColor = 'papayawhip'
// })

// let counter = {
//   val: 0,
//   increment: function () {
//     this.val += 1;
//   },
// };

/* ========= ARROW FUNCTION AND BIND(THIS) */

// // Function declaration
// function add (a,b) {
//   return a + b;
// }

// // function expression
// const add = function (a,b) {
//   return a + b;
// }

// // arrow function
// const add = (a,b) => {
//   return a + b;
// }

/* ========= Implicit Return ========= */
// => tanpa menggunakan arrow function
// function add(a, b) {
//   return a + b;
// }

// function square(x) {
//   return x * x;
// }

// function three() {
//   return 3;
// }

// => dengan menggunakan arrow function
// const add = (a, b) => a + b;
// const square = (x) => x * x;
// const three = () => 3;

// const add = (a, b) => {
//   const temp = a + b;
//   return temp;
// };

/* ========= Manajemen This Keyword ======== */

// function Person() {
//   this.age = 0;

//   setInterval(function () {
//     this.age++;
//     console.log(this.age);
//   }, 1000);
// }

// const p = new Person(); // Menghasilkan Nan yang dicetak berulang ulang

// function Person() {
//   this.age = 0;

//   const that = this;
//   setInterval(
//     function () {
//       this.age++;
//       console.log(that.age);
//     }.bind(this),
//     1000
//   );
// }

// const p = new Person();

// function Person() {
//   this.age = 0;

//   setInterval(
//     function () {
//       this.age++;
//       console.log(this.age);
//     }.bind(this),
//     1000
//   );
// }

// const p = new Person();

// function Person() {
//   this.age = 0;

//   setInterval(() => {
//     this.age++;
//     console.log(this.age);
//   }, 1000);
// }
// const p = new Person();

/* ========= Higher-Order Function ========= */

// setInterval(() => {
//   console.log("Tick");
// }, 1000);

// setInterval(printTick, 1000);

// const printTick = () => {
//   console.log("Tick");
// };

/* ========= Filter ========= */
const animals = [
  { name: "Fluffy", species: "cat" },
  { name: "Carlo", species: "dog" },
  { name: "Nemo", species: "fish" },
  { name: "Hamilton", species: "dog" },
  { name: "Dory", species: "fish" },
  { name: "Ursa", species: "cat" },
];

// let fish = [];
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].species === "fish") {
//     fish.push(animals[i]);
//   }
// }
// console.log(fish);

// let fish = animals.filter((animal) => animal.species === "fish");
// console.log(fish);

/* ========= Map ========= */

// let names = [];
// for (let i = 0; i < animals.length; i++) {
//   names.push(animals[i].name);
// }
// console.log(names);

// let names = animals.map((animal) => animal.name);
// console.log(names);

// let names = animals.map((animal) => animal.name + " is a " + animal.species);
// console.log(names);

/* ========= Reduce ========= */

let orders = [{ total: 325 }, { total: 512 }, { total: 128 }, { total: 32 }];

// let total = 0;
// for (let i = 0; i < orders.length; i++) {
//   total = total + orders[i].total;
// }
// console.log(total);

// let total = orders.reduce((total, order) => total + order.total, 0);
// console.log(total);

/* ========= HOMEWORK ========== */

const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [{ kitchen: false }, { ballroom: false }, { conservatory: false }, { "dining room": false }, { "billiard room": false }, { library: false }],
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [{ kitchen: false }, { ballroom: false }, { conservatorv: false }, { "dining room": false }, { "billiard room": false }, { library: false }],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [{ Kitchen: false }, { ballroom: false }, { conservatory: false }, { "dining room": false }, { "billiard room": false }, { library: false }],
  },
  {
    name: "Rusty",
    present: false,
    rooms: [{ kitchen: false }, { ballroom: false }, { conservatory: false }, { "dining room": false }, { "billiard room": false }, { library: false }],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [{ Kitchen: false }, { ballroom: false }, { conservatory: false }, { "dining room": false }, { "billiard room": false }, { library: false }],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [{ kitchen: false }, { ballroom: false }, { conservatory: false }, { "dining room": false }, { "billiard room": false }, { library: false }],
  },
];

let video = videoData.filter((dataVideo) => dataVideo.present === true);
console.log(video);
