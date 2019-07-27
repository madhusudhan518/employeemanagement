export function getSubSubOrdinatesList(subordinates, employees){
  var subSubOrdinates = [];
  subordinates && subordinates.forEach((subordinate=>{
    const details = employees[subordinate.toLowerCase()];
    const subordinates = details && details['direct-subordinates'];
    subordinates && subordinates.forEach((name)=>{
      subSubOrdinates.push(name);
    })
  }))
  return subSubOrdinates.filter((el,i,array)=> i === array.indexOf(el));
}