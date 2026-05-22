function isPrime(num) {
    for ( let i=2;i<num;++i) {
        if (num%i == 0) return false;
    }
    return true;
}

function printPrimes(num) {
    for (let i=2;i<=num;++i) {
        if(isPrime(i)) {
            alert(`prime is ${i} `);
        }
    }
}

let n = +prompt("Enter a number","");
printPrimes(n);