import express from "express";
import { createUserController } from "./useCases/createUser/createUserController";
import { findByUserController } from "./useCases/finfByUser/findByUserController";
import { readUserController } from "./useCases/readUser/readUserController";

const app = express()

app.use(express.json())

const port = 2000

app.post("/create",(req,res) => createUserController(req,res))
app.post("/login",(req,res) => findByUserController(req,res))
app.post("/user", (req,res) => readUserController(req,res))

app.listen(port, () => console.log(`servidor em pé na porta ${port}`))
