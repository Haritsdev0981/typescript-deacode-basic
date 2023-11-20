//!TIPE DATA CUSTOM

type TemanType = {
    name: string;
    isKampret: boolean;
    hutang?: number; //bisa bernilai atau tidak menggunakan ?, disi atau tidak
}

let temanKita: TemanType;

temanKita = {
    name: "ilham",
    isKampret: true,
    hutang: 45_000
}

console.log({temanKita})

//! Interface

interface IMacbook {
    brand: string,
    outYears: number,
    macOs: string,
    color: string,
    seken: boolean
}

interface Apple extends IMacbook {
    stuff?: string
}

const macbookPro: IMacbook = {
    brand: "Apple",
    outYears: 2022,
    macOs: "Ventura",
    color: "grey",
    seken: false,
}
const iphone = {
    brand: "Apple",
    outYears: 2022,
    macOs: "Ventura",
    color: "grey",
    seken: false,
    stuff: "Iphone 13 pro maax"
}

function macbookOwner(macbook: IMacbook): void{
    console.log(
        `
        Terimakasih telah memberli Laptop dengan detail berikut:
        -----
        Nama Merek: ${macbook.brand}
        Keluaran Tahun: ${macbook.outYears}
        Laptop Os: ${macbook.macOs}
        Warna Laptop: ${macbook.color}
        Barang Beli Lama: ${macbook.seken}
        `
    )
}

function iphoneOwner(iphone: Apple): void{
    console.log(
        `
        Terimakasih telah memberli Handphone dengan detail berikut:
        -----
        Nama Merek: ${iphone.brand}
        Keluaran Tahun: ${iphone.outYears}
        Handphone Os: ${iphone.macOs}
        Warna Laptop: ${iphone.color}
        Barang Beli Lama: ${iphone.seken}
        iPhone? ${iphone.stuff}
        `
    )
}

macbookOwner(macbookPro)
iphoneOwner(iphone)