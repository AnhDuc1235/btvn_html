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

## Flex

### Các thuộc tính trong flex container

1. Display: flex --> Kích hoạt Flexbox

2. flex-direction --> Chọn hướng của trục main (mặc định nằm ngang)

- row --> Nằm ngang (mặc định)
- row-reverse --> Nằm ngang, đảo ngược
- column --> Nằm dọc
- column-reverse --> Nằm dọc, đảo ngược

3. justify-content: Căn chỉnh các item theo hướng song song với trục main

- flex-start: bắt đầu ở bên trái
- center
- flex-end: bắt đầu ở bên phải
- space-around: sẽ có khoảng trắng ở bên trái phải bằng 1/2 khoảng trắng ở giữa
- space-between: khoảng trắng ở giữa, cách sát trái và phải
- space-evenly: các khoảng trắng đều nhau ở cả bên trái, phải, giữa

4. align-items: Căn chỉnh các item theo hướng song song với trục cross

- stretch --> Mặc định
- flex-start
- center
- flex-end
- baseline: baseline khác flexstart (baseline dựa theo đường baseline(tức văn bản), còn flexstart là căn theo đường cạnh)

5. Flex-wrap

- nowrap
- wrap
- wrap-reverse

5. gap: Điều chỉnh khoảng cách giữa các item (gap: row-gap, column-gap)

## Các thuộc tính trong flex item

1. Flex-grow: Giãn item chỉ định để lấp đầy vị trí còn trống của container
   cú pháp: flex-grow: number (Mặc định = 0) (số càng to, kích thước càng to)

2. Flex-shrink: Ngược lại với flex-grow
   Cú pháp: flex-shrink: number (Mặc định = 1) (số càng to, kích thước càng nhỏ)

3. Flex-basis: Thiết lập kích thước ban đầu của item

FLex-basis sẽ không chính xác nếu

- có max-width, min-width
- có max-height, min-height
- có flex-shrink, flex-grow

4. Thuộc tính order: Sắp các item theo thứ tự mong muốn

Cú pháp: order: number (số nguyên)

các trang web: https://cdnjs.com/ đển link library (tìm đến library của font awesome và paste vào header), font awesome để lấy các kí tự icon. phải có library thi

trang luyện tập flex: https://znews.vn/

##

- không set position thì mặc định sẽ là static

- position: absolute: di chuyển linh hoạt, mặc định di chuyển theo body (lấy body làm cha)
  thường sẽ sử dụng relative cho thẻ cha
  ví dụ thẻ cha body có border vuông, các thẻ con là từng khối item có thể sử dụng absolute để nó chui vào trong khối thẻ cha và có thể di chuyển thoải mái ở trong khung(relative đã set)
  lưu ý cách trình bày code: các thuộc tính liên quan đến position thì viết thành 1 cụm, các thuộc tính khác ghi thành 1 cụm khác ở dưới

- position: fixed: khi kéo thanh cuộn thì nó vẫn ở nguyên vị trí
  vị trí cố định theo viewport (góc nhìn người dùng trên trang web)
  không ăn theo cha của thằng khác ngoài viewport

- inset: bao gồm 4 giá trị top right bottom left
  thường sử dụng trong trường hợp 4 cạnh bằng nhau

2 position có cùng 1 loại thì sẽ sang so sánh thứ bậc ở html (đứng sau sẽ được ưu tiên trước)
ví dụ: 2 item trên dưới, item 1 set position: relative top 30px, left 30px thì item 1 sẽ nằm đè ở chéo trên item

- z-index: đẩy vị trí

- overflow: có 4 thuộc tính: visible | hidden | scroll | auto

overflow-x: Tùy chỉnh theo trục x
overflow-y: Tùy chỉnh theo trục y

- visibility: có 2 giá trị: visible | hidden

- object-fit: cover | contain: fit ảnh tỉ lệ gốc, không làm méo ảnh khi đã set width và height
  cover: fill kín ảnh (chỉ fill hết trong width đã xét)

- object-position: chỉnh vị trí ảnh (mặc định sẽ tính từ trung tâm, có thể set là 50% 50%)

## transition:

Lưu ý: chỉ tác dụng với các thuộc tính có giá trị là số

màu giá trị cũng là số

1. Thuộc tính transition-property

- Chọn thuộc tính css để cho phép áp dụng transition (như kế thừa các thuộc tính)
- Mỗi thuộc tính cách nhau bởi dấu ,
- có thể chọn tất cả bằng cách dùng giá trị all

Ví dụ:

CSS:
transition-property: width, color;

2. Thuộc tính transition-duration

- Chọn thời gian hoàn thành quá trình chuyển động
- Đơn vị: s, ms (1000: ms)

3. Thuộc tính transition-delay

- Thời gian trễ trước khi chuyển động bắt đầu
- Đơn vị: s, ms (1000: ms)

4. Thuộc tính transition-timing-function

- ease (Mặc định): Chuyển động chậm - nhanh -chậm
- ease-in: Chuyển động chậm - nhanh
- ease-out: Chuyển động nhanh - chậm
- ease-in-out: Chuyển động chậm - nhanh - chậm (khác ease mặc định, khoảng cách chậm sẽ kết thúc nhanh hơn ease)
- linear: Chuyển động đều
- cubic-bezier(): Tự thiết lập

