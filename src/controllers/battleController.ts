import { Request, Response } from "express";
import * as battleMiddleware from "../middlewares/battleMiddleware.js";

export async function battle(req: Request, res: Response) {
  try {
    const teste: { firstUser: string; secondUser: string } = req.body;

    await battleMiddleware.searchUsers(teste.firstUser, teste.secondUser);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
