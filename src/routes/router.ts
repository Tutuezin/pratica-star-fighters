import { Router } from "express";
import battleRouter from "./battleRouter.js";

const router = Router();

router.use(battleRouter);

export default router;
