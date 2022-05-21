import { User } from "../schema";
import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const database_url = process.env.DATABASE_URL

export async function findByUser(email: string) {
	try {
		await connect(`${database_url}`)

		const user = await User.findOne({ email }).exec()

		return user
	} catch (err) {
		console.log(err)
	}
}
