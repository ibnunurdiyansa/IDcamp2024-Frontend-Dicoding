// Constractor
// class MyClass {
//     constructor() {
//         console.log("Ini adalah constractor class")
//     }
// }

// new MyClass()


/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// Tulis kode di bawah ini
// Class Animal
// class Animal {
//     constructor(name, age, isMammal) {
//         this.name = name;
//         this.age = age;
//         this.isMammal = isMammal;
//     }
// }

// // Class Rabbit
// class Rabbit extends Animal {
//     constructor(name, age) {
//         super(name, age, true);
//     }

//     eat() {
//         return `${this.name} sedang makan!`;
//     }
// }

// // Class Eagle
// class Eagle extends Animal {
//     constructor(name, age) {
//         super(name, age, false);
//     }

//     fly() {
//         return `${this.name} sedang terbang!`;
//     }
// }

// const myRabbit = new Rabbit("Saya", 2);
// const myEagle = new Eagle("Elang", 4);

// console.log(myRabbit.eat());
// console.log(myEagle.fly());

// const sampleProducts = [
//     { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
//     { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
//     { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
//     { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
//     { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
// ];

// function getProductsByCategory(products, category) {
//     /**
//      * TODO:
//      * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
//      */
//     return products.filter(product => product.category === category);
// }

// function findProductById(products, id) {
//     /**
//      * TODO:
//      * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
//      */
//     return products.find(product => product.id === id);
// }

// function calculateTotalPrice(products) {
//     /**
//      * TODO:
//      * Gunakan metode array immutable untuk menghitung total harga semua produk.
//      */
//     return products.reduce((total, product) => total + product.price, 0);
// }

// function applyDiscount(products, discount) {
//     /**
//      * TODO:
//      * Gunakan metode array immutable untuk mengembalikan array baru,
//      * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
//      */
//     return products.map(product => ({
//         ...product,
//         price: product.price - (product.price * discount / 100),
//     }));
// }

// console.log(getProductsByCategory(sampleProducts, 'Electronics')); 
// console.log(calculateTotalPrice(sampleProducts)); 
// console.log(applyDiscount(sampleProducts, 10));
// console.log(findProductById(sampleProducts, 3)); 

// import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

/**
 * Fungsi `processData`:
 * - Memanggil `API.fetch` berdasarkan data yang diberikan.
 * - Menangani error dengan cara memunculkan error baru jika ada Promise yang ditolak.
 * - Mengembalikan array data jika semua Promise berhasil.
 */
// function processData(data) {
//     return Promise.all(
//         data.map(({ delay, simulateError }) =>
//             API.fetch(delay, simulateError).catch((error) => {
//                 // Tangkap dan lempar error dengan pesan yang sesuai
//                 throw error;
//             })
//         )
//     );
// }

// // Contoh Penggunaan
// processData(sampleErrorData)
//     .then(console.log)
//     .catch(console.log); // Output: Error: Error from delay 50

// processData(sampleSuccessData)
//     .then(console.log)
//     .catch(console.log); // Output: ['Data from delay 100', 'Data from delay 50']
