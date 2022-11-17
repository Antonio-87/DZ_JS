const rl = require('readline').createInterface(process.stdin, process.stdout);

function getPasswordChecker(password) {
    rl.question('Enter password: ', (get_password) => {
        if (get_password == password) {
            rl.close();
            console.log(true);
        } else {
            console.log(false);
            getPasswordChecker(password);
        } 
    })
}

getPasswordChecker(325658);