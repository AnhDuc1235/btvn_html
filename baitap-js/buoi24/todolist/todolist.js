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
        tasklistEl.appendChild(p);
        let taskContent = document.createElement("label");
        taskContent.classList.add("view-task");
        taskContent.innerHTML = inputEl.value;
        p.appendChild(taskContent);
        
        // input sửa 
        let inputTask = document.createElement("input");
        inputTask.value = inputEl.value;
        inputTask.type = "text";
        inputTask.classList.add("edit-task");
        p.appendChild(inputTask);
        inputEl.value = "";

        let div = document.createElement("div");
        div.classList.add("task-function")
        p.appendChild(div);

        let edit = document.createElement("span");
        edit.classList.add("edit")
        edit.innerHTML = "sửa";
        div.appendChild(edit);

        let remove = document.createElement("span");
        remove.classList.add("delete")
        remove.innerHTML = "xóa";
        div.appendChild(remove);
    }
    
});

//sửa, xóa, tích gạch ngang
tasklistEl.addEventListener("click", function(e){
    if (e.target.className === "delete") {
        // e.target.parentElement.remove();
        e.target.parentElement.parentElement.remove();
    } else if (e.target.tagName === "P") {
        e.target.classList.toggle("checked")
    } else if (e.target.className === "edit") {
        let edit = e.target;
        let p = edit.parentElement.parentElement;
        let content = p.querySelector(".view-task");
        let input = p.querySelector(".edit-task");
        let remove = p.querySelector(".delete");
        if (edit.innerHTML === "sửa") {
            content.style.display = "none";
            input.style.display = "block";
            edit.innerHTML = "ok";
            remove.style.display = "none"
        } else {
            content.innerText = input.value; 
            content.style.display = "block";
            input.style.display = "none";
            edit.innerHTML = "sửa";
            remove.style.display = "block"
        }
    }
})
