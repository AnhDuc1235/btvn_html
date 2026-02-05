import express from "express";
import indexRoute from "./routes/index.route";
import path from "node:path";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import flash from "connect-flash";
const PORT: number = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"))
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash())
app.use(indexRoute);

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});
