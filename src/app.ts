import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import router from "./routes/router.js";

//CONFIGS
dotenv.config();
const app = express();
app.use([cors(), json()]);

app.use(router);

//SERVER
app.listen(process.env.PORT || 4000, () =>
  console.log(chalk.bold.blue(`Server listening on port ${process.env.PORT}`))
);
