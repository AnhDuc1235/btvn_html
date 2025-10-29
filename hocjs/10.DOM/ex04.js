// DOM navigation
// - parentElement: Chọn phần tử cha từ phần tử hiện tại (1 cấp)
// - children: chọn danh sách phần tử con gần nhất từ phần tử đã có (luôn trả về 1 danh sách của cấp gần nhất)
// - nextElementSibling: chọn phần tử kế tiếp từ phần tử đã có
// - previousElementSibling: chọn phần tử phía trước từ phần tử đã có (lùi lại)

// const btnList = document.querySelectorAll("button");
// btnList.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         console.log(btn.parentElement.parentElement);
//     })
    
// })

// const ulEl = document.querySelector("ul");
// console.log(ulEl.children[0].children[0].innerHTMLs);

// const itemActive = document.querySelector(".products .active")
// console.log(itemActive.nextElementSibling.nextElementSibling.previousElementSibling);

//- chọn phần tử kế tiếp của itemactive
// - xóa bỏ class phần tử active cũ (classList.remove("active"))
// - thêm class vào phần tử kế tiếp

// const prev = document.querySelector(".prev-btn")
// const next = document.querySelector(".next-btn")

// next.addEventListener("click", function(){
//     let itemActive = document.querySelector(".active")
//     let nextItem = itemActive.nextElementSibling;
//     // console.log("ok");
//     if (nextItem) {
//         itemActive.classList.remove("active")
//         nextItem.classList.add("active");
//     } else {
//         itemActive.classList.remove("active")
//         const firstItem = document.querySelector(".products h2:first-child")
//         firstItem.classList.add("active")
//     }
    
// })
// prev.addEventListener("click", function(){
//     let itemActive = document.querySelector(".active")
//     let nextItem = itemActive.previousElementSibling;
//     // console.log("ok");
//     if (nextItem) {
//         itemActive.classList.remove("active")
//         nextItem.classList.add("active");
//     } else {
//         itemActive.classList.remove("active")
//         const lastItem = document.querySelector(".products h2:last-child")
//         lastItem.classList.add("active")
//     }
    
// })

// ▼

const menu = document.querySelector(".menu ul")

menu.addEventListener("click", function(e) {
    // let menu = document.querySelector(".menu ul")
    // let ok = menu.nextElementSibling
    // if (ok) {
    //     ok.
    // }
    // console.log("ok");
    e.preventDefault()
    const li = e.target 
    

    if (li.classList.contains("child") || li.querySelector("li a")) {
        // console.log("ok");
        // li.innerHTML = "ok"
        const showMenu = li.querySelector("ul")
        // li.innerHTML += "ok"
        // console.log(li);
        showMenu.classList.toggle("hidden")

        const li2 = showMenu.parentElement;
        // console.log(li2);
        li2.classList.toggle("active")
        
        
    } 
})
