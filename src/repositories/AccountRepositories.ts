import { EntityRepository, Repository } from "typeorm";

import { Account } from "../models/Account";

@EntityRepository(Account)
export class AccountRepositories extends Repository<Account> {}
