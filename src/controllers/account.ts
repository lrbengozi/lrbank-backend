import { Request, Response, NextFunction } from "express";
import generateAccountDv from "../lib/generateAccountDv";

const accountController = {
  validate: (request: Request, response: Response, next: NextFunction) => {
    next();
  },
  create: async (request: Request, response: Response, next: NextFunction) => {
    console.log("sadasdsa");
    try {
      let account = "";
      for (let i = 0; i < 6; i++) {
        account += `${Math.floor(Math.random() * 10)}`;
      }

      const responseJson = {
        message: "Account opened successfully",
        data: {
          agency: "0001",
          account,
          accountDv: generateAccountDv(account),
        },
      };
      return response.status(201).json(responseJson);
    } catch (err) {
      return next(err);
    }
  },
};

export default accountController;
