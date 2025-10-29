// luyện: sắp xếp phần tử. sử dụng insert before

//  DOM Node
const root = document.querySelector("#root");

// 1. creatElement
const h1 = document.createElement("h1")
h1.innerText = "F8 - học lập trình không khó";
h1.classList = "title";

//append
// - 1 node thì chỉ sử dụng được 1 lần. phải tạo node mới nếu muốn thêm
root.append(h1)

const h2 = document.createElement("h2")
h2.innerText = "Xin chào f8"
root.append(h2)
root.prepend(h2)

const btn = document.createElement("button")
btn.innerText = "click me";
btn.addEventListener("click", () => {
    h1.innerText = "ok rồi"
})
root.append(btn)

// 2. insertBefore
const h3 = document.createElement("h3");
h3.innerText = "học js"
root.insertBefore(h3, h1)

// 3. replaceChild
const p = document.createElement("p")
p.innerText = "ahihi"
root.replaceChild(p, h1) // h1 sẽ bị xóa khỏi cây DOM. h1 sẽ tự do -> vẫn dùng được h1 bình thường

// root.append(h1)

// 4. RemoveChild: xóa node con
root.removeChild(h2) // h2 sẽ bị xóa khỏi cây DOM. h2 sẽ tự do -> vẫn dùng được h2 bình thường

// 5. textNode: là 1 object
const counterHeading = document.createElement("h2")
counterHeading.innerText = "count: ";
// const span = document.createElement("span")
// span.innerText = 0
const textNode = document.createTextNode(0)
counterHeading.appendChild(textNode)
root.append(counterHeading)
const plusBtn = document.createElement("button")
plusBtn.innerText = "+"
plusBtn.addEventListener("click", ()=>{
    // span.innerText++;
    textNode.data++
})
root.append(plusBtn)



