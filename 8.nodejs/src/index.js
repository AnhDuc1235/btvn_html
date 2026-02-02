import path from "path"
const dbPath = import.meta.dirname
console.log(path.resolve(dbPath, "..", "modules", "data", "db.json"));// back ra ngoài 1 cấp, rồi nối từng cái (modules -> data ->  db.json)

//Lưu ý: không tự thêm gạch chéo, gạch ngược vào đường dẫn
