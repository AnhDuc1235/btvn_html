// let age = 34;
// console.log(typeof age);

// let price = 12000n;
// console.log(typeof price);

// let a = "10";
// a = +a;
// let b = 20;
// let c = a+b;
// console.log(c)

// let a = 10;
// let b = 2;
// let c = a / b;
// console.log(c)

//tự động ép kiểu:
// let a = 10;
// let b = "20";
// let c = a * b;
// console.log(c)

//chia lấy dư
// let a = 1.5 % 1;
// console.log(a)

//lũy thừa
// let a = -(10 ** 3);
// console.log(a);

//tăng giảm 1 đơn vị
// let count = 0;
// count++;
// ++count;
// console.log(count);

// let total;
// let count = 1;
// total = count++;
// console.log("total: ", total);
// console.log("count: ", count);

//bài tập:
// let count = 1;
// let total = count++ + ++count; // 1 + 3
// console.log(total);

//toán tử so sánh
// let a = 10;
// let b = "10";
// let c = a !== b;
// console.log(c);

//so sánh chuỗi:
// let str1 = "hoangan";
// let str2 = "an";
// console.log(str1 > str2); //xếp theo thứ tự phần tử trong chuỗi (h lớn hơn a trong alphabelt)
// so sánh thứ tự chữ hoa và thường dựa vào bảng mã ASCII

//truthy, falsy
// let a = 10;
// if (a)/*ngầm hiểu a là đúng, được đặt trong ngữ cảnh boolean */ {
//     console.log("Đúng");
// } else {
//     console.log("Sai");
// }
//nếu để let a = 0: sẽ thuộc giá trị falsy và kết quả trả về là "sai"

//toán tử luận lý &&
// let a = 10;
// let result = a && 5 && 5>0 && 0 && "F8";
// console.log(result);

// || (or)
// let a = 10;
// let result = null || 0 || 5<0 || 0 || "F8";
// console.log(result);

// !
// let a = 10;
// let result = !a; /*thêm ! nữa sẽ là true */
// console.log(result);

//(??)
let a = 2;
let b = null;
let result = a ?? b;
console.log(result);
