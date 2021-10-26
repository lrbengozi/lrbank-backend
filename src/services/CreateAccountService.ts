import { getCustomRepository } from "typeorm";
import { AccountRepositories } from "../repositories/AccountRepositories";
import generateAccountNumber from "../lib/generateAccountNumber";
import generateAccountDv from "../lib/generateAccountDv";

interface ITaskRequest {
  fullName: string;
  email: string;
  password: string;
}

export class CreateAccountService {
  async execute({ fullName, email, password }: ITaskRequest) {
    const accountRepositories = getCustomRepository(AccountRepositories);

    const emailAlreadyExists = await accountRepositories.findOne({
      email,
    });

    if (emailAlreadyExists) {
      throw "E-mail already exists";
    }

    const account = generateAccountNumber();
    const accountDv = generateAccountDv(account);

    const task = accountRepositories.create({
      full_name: fullName,
      email,
      password,
      agency: "0001",
      account,
      account_dv: accountDv,
    });

    await accountRepositories.save(task);

    return task;
  }
}
