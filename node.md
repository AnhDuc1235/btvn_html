## thẻ trong nhóm inline

1. thẻ chèn liên kết

<a href=""></a>

các thuộc tính khác

- target: Mục tiêu khi mở trang web

* `_self`: ở trang hiện tại
* `_blank`: ở tab mới

- title: Hiển thị nội dung khi trỏ chuột
  ../--> Lùi về 1 cấp
  ../../--> lùi về 2 cấp
  / đẩy về gốc

2. thẻ chèn ảnh (img)
   <img src="" width="" height="" alt="" title=""/>

3. thẻ span (thẻ định dạng kiểu)

-không có ý nghĩa (non-semantic)
-nó dùng định dạng 1 kiểu khác mà vẫn giữ yếu tố inline (trên dòng)

4. thẻ in đậm, nghiêng, gạch chân, gạch ngang

-In đậm: b
-Nghiêng: i
-Gạch chân: u
-Gạch ngang: s

5. thẻ công thức toán học, hóa học
   -sub: đẩy xuống (CO2 thì đẩy số 2 xuống)
   -sup: đẩy lên (10 mũ 3)

6. table: tạo bảng

- tr: tạo hàng
- td: tạo cột
- th: tạo cột (với nội dung là tiêu đề)
- colspan="": phân số cột ( gộp cột)
- rowspan="": phân số hàng (gộp hàng)

table--> tr --> td

cellspacing: khoảng cách giữa các ô trong bảng
cellpadding: khoảng cách giữa ô với nội dung

## Chưa cóp buổi 3

## buổi 4

- cách viết tắt
  Viết nhanh: ul.menu>li\*10>a{Item $}
  Nhân dòng: alt shift lên-xuống
  chuyển vị trí: alt lên-xuống

3. Selector kết hợp

3.1. Nẳm trong

```css
selector1 selector2 selector3 {
  thuoctinh: giatri;
}
```

Lưu ý: không giới hạn cấp

3.2. Cha conn

````css
selector > selector2 selector3 {
  thuoctinh: giatri;
}

chọn cấp con gần nhất 3.3. cùng cấp ```css selector1selector2selector3 {
  thuoctinh: giatri;
}
````

chọn phần tử html thỏa mãn các selector

3.4 kế thừa

```css
selector1,
selector2,
selector3 {
  thuoctinh: giatri;
}
```

Các selector sẽ được áp dụng cùng các thuộc tính trong 1 khối

3.5. Ngang hàng

```css
selector1 ~ selector2 ~ selector3 {
  thuoctinh: giatri;
}
```

3.6. Ngang hàng (liền kề)

````css
selector1 + selector2 + selector3 {
  thuoctinh: giatri;
}

4. Attribute (thuộc tính)

- tagname[attribute] --> chọn thẻ html có thuộc tính
- tagname[attribute="value"] --> chọn thẻ html có thuộc tính khớp với giá trị
- tagname[attribute^="value"] --> chọn thẻ html có thuộc tính bắt đầu bằng giá trị
- tagname[attribute$="value"] --> chọn thẻ html có thuộc tính kết thúc bằng giá trị
- tagname[attribute*="value"] --> chọn thẻ html có thuộc tính chứa giá trị (contains)

## Pseudo

### Pseudo Element

Cú pháp:

```css
selector::ten-phantu {
  thuoctinh: giatri;
}
````

- before
- after
- first-line
- selection
- placeholder

Lưu ý: before, after muốn hoạt động phải có thuộc tính content

### Pseudo Class

Cú pháp:

```css
selector:ten-lop {
  thuoctinh: giatri;
}
```

- hover
- active
- focus
- not
- checked
- disabled
- first-child
- last-child
- first-of-type
- last-of-type
- nth-child
- nth-of-type

:First-child:

- áp lên phần tử con đầu tiên của thẻ được chọn (thường dùng với ul li)
- sẽ bị chặn nếu có phần tử khác loại chèn ở đầu
- vd: ul li:first-child -> áp lên li đầu tiên của danh sách ul

:Last-child:

- áp lên phần tử con cuối cùng của thẻ được chọn
- ví dụ: ol li:last-child -> áp lên li cuối cùng của danh sách ol

:First-of-type:

- chọn phần tử đầu tiên cùng loại
- ví dụ: ol li:first-of-type -> áp lên con đầu tiên có loại thẻ là li và thuộc class i trong thẻ cha ol

:nth

## buổi 5

1. các thuộc tính định dạng text

- color: thay đổi màu văn bản
- font-size: thay đổi cỡ chữ văn bản

Đơn vị:

- tuyệt đối: px
- tương đối

* em --> Tỷ lệ với font-size của phần tử cha
* rem --> Tỷ lệ với font-size của chỉ duy nhất html
* vw (viewport width)
* vh (viewport height)
* % (hay sử dụng tron trường hợp chỉnh width, height)

- line-height:
  Thay đổi chiều cao của dòng văn bản
  Tỷ lệ với cỡ chữ của phần tử đó
- font-family
  Thay đổi font chữ của văn bản
  Cú pháp: font-family: font1, font2,...
  sans-serif: họ font không chân (p)
  serif: họ font có chân (p )

  muốn xem font của các web khác: bấm f12 devtool - chọn network
  Cách nạp font vào html css:

  - tải file font về, lập folder và add file font vào
  - ở css: dùng @font-face, với font-family là đặt tên font sẽ dùng (nên đặt giống tên của loại font) và src: trỏ đường dẫn tới file font vừa tải

- font-weight:
  Thiết lập độ dày của văn bản
  Giá trị: bội số của 100 (từ 100 đến 900, defaut là 400), normal, bold

- font-style
  - italic
  - normal
