let sum=0, sumSquare=0;
for(i=1; i<=100; i++){
  sum+=i;
  sumSquare+=(Math.pow(i,2));
}
console.log(Math.pow(sum,2) - sumSquare);
