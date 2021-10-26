const generateAccountNumber = () => {
  let account = "";
  for (let i = 0; i < 6; i++) {
    account += `${Math.floor(Math.random() * 10)}`;
  }

  return account;
};

export default generateAccountNumber;
