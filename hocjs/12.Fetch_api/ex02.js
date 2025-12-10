//Upload file

//Post request cần:
// --> body
// --> header: Content-type
// + application/json --> Dạng json
// + application/x-www-form-urlencoded --> Dạng urlencode
// + multipart/form-data --> Gửi cả file và text

// Đầu tiên tạo thẻ input, type là file
// bắt sự kiện, dùng files để lấy ra input file
//sau đó phải convert sang url để ảnh khi được chọn có thể hiển thị ra
// trường hợp loại bỏ ảnh cũ để lấy cái mới(tránh rò rỉ bộ nhớ): sử dụng URL.revokeObjectURL()

const BASE_URL = "https://api.escuelajs.co/api/v1"
const imageEl = document.querySelector("#image")
const btn = document.querySelector("button")
const previewEl = document.querySelector(".preview")
let previewUrl; //khai báo bên ngoài
imageEl.addEventListener("change", (e)=>{
    const file = e.target.files[0] //lấy file ở vị trí đầu
    //xóa ảnh cũ trong blob
    if (previewUrl) {
        URL.revokeObjectURL(previewUrl) //điều kiện: nếu có ảnh cũ rồi thì xóa
    }
    previewUrl = URL.createObjectURL(file) //convert sang url --> sẽ có dạng blob: http...(blob chỉ là bộ nhớ tạm)
    console.log(previewUrl);
    const img = document.createElement("img")
    img.src = previewUrl
    Object.assign(img.style, {
        width: '300px',
        borderRadius: "10px",
    })
    previewEl.innerText = ""
    previewEl.append(img)
    
})

btn.addEventListener("click", async() => {
    const file = imageEl.files[0]
    
    if (!file) {
        return alert("vui lòng chọn file")
    }
    try {
        btn.innerText = "loading" //ban đầu click vào upload thì text sẽ chuyển là loading
        btn.disabled = true //đang trong quá trình upload thì không có quyền chọn
        const formData = new FormData();
        formData.append("file", file) //vì body có dạng "tên: giá trị" --> file: file (trong doc)
        const response = await fetch(`${BASE_URL}/files/upload`, {
            method: "POST",
            body: formData
        })
        //lưu ý phải đặt đúng tên key. như trong Request của trang https://fakeapi.platzi.com/en/rest/files/
        // thì tên key là file nên phải đặt đúng tên là file
        const data = await response.json();
        previewEl.append(data.location) //hiển thị link của file, append vào thẻ previewEl

    } catch {
        alert("Đã có lỗi khi tải ảnh")
    } finally {
        btn.innerText = "upload" //xong thì chuyển lại về text upload
        btn.disabled = false 
    }
    
})


