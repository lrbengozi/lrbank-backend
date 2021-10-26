import { Router } from "express";
import status from "../controllers/status";

const RouteV1 = Router();

RouteV1.get("/v1/status", status.handle);

export default RouteV1;
