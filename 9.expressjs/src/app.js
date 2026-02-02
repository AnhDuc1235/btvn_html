import express from "express"
const app = express()
app.use(express.json()) //nhận body là json
app.use(express.urlencoded()) // nhận body là form-urllencode vì front end submit thì phải chuyển sang dữ liệu này, back end mới nhận được body từ client

//http method
app.get('/', (req, res) => {
    res.send(`<h1>Home</h1>`)
})
app.get('/about', (req, res) => {
    res.send(`<h1>About</h1>`)
})
app.get('/users', (req, res) => {
    const query = req.query
    console.log(query);
    
    res.json({
        success: true,
        message: "get user success"
    })
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    res.json({
        data: "detail user" + id
    })
})
app.post('/users', (req, res) => {
    res.status(201).json({
        message: "Create user"
    })
})

app.listen(3000, () => {
    console.log('Đang chạy server với url: http://localhost:3000');
    
})

//http method:
//app.get()
//app.post()
//app.put()
//app.patch()
//app.delete()