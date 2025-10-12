###### Javascript:

- comment:
//comment 1 dòng

/*Comment nhiều dòng*/

- Console: trình phục vụ trên devtool

- In dữ liệu lên màn hình trình duyệt
document.body.innerHTML = "<h1>Học JavaScript không khó</h1>"

  Có thể đưa thẻ html vào bên trong được

- Các câu lệnh:
console.log("du lieu","du lieu","du lieu");


## Variable
- Cú pháp:
let tenbien = giatri;
let tenbien;

  Quy tắc:
  - chấp nhận: chữ cái thường, hoa, số, gạch dưới và $
  - không được bắt đầu bằng số
  - không được khai báo lại biến bằng let trong cùng 1 phạm vi

- Naming Convention: Đặt theo quy tắc camelCase (bắt đầu từ thứ 2 sẽ viết hoa, từ đầu tiên viết thường)
  
  ví dụ: userID, userAddressShipping, username, userEmail, ...

- underscore:

  ví dụ: user_id, user_address_shipping

- undefined: được khai báo, nhưng chưa có dữ liệu/ chưa được gán giá trị

  Nếu không khai báo nhưng vẫn sử dụng: báo lỗi is not defined

  Tránh khai báo let username, userID,...;
  Chỉ được khai báo từng cái trên 1 dòng

## Khai báo hằng số:

- Cú pháp: const tenHang = giatri

const timeout = 1000;

  Const không thay đổi giá trị được

  - Nên chọn hằng số dể làm việc, đảm bảo tính chặt chẽ

- Quy tắc đặt tên giống như biến nhưng:

  Trường hợp đặt biệt: 
  - với những hằng số xác định trước khi bắt đầu chương trình --> Nên đặt bằng quy tắc underscore nhưng việt hóa tất cả
  - Với những hằng số xác định trong chương trình --> Nên đặt bằng quy tắc Camelcase

## Toán tử 
- Kiểu dữ liệu: phân loại các dữ liệu
- Các kiểu dữ liệu:
  number --> Số
  strong --> Chuỗi (văn bản)
  boolean --> Logic (true,false)
  object --> Đối tượng
  null
  undefined
  bigInt --> Số nguyên lưu trữ giá trị lớn (khi number không lưu trữ được)
  symbol

- Cách kiểm tra kiểu dữ liệu --> dùng từ khóa typeof hoặc hàm typeof()

  - Biến null không kiểm tra được bằng typeof, nếu kiểm tra thì kết quả sẽ trả về là 1 object

- Toán tử số học:
  - Phép toán: +, -, *, /
  - Chia lấy dư: %
  - Lũy thừa: **
  - Tăng 1 đơn vị: ++
  - giảm 1 đơn vị: --

  - Đảm bảo các toán hạng gán trong biến phải là số
  - a = Number(a): ép biến a về kiểu số
    hoặc: a = +a (cú pháp ngắn gọn của number) (shorthand)

  - Lưu ý: Trừ phép +, các phép toán khác trong số học sẽ tự động ép kiểu trước khi tính toán. ép kiểu có thể ép thành công và thất bại
    Nếu ép kiểu thất bại: trả về kiểu NaN

   NaN: not a number: nó là số không xác định nhưng kiểu dữ liệu vẫn là number

- toán tử so sánh: luôn trả về boolean
  - >, >=, <=, <
  - ==, ===
  - !=, !==

  ===, !==: so sánh cả chuỗi và kiểu dữ liệu

  - Lưu ý: Luôn sử dụng === và !==

- truthy, falsy
  - falsy: khi đặt 1 giá trị vào trong 1 biểu thức logic --> Giá trị đó tự động chuyển về false --> falsy
    Các giá trị falsy: 0, "", false, null, underfined, NaN
  - truthy: khi đặt 1 giá trị vào trong 1 biểu thức logic --> Giá trị đó tự động chuyển về truth --> truthy

- Toán tử luận lý (&&, ||, !)
  Cú pháp: bieuthuc1 && bieuthuc2 || bieuthuc3 || bieuthuc4
  - &&: Tìm falsy, nếu tìm thấy falsy --> Dừng lại và trả về giá trị falsy tìm được. Nếu không tìm thấy falsy --> Trả về giá trị của biểu thức cuối cùng

  - ||: Tìm truthy, nếu tìm thấy truthy --> Dừng lại và trả về giá trị truthy tìm được. Nếu không tìm thấy truthy --> Trả về giá trị của biểu thức cuối cùng

  - !: Chuyển về Boolean (truth, false) --> Trả về giá trị ngược lại

- Toán tử nullish (??): check null hoặc undefined
  Cú pháp: a ?? b


## Cau lenh lap, dieu kien if-else-else if



## Switch case
- Câu lệnh rẽ nhánh chỉ chấp nhận so sánh ===
- Cú pháp 
  switch (bieuthuc) {
    case giatri1;    //neu bieu thuc = gia tri 1 hoạc gia tri 2 hoac gia tri 3: chay khoi lenh 1
    case giatri2;
    case giatri3;
     khối lệnh 1
     break;

    case giatri4:
     khối lệnh 2
     break;

    default:         //neu khong thuoc case nao: chay default
     khối lệnh n
     break;
  }

## For loops
- Chia làm 2 nhóm 
  Biết trước số lần lặp: for
  Không biết trước số lần lặp: while, do...whiles

  - cú pháp for:
  for (giatrikhoitao; dieukienlap; buocnhay) {
    //khối lệnh được lặp
  }

  // const number = parseInt(prompt('Enter an integer: '));

// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }

## Array

- Các phương thức xử lý mảng:
console.log(array.prototype)
const query = {
    keyword: "Khóa học fullstack",
    status: "active",
    category: 1,
}


