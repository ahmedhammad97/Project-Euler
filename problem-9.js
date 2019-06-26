const sum = 1000

for(let a=1; a<999; a++){
  for(let b=a+1; b<999; b++){
    let c = sum - a - b;
    if(a**2 + b**2 === c**2){
      console.log("Numbers are: ", a, b, c);
      console.log("Their product: ", a*b*c);
    }
  }
}
