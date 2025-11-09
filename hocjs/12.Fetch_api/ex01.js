// npx json-server@0.17.4 db.json --watch  : lệnh paste vào terminal
// get: lấy dữ liệu
// post: thêm dữ liệu
// delete: xóa
// put: thay thế, cập nhật( thay hết trừ id)
// put: thay thế, cập nhật đúng phần tử được chỉ định

//Make HTTP Request
// - XHR
// - Fetch

//fetch(url, options): trả về promise

// Trường hợp lấy dữ liệu về:
const baseUrl = "http://localhost:3000";    
// fetch(`${baseUrl}/users`)
// .then((response)=>{
//     return response.json() //tự động parse từ json phía server về array, object
//     // return response.text() //trả về nguyên bản dữ liệu từ server (vậy phải parse thủ công)
// })
// .then((data)=>{
//     // const users = JSON.parse(data) //parse thủ công
//     console.log(data);
// })

// viết bằng async cho đoạn trên:

// const getUsers = async () => {
//     try {
//         const response = await fetch(`${baseUrl}/users/1`)
//         if (!response.ok) {
//             throw new Error("fetch to failed")
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
    
// }
// getUsers()

// Trường hợp thêm mới

const createUser = async(data) => {
    const response = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), //chuyển object data thành JSON
    });
    const user = await response.json();
    console.log(user);
    
}

createUser({
    name: "Sơn",
    email: "son@gmail.com"
})
