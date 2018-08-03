let max = -1;

for(i=999; i>0; i--){
  for(k=i; k>0; k--){
    let product = i*k;
    if( product>max && isPalindrom(String(product)) ){max=product}
  }
}
console.log(max);

function isPalindrom(str){
  var re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
