let score;
score = 50;
console.log("Hasil variable score :", score);

let playerName = "Almas";
console.log("hasil variable playerName :", playerName);
alert(playerName);
playerName = "Firdaus";
console.log("Hallo,", playerName);
alert(playerName);

// Bukan berupa object atau array > tidak bisa diganti
const angkaKeberuntungan = 10;

// example
// umum yang biasa digunakan
// id, nama, jenkel
const objectAngkaKeb = { id: 1, name: "almas", jenkel: "L" };
objectAngkaKeb.id = 2;
objectAngkaKeb.name = "firdaus";
objectAngkaKeb.jenkel = "Laki - Laki";
objectAngkaKeb.alamat = "Jember";
console.log(objectAngkaKeb);

// sample > array
const arrayNumber = [1, 2, 3, 4, 5];
arrayNumber.push(6);
arrayNumber.push(7);
console.log(arrayNumber);
