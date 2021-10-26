import { Request, Response } from "express";
import { CreateAccountService } from "../services/CreateAccountService";

class CreateAccountController {
  async handle(request: Request, response: Response) {
    try {
      const { fullName, email, password } = request.body;

      const createAccountService = new CreateAccountService();

      const account = await createAccountService.execute({
        fullName,
        email,
        password,
      });

      return response.json(account);
    } catch (error) {
      console.log("Chegou aqui");
      console.log(error);
      return response.status(500).json({
        message: "Erro ao realizar abertura da conta",
        error,
      });
    }
  }
}

export default new CreateAccountController();
