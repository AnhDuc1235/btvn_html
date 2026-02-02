// const a: string = "An";

// let a: any = "An";
// if (typeof a === "string") {
//     let b: string = a
// }

// const getMessage = (): string | void => {
//     let check = false;
//     if (check) {
//         return "Hoang An"
//     }
// }

// const users: string[] = ["user1", 'user2', 'user 3']

// const myArr: [string, number, boolean] = ["An", 30, false]

// const user: {
//     name: string,
//     age: number,
//     isSenior?: boolean,
//     details: {
//         province: string
//     }
// } = {
//     name: "Hoàng An",
//     age: 34,
//     // isSenior: false
//     details: {
//         province: "Hà Nội"
//     }
// }

// type Address = {
//     province: string
// }
// // type User = {
// //     id: number,
// //     name: string,
// //     address?: Address
// // } 
// type Address2 = {
//     ward: string
// }
// // const users: User[] = [
// //     {
// //         id: 1,
// //         name: "user 1",
// //         address: {
// //             province: "Hà nội"
// //         }
// //     },
// //     {
// //         id: 2,
// //         name: "user 2",
// //         address: {
// //             province: "HCM"
// //         }
// //     },
// //     {
// //         id: 3,
// //         name: "user 3"
// //     }
// // ]

// const address: Address & Address2 = {
//     province: "Đà Nẵng",
//     ward: "Ahihi"
// }

// interface User {
//     name: string;
//     email: string;
// }
// interface Authentication extends User {
//     isLogin: () => boolean
// }
// const user: Authentication = {
//     name: "Hoàng An",
//     email: "hoangan@gmail.com",
//     isLogin() {
//         return true
//     },

// }

// interface ErrorWithStatus extends Error {
//     status?: number
// }
// try {
//     const a:number = -1;
//     if (a < 0) {
//         const err: ErrorWithStatus = new Error()
//         err.status = 400
//         throw err
//     }
// } catch (error) {
//     if (error instanceof Error) {
//         const err: ErrorWithStatus = error
//         console.log(err.message);
//         console.log(err.status);
//     }
    
// }

// const a: number = 10
// const b: string = a as unknown as string; //ép kiểu string, đưa về biến b, không nên dùng

// const doSomething = (a: "A" | "B" | "C") => {
//     console.log(a);
// }
// doSomething("A")

// type Todo<T> = {
//     id: number,
//     title: string,
//     completed: boolean,
//     info?: T,
// }
// //Todo<T = unknown>: generate
// const todos: Todo<unknown>[] = [
//     {
//         id: 1,
//         title: "Todo 1",
//         completed: true
//     },
//     {
//         id: 2,
//         title: "Todo 2",
//         completed: false
//     }
// ]
// const todos2: Todo<{createdAt: string}>[] = [
//     {
//         id: 1,
//         title: "Todo 1",
//         completed: true,
//         info: {
//             createdAt: "ahihi"
//         }
//     },
// ]
// //<{createdAt: string}>: khai báo
// const todos3: Todo<{updateAt: string}>[] = [
//     {
//         id: 1,
//         title: "Todo 1",
//         completed: true,
//         info: {
//             updateAt: "ahihi"
//         }
//     },
// ]

//Ví dụ:
const myPromise = Promise.resolve([
    {
        id: 1,
        title: "Todo 1"
    },
    {
        id: 2,
        title: "Todo 2"
    },
    {
        id: 3,
        title: "Todo 3"
    },
])
const showTodos = async (): Promise<{
    id: number;
    title: string
}[]> => {
    const todoList = await myPromise;
    return todoList;
}
//Promise<> đang ở dạng generate


//học typescript: học các kiểu dữ liệu