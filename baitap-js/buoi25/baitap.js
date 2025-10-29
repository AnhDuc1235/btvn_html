
const inputEl = document.querySelector("#quantity-1")
const inputEl2 = document.querySelector("#quantity-2")
const inputEl3 = document.querySelector("#quantity-3")
const inputEl4 = document.querySelector("#quantity-4")
const buttonEl = document.querySelector("#add-1")
const buttonEl2 = document.querySelector("#add-2")
const buttonEl3 = document.querySelector("#add-3")
const buttonEl4 = document.querySelector("#add-4")
const cartTableEl = document.querySelector("#cart-table")
const cartDataEl = document.querySelector("#cart-data")
const deleteCart = document.querySelector("#delete-cart")
const h4El = document.querySelector("h4")
const updateCartEl = document.querySelector("#update-cart");

function updateCartOrder() {
    const tbody = cartTableEl.querySelectorAll("tbody");
    for (let i = 0; i < tbody.length - 1; i++) { // bỏ hàng Tổng
        const tr = tbody[i].querySelector("tr");
        if (tr && tr.children.length > 0) {
            tr.children[0].innerText = i + 1; // cập nhật lại số thứ tự
        }
    }
}


function updateCart() {
    const cartInput = cartTableEl.querySelectorAll("input");
    let totalQuantity = 0;
    let totalPrice = 0;
    for (let cart of cartInput) {
        let quantity = Number(cart.value);
        let cartprice = cart.parentElement.previousElementSibling;
        let carttotal = cart.parentElement.nextElementSibling;

        let price = Number(cartprice.innerText);
        let total = price * quantity;    
        carttotal.innerText = total;
        totalPrice += total;
        totalQuantity += quantity;
    }
    let total = cartTableEl.querySelector("tbody:last-child tr");
    if (total) {
        total.children[1].innerText = totalQuantity;
        total.children[2].innerText = totalPrice;
    }
    if (cartInput.length === 0) {
        cartDataEl.classList.add("hidden");
        h4El.classList.remove("hidden");
    }
}

buttonEl.addEventListener("click", function(e) {
    let addTarget = e.target;

    if (addTarget.id.includes("add-1")) {
        cartDataEl.classList = ""
        h4El.classList = "hidden"
        // kiểm tra sản phẩm đã tồn tại chưa
        let checkCart = cartTableEl.querySelector("#cart-1");
        if (checkCart) {
            checkCart.value = Number(checkCart.value) + Number(inputEl.value);
            checkCart.parentElement.nextElementSibling.innerText = checkCart.parentElement.previousElementSibling.innerText * checkCart.value;
            return;
        } else {

        // alert("ok");
        let thead = cartTableEl.querySelector(":scope > thead")

        //tbody
        let tbody = document.createElement("tbody")
        tbody.id = "tbody-cart-1"

        let tr = document.createElement("tr")

        // Số thứ tự
        let tdStt = document.createElement("td")
        tdStt.innerText = "1"

        // sản phẩm
        let tdSp = document.createElement("td")
        tdSp.innerText = "Sản phẩm 1"

        // Giá 
        let tdPrice = document.createElement("td")
        tdPrice.innerText = "1000"

        // số lượng
        let tdQuantity = document.createElement("td")
        let quantity = document.createElement("input")
        quantity.id = "cart-1"
        quantity.type = "text"
        quantity.value = inputEl.value.trim()
        tdQuantity.appendChild(quantity)

        // tổng giá
        let tdTotalPrice = document.createElement("td")
        tdTotalPrice.innerText = inputEl.value.trim() * 1000

        // nút
        let tdDelete = document.createElement("td")
        let deleteCart = document.createElement("button")
        deleteCart.type = "button"
        deleteCart.id = "delete-item"
        deleteCart.classList.add("bg-gray-200")
        deleteCart.innerText = "Xóa"
        deleteCart.addEventListener("click", function (e) {
            e.target.parentElement.parentElement.parentElement.remove();
        });
        tdDelete.appendChild(deleteCart)

        //add vào tbody
        thead.after(tbody)
        tbody.appendChild(tr)
        tr.appendChild(tdStt)
        tr.appendChild(tdSp)
        tr.appendChild(tdPrice)
        tr.appendChild(tdQuantity)
        tr.appendChild(tdTotalPrice)
        tr.appendChild(tdDelete)
        updateCartOrder()
        updateCart()
        }
    }

})

