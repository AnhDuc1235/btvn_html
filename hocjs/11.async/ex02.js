const getUser = (userId) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "User 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "User 3",
          salary: 3000,
        },
        {
          id: 4,
          name: "User 4",
          salary: 4000,
        },
      ];
      const user = users.find((user) => user.id === userId);
    //   reject("Lỗi khi lấy user")
      resolve(user);
    }, Math.random() * 2000);
  });
};

const ids = [1,3,4];//Danh sach cac userid
let total = 0;
// for (let i = 0; i < ids.length; i++) {
//     const userId = ids[i];
//     getUser(userId).then((data) => {
//         total += data.salary;
//         console.log(total);
//     });
// }

// const newtotal = function(){
//     return new Promise(function(resolve){
//         for (let i = 0; i < ids.length; i++) {
//         const userId = ids[i];
//         getUser(userId).then((data) => {
//             total += data.salary;
//             console.log(total);
//         });
//         }
//         resolve(total)
//     })
// }
// getUser()
//     .then((data)=>{
//         console.log(total);
//     })
// console.log(total);

// const totalPromise = new Promise((resolve) => {
//     let total = 0
//     let count = 0
//     for (let i = 0; i < ids.length; i++) {
//         const userId = ids[i];
//         getUser(userId).then((data) => {
//             total += data.salary;
//             count++;
//             if (count === ids.length){
//                 resolve(total)
//             }
//         });
//     }
// })

// totalPromise.then((data) => {
//     console.log(data);
// })

// Promise.all(arrayPromise)

// const arrayPromise = ids.map((userId) => getUser(userId));
// Promise.all(arrayPromise).then((data) => {
//     console.log(data);
//     const total = data.reduce((acc, cur) => acc + cur.salary, 0);
//     console.log(total);
// })


// try catch
/*
try {
    code
} catch (error) {
    Error
} finally {
    code
}
*/

// console.log("start");
// const abc = () => {}
// const ahihi = () => {}
// let a = -1
// try {
//     abc();
//     ahihi();
//     // console.log("f8");
//     if (a < 0) {
//         const error = new Error("a phải là số dương");
//         error.status = 500;
//         throw error;
       
//     }
// } catch (error) {
//     //error là 1 object
//     console.log(error.message);
//     console.log(error.status);
//     // console.log("đã có lỗi xảy ra");
    
// } finally {
//     console.log("Hoàn Thành");
// }
// console.log("Continue");

//Async function
// - Luôn trả về 1 promise 
// - Dùng cho await 
//Await keyword
// - Chờ khi nào promise trả về kết quả (sau await phải là 
//promise, 1 await tương ứng với 1 lần then)
// - await phải nằm trong async function (trừ môi trường nodejs)

//dùng await bắt bằng try catch

// const doSomething = async () => {
//     // const user1 = await getUser(1);
//     // console.log(user1);
//     // const user2 = await getUser(1);
//     // console.log(user2);
//     try {
//         const user1 = await getUser(1);
//         console.log(user1);
//     } catch (error) {
//         console.log(error);     
//     }
// };
// doSomething()
// console.log(doSomething()); // luôn trả ra 1 promise

// async function doSomething() {}

//IIFE: hàm tự gọi
// (async ()=>{
//     let total = 0
//     for (let i = 0; i < ids.length; i++){
//         const userId = ids[i]
//         const user = await getUser(userId)
//         total += user.salary
//     }
//     console.log(total);
// })()

//Bài tập 
// const myPromise = new Promise((resolve) => {
//     resolve({
//         getContent: () => new Promise((resolve) => resolve("f8")),
//     })
// });

// (async() => {
//     //Truy cập vào myPromise và log ra chữ f8
//     const test = await myPromise
//     const f8 = await test.getContent()
//     console.log(f8);
//     // console.log(test.getContent());
    
//     //cách khác: 
//     const text = await (await myPromise).getContent()
//     console.log(text);
    
    
// })()

// ví dụ:
// setTimeout ( ()=> {
//     console.log(2);
// }, 0) //settimeout macrotask (ưu tiên thấp hơn)
// Promise.resolve(1).then((data) => {
//     console.log(data);
// }) //promise là microtask (ưu tiên cao hơn)

// console.log(3);
// -> log ra trước, promise chạy xong cuối cùng settimeout sẽ chạy (settimeout luôn chạy sau cùng)


