import { Request,Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findByUser } from "../../repositories/findByUser";
dotenv.config()

const keyJWT = process.env.KEY_JWT

export function readUserController(req:Request,res:Response) {
	const { token } = req.body

	jwt.verify(token, `${keyJWT}`,async (err:any,decoded:any) => {
		if(err) {
			const sms = "token invalido!"
			return res.status(200).send(sms)
		}

		const user = await findByUser(decoded.email)

		return res.status(200).json(user)
	})
}
