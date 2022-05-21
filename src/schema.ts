import { Schema,createConnection } from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const database_url = process.env.DATABASE_URL

const connect = createConnection(`${database_url}`)

const UserSchema = new Schema({
	_id: String,
	name: String,
	email: String,
	password: String,
})

export const User = connect.model("users",UserSchema)




