import { AppDataSource } from "./data-source"
import * as express from "express";
import userRouter from "./routers/userRouter";

const app = express();
app.use(express.json());

AppDataSource
    .initialize()
    .then(async () => { })
    .catch(error => console.error(error));

app.use("/api", userRouter);
app.listen(3000, () => {
    console.log("Server running");
});