import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Chat } from "./entity/Chat"
require('dotenv').config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DB,
    synchronize: true,
    logging: false,
    entities: [User, Chat],
    migrations: [],
    subscribers: [],
})
