function prime_numbers(n) {
    const numbers = []

        nextPrime:
        for (let i = 2; numbers.length < n; i++) {

            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) continue nextPrime;
            }
        
            numbers.push(i);
            
        }       

        return numbers
}

console.time('index');
console.log(prime_numbers(process.argv[2]));
console.timeEnd('index');