const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const errorEl = document.querySelector(".error");
const imageEl = document.querySelector(".image")
btnEl.addEventListener("click", ()=> {
    errorEl.innerText = "";
    imageEl.innerText= ""; //Xóa nội dung bên trong thẻ div có class là image
    if (!inputEl.value.trim()) {
        errorEl.innerText = "Vui lòng nhập link ảnh";
        return;
    }
    // imageEl.innerHTML = `<img src="${inputEl.value}" />`;

    // Cách 2: không dùng innerHTML, tạo element Node từ js --> đưa vào cây DOM
    const img = document.createElement(`img`);
    img.src = inputEl.value; //Cập nhật thuộc tính cho Node
    
    imageEl.append(img); //Thêm vào cuối của element 

    inputEl.value = ""; // Xóa value trong input
})


// buổi sau: chuyển tab + vallidate form