export const maskAccountNumber = accountNumber => accountNumber.replace(/.(?=.{4,}$)/g, '•');
