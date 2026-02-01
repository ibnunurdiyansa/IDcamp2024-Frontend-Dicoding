// const age = 10;
// const name = "Ibnu";

// console.log(`aku ${name}, umurku ${age} tahun.`);
// console.log("Hello World!!!")

// const result = 4 + 4;
// console.log(result)

// Teks ini akan diabaikan oleh interpreter
// console.log('Hai, Raiders!!');
// console.log('Hai, Javascript!!');
// console.log('Hai, Dicoding!1');

/*
 * TODO
 * 1. Buatlah variabel bernama `PI` dan isikan dengan nilai 3.14
 * 2. Cetak nilai variabel PI di terminal menggunakan console.log
 */

// const PI = '3.14';
// console.log(PI);


// const id = 123;
// let username = 'Dicoding';
// console.log(id); // output: 123
// console.log(username); //output: Dicoding
/* Perbedaan dari variabel yang dibuat dengan const dan let adalah variabel yang dibuat dengan const tidak dapat diinisialisasi ulang (sederhananya, diubah) nilainya, sedangkan jika variabel dibuat dengan let, kita bisa menginisialisasi ulang nilainya.
Contoh, ketika membuat variabel dengan let, Anda bisa mengubah nilai yang ada di dalamnya setelah variabel tersebut dibuat.*/

// let username = 'Dicoding';
// // console.log('sebelum diubah', username);// output: Sebelum diubah: Dicoding

// username = 'DicodingAcademy';
// console.log('setelah diubah', username);// output: Setelah diubah: dicodingacademy


/*
Namun, ketika Anda membuat variabel dengan const, nilai yang ditetapkan ketika variabel dibuat, tidak bisa diubah. Jika Anda coba untuk mengubahnya, program akan terhenti dan menghasilkan error.
 */

// const username = 'Dicoding';

// // console.log('Sebelum diubah:', username); // output: Sebelum diubah: Dicoding

// username = 'dicodingacademy'; // TypeError: Assignment to constant variable.

// console.log('Setelah diubah:', username); // Tidak akan pernah dieksekusi

/* Anda boleh menggunakan nama variabel yang sama selama cakupannya berbeda, contohnya variabel yang berada dalam sebuah fungsi berbeda.*/

// function printCompanyInfo() {
//     const name = 'Dicoding'; // <- nama variabel sama
//     const legal = 'LLC';

//     console.log('Company name:', name);
//     console.log('Legal type:', legal);
// }
// function printEmployeeInfo() {
//     const name = 'John'; // <- nama variabel sama
//     const division = 'IT';

//     console.log('Employee name:', name);
//     console.log('Division:', division);
// }
// printCompanyInfo();
// printEmployeeInfo();

// const  currentYear = new Date().getFullYear();
// const text = `sekarang adalah tahun ${currentYear}`;

// console.log(text);

// const name1 = { first: 'Dicoding', last: null };
// const name2 = { first: 'Dicoding', last: undefined };

// console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
// console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}

// const strNumber = '123';
// const strFloat = '3.14';
// const boolean = true;

// const numFromString = Number(strNumber);
// const floatFromString = Number(strFloat);
// const numFromBoolean = Number(boolean);

// console.log(numFromString); // output: 123
// console.log(floatFromString); // output: 3.14


// let age = 25;

// // Unary operator
// typeof age;

// // Binary operator
// 5 + 4;
// 10 / 2;
// age = 30;

// // Ternary operator (conditional operator)
// (age < 18) ? 'You are too young!' : 'Welcome onboard!';

// // TODO: buatlah variabel (konstan) bernama `currency` dan isi dengan nilai "IDR".
// const currency = "IDR";


// // TODO: buatlah variabel bernama `value` dan isi dengan nilai 10000.
// let value = 10000;


// // TODO: tambahkan nilai di dalam variabel `value` sebesar 5000.
// value = 5000;


// /**
//  * TODO: buatlah variabel (konstan) bernama `money`,
//  * isi dengan penambahan string dari nilai `currency` + " " + `value`.
//  */

