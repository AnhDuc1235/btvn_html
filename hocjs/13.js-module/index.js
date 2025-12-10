// // import và set đường dẫn:
// import a, {b as _b, c, doSomething} from "./utils/home.js"; //import default (đặt tên là gì cũng được, không nhất thiết là a)
// // lưu ý: import theo named {b,c} thì phải để đằng sau import theo default a
// console.log(a);
// console.log(_b);
// console.log(c);
// doSomething()


// import * as home from "./utils/home.js" //import hết, cần cái nào thì lấy được luôn

// const { doSomething } = home; //lưu nó vào 1 biến (giống cách export vào sau import như ví dụ trên)
// doSomething();

import doSomething, { a, b, c } from "./utils/product.js" 
doSomething()
console.log(a)
console.log(b)
console.log(c)

