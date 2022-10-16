function isPrime(num) {
  if (num <= 0) return false
  var temp = parseInt(Math.sqrt(num))
  for (var i = 2; i <= temp; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(123))
console.log(isPrime(4))
console.log(isPrime(37))