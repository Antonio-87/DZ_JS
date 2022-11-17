const fs = require('fs');
const rl = require('readline').createInterface(process.stdin, process.stdout);


let count = 0;

function guessNumber(hidden_number) {
    rl.question('Enter number: ', (number) => {
        const number_str = number;  
        if (number == hidden_number) {
            count += 1;
            rl.close();
            const answer = "You guessed!";
            console.log(answer);
            const attempts = `Total attempts: ${count}`;
            console.log(attempts);
            wFile(number_str, answer, attempts);
        } else if (number > hidden_number) {
            count += 1;
            const answer = "Less";
            console.log(answer);
            const attempts = `Number of attempts: ${count}`;
            console.log(attempts);
            wFile(number_str, answer, attempts);
            guessNumber(hidden_number);
        } else if (number < hidden_number) {
            count += 1;
            const answer = "More";
            console.log(answer);
            const attempts = `Number of attempts: ${count}`;
            console.log(attempts);
            wFile(number_str, answer, attempts);
            guessNumber(hidden_number);
        }
    })
}

function wFile(number_str, answer, attempts) {
    const str = `\nEntered number: ${number_str},\n${answer},\n${attempts}\n////////////////////////`
    fs.appendFile('./logfile.txt', str, function(error) {if(error) throw error;});
}

guessNumber(100);