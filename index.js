import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import connection from "./database/db.js";
import Router from "./routes/routes.js";
import path from "path";
const app = express();
import http from "http";
import { Server } from "socket.io";
import messageModel from "./models/messageModel.js";
import bodyParser from "body-parser";

app.use(cors());

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/", Router);

app.get('/', (req, res) => {
  res.send('Node.js working');
});

dotenv.config();

// socket io

const server = http.createServer(app);

const PORT = 4000;
server.listen(PORT, () =>
  console.log(`server is runnning ${PORT}`.bgCyan.white)
);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const DBURL = process.env.URL;

connection(username, password, DBURL);
