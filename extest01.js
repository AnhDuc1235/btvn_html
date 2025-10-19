// 2. Prototype trong JavaScript

// JavaScript sử dụng mô hình kế thừa dựa trên prototype (prototype-based inheritance).

// Mỗi object trong JavaScript có một thuộc tính ẩn gọi là [[Prototype]], có thể truy cập qua __proto__. Khi bạn truy cập một thuộc tính hoặc phương thức mà không tìm thấy trên object, JavaScript sẽ tìm tiếp trên prototype chain.

// Ví dụ:
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   console.log('Hello, I am ' + this.name);
// };

// const john = new Person('John');

// john.sayHello(); // Hello, I am John


// Ở đây, sayHello không được định nghĩa trực tiếp trên john, mà là trên Person.prototype.

// Khi gọi john.sayHello(), JS sẽ tìm sayHello trên john, không thấy => tìm lên john.__proto__, chính là Person.prototype.

//trong prototype, this trong ham tra ve la 1 doi tuong window. this thi se tra ve ket qua cua object dang goi den phuong thuc do (this tro ve doi tuong no thuoc ve)
// 3. Function Constructor

// Function Constructor là một hàm dùng để tạo đối tượng mới. Theo quy ước, tên hàm constructor viết hoa chữ cái đầu (PascalCase).

// Cách dùng:
// function Animal(name, type) {
//   this.name = name;
//   this.type = type;
// }

// const dog = new Animal('Buddy', 'Dog');
// console.log(dog.name); // Buddy

// Khi bạn gọi với new:

// Một object mới được tạo.

// this trong hàm constructor trỏ đến object mới.

// Hàm constructor chạy, gán các thuộc tính lên this.

// Object mới được trả về.




// function Car(brand) {
//   this.brand = brand;
// }

// Car.prototype.drive = function() {
//   console.log(this.brand + ' is driving');
// };

// const bmw = new Car('BMW');
// bmw.drive(); // BMW is driving



// vi du:Tạo một constructor Animal, và constructor Dog kế thừa từ Animal. Cả hai nên có phương thức speak(), trong đó Dog override lại speak().
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   console.log(this.name + ' makes a sound.');
// };

// function Dog(name, breed) {
//   Animal.call(this, name); // Kế thừa constructor
//   this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype); // Kế thừa prototype
// Dog.prototype.constructor = Dog;

// Dog.prototype.speak = function() {
//   console.log(this.name + ' the ' + this.breed + ' barks!');
// };

// const d = new Dog('Rex', 'Husky');
// d.speak(); // Rex the Husky barks!


//vi du:Thêm một phương thức mới sum() vào tất cả các mảng (Array), sao cho:
// const nums = [1, 2, 3, 4];
// console.log(nums.sum()); // 10 :

// Array.prototype.sum = function() {
//   return this.reduce((acc, val) => acc + val, 0);
// };

// const nums = [1, 2, 3, 4];
// console.log(nums.sum()); // 10


// vi du: Tạo một hàm constructor Counter có thể: dem
// function Counter() {
//   let count = 0;

//   this.increment = function() {
//     count++;
//     return count;
//   };

//   this.decrement = function() {
//     count--;
//     return count;
//   };

//   this.value = function() {
//     return count;
//   };
// }


//const teacher = {
//   firstName: 'Minh',
//   lastName: 'Thu',
// }

// function greet(greeting, message) {
//   return `${greeting} ${this.firstName} ${this.lastName}. ${message}`
// }

// let result = greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)'])

// console.log(result)

// // So sánh với call() method
// result = greet.call(teacher, 'Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)')

// console.log(result)






// Đệ quy là một kỹ thuật lập trình trong đó một hàm tự gọi lại chính nó để giải quyết bài toán. Hàm đệ quy sẽ chia bài toán lớn thành những bài toán con giống chính nó nhưng nhỏ hơn, cho đến khi đạt đến một điều kiện dừng (base case).

// Cấu trúc cơ bản của một hàm đệ quy:
// function deQuy(...) {
//   if (điều_kiện_dừng) {
//     return kết_quả_cơ_bản;
//   } else {
//     return deQuy(tham_số_mới); // gọi lại chính nó với đầu vào nhỏ hơn
//   }
// }

// Ví dụ đơn giản: Tính giai thừa n!
// // 5! = 5 * 4 * 3 * 2 * 1 = 120

// function factorial(n) {
//   if (n === 1) return 1; // điều kiện dừng
//   return n * factorial(n - 1); // gọi lại chính nó
// }

// console.log(factorial(5)); // 120

// Phân tích luồng gọi:
// factorial(5)
// = 5 * factorial(4)
// = 5 * 4 * factorial(3)
// = 5 * 4 * 3 * factorial(2)
// = 5 * 4 * 3 * 2 * factorial(1)
// = 5 * 4 * 3 * 2 * 1
// = 120

// Lưu ý khi dùng đệ quy:
// Điều kiện	Giải thích
// Base Case	Hàm phải có điều kiện dừng rõ ràng để không gọi mãi mãi
// Gọi nhỏ hơn	Mỗi lần gọi lại phải làm bài toán nhỏ hơn, tiến gần đến base case
// Hiệu suất	Đệ quy dễ hiểu, nhưng đôi khi tốn bộ nhớ do gọi hàm lồng nhau (stack)
// Một số bài toán thường dùng đệ quy:
// Bài toán	Mô tả ngắn
// Tính giai thừa	n! = n * (n-1)!
// Tính dãy Fibonacci	F(n) = F(n-1) + F(n-2)
// Duyệt cây (tree traversal)	Duyệt từng node theo chiều sâu
// Duyệt thư mục, file hệ thống	Lặp qua thư mục con không giới hạn
// Giải bài toán chia để trị	Merge Sort, Quick Sort,...
// Ví dụ khác: Duyệt mảng lồng nhau
// const arr = [1, [2, [3, 4], 5], 6];

// function flatten(array) {
//   let result = [];
//   for (let item of array) {
//     if (Array.isArray(item)) {
//       result = result.concat(flatten(item)); // gọi lại chính nó
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// console.log(flatten(arr)); //ss [1, 2, 3, 4, 5, 6]