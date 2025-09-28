// Bài 1
const PRICE1 = 1678;
const PRICE2 = 1734;
const PRICE3 = 2014;
const PRICE4 = 2536;
const PRICE5 = 2834;
const PRICE6 = 2927;
const LIMIT1 = 50;
const LIMIT2 = 100;
const LIMIT3 = 200;
const LIMIT4 = 300;
const LIMIT5 = 400;
let kwh = 350;
let bill = 0;

if (kwh <= 0) {
    console.log("Không hợp lệ")
} else {
    if (kwh <= LIMIT1) {
        bill = kwh * PRICE1;
    } else if (kwh <= LIMIT2) {
        bill = LIMIT1 * PRICE1 + (kwh - LIMIT1) * PRICE2;
    } else if (kwh <= LIMIT3) {
        bill = LIMIT1 * PRICE1 + (LIMIT2 - LIMIT1) * PRICE2 + (kwh - LIMIT2) * PRICE3;
    } else if (kwh <= LIMIT4) {
        bill = LIMIT1 * PRICE1 + (LIMIT2 - LIMIT1) * PRICE2 + (LIMIT3 - LIMIT2) * PRICE3 + (kwh - LIMIT3) * PRICE4;
    } else if (kwh <= LIMIT5) {
        bill = LIMIT1 * PRICE1 + (LIMIT2 - LIMIT1) * PRICE2 + (LIMIT3 - LIMIT2) * PRICE3 + (LIMIT4 - LIMIT3) * PRICE4 + (kwh - LIMIT4) * PRICE5;
    } else {
        bill = LIMIT1 * PRICE1 + (LIMIT2 - LIMIT1) * PRICE2 + (LIMIT3 - LIMIT2) * PRICE3 + (LIMIT4 - LIMIT3) * PRICE4 + (LIMIT5 - LIMIT4) * PRICE5 + (kwh - LIMIT5) * PRICE6;
    }
    console.log("số tiền phải đóng: ", bill);
}

// Bài 2
let number = 11
let isPrime = true;

if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(number + " là số nguyên tố");
} else {
    console.log(number + " không phải số nguyên tố");
}


// Bài 3: In số chẵn và số lẻ
let m = 12;
let even = "";
let odd = "";
for (let i = 1; i <= m; i++) {
    if (i % 2 === 0) {
        even += i + " ";
    } else {
        odd += i + " ";
    }
}
console.log("Số chẵn:", even);
console.log("Số lẻ:", odd);


// Bài 4: Tính tổng S = 1*2 + 2*3 + ... + n*(n+1)
let n = 6;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i * (i + 1);
}
console.log("Giá trị biểu thức: ", sum);

// Bài 5: Tổng số chẵn và lẻ trong khoảng
let a = 5;
let b = 9;
let sumEven = 0;
let sumOdd = 0;

for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log("Tổng số chẵn =", sumEven, ", Tổng số lẻ =", sumOdd);

// Bài 7
let c = 5;
let num = 1; 

for (let i = 1; i <= c; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) { 
        row += num + " ";
        num++;
    }
    console.log(row);
}



// bài 6 bàn cờ (bị lỗi)
let size = 8;

let html = "<table>";
for (let i = 0; i < size; i++) {
  html += "<tr>";
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      html += '<td class="white"></td>';
    } else {
      html += '<td class="black"></td>';
    }
  }
  html += "</tr>";
}
html += "</table>";

document.getElementById("chess").innerHTML = html;