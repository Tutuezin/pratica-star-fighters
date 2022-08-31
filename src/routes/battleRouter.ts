import { Router } from "express";
import * as battleController from "../controllers/battleController.js";
import { validateSchema } from "../middlewares/validations/schemaValidator.js";
import { newBattle } from "../schemas/battleSchema.js";

const battleRouter = Router();

battleRouter.post(
  "/battle",
  validateSchema(newBattle),
  battleController.battle
);

export default battleRouter;
