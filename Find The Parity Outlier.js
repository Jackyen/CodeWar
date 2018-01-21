function findOutlier(integers){  
  let old = integers.filter((val)=> val % 2 );
  
  let even = integers.filter((val)=> (val % 2)===0 );
  
  return (old.length === 1)? old[0]: even[0];
}
