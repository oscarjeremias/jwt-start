import { IUser } from "../entities/User";
import { User } from "../schema";
import { connect } from "mongoose";
import { findByUser } from "./findByUser";
import dotenv from "dotenv";
dotenv.config()

const database_url = process.env.DATABASE_URL

export async function createUserMongoDB({ _id,name,email,password }: IUser) {
	try {
		await connect(`${database_url}`)
		const userExist = await findByUser(email)

		if(userExist) {
			const smsError = "Já existe um user com esse email"

			return smsError
		}

		const user = new User({
			_id,
			name,
			email,
			password,
		})

		await user.save()
	} catch(err) {
		console.log(err)
	}
} 
