function isPrimeNumber(candidate) {
    for (var i = 2; i < candidate; i++) {
        if (candidate % i === 0) {
            return false;
        }
    }
    return true;
}
function calculatePrimeNumbers() {
    var primeNumbers = '';
    for (var i = 1; i <= 100; i++) {
        var result = isPrimeNumber(i);
        if (i !== 1 && result === true) {
            primeNumbers = primeNumbers + i + ' ';
            console.log(i);
        }
    }
}
