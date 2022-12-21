import {AppDataSource} from "./data-source"
import express from "express";
import userRouter from "./routers/userRouter";
import swaggerFile from './swagger/swagger-output.json';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(express.json());

AppDataSource
    .initialize()
    .then(async () => {
        console.log("DB Connected!");
    })
    .catch(error => console.error(error));

app.use("/api", userRouter);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile, {explorer: true})
)
app.listen(3000, () => {
    console.log("Server running");
});