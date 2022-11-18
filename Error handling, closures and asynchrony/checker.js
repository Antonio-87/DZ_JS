
const password = 325658;
const checker = password => getPassword => password === getPassword;
const getPasswordChecker = checker(password);

console.log(getPasswordChecker(30));
console.log(getPasswordChecker(325115));
console.log(getPasswordChecker(''));
console.log(getPasswordChecker('gkjhk'));
console.log(getPasswordChecker(325658));