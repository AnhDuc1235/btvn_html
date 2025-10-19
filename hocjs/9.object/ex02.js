// Thuộc tính: key trong object có kiểu dữ liệu không phải là hàm
// Phương thức: key trong object có kiểu dữ liệu là hàm

// function sayHi() {
//     return "sayHi";
// }

// const user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//     getName: function () {
//         return "Hoàng An";
//     },  // đây gọi là phương thức
//     doSomething() {
//         return "cái gì đó";
//     },
//     sayHi,
// };

// console.log(user);
// console.log(user.getName());
// console.log(user.doSomething());
// console.log(user.sayHi());

// Từ khóa this: (Hay còn gọi là ngữ cảnh, context)
// - Ám chỉ object bọc hàm
// - Chỉ dùng trong hàm

// function somThing() {
//     console.log(this);
// }
// somThing();

// const user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//     getName: function() {
//         console.log(this);       
//     },
//     getInfo: function() {
//         const _this = this;
//         return {
//             age: 34,
//             getEmail: function () {
//                 console.log(_this.name);
//             }
//         }
//     }
// };
// user.getInfo().getEmail();

//sử dụng arrouse function: () => tức nhảy 1 cấp
// const user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//     getName: function() {
//         console.log(this);       
//     },
//     getInfo: () => {
//         // const _this = this;
//         return {
//             age: 34,
//             getEmail: () => {
//                 console.log(this);
//             }  
//         }
//     }    //arrouse function của getEmail nhảy ra ngoài, lấy name và email. 
//          //arrouse function của getName nhảy ra ngoài, trả ra window. 
// };
// user.getInfo().getEmail();


// Bài tập:
// LƯU Ý: Muốn dùng dấu chấm thì trước nó phải là 1 object
// không return thì underfined, undefined thì không chấm được (.add().minus()...)
// thằng đằng trước phải là 1 object thì mới chấm được
// .add(20).minus(5).multi(3).divi(2) muốn đảo được thứ tự phải viết ngang hàng
// const f8 = {

//     start: function (number) {
//         let sum = number
        
//         return {
//             add(add){
//                 sum += add;
//                 // console.log(sum); 
//                 return this;  //phải return this thì chuỗi gọi ở dưới (vd: add(20).minus(5)) mới dùng chấm được
//             },
//             minus(minus){
//                 sum -= minus;
//                 // console.log(sum);
//                 return this;
//             },
//             multi(multi) {
//                 sum *= multi;
//                 // console.log(sum);
//                 return this;
//             },
//             divi(divi) {
//                 sum /= divi;
//                 // console.log(sum);
//                 return this;
//             },
//             get() {
//                 console.log(sum);
//                 return sum //vì không return this nên gọi .get() là hết
//             },
//         }    
//     }
// };
// f8.start(10).add(20).minus(10).multi(2).divi(2).get();
// //f8.start(10).add(20).minus(5).multi(3).divi(2).get();
// // LƯU Ý: Muốn dùng dấu chấm thì trước nó phải là 1 object

// Strict mode và Normal mode
// Strict mode: chế độ nghiêm ngặt. Thêm đầu file "use strict"; (kiểm soát chặt chẽ code)
// Normal mode: chế độ bình thường

// "use strict";
// a = 10;
// console.log(a); //không dùng "use strict" thì dù không khai báo let hay const cho a
//                 // thì vẫn chạy. dùng "use strict" sẽ báo lỗi


// Prototype: Object cho phép định nghĩa các thuộc tính, phương thức để tái
//sử dụng ở các object khác

// Phân cấp: Object -> Constructor(bản thiết kế ngôi nhà) -> Instance(các ngôi nhà)
// Ví dụ: Users = [] --> Instance của Array
//        fullName = "Hoàng An" --> Instance của String
//        age = 34 --> Instance của Number
//        status = true --> Instance của boolean
//        user = {} --> instance của Object (literal Object)

// Object.prototype.message = "F8"
// Object.prototype.getMessage = function () {
//     return "Học js không khó";
// }
// const a = {
//     x: 10,
// }
// const b = {
//     y: 10,
// }
// console.log(a.message);
// console.log(b.message);
// console.log(b.getMessage());


// Kiểm tra Constructor của 1 instance
// const users = [];
// console.log(users.constructor.name); // kiểm tra constructor của nó là gì // trả về string
// console.log(users instanceof Array); // kiểm tra xem có phải là array không

// // Optional Chaining
// const user = {
//     info: {
//         email: {
//             domain: "Hoàng An"
//         }
//     }
// };
// // console.log(user.info.email?.());
// if (user?.info?.email?.domain) {
//     console.log(user.info.email.domain)
// }


// setter, getter trong literal object
// const myObj = {
//     data: null,
//     get length() {
//         return this.data;
//     }, //định nghĩa kiểu get thì ở log: gọi như thuộc tính
//     set length(value) {
//         this.data = value;
//     },
// };
// myObj.length = 30; //gọi setter
// myObj.length += 10; //gọi setter
// console.log(myObj.length);  //gọi getter

// Mong muốn:
// Truy cập vào myObj.length -->Trả về giá trị
// Truy cập vào myObj.length = 20 -->Cập nhật giá trị


// Constructor: bản thiết kế tạo ra instance
// - Function Constructor
// - Class (cách hiện đại, hay sử dụng)

// Đặt tên constructor: 
// - dùng quy tắc PascalCase (khác camel case là chữ đầu viết thường)
// - Sử dụng danh từ
// - Không được dùng arrow function
//vdu: HomeController, ProductCategoryController,...
// function User(name, email) {
//     //Thuộc tính
//     this.name = name;
//     this.email = email;

//     //phương thức
//     this.getName = function() {
//         return this.name;
//     }
//     this.getEmail = function() {
//         return this.email;
//     }
// }

// //Thêm phương thức, thuộc tính từ bên ngoài --> dùng prototype
// User.prototype.message = "f8"

// //Khởi tạo instance từ constructor
// const user1 = new User("user 1", "user1@gmail.coms")
// console.log(user1);
// // const user2 = new User("user 2", "user2@gmail.coms")
// // console.log(user2);


// Dùng Class: (nên dùng)
class User {
    //Thuộc tính (giống dữ liệu)
    // name = "Hoàng An";
    // email = "hoangan.web@gmail.com";

    //Hàm khởi tạo:
    // - Nhận đối số khi tạo instance
    // - Chạy ngay khi tạo instance
    // - this trong class chính là instance được khởi tạo trong class đấy
    #email; // Khai báo thuộc tính private
    constructor(name, email) {
        this.name = name;
        this.#email = email;
    }

    //Phương thức (để kiểm soát xem có được lấy dữ liệu đấy không)
    getName() {
        return this.name;
    }
    getEmail() {
        return this.#email;
    }
}

// Muốn cập nhật 
const user1 = new User("Hoàng An", "hoangan.web@gmail.com");
console.log(user1);
// console.log(user1.#email); // sẽ bị lỗi, phải truy cập thông qua hàm
console.log(user1.getEmail());

// console.log(user1.email);
// console.log(user1.getEmail());


//Buổi sau:
// static method, static property
// extends
// setter, getter ở trong class
// so sánh object, array
// hàm đệ quy
// sao chép array, object: có 2 kiểu:
// 1> shallow copy
// 2> deep copy