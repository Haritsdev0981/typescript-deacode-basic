//! Function
// void = itu yang tidak mengembalikan nilai itu tadi (function return yang tidak mereturn sesuatu yang undifined )

function create(): number{
    return 190905;
}

function komang(): void{
    console.log("sebab kau terlalu indah dari sekedar eskrim")
}

//? ARROW FUNCTION
const create2 = (): string => "AESHA";

console.log(create())
komang()

//! Variabel

function add(x: number, y: number): string{
    return `${x} ditambah ${y} hasilnya = ${x + y}`
}

const result = add(30, 20)

console.log(result)