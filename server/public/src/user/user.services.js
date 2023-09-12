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
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const user_schema_1 = __importDefault(require("./user.schema"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new user_schema_1.default(user);
        const savedUser = yield newUser.save();
        return savedUser;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.createUser = createUser;
const getUser = (walletAddress) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_schema_1.default.findOne({ walletAddress: walletAddress });
        return user;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.getUser = getUser;
const updateUser = (walletAddress, certificate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!certificate) {
            throw new Error();
        }
        const user = yield user_schema_1.default.findOne({ walletAddress: walletAddress });
        user === null || user === void 0 ? void 0 : user.certificates.push(certificate);
        const updatedUser = yield (user === null || user === void 0 ? void 0 : user.save());
        return updatedUser;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.updateUser = updateUser;
const deleteUser = (walletAddress) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_schema_1.default.findOne({ walletAddress: walletAddress });
        const deletedUser = yield (user === null || user === void 0 ? void 0 : user.deleteOne());
        return deletedUser;
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
});
exports.deleteUser = deleteUser;
