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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrganisation = exports.updateOrganisation = exports.getAllOrganisations = exports.getOrganisation = exports.createOrganisation = void 0;
const organisation_schema_1 = __importDefault(require("./organisation.schema"));
const createOrganisation = (organisation) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrganisation = new organisation_schema_1.default(organisation);
        const savedOrganisation = yield newOrganisation.save();
        return savedOrganisation;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.createOrganisation = createOrganisation;
const getOrganisation = (walletAddress) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organisation = yield organisation_schema_1.default.findOne({
            walletAddress: walletAddress,
        });
        return organisation;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.getOrganisation = getOrganisation;
const getAllOrganisations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organisations = yield organisation_schema_1.default.find({});
        return organisations;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.getAllOrganisations = getAllOrganisations;
const updateOrganisation = (walletAddress, certificate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!certificate) {
            throw new Error();
        }
        const organisation = yield organisation_schema_1.default.findOne({
            walletAddress: walletAddress,
        });
        organisation === null || organisation === void 0 ? void 0 : organisation.certificates.push(certificate);
        const updatedOrganisation = yield (organisation === null || organisation === void 0 ? void 0 : organisation.save());
        return updatedOrganisation;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.updateOrganisation = updateOrganisation;
const deleteOrganisation = (walletAddress) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organisation = yield organisation_schema_1.default.findOne({
            walletAddress: walletAddress,
        });
        const deletedOrganisation = yield (organisation === null || organisation === void 0 ? void 0 : organisation.deleteOne());
        return deletedOrganisation;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.deleteOrganisation = deleteOrganisation;
