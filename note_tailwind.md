# Cách học Tailwind

## Cú pháp:

```
prefix-value
```

- prefix: đại diện cho thuộc tính css ( phải học thuộc lòng)
- value: Đại diện cho giá trị của thuộc tính đó

Ví dụ: text-red-500

```
prefix-[custom-value]
```

custom-value: Giá trị tự đưa vào (Không được chứa dấu cách) ( phải bọc ngoặc vuông ra bên ngoài)

Ví dụ: text-[#000]

## Sử dụng pseudo

```
ten-pseudo:prefix-value
ten-pseudo:prefix-[Custom-value]
```

Ví dụ: hover:text-[red]

## Responsive

Cú pháp:

```
breakpoint:prefix-value
breakpoint:prefix-[custom-value]
```

breakpoint:

- sm
- md
- lg
- xl
- Zxl

Lưu ý: Tailwind triển khai theo mobile first. Cho nên nếu
không khai báo breakpoint trong class --> Sẽ là màn hình nhỏ nhất

có thể truy cập vào trang web tailwind cheat sheet để search tiền tố,...
