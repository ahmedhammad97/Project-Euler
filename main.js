let num = 20*20;
while(true){
  let flag = true;
  for(i=20; i>1; i--){
    if(num%i !== 0){flag=false; break;}
  }
  if(flag){console.log(num); break;}
  num++;
}
