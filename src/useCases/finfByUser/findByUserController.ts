import { findByUser } from "../../repositories/findByUser";
import { Request,Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const keyJWT = process.env.KEY_JWT

export async function findByUserController(req:Request, res:Response) {
	const { email } = req.body
	const user = await findByUser(email)

	if(!user) {
		return res.status(200).send("Nenhum user encontrado com esse email")
	}


	jwt.sign({
		exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60),
		email: user.email
	},`${keyJWT}`, { algorithm: "HS256" },(err,token) => {
		if(err) throw err

		return res.status(200).json({ token })
	} )
}
