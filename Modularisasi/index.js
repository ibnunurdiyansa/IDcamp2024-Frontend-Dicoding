// Import file states.js menggunakan require

// export import Common Js
// const { restaurantStock, isMachineActive, isMachineWell } = require("./states");

// Export Import ES Module
// cara 1 harus tambahkan package json dengan menmabhakan type
// cara 2 membuat extension file jadi .mjs
import { restaurantStock, isMachineActive, isMachineWell } from "./states.js";

function serveToCustomer(requestStock, stocks, isMachineReady = false) {
    // Periksa apakah mesin siap
    if (!isMachineReady) {
        console.log("The machine is not ready yet. Please check before using.");
        return;
    }

    // Periksa apakah stok adalah objek
    if (typeof stocks !== 'object') {
        throw new Error("Stock parameter should be an object.");
    }

    // Periksa apakah menu tersedia
    if (!(requestStock in stocks)) {
        console.log("The requested order is not available.");
        return;
    }

    // Periksa stok
    if (stocks[requestStock] === 0) {
        console.log(`Sorry, ${requestStock} is out of stock.`);
        return;
    }

    // Kurangi stok dan proses pesanan
    console.log("Please wait to serve your request.");
    stocks[requestStock] -= 1;
}

// Contoh penggunaan
serveToCustomer("mieAyam", restaurantStock, isMachineActive && isMachineWell);
serveToCustomer("bakso", restaurantStock, isMachineActive && isMachineWell);
serveToCustomer("burger", restaurantStock, isMachineActive && isMachineWell);
serveToCustomer("nasiGoreng", restaurantStock, false);