// const money = `${currency}` + " " + `${value}`;
// console.log(money);

// console.log(5 == '5')

// function convertCelsiusToFahrenheit(temperature) {
//     const temperatureInFahrenheit = (9 / 5) * temperature + 32;

//     console.log('Hasil konversi:', temperatureInFahrenheit);
// }

// const temperatureInCelsius = 100;

// // Hanya menampilkan nilai function
// console.log(convertCelsiusToFahrenheit);
// // Output => [Function: convertCelciusToFahrenheit]

// // Akan menjalankan isi function
// convertCelsiusToFahrenheit(temperatureInCelsius);
// // Output => Hasil konversi: 194

// function hello(name, origin = "Bandung") {
//     return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
// }

// const rahmat = hello("Rahmat", "Semarang");
// const indra = hello("Indra");

// console.log(rahmat); // Output: Halo! Nama saya Rahmat. Saya tinggal di Semarang.
// console.log(indra);  // Output: Halo! Nama saya Indra. Saya tinggal di Bandung.

// const productMap = new Map([
//     ['shoes', 500],
//     ['cap', 350],
//     ['jeans', 250]
// ]);

// console.log(productMap);

// const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

// const [first, second, ...rest] = favorites;

// console.log(first);
// console.log(second);
// console.log(rest);

/**
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
 */

// const employees = [
//     {
//         name: 'Fulan',
//         email: 'fulan@dicoding.com',
//         joinYear: 2020,
//     },
// ];

// function addEmployee(name, email, joinYear) {
//     /**
//      * @TODO
//      * lengkapi fungsi ini agar dapat menambahkan objek employee baru
//      * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
//      */

//     const newEmploys = {
//         name: name,
//         email: email,
//         joinYear: joinYear
//     }

//     employees.push(newEmploys)

// }

// addEmployee("Ibnu", "ibnu@gmail.com", 2024)
// console.log(employees)

// function checkGrades(grades) {
//     for (let i = 0; i < grades.length; i++) {
//         if (typeof grades[i] !== 'number') {
//             throw new Error('Invalid input. Please provide an array of numbers.');
//         }

//         const grade = grades[i];
//         let predicate;

//         if (grade >= 90) {
//             predicate = 'A';
//         } else if (grade >= 80) {
//             predicate = 'B';
//         } else if (grade >= 70) {
//             predicate = 'C';
//         } else if (grade >= 60) {
//             predicate = 'D';
//         } else {
//             predicate = 'E';
//         }

//         console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
//     }
// }

// try {
//     const studentGrades = [95, 85, 65, 80, 70];
//     checkGrades(studentGrades);
// } catch (e) {
//     console.error(e);
// }

// function categorizeNumber(input) {
//     // 1. Periksa apakah input adalah number
//     if (typeof input !== 'number') {
//         throw new Error('Input harus berupa bilangan bulat');
//     }

//     // 2. Kategori Nol
//     if (input === 0) {
//         return 'Nol';
//     }

//     // 3. Kategori Negatif
//     if (input < 0) {
//         return 'Negatif';
//     }

//     // 4. Kategori Prima
//     if (isPrime(input)) {
//         return 'Prima';
//     }

//     // 5. Kategori Genap
//     if (input % 2 === 0) {
//         return 'Genap';
//     }

//     // 6. Kategori Ganjil
//     return 'Ganjil';
// }

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Contoh penggunaan
// console.log(categorizeNumber(15)); // Output: "Ganjil"
// console.log(categorizeNumber(12)); // Output: "Genap"
// console.log(categorizeNumber(17)); // Output: "Prima"
// console.log(categorizeNumber(0));  // Output: "Nol"
// console.log(categorizeNumber(-5)); // Output: "Negatif"

// try {
//     categorizeNumber('abc');
// } catch (error) {
//     console.log(error.message); // Output: "Input harus berupa bilangan bulat"
// }
