var num = 13
var isPrime = true;

if (typeof num !== 'number') {
    console.log("Not a number.")
}

for (var i = 2; i < num / 2; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}

console.log("Is a prime number: " +isPrime)




