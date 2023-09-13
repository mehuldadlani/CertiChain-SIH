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
exports.deleteRequest = exports.updateRequest = exports.getAllRequests = exports.getRequest = exports.createRequest = void 0;
const request_schema_1 = __importDefault(require("./request.schema"));
const createRequest = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRequest = new request_schema_1.default(request);
        const savedRequest = yield newRequest.save();
        return savedRequest;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.createRequest = createRequest;
const getRequest = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield request_schema_1.default.findById(id);
        return request;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.getRequest = getRequest;
const getAllRequests = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requests = yield request_schema_1.default.find();
        return requests;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.getAllRequests = getAllRequests;
const updateRequest = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield request_schema_1.default.findByIdAndUpdate(id, { status: status }, { new: true });
        const updatedRequest = yield (request === null || request === void 0 ? void 0 : request.save());
        return updatedRequest;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.updateRequest = updateRequest;
const deleteRequest = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield request_schema_1.default.findById(id);
        const deletedRequest = yield (request === null || request === void 0 ? void 0 : request.deleteOne());
        return deletedRequest;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.deleteRequest = deleteRequest;
