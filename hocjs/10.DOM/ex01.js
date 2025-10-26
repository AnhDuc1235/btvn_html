// DOM:
// Cần học gì:
// - Học cách sử dụng và thay đổi các key trong DOM Object
// - Học cách sử dụng các phương thức có sẵn để thay đổi DOM Object
//(Node: 1 object được mô tả trong DOM)

// Truy cập vào phần tử html trong DOM:

// TH1: Truy cập vào các phần tử đặc biệt:
// console.log(document.title);
// document.title = "ok rồi"

// console.log(document.body); //truy cập vào thẻ body
// document.body.innerHTML = "<h1>F8 - Học lập trình</h1>"

// TH2: Truy cập vào các phần tử thông thường
// 1. Truy cập thông qua id của thẻ html
// const titleEl = document.getElementById("title");
// console.log(titleEl); // kết quả trả ra 1 object

// 2. Truy cập thông qua class của thẻ html
// => Trả về 1 danh sách 
// const titleList = document.getElementsByClassName("sub-title");
// console.log(titleList);

// 3. Truy cập thông qua tagname của thẻ html
// const titleList = document.getElementsByTagName("h2");
// console.log(titleList);

// 4. Truy cập phần tử đầu tiên thông qua css selector 
// const titleEl = document.querySelector(".sub-title");
// console.log(titleEl);

// 5. Truy cập tất cả phần tử thông qua css selector
// const titleEl = document.querySelectorAll(".box .sub-title");
// console.log(titleEl);

// Event:
// - Hành động của người dùng tác động lên các thẻ html
// - jS hỗ trợ các sự kiện --> chỉ việc dùng và viết logic cho nó
// tra các sự kiện: http://w3schools.com/jsref/dom_obj_event.asp

// Cách lắng nghe sự kiện:
// - Xác định tên sự kiện
// - Xác định phần tử lắng nghe sự kiện
// - Logic xử lý sau đó

// Ví dụ:
// - Tên sự kiện: click
// - Phần tử: btn
// - logic: log
// Cú pháp: tenphantu.on<tensukien> = function() {}
// const btnEl = document.querySelector(".btn");
// btnEl.addEventListener("click", function (e) {
//     console.log("click 1");
    
// });
// btnEl.addEventListener("click", function (e) {
//     console.log("click 2");
    
// });
// btnEl.onclick = function (e) {
//     console.log("clicked");
//     // Khi chạy hàm này sẽ trả về:
//     // - this --> Element node đang tác động sự kiện (trừ arrow function)
//     // - e = event object --> Đối tượng chứa thông tin của sự kiện
//     // - target: tác động vào đâu trả về chính nó
//     console.log(this);
//     console.log(e.target);
// }
// btnEl.ondblclick = function () {
//     console.log("double click");
// }
// btnEl.onmouseover = function () {
//     console.log("Mouse over");
// }
// btnEl.onmouseout = function () {
//     console.log("Mouse out");
// }

// Danh sách các sự kiện hay dùng:
// - click --> bấm vào phần tử (chỉ nhận khi nhả chuột)
// - mousedown --> bấm chuột xuống
// - mouseup --> nhả chuột
// - mouseover --> di chuột vào phần tử
// - mouseout --> di chuột ra khỏi phần tử
// - mousemove --> di chuột bên trong phần tử
// - keyup --> nhả phím
// - keydown --> nhấn phím
// - input --> gõ ký tự trong form
// - submit --> submit form
// - change --> thay đổi giá trị của trường trong form
// - focus --> focus vào trường trong form
// - blur --> Bỏ focus trường trong form
// - scroll --> kéo thanh cuộn

// Cách thao tác với thẻ html
const contentEl = document.querySelector(".content");
// console.log(contentEl);

// 1. Lấy toàn bộ nội dung bên trong của thẻ html
// console.log(contentEl.innerHTML);

// 2. Cập nhật nội dung bên trong của thẻ html
// contentEl.innerHTML = "<h1><i>Ok chưa?</i></h1>";

// 3. Lấy nội dung (không có html)
// console.log(contentEl.innerText);

// 4. Cập nhật nội dung (không có html)
// contentEl.innerText = "<h1><i>Ok chưa?</i></h1>";

// 5. Lấy nội dung (không có html, giữ khoảng cách ban đầu)
// console.log(contentEl.textContent);

// 6. Cập nhật nội dung (không có html, giữ khoảng cách)
// contentEl.textContent = `<h1>
// <i>

// Ok chưa?

// </i>

// </h1>`;

// 7. Lấy nội dung bên trong và chính nó của thẻ html
// console.log(contentEl.outerHTML);

// 8. Cập nhật nội dung bên trong là chính nó
// contentEl.outerHTML = "<h1><i>Ok chưa?</i></h1>";

// 9. Xóa phần tử html
// contentEl.innerHTML = ""; // xóa bên trong
// contentEl.remove();

// Thao tác với thuộc tính của html
// Cú pháp: tenphantu.tenthuoctinh
const imgEl = document.querySelector("img");
// console.log(imgEl.src);
// console.log(imgEl.id);
// console.log(imgEl.className);
// console.log(imgEl.width);
// console.log(imgEl.alt);

// imgEl.src = "https://fastly.picsum.photos/id/825/536/354.jpg?hmac=yWRkVH2MURMQEGcnu_C_Z6xR46yGpn4DiAiaW4d1WKA"

// Truy cập vào data-attribute
// console.log(imgEl.getAttribute("data-id"));
// imgEl.setAttribute("data-id", "123456");
// imgEl.setAttribute("data-animation", "fade-in"); //tự động thêm thuộc tính data-animation nếu không có trong html

// console.log(imgEl.dataset.id); //dataset là 1 object có sẵn, tổng hợp tất cả attribute vào trong 1 object
// imgEl.dataset.animation = "fade-in";
// imgEl.dataset.animationTimingFunction = "linear"; //animationTimingFunction đang viết theo camel Case --> nó sẽ tự động cách ra và thêm dấu - ở html

