let rank = process.argv.slice(2)[0];

let counter=1, primeCounter=0;
while(true){
  if(isPrime(counter)){
    if(primeCounter==rank-1){console.log(counter); break;}
    primeCounter++;
  }
  counter++;
}

function isPrime (num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num !== 1;
}
