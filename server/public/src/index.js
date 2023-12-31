"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const connectDB_1 = __importDefault(require("./utils/connectDB"));
const user_routes_1 = __importDefault(require("./user/user.routes"));
const organisation_routes_1 = __importDefault(require("./organisation/organisation.routes"));
const request_routes_1 = __importDefault(require("./request/request.routes"));
dotenv_1.default.config();
(0, connectDB_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT;
const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use("/api/v1/users", user_routes_1.default);
app.use("/api/v1/organisations", organisation_routes_1.default);
app.use("/api/v1/requests", request_routes_1.default);
app.get("/", (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now(),
    };
    try {
        res.send(healthcheck);
    }
    catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
});
app.listen(port, () => {
    console.log(`App running on ${port} port`);
});
