/** ========= Mendefinisikan Class ========= */
// class Employee {
//   doWork() {
//     return "complete!";
//   }
// }

import { rejects } from "assert";
import { resolve } from "path";

// let scott = new Employee();
// console.log(scott.doWork()); // "complete!"

/** ======== Constructor ========== */
// class Employee {
//   constructor(name) {
//     this._name = name;
//   }
//   doWork() {
//     return "complete!";
//   }
//   getName() {
//     return this._name;
//   }
// }

// let scott = new Employee("Almas Firdaus");
// console.log(scott.getName());

/** ========= Class Inheritance ========== */
// class Person {
//   constructor(name) {
//     this._name = name;
//   }
//   getName() {
//     return this._name;
//   }
// }

// // method parent bisa digunakan oleh child tapi tidak dengan sebaliknya
// class Employee extends Person {
//   doWork() {
//     return this._name + " is working!";
//   }
// }

// let scott = new Employee("Almas Firdaus");
// console.log(scott.getName());
// console.log(scott.doWork());

/** ========== Method Super =========== */

// class Employee extends Person {
//   constructor(name, title) {
//     super(name);
//     this._title = title;
//   }
//   getTitle() {
//     return this._title + " is " + this._name;
//   }
// }

// let scott = new Employee("Almas Firdaus", "Mahasiswa");
// console.log(scott.getTitle());

/** ========== JavaScript Modules =========== */

// import Employee from "./Employee";
// import { Person, EmployeeClass } from "./Class";

// const mark = new Employee("Mark Cubus");
// const marky = new EmployeeClass("Almas Firdaus");
// mark.doWork();
// marky.doWork();

/** ========== Promise =========== */

import fetch from "node-fetch";

// fetch("https://fake-tweets-api.herokuapp.com/posts")
//   .then((Response) => {
//     return Response.json();
//   })
//   .then((Response) => {
//     return console.log(Response.length);
//   });

/** ========= New Promise ========== */

setTimeout(() => {
  console.log("tick");
}, 2000);

const setTimeoutPromise = (duration) =>
  new Promise((resolve, rejects) => {
    setTimeout(resolve, duration);
  });

setTimeoutPromise(1000).then(() => console.log("tick"));

/** ========== Async/Await =========== */
fetch("https://fake-tweets-api.herokuapp.com/posts")
  .then((Response) => {
    return Response.json();
  })
  .then((Response) => {
    return console.log(Response.length);
  })
  .catch((err) => {
    console.log(error);
  });

// const Response = await fetch("https://fake-tweets-api.herokuapp.com/posts");
// const tweets = await Response.json();

// console.log(tweets.length);

// const fetchTweets = async () => {
//   const Response = await fetch("https://fake-tweets-api.herokuapp.com/posts");
//   const tweets = await Response.json();
//   console.log("fetchTweets :", tweets.length);
// };

// fetchTweets();

// eksekusi menggunakan IIFE (immedeately invoked function expression)
(async () => {
  const Response = await fetch("https://fake-tweets-api.herokuapp.com/posts");
  const tweets = await Response.json();
  console.log("fetchTweets :", tweets.length);
})();

// fetchTweets();
