let input = 600851475143;
for(i=2; i<input; i++){
  if(input%i === 0 && isPrime(input/i)){console.log(input/i); break;}
}



function isPrime (num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num !== 1;
}
