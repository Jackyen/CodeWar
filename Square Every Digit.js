function squareDigitsOld(num){
  
  let str = Array.from(num.toString())
  
  return Number.parseInt(str.reduce((acc,value)=>acc+Math.pow(Number.parseInt(value),2).toString(),''))
  
}

function squareDigitsNew(num){
  return Number((''+num).split('').map((val)=> val*val).join(''))
  
}
