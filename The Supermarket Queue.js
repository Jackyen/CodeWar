function queueTime(customers, n) {
  if(customers.length === 0)
    return 0;
  let pool = [];
  let index = 0;
  
  for(let i=0;i<n;i++)
    pool.push(0);  
  
  while(customers.length > 0){
    index = pool.indexOf(Math.min.apply(null,pool));
    pool[index] += customers.shift();
  }
  return Math.max.apply(null,pool)
  
}
