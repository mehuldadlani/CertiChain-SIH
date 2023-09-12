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
exports.deleteRequestController = exports.updateRequestController = exports.getAllRequestsController = exports.getRequestController = exports.createRequestController = void 0;
const request_services_1 = require("./request.services");
const createRequestController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield (0, request_services_1.createRequest)(req.body);
        res.status(201).json(request);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
exports.createRequestController = createRequestController;
const getRequestController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield (0, request_services_1.getRequest)(req.params.id);
        if (!request) {
            return res
                .status(200)
                .json({ success: false, message: "Request not found" });
        }
        res.status(200).json({ success: true, data: request });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
exports.getRequestController = getRequestController;
const getAllRequestsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requests = yield (0, request_services_1.getAllRequests)();
        res.status(200).json(requests);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
exports.getAllRequestsController = getAllRequestsController;
const updateRequestController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Request = yield (0, request_services_1.updateRequest)(req.params.id, req.body.status);
        res.status(200).json(Request);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
exports.updateRequestController = updateRequestController;
const deleteRequestController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield (0, request_services_1.deleteRequest)(req.params.id);
        res.status(200).json(request);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
exports.deleteRequestController = deleteRequestController;
