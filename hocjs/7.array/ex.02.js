// 1. Kiểm tra biến có phải là mảng không:
// Array.isArray(bienmang);
// const myArr = [];
// console.log(Array.isArray(myArr));

// 2. length --> lấy số lượng phần tử của mảng
// const myArr = ["item 1","item 2","item 3","item 4"];
// myArr.length = 2;
// console.log(myArr.length);
// console.log(myArr);

// 3. concat(arr1, arr2, arr3,...) --> Nối tất cả các mảng lại và trả về mảng mới
// const myArr = [1, 2, 3];
// const arr1 = [0, 5, 6];
// const arr2 = ["item 1","item 2", "item 3"];
// // const newArr = myArr.concat(arr1, arr2);
// const newArr = myArr.concat("new item", "new item 2", 55)
// console.log(newArr)

// 4. indexOf(value) --> Tìm value có tồn tại trong mảng không và trả về index đầu tiên tìm được
// const myArr = ["item 1", "item 2", "item 3", "item 2", "item 4"]
// console.log(myArr.indexOf("item 2"))

// 5. lastIndexOf(value) --> Tìm value có tồn tại trong mảng không và trả về index cuối cùng tìm được
// const myArr = ["item 1", "item 2", "item 3", "item 2", "item 4"]
// console.log(myArr.lastIndexOf("item 2"))

// 6. includes(value) --> Tìm phần tử trong mảng và trả về true/false
// const myArr = ["item 1", "item 2", "item 3", "item 2", "item 4"]
// console.log(myArr.includes("item 2"))

// 7. slice(start, end) --> Cắt mảng từ start đến end-1 và trả về mảng mới
// const myArr = ["item 1", "item 2", "item 3", "item 4"]
// console.log(myArr);

// console.log(myArr.slice(1,3))
// console.log(myArr.slice(1))
// console.log(myArr.slice(-2))

// 8. splice(index, count): xóa count phần tử từ index (thay đổi mảng ban đầu)
// const myArr = ["item 1", "item 2", "item 3", "item 4"];
// const newArr = myArr.splice(1,0, "new item 1", 5, 8);
// console.log(myArr);
// console.log(newArr);

// 9. push(value1, value2, value3,...) --> thêm nhiều phần tử vào cuối mảng
// Chú ý: concat không thay đổi mảng ban đầu, nhưng push thì có
//- thay đổi mảng ban đầu
//- tổng số lượng phần tử sau khi đã thêm
// const myArr = ["item 1", "item 2", "item 3", "item 4"];
// const count = myArr.push("new item 1", "new item 2");
// console.log(myArr);
// console.log(count);

// 10. unshift(value1, value2, value3,...) --> thêm nhiều phần tử vào đầu mảng
//- thay đổi mảng ban đầu
//- trả về tổng số lượng phần tử sau khi đã thêm
// const myArr = ["item 1", "item 2", "item 3", "item 4"];
// const count = myArr.unshift("new item 1", "new item 2");
// console.log(myArr);
// console.log(count);

// 11. pop() --> xóa phần tử cuối mảng
// const myArr = ["item 1", "item 2", "item 3", "item 4"];
// const deleteValue = myArr.pop();
// console.log(myArr);
// console.log(deleteValue);

// 12. shift() --> xóa phần tử đầu mảng
// const myArr = ["item 1", "item 2", "item 3", "item 4"];
// const deleteValue = myArr.shift();
// console.log(myArr);
// console.log(deleteValue);

//13. fill(value) --> cập nhật tất cả các phần tử thành 1 giá trị 
// fill vừa trả về mảng mới vừa thay đổi mảng ban đầu
// const myArr = ["item 1", "item 2", "item 3", "item 4"];
// myArr.fill(1);
// console.log(myArr);

// 14. reverse() --> đảo ngược mảng
// const myArr = ["item 1", "item 2", "item 3", "item 4"];
// myArr.reverse();
// console.log(myArr);

// 15. join(string) --> Nối các phần tử mảng thành 1 chuỗi
// join() không truyền đối số bên trong () thì sẽ tự động là dấu phẩy
// const myArr = ["item 1", "item 2", "item 3", "item 4"];
// console.log(myArr.join("-"));

// Mối quan hệ với string:
// const fullname = "Tạ Hoàng Anh";
// const fullnameArr = fullname.split(" ")
// console.log(fullnameArr)   // đây là để tách chuỗi từng string trong fullname, chuyển vào mảng

// Ví dụ đảo ngược số:
// let number = 92839;
// let result = +number.toString().split("").reverse().join("") //dấu + là để chuyển sang kiểu dữ liệu số. Không có dấu "" thì sẽ là dấu phẩy
// console.log(result); //Tức chuyển từ số sang chuỗi, rồi từ chuỗi sang mảng, rồi từ mảng dùng reverse để đảo số và join nó lại về chuỗi. xong dùng + để đổi sang số


// 16. sort() --> Sắp xếp mảng theo thứ tự tăng dần (sắp xếp theo chuỗi)
// có 1 mảng là số thì nó cũng sắp xếp là chuỗi
// const fruits = ["banana", "apple", "date", "cherry", "elderberry"];
// fruits.sort();
// console.log(fruits);

// const numbers = [5, 2, 1, 8, 100, 7, 10]; // vi no chuyen sang chuoi de so sanh --> sai
// // numbers.sort(); //sai
// numbers.sort(function (a, b){
//     // nguyên tắc:
//     // - Nếu hàm này trả về giá trị âm --> đổi chỗ a và b
//     // - b phần tử trước và a phần tử sau
//     // muốn sắp xếp tăng dần:
//     // - Tìm điều kiện: b > a
//     // - Đổi chỗ
//     // if (b > a) {
//     //     return -1;
//     // }
//     return a - b;
// })
// console.log(numbers);

// Ví dụ: sắp xếp theo độ dài tăng dần
// const users = ["Khiêm", "Tuấn", "Sơn", "Anh", "An"];
// users.sort(function (a,b){
//     return a.length - b.length; // + thì sẽ là độ dài giảm dần
// })
// console.log(users);


// Bài tập 1:
// const arr1 = [5, 2, 9, 1 , 8];
// const arr2 = [2, 5, 1, 10];
// //tìm giao giữa 2 mảng

// const newarr = [];

// for(i = 0; i<arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//         newarr.push(arr1[i])
//     }
// }
// console.log(newarr);

// Bài tập 2

// đây là ví dụ:
// const numbers = [
//     [1, 2],
//     [3, 4]
// ];
// console.log(numbers);
// console.log(numbers[0] [1]);


// const numbers = [1, 2 , 3 , 4, 5, 6, 7, 8, 9];
// const size = 2;
// //yêu cầu: chunk array theo size
// //output: [[1,2], [3,4], [5,6], [7,8], [9]]

// const newNumbers = [];
// for (i = 0; i<numbers.length; i += size) {
//     newNumbers.push(numbers.slice(i,size + i));
    
// }
// console.log(newNumbers); // chú ý bước nhảy của bài này không phải i++ mà là i+= size vì cần nó cắt mỗi 1 mảng là 2 phần tử

// cách giải khác không dùng slice:
// Ý tưởng: đếm số lượng phần tử mảng con cuối cùng
//[[]] --> [[1]] --> [[1,2]]
//[[1,2],[3]] --> [[1,2], [3,4]]

// const numbers = [1, 2 , 3 , 4, 5, 6, 7, 8, 9];
// const size = 2;

// const newArr2 = [[]];
// for (let i = 0; i < numbers.length; i++) {
//     if (newArr2[newArr2.length-1].length < size) {
//         newArr2[newArr2.length-1].push(numbers[i]);
//     } else {
//         newArr2.push([numbers[i]]);
//     }
// }
// console.log(newArr2);

// forEach(callback) gọi hàm từ mảng arr (tức tác dụng chỉ là duyệt)
// const myArr = ["item 1", "item 2", "item 3", "item 4"];
// myArr.forEach(function (value, index){
//     console.log(value, index)
// })

// map(callback)
// - Duyệt giống như forEach
// - Trả về mảng mới có số lượng phần tử giống mảng ban đầu
// - Giá trị từng phần tử của mảng sẽ là return của callback
// const myArr = ["item 1", "item 2", "item 3", "item 4"];
// const newArr = myArr.map(function (value, index) {
//     console.log(value, index);
//     return `$(index). $(value)`;
// });
// console.log(newArr)

// Ví dụ: cho trước mảng numbers. Tạo mảng mới có số lượng giống mảng cũ. Tuy nhiên, phần tử nào là số chẵn thì nhân đôi
// const numbers = [5, 2, 7, 10, 15];
// const newArr = numbers.map(function (number) {
//     if (number % 2 ===0) {
//         return number * 2;
//     }
//     return number;
// })
// console.log(newArr);

// filter(callback): Lọc dữ liệu theo điều kiện trong callback
// nếu callback return về truthy --> thêm phần tử đó vào mảng mới
// map: return gì trả về nấy còn filter: truthy thì trả về mảng mới
// const numbers = [5, 2, 7, 10, 15];
// const result = numbers.filter(function (value, index) {
//     // if (value % 2 === 0) {
//     //     return true;
//     // }
//     // return value % 2 === 0;
//     return index //vì sao lại trả về [2,7,10,15]: index bắt đầu từ 0. mà 0 là falsy nên nó phải bắt đầu từ 1 ( tính chất của filter)
// });
// console.log(result);

// ví dụ:
// const users = [
//     "Tạ Hoàng An",
//     "Nguyễn Văn Sơn",
//     "Hoàng Anh Tuấn",
//     "Đặng Ngọc Sơn"
// ];
// let keyword = "sơn";
// //output: ["Nguyễn Văn Sơn", "Đặng Ngọc Sơn"]
// const newUsers = users.filter(function (user) {
//     // console.log(user);
//     // return user.includes(keyword);
//     return user.toLowerCase().includes(keyword.toLowerCase());
    
// })
// console.log(newUsers);

const myArr = ["item 1", "item 2", "item 3","item 2", "item 4"];
const newArr = myArr.filter(function(value, index) {
    return myArr.indexOf(value) === index;
})
console.log(newArr);

// Về tìm hiểu: 
// - find
// - findLast
// - findIndex
// - fineLastIndex
// - some
// - every
// - reduce (khó nhất)
// - flat