import { Router } from "express";
import status from "../controllers/status";
import userController from "../controllers/account";

const RouteV1 = Router();

RouteV1.get("/api/v1/status", status.handle);

RouteV1.post("/api/v1/account", userController.validate, userController.create);

export default RouteV1;
