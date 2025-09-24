//bai 1
let age = 20;
console.log("Toi nam nay " + age + " tuoi");

//bai 2
let pi = 3.14159;
let r = 5;
let s = pi * r**2
console.log("Dien tich hinh tron: " + s);

//bai 3
let a = 7;
let b = 3;
let tong = a + b;
let hieu = a - b;
let tich = a * b;
let thuong = a / b;
let du = a % b;
console.log(tong, hieu, tich, thuong, du);

//bai 4
let name = "";

let defaultName = "Khách";

if (name === "") {
    displayName = defaultName;
    console.log(displayName)
}
else {
    displayName = name;
    console.log(name)
}

//bai 5
let driverAge = 17;

let hasLicense = true;

if (driverAge >= 18 && hasLicense === true) {
    console.log("Đủ điều kiện");
} else {
    console.log("Không đủ điều kiện");
}

//bai 6
let username = "";
let password = "";
let userValid = username !== ""
let passValid = password !== ""

console.log("username la: " + userValid,"va " + "password la: " + passValid)

//bai 7
let salePrice = 150;
let discountRate = 0.3;
let price = salePrice / (1 - discountRate)
console.log("gia goc cua san pham: " + price);

//bai 8
let c = 2;
let d = 4;
[c,d] = [d,c]

console.log(c, d);



