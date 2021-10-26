import { Router } from "express";
import status from "../controllers/status";
import createAccountController from "../controllers/CreateAccountController";
import { body } from "express-validator";

const RouteV1 = Router();

RouteV1.get("/api/v1/status", status.handle);

RouteV1.post(
  "/api/v1/account",
  body(
    ["fullName", "email", "password"],
    "This field is required and must be at least 5 characters."
  ).isLength({
    min: 5,
  }),
  body("email", "Invalid email").isEmail(),
  createAccountController.handle
);

export default RouteV1;
