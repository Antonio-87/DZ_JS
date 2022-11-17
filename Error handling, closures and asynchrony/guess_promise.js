const rl = require('readline').createInterface(process.stdin, process.stdout);

function question(quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (data) => {
            resolve(data);
        })
    })
}

async function guessNumber(hidden_number) {
    let count = 0;
    while (true) {
        const number = await question('Enter number: '); 
        if (number == hidden_number) {
            count += 1;
            rl.close();
            console.log("You guessed!");
            console.log(`Total attempts: ${count}`);
            break;
        } else if (number > hidden_number) {
            count += 1;
            console.log("Less");
            console.log(`Number of attempts: ${count}`);
        } else if (number < hidden_number) {
            count += 1;
            console.log("More");
            console.log(`Number of attempts: ${count}`);
        }
    }
}

guessNumber(20);