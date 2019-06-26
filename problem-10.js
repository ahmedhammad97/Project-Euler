const threshold = 2000000;
var sum = 0;

function isPrime(num){
  for(let i=2; i <= num**0.5; i++){
    if(num % i === 0) return false;
  }
  return true;
}

for(let i=2; i < threshold; i++){
  if(isPrime(i)) sum += i;
}

console.log(sum);
