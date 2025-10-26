const inputEl = document.querySelector("#task-input");
const buttonEl = document.querySelector("button");
const tasklistEl = document.querySelector("#task-list");

// thêm, ktra
buttonEl.addEventListener("click", function(e) {
    e.preventDefault();
    if (!inputEl.value.trim()) {
        alert("Bạn phải nhập text");
    } else {
        let checktask = document.querySelectorAll("#task-list p");
        for (let t of checktask) {
            if (t.firstChild.textContent.trim() === inputEl.value.trim()) {
                alert("Task này đã tồn tại");
                return;
            }
        }
        let p = document.createElement("p");
        p.innerHTML = inputEl.value;
        tasklistEl.appendChild(p);
        inputEl.value = "";

        let div = document.createElement("div");
        div.classList.add("task-function")
        p.appendChild(div);

        let edit = document.createElement("span");
        edit.innerHTML = "sửa";
        div.appendChild(edit);

        let remove = document.createElement("span");
        remove.innerHTML = "xóa";
        div.appendChild(remove);
    }
    
});

//xóa
tasklistEl.addEventListener("click", function(e){
    if (e.target.tagName === "SPAN") {
        // e.target.parentElement.remove();
        e.target.parentElement.parentElement.remove();
    }
})

//sửa
// tasklistEl.addEventListener("click", function(e){
    
// })
