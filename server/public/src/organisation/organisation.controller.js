"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrganisationController = exports.updateOrganisationController = exports.getAllOrganisationsController = exports.getOrganisationController = exports.createOrganisationController = void 0;
const organisation_services_1 = require("./organisation.services");
const createOrganisationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organisation = yield (0, organisation_services_1.createOrganisation)(req.body);
        res.status(201).json(organisation);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
exports.createOrganisationController = createOrganisationController;
const getAllOrganisationsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organisations = yield (0, organisation_services_1.getAllOrganisations)();
        res.status(200).json(organisations);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
exports.getAllOrganisationsController = getAllOrganisationsController;
const getOrganisationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organisation = yield (0, organisation_services_1.getOrganisation)(req.params.walletAddress);
        if (!organisation) {
            return res
                .status(200)
                .json({ success: false, message: "Organisation not found" });
        }
        res.status(200).json({ success: true, data: organisation });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
exports.getOrganisationController = getOrganisationController;
const updateOrganisationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organisation = yield (0, organisation_services_1.updateOrganisation)(req.params.walletAddress, req.body.certificate);
        res.status(200).json(organisation);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
exports.updateOrganisationController = updateOrganisationController;
const deleteOrganisationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organisation = yield (0, organisation_services_1.deleteOrganisation)(req.params.walletAddress);
        res.status(200).json(organisation);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
exports.deleteOrganisationController = deleteOrganisationController;
