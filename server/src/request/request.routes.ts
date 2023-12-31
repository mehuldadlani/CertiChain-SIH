import { Router } from "express";
import {
  createRequestController,
  getRequestController,
  updateRequestController,
  getAllRequestsController,
  deleteRequestController,
} from "./request.controller";

const router = Router();

router.post("/", createRequestController);
router.get("/", getAllRequestsController);
router.get("/:id", getRequestController);
router.put("/:id", updateRequestController);
router.delete("/:id", deleteRequestController);

export default router;
