import { Router } from "express";
import {
  createOrganisationController,
  getAllOrganisationsController,
  getOrganisationController,
  updateOrganisationController,
  deleteOrganisationController,
} from "./organisation.controller";

const router = Router();

router.post("/", createOrganisationController);
router.get("/", getAllOrganisationsController);
router.get("/:walletAddress", getOrganisationController);
router.put("/:walletAddress", updateOrganisationController);
router.delete("/:walletAddress", deleteOrganisationController);

export default router;
