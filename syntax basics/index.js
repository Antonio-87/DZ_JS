while (true) {
	const numberToGuess = Math.floor(Math.random() * 1000) 

	console.log('Я загадал число', numberToGuess)

	const numberFromUser = prompt('Введите число 0 до 999:')

	console.log('Вы ввели', +numberFromUser)

	if (numberFromUser === 'q') {
		break;
	} else if (isNaN(numberFromUser)) {
		alert('Вы ввели не число!')
	} else if (+numberFromUser < numberToGuess) {
        alert('Вы вы ввели число меньше!')
    } else if (+numberFromUser > numberToGuess) {
        alert('Вы вы ввели число больше!')
    } else {
		alert('Вы угадали!')
	}
}