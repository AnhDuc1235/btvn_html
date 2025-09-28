// Bai tap 2
// Tinh tien taxi khi biet so km
// - so km <= 1: gia 15.000
// - 1 < so km <= 5: gia 13.500
// - so km > 5: gia 11.000
// - so km > 120: giam 10% tren tong tien

// vi du: Di 6km
// so tien phai tra = 1*15000 + 4 *13500 + 1*11000

// let km = 8;
// let distance_1 = 1;
// let distance_2 = 5;
// let distance_3 = 120;
// let price_1 = 15000;
// let price_2 = 13500;
// let price_3 = 11000;
// let discount = 10;

// bai lam sai
// if (km <= 0) {
//     console.log("Khong hop le")
// } else {
//     if ( km <= 1 ) {
//         km -= 1
//         realPrice = distance_1 * price_1; 
//     }
//     if ( km <= 5) {
//         km -= 4
//         realPrice = distance_2 * price_2;

//     }
//     if ( km <=120 ) {
//         km -=119 
//         realPrice = distance_3 * price_3;
//     }
//     if ( km > 120) {
//         km 
//     }
    
// }

//chua bai
let distance_1 = 1;
let distance_2 = 5;
let distance_3 = 120;
let price_1 = 15000;
let price_2 = 13500;
let price_3 = 11000;
let discount = 10;
let km = 150;
let total;

if (km < 0) {
    console.log("khong hop le")
} else if (km <= distance_1) {
    total = distance_1 * price_1;
} else if (km <= distance_2) {
    total = distance_1 * price_1 + (km - distance_1) * price_2;
} else {
    total =
        distance_1 * price_1 + (distance_2 - distance_1) * price_2 +
        (km - distance_2) * price_3;
    if (km > distance_3) {
        total = total - (total * discount) / 100;
    }
}
if (total) {
    console.log(total);
}