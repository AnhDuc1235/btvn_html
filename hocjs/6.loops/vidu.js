//tinh gia tri bieu thuc :
//S = 1 + 1*2 + 1*2*3 +...+ 1*2*3*4*...*n

let n = 5;
let temp = 1;
let total = 0;
for (let i = 1; i <=n; i++) {
    temp = temp * i;
    // console.log("i = " + i, temp)  //buoc nay de kiem tra giai thua !
    total = total + temp;
}
console.log(total);