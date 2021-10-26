import { parse } from "path/posix";

const generateAccountDv = (account: string) => {
  const pesos = [2, 9, 8, 7, 6, 5];

  let soma = 0;

  for (let i = account.length - 1; i >= 0; i--) {
    let result = parseInt(account[i]) * pesos[i];

    soma += result;
  }

  const resto = soma % 11;

  if (resto >= 10) return "0";

  return resto.toString();
};

export default generateAccountDv;
