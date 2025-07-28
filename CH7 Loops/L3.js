function printPrimes(max) {
    for (let n = 2; n <= max; n++) {
        if (n === 2) {
            console.log(n);
            continue;
        }

        if ((n % 2) === 0) {
            continue;
        }

        let isPrime = true;
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }     

        if (isPrime) {
            console.log(n);
        }
    }
}

printPrimes(10);