buttonEl2.addEventListener("click", function(e) {
    let addTarget = e.target;

    if (addTarget.id.includes("add-2")) {
        cartDataEl.classList = ""
        h4El.classList = "hidden"
        // kiểm tra sản phẩm đã tồn tại chưa
        let checkCart = cartTableEl.querySelector("#cart-2");
        if (checkCart) {
            checkCart.value = Number(checkCart.value) + Number(inputEl.value);
            checkCart.parentElement.nextElementSibling.innerText = checkCart.parentElement.previousElementSibling.innerText * checkCart.value;
            return;
        } else {

        // alert("ok");
        let thead = cartTableEl.querySelector(":scope > thead")

        //tbody
        let tbody = document.createElement("tbody")
        tbody.id = "tbody-cart-2"

        let tr = document.createElement("tr")

        // Số thứ tự
        let tdStt = document.createElement("td")
        tdStt.innerText = "2"

        // sản phẩm
        let tdSp = document.createElement("td")
        tdSp.innerText = "Sản phẩm 2"

        // Giá 
        let tdPrice = document.createElement("td")
        tdPrice.innerText = "2000"

        // số lượng
        let tdQuantity = document.createElement("td")
        let quantity = document.createElement("input")
        quantity.id = "cart-2"
        quantity.type = "text"
        quantity.value = inputEl2.value.trim()
        tdQuantity.appendChild(quantity)

        // tổng giá
        let tdTotalPrice = document.createElement("td")
        tdTotalPrice.innerText = inputEl2.value.trim() * 2000

        // nút
        let tdDelete = document.createElement("td")
        let deleteCart = document.createElement("button")
        deleteCart.type = "button"
        deleteCart.id = "delete-item"
        deleteCart.classList.add("bg-gray-200")
        deleteCart.innerText = "Xóa"
        deleteCart.addEventListener("click", function (e) {
            e.target.parentElement.parentElement.parentElement.remove();
        });
        tdDelete.appendChild(deleteCart)

        //add vào tbody
        thead.after(tbody)
        tbody.appendChild(tr)
        tr.appendChild(tdStt)
        tr.appendChild(tdSp)
        tr.appendChild(tdPrice)
        tr.appendChild(tdQuantity)
        tr.appendChild(tdTotalPrice)
        tr.appendChild(tdDelete)
        updateCartOrder()
        updateCart()
        }
    }

})

buttonEl3.addEventListener("click", function(e) {
    let addTarget = e.target;

    if (addTarget.id.includes("add-3")) {
        cartDataEl.classList = ""
        h4El.classList = "hidden"
        // kiểm tra sản phẩm đã tồn tại chưa
        let checkCart = cartTableEl.querySelector("#cart-3");
        if (checkCart) {
            checkCart.value = Number(checkCart.value) + Number(inputEl.value);
            checkCart.parentElement.nextElementSibling.innerText = checkCart.parentElement.previousElementSibling.innerText * checkCart.value;
            return;
        } else {

        // alert("ok");
        let thead = cartTableEl.querySelector(":scope > thead")

        //tbody
        let tbody = document.createElement("tbody")
        tbody.id = "tbody-cart-3"

        let tr = document.createElement("tr")

        // Số thứ tự
        let tdStt = document.createElement("td")
        tdStt.innerText = "3"

        // sản phẩm
        let tdSp = document.createElement("td")
        tdSp.innerText = "Sản phẩm 3"

        // Giá 
        let tdPrice = document.createElement("td")
        tdPrice.innerText = "3000"

        // số lượng
        let tdQuantity = document.createElement("td")
        let quantity = document.createElement("input")
        quantity.id = "cart-3"
        quantity.type = "text"
        quantity.value = inputEl3.value.trim()
        tdQuantity.appendChild(quantity)

        // tổng giá
        let tdTotalPrice = document.createElement("td")
        tdTotalPrice.innerText = inputEl3.value.trim() * 3000

        // nút
        let tdDelete = document.createElement("td")
        let deleteCart = document.createElement("button")
        deleteCart.type = "button"
        deleteCart.id = "delete-item"
        deleteCart.classList.add("bg-gray-200")
        deleteCart.innerText = "Xóa"
        deleteCart.addEventListener("click", function (e) {
            e.target.parentElement.parentElement.parentElement.remove();
        });
        tdDelete.appendChild(deleteCart)

        //add vào tbody
        thead.after(tbody)
        tbody.appendChild(tr)
        tr.appendChild(tdStt)
        tr.appendChild(tdSp)
        tr.appendChild(tdPrice)
        tr.appendChild(tdQuantity)
        tr.appendChild(tdTotalPrice)
        tr.appendChild(tdDelete)
        updateCartOrder()
        updateCart()
        }
    }

})

buttonEl4.addEventListener("click", function(e) {
    let addTarget = e.target;

    if (addTarget.id.includes("add-4")) {
        cartDataEl.classList = ""
        h4El.classList = "hidden"
        // kiểm tra sản phẩm đã tồn tại chưa
        let checkCart = cartTableEl.querySelector("#cart-4");
        if (checkCart) {
            checkCart.value = Number(checkCart.value) + Number(inputEl.value);
            checkCart.parentElement.nextElementSibling.innerText = checkCart.parentElement.previousElementSibling.innerText * checkCart.value;
            return;
        } else {

        // alert("ok");
        let thead = cartTableEl.querySelector(":scope > thead")

        //tbody
        let tbody = document.createElement("tbody")
        tbody.id = "tbody-cart-4"

        let tr = document.createElement("tr")

        // Số thứ tự
        let tdStt = document.createElement("td")
        tdStt.innerText = "4"

        // sản phẩm
        let tdSp = document.createElement("td")
        tdSp.innerText = "Sản phẩm 4"

        // Giá 
        let tdPrice = document.createElement("td")
        tdPrice.innerText = "1000"

        // số lượng
        let tdQuantity = document.createElement("td")
        let quantity = document.createElement("input")
        quantity.id = "cart-4"
        quantity.type = "text"
        quantity.value = inputEl4.value.trim()
        tdQuantity.appendChild(quantity)

        // tổng giá
        let tdTotalPrice = document.createElement("td")
        tdTotalPrice.innerText = inputEl4.value.trim() * 4000

        // nút
        let tdDelete = document.createElement("td")
        let deleteCart = document.createElement("button")
        deleteCart.type = "button"
        deleteCart.id = "delete-item"
        deleteCart.classList.add("bg-gray-200")
        deleteCart.innerText = "Xóa"
        deleteCart.addEventListener("click", function (e) {
            e.target.parentElement.parentElement.parentElement.remove();
        });
        tdDelete.appendChild(deleteCart)

        //add vào tbody
        thead.after(tbody)
        tbody.appendChild(tr)
        tr.appendChild(tdStt)
        tr.appendChild(tdSp)
        tr.appendChild(tdPrice)
        tr.appendChild(tdQuantity)
        tr.appendChild(tdTotalPrice)
        tr.appendChild(tdDelete)
        updateCartOrder()
        updateCart()
        }
    }

})

// xóa toàn bộ giỏ hàng
deleteCart.addEventListener("click", function () {
    alert("Xóa thành công");
    const tbody = cartTableEl.querySelectorAll("tbody");
    for (let i = 0; i < tbody.length - 1; i++) {
        tbody[i].remove();
    }
    cartDataEl.classList.add("hidden");
    h4El.classList.remove("hidden");
});

// cập nhật giỏ hàng
updateCartEl.addEventListener("click", function () {
    alert("Cập nhật thành công")
    updateCart();
});

