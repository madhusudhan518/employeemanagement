export function getSubOrdinatesList(list,name, employees){
  const employee = employees[name.toLowerCase()];
  const subordinates = employee && employee['direct-subordinates']
  subordinates && subordinates.forEach((subordinate)=>{
      list.push(subordinate);
      getSubOrdinatesList(list,subordinate,employees );
    })
  // return subSubOrdinate.filter((el,i,array)=> i === array.indexOf(el));
}