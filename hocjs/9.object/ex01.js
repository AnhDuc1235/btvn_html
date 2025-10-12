// Khai báo đối tượng:
// const user = {
//     //key: value
//     name: "Hoàng An",
//     age: 33.
// };

//Truy cập vào key trong object
// console.log(user.key)
// console.log(user[key]) //computed property

// Thêm key vào object 
// user.email = "hoangan.web@gmail.com";
// user["address"] = "Hà Nội";
// user["shipping-address"] = "Hồ Chí Minh";
// user.address2 = "hà Lội";

// Cập nhật giá trị của key
// user.name = "Hoàng An F8"

// Xóa key
// delete user.address;
// console.log(user);

// Duyệt các key trong object
// for (let key in user) {
//     const value = user[key];
//     console.log(key, value);
// }

// 2. Dùng phương thức object.keys(obj) --> Trả về 1 mảng chứa các key
// Object.keys(user).forEach((key) => {
//     console.log(key, user[key]);
// });

// bài 1: xóa các key không có giá trị trong object
// const user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//     age: 0,
//     address: undefined,
//     address1: undefined,
//     position: "Teacher",
// }

// for (let key in user) {
//     const value = user[key];

//     // if (value === null || value === undefined || value === "") {
//     //     // console.log(key + " khong co");
//     //     delete user.value;
//     // } else {
//     //     console.log(value)
//     // }
//     if (!value && value !== 0) {
//         delete user[key];
//     }
// }
// console.log(user);

// bài tập 2: nối 2 object
// const obj1 = {
//     name: "my name",
//     email: "myemail@gail.com",
// };
// const obj2 = {
//     age: 33,
//     address: "Hà nội"
// };

// const obj3 = {}

// for (let key in obj1) {
//     obj3[key] = obj1[key];
// };
// for (let key in obj2) {
//     obj3[key] = obj2[key];
// };
// console.log(obj3);

// Các phương thức của object
// Constructor: object
// 1. Object.keys(obj) --> Trả về 1 mảng chứa các key của object
// const errors = {};
// const email = "ádasd";
// if (!email) {
//     errors.email = "Vui lòng nhập email";
// }
// if (Object.keys(errors).length === 0){
//     console.log("Không có lỗi")
// } else {
//     console.log(errors);
// }

// 2. Object.values(obj) --> trả về 1 mảng chứa các value của object
// const myObj = {
//     name: "An",
//     email: "myemail@gmail.com",
// }
// console.log(Object.values(myObj));

// 3. Object.entries(obj)  --> Trả về 1 mảng 2 chiều chứa cả key và obj
// const myObj = {
//     name: "An",
//     email: "myemail@gmail.com",
// };
// console.log(Object.entries(myObj));

// 4. Object.fromEntries(array) --> Chuyển dạng entries array sang object
// const myObj = {
//     name: "An",
//     email: "myemail@gmail.com",
// };
// const entries = Object.entries(myObj);

// const myObj2 = Object.fromEntries(entries);
// console.log(myObj2);

// 5. Object.assign(target, source1, source2,...): Nối các object source vào target và trả về obj mới sau khi nối
// const obj1 = {
//     name: "my name",
//     email: "myemail@gail.com",
// };
// const obj2 = {
//     age: 33,
//     address: "Hà nội"
// };
// const obj3 = {
//     x: 1,
//     y: 2,
// }
// const newObj = Object.assign({},obj1, obj2, obj3); //obj1 làm target, obj2 và 3 nối vào 1. trả về newobj
// console.log(newObj);"hello lop".split(" ").join("+")

// Bài tập:
// const query = {
//     keyword: "Khóa học fullstack",
//     status: "active",
//     category: 1,
// }
// // Chuyển thành chuỗi query string

// const queryString = Object.entries(query).map((value) => {
//     return value.join('=')
// }).join("&").replaceAll(" ", "+")

// console.log(queryString);

// bài tập:
const queryString = "keyword=Khóa+Fullstack&status=active&category=1&category=2";

// Case 1:
// keyword: "khóa fullstack",
// status: "active",
// category: [1, 2]

// Case 2: keyword=Khóa+Fullstack&status=active&category=1
// keyword: "khóa fullstack",
// statis: "active",
// category: 1

// const newQueryString = Object.fromEntries(queryString.split("&").map((value) => value.split("=")))

// console.log(newQueryString);

const array = queryString.split("&")
const query = {}
array.forEach((item) => {
    const itemArr = item.split("=");
    const key = itemArr[0];
    const value = itemArr[1];
    if (!query[key]) {
        query[key] = value.replaceAll("+", " ")     
    } else {
        // Phát hiện key bị trùng trong object query
        // Sửa lại key đó bằng cách bọc 1 mảng ra bên ngoài
        if (!Array.isArray(query[key])) {
            query[key] = [query[key]];
        }
    }
    if (Array.isArray(query[key])) {
        query[key].push(value);
    }
});
console.log(query);

// bài toán đếm từ:
let content = "Xin chao tat ca anh em f8 dang o days Xin";
const words = content.split(" ");
const countObj = {};
words.forEach((words)=> {
    if (!countObj[words]) {
        countObj[words] = 0;
    }
    countObj[words]++;
});
console.log(countObj);

// đệ quy


