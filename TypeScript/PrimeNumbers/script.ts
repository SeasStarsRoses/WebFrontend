class PrimeNumbers {
    isPrimeNumber(candidate) {
        for (var i = 2; i < candidate; i++) {
            if (candidate % i === 0) {
                return false;
            }
        } return true;
    }
    calculatePrimeNumbers() {
        let primeNumbers = '';
        for (var i = 1; i <= 100; i++) {
            const result = this.isPrimeNumber(i);
            if (i !== 1 && result === true) {
                primeNumbers = primeNumbers + i + ' ';
                console.log(i);
            }
        }
        return primeNumbers;
    }
}
var primeNumbers = new PrimeNumbers();
alert(this.primeNumbers.calculatePrimeNumbers());