lưu ý: ở ví dụ 3, opacity giúp giải quyết bài toán transition, vì sử dụng display none và display block để ẩn hiện 1 menu thì trasition sẽ không hoạt động

5. Thuộc tính transition

transition: property duration delay timing-function

Nếu muốn khai báo nhiều thuộc tính:

Css:
transition-property: width, height;
transition: 0.3s linear;

chú ý sử dụng overflow: hidden để nó ẩn

Tính tỉ lệ phần trăm

## Transform

- Thay đổi hình dạng ban đầu của phần tử html
- Tác dụng: Xoay, nghiêng, phóng to / thu nhỏ, dịch chuyển

cú pháp: transforn: value

1. Xoay

-rotate(angle) --> Xoay phần tử theo trục Z
-rotateX(angle) --> Xoay phần tử theo trục X
-rotateY(angle) --> Xoay phần tử theo trục Y

thuộc tính tách riêng: rotate: angle

2. Nghiêng

- skew(x,y) --> Nghiêng theo trục x và y
- skewX(value) --> Nghiêng theo trục X
- skewY(value) --> Nghiêng theo trục Y

3. Phóng to / thu nhỏ

- scale(x, y) --> Phóng to / thu nhỏ theo trục x, y (1 là phóng to, bé hơn 1 là thu nhỏ)
- scaleX(value) --> Phóng to / thu nhỏ theo trục X
- scaleY(value) --> Phóng to / thu nhỏ theo trục Y

Thuộc tính tách riêng: scale: x y;

transform: rotate(10deg) scale(1.3): vừa phóng to vừa xoay

4. Dịch chuyển

- Translate(x, y) --> Dịch chuyển theo trục x, y (Không thay đổi bố cục ban đầu)
- TranslateX(value) --> Dịch chuyển theo trục X
- TranslateY(value) --> Dịch chuyển theo trục Y

Thuộc tính tách riêng: translate: x y

Tại sao đoạn position:relative, top: 100px, left 100px lại không có transition
Vì:
position: relative không làm thay đổi bố cụ ban đầu, mặc định left right top bottom của nó sẽ là auto
giá trị auto không có transition (không thể biết nó bắt đầu từ đâu)

Đơn vị phần trăm trong translate: thì tỉ lệ theo kích thước của chính nó
position: relative tỉ lệ theo kích thước của cha

overflow: hidden chỉ được khi để nó ở thẻ cha ( chỉ hoạt động khi nó nhắm tới thẻ cha thì thẻ con mới hoạt động)

## Responsive Web Design

- Thiết kế web thích ứng
- Đảm bảo giao diện tương thích với tất cả thiết bị
- Nhận diện thiết bị Thông qua kích thước màn hình (chiều rộng)

- Hình thức khác để tạo giao diện trên thiết bị khác: Adaptive

1. breakpoint

- Điểm tọa độ màn hình mà tại điểm đó giao diện sẽ bị thay đổi
- Không có các breakpoint cố định cho mọi dự án, mà chỉ có breakpoint phổ biến
- Các breakpoint phổ biến:

* 1400px
* 1200px
* 992px -->
* 768px -->
* 576px

2. Meta Viewport

- Thẻ meta được thêm thẻ head để xác định tỷ lệ của các phiên bản màn hình

3. Media Querties

cú pháp bắt đầu là @ thì gọi là at rule

- At-rule của CSS cho phép áp dụng các khối CSS với breakpoint chỉ định
- Cú pháp:

CSS:
@media sreen and (max-width: breakpoint) {
selector {
thuoctinh: giatri;
}
}

Ví dụ:

CSS
@media sreen and (min-width: 400px) and (max-width:800px) {
body {
color: red;
}
}

Áp dụng các breakpoint vào media queries

CSS
@media screen and (max-width: 1399px) {
Selector {
thuoctinh: giatri;
}
}
@media screen and (max-width: 1199px) {
Selector {
thuoctinh: giatri;
}
}
@media screen and (max-width: 991px) {
Selector {
thuoctinh: giatri;
}
}
@media screen and (max-width: 787px) {
Selector {
thuoctinh: giatri;
}
}
@media screen and (max-width: 575px) {
Selector {
thuoctinh: giatri;
}
}

(phải viết tuân thủ từ lớn đến bé)
để tránh nhận diện không đúng breakpoint: chỉ trừ 0.02 (1200 thì là @media screen and (max-width: 1199.98px))

## Animation

Cú pháp

@keyframes ten-hieu-ung {
p1% {
thuoctinh: giatri
}
p2% {
thuoctinh: giatri
}
pn% {
thuoctinh: giatri
}
}
Phần trăm trong keyframes sẽ là tỷ lệ với tổng thời gian hoàn thành hiệu ứng giá trị đặc biệt
from: tương đương với 0%
to: tương đương với 100%
thuộc tính animation:

- animation-name: ten-hieu-ung (keyframes)
- animation-duration: thời gian hoàn thành hiệu ứng(s, ms)
- animation-delay: thời gian trễ
- animation-timing-function: ease / ease in / ease-out / ease-in-out / linear
- animation iteration-count: so / infinite --> số lần lặp lại hiệu ứng
- animation: name duration delay timing-function-iteraton-count

2. box-shadow

Cách làm bóng nằm đằng sau 1 thuộc tính: box-shadow: inset /offset /độ nhòe / màu

có thể vào các công cụ: trang cssgenerator để làm box shadow, filter và background gradiant

3. text-shadow: đổ bóng chữ
