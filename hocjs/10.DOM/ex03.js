//classList
// const contentEl = document.querySelector(".content");

// console.log(contentEl.classList);

// // 1. Thêm class --> add()
// contentEl.classList.add("block-1", "block-2");

// // 2. Thay thế class --> replace
// contentEl.classList.replace("block-1", "content-1");

// // 3. Xóa class
// contentEl.classList.remove("block-2");

// 4. Toggle
// - Nếu chưa có class --> Thêm mới
// - Nếu có class --> xóa
// contentEl.classList.toggle("active");
// contentEl.classList.toggle("active");

// const allItems = document.querySelectorAll("ul li")
// console.log(allItems);

// allItems.forEach((item) => {
//     item.addEventListener("click", () => {
//         console.log(item);
        
//     }) //duyệt từng phần tử trong allItems, bắt sự kiện click vào ul li
// })  


// bài tập: bấm vào nút show ở item nào thì phải mở ra content của nó

// const allItem = document.querySelectorAll("ul li")

// allItem.forEach((item) => {
//     const btn = item.querySelector("button")
//     btn.addEventListener("click", () => {
//         const itemActive = document.querySelector("ul li.active");

//         item.classList.toggle("active");

//         if (itemActive) {
//             itemActive.classList.remove("active")
//             const btnActive = itemActive.querySelector("button")
//             btnActive.innerText = "show"
//         }

//         if (item.classList.contains("active")) {
//             //Đang mở
//             btn.innerText = "hide"
//         } else {
//             //Đang đóng
//             btn.innerText = "show"
//         }
//     })
// })


// DOM CSS
// const contentEl = document.querySelector(".content");
// console.log(contentEl.style);
// // contentEl.style.backgroundColor = `yellow` //thêm. Viết thuộc tính bằng camel Case
// // contentEl.style.color = `red`
// // contentEl.style.fontStyle = `italic`

// Object.assign(contentEl.style, {
//     backgroundColor: "yellow",
//     fontStyle: "italic",
//     color: "red"
// })  //Thêm (sử dụng assign)

// contentEl.style.color = null; //xóa


// Event Object
// offset-x: tính tọa độ theo chiều x từ điểm tác động sự kiện đến cạnh bên trái của thằng cha vừa tác động
// offset-y: tính tọa độ theo chiều y từ điểm tác động sự kiện đến cạnh bên trên của thằng cha vừa tác động
// client-x: tính tọa độ theo chiều x từ điểm tác động sự kiện đến cạnh bên trái của viewpoint
// client-y: tính tọa độ theo chiều y từ điểm tác động sự kiện đến cạnh bên trên của viewpoint
// key --> Áp dụng ở sự kiện keyup, keydown

// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//     console.log(e);
    
// })


// const input = document.querySelector("input")
// document.addEventListener("keyup", (e) => {
//     console.log(e.key);
    
// })  //bắt phím(key). khi nhập vào ô input thì nó sẽ bắt các phím mình vừa nhập, in ra console

// preventDefault(): Ngăn chặn hành động mặc định của thẻ html

// const aEl = document.querySelector("a")
// aEl.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log(e.target.href);
    
// })

// const formEl = document.querySelector("form");
// formEl.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("submit");
// })
// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault()
//     alert("khong duoc chuot phai")
// })

// stopPropagation() --> Ngăn nổi bọt sự kiện từ thẻ html con (lưu ý phải cùng sự kiện)
// const boxEl = document.querySelector(".box")
// const buttonEl = document.querySelector("button")
// boxEl.addEventListener("click", () => {
//     console.log("box clicked");
// })
// buttonEl.addEventListener("click", () => {
//     e.stopPropagation();
//     console.log("button clicked");

// }) // cùng sự kiện "click" nên stoppropagation() hoạt động


// bài tập: kéo thả tự do trái phải:

const sidebarEl = document.querySelector(".js-sidebar");
const resizeEl = sidebarEl.querySelector(".js-resize");

//1. mousedown --> flag
//2. mousemove --> check flag
//3. mouseup --> flag

//removeEventListener("event-name", handler)

resizeEl.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", handler)
    document.body.classList.add("select-none"); // Khi bấm chuột và di: thêm select none
})
document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", handler)
    document.body.classList.remove("select-none"); // thả chuột: bỏ select none
})

const handler = (e) => {
    // console.log("kéo");
    // console.log(e.clientX);
    let x = e.clientX;
    if (x < 100) {
        x = 100;
    }
    if (x > 350) {
        x = 350;
    }
    sidebarEl.style.width = `${x}px`
    
}

// buổi sau:
// DOM navigation (parent, nexteleent, children, siblings,....)