"use strict";
//!TIPE DATA CUSTOM
let temanKita;
temanKita = {
    name: "ilham",
    isKampret: true,
    hutang: 45000
};
console.log({ temanKita });
const macbookPro = {
    brand: "Apple",
    outYears: 2022,
    macOs: "Ventura",
    color: "grey",
    seken: false,
};
const iphone = {
    brand: "Apple",
    outYears: 2022,
    macOs: "Ventura",
    color: "grey",
    seken: false,
    stuff: "Iphone 13 pro maax"
};
function macbookOwner(macbook) {
    console.log(`
        Terimakasih telah memberli Laptop dengan detail berikut:
        -----
        Nama Merek: ${macbook.brand}
        Keluaran Tahun: ${macbook.outYears}
        Laptop Os: ${macbook.macOs}
        Warna Laptop: ${macbook.color}
        Barang Beli Lama: ${macbook.seken}
        `);
}
function iphoneOwner(iphone) {
    console.log(`
        Terimakasih telah memberli Handphone dengan detail berikut:
        -----
        Nama Merek: ${iphone.brand}
        Keluaran Tahun: ${iphone.outYears}
        Handphone Os: ${iphone.macOs}
        Warna Laptop: ${iphone.color}
        Barang Beli Lama: ${iphone.seken}
        iPhone? ${iphone.stuff}
        `);
}
macbookOwner(macbookPro);
iphoneOwner(iphone);
