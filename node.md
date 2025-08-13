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
