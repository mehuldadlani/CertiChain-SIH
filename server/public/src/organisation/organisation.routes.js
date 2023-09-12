"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organisation_controller_1 = require("./organisation.controller");
const router = (0, express_1.Router)();
router.post("/", organisation_controller_1.createOrganisationController);
router.get("/", organisation_controller_1.getAllOrganisationsController);
router.get("/:walletAddress", organisation_controller_1.getOrganisationController);
router.put("/:walletAddress", organisation_controller_1.updateOrganisationController);
router.delete("/:walletAddress", organisation_controller_1.deleteOrganisationController);
exports.default = router;