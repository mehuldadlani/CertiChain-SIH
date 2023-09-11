import { Router } from "express";
import {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
} from "./user.controller";

const router = Router();

router.post("/", createUserController);
router.get("/:walletAddress", getUserController);
router.put("/:walletAddress", updateUserController);
router.delete("/:walletAddress", deleteUserController);

export default router;
