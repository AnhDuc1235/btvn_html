import express from "express";

const PORT: number = 3000;
const app = express();

app.use(express.json());

import authRouter from "./routes/auth.routes";

app.use(authRouter);

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});
