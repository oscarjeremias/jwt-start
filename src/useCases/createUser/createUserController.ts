import { Request,Response } from "express";
import { createUserMongoDB } from "../../repositories/createUserMongoDB";
import { v4 as uuidv4 } from "uuid";

export async function createUserController(req:Request,res:Response) {
	const { name,email,password } = req.body
	const _id = uuidv4()
	const err = await createUserMongoDB({ _id,name,email,password })

	if(err) {
		return res.status(200).json({ sms: err })
	}

	return res.status(201).send("create sucess")
}
