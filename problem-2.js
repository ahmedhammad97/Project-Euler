let sum = 2;
let x=1,y=2;
while(y<4000000){
  let z = x+y;
  x = y;
  y = z;
  if(z%2===0){sum+=z;}
}
console.log(sum);
