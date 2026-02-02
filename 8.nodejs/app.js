// console.log("hello anh em");

//Module
//- Mặc định: commonJS (require)
//- Có thể dùng ES Module

// const {a,b} = require("./modules/module1")
// console.log(a);
// console.log(b);

// để chuyển sang es module:
//- vào package json, đổi type hoặc tạo type là module

// import moment from "moment";
// console.log(moment());

//module có sẵn của nodejs
//1. path
// import path from "path"
// import { fileURLToPath } from "url";

// //_filename --> trả về đường dẫn tới file đang thực thi (chỉ hoạt động ở commonJS)
// //_dirname --> trả về đường dẫn tới folder chứa file đang thực thi (chỉ hoạt động ở commonJS)
// //import.meta.url --> Trả về đường dẫn đầy đủ tới file đang chạy (ES Module, có chứa cả giao thức file://)

// const _filename = fileURLToPath(import.meta.url)
// // console.log(_filename);
// const _dirname = path.dirname(_filename)
// // console.log(_dirname);

// const demoPath = "/demo/db/test.json"
// console.log(path.dirname(demoPath));  //test.json
// console.log(path.basename(demoPath)); //.json
// console.log(path.exname(demoPath));

//ví dụ lấy folder của file đang chạy (_dirname), nối với demoPath
// const result = path.join(_dirname,"f8", demoPath)
// console.log(result);


// 2.URL
// import url from "url"
// const demoUrl = "https://www.metatft.com/"
// // const parseUrl = url.parse(demoUrl)
// const parseUrl = new URL(demoUrl)
// console.log(parseUrl);


// 3. file system (fs)

// import fs from "fs"
import path from "path"

//read
const filePath = path.join(import.meta.dirname, "modules", "data", "data.txt")

// const data = fs.readFileSync(filePath, "utf-8")
// console.log(data);


// fs.readFile(filePath, "utf-8", (err, data) => {
//     console.log("err", err);
//     console.log(data);
    
// })

// fs.writeFileSync(filePath, "ok rồi", {
//     flag: "a+"
// },
// (err) => {
//     console.log(err);
    
// }
// )

//Delete
// fs.unlinkSync(filePath)

//kiểm tra tồn tại
// const check = fs.existsSync(filePath)
// console.log(check);


// ví dụ fs promise: làm việc module có bất đồng bộ
// hạn chế module làm việc callback 
// import fs from "fs/promises"
// (async() => {
//     const data = await fs.readFile(filePath, "utf-8")
//     console.log(data);
    
// })()

//4. http
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const urlParsed = url.parse(req.url, true);
  res.setHeader("Content-Type", "application/json");

  let response = null;

  // Home
  if (urlParsed.pathname === "/" && req.method === "GET") {
    response = {
      success: true,
      message: "Home page",
    };
  }

  // Users
  if (urlParsed.pathname === "/users" && req.method === "GET") {
    response = {
      success: true,
      message: "Get user list success",
      data: [
        {
          id: 1,
          name: "User 1",
        },
        {
          id: 2,
          name: "User 2",
        },
      ],
    };
  }

  // Not found
  if (!response) {
    res.statusCode = 404;
    return res.end(
      JSON.stringify({
        message: "Not found",
        success: false,
      })
    );
  }

  res.end(JSON.stringify(response));
});

server.listen(3000, () => {
  console.log("Dang chay server voi url: http://localhost:3000");
});
