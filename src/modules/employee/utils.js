export function getSubOrdinatesList(list,name, employees){
  const employee = employees[name.toLowerCase()];
  const subordinates = employee && employee['direct-subordinates']
  subordinates && subordinates.forEach((subordinate)=>{
      list.push(subordinate);
      getSubOrdinatesList(list,subordinate,employees );
    })
  // return subSubOrdinate.filter((el,i,array)=> i === array.indexOf(el));
}


export function getTreeData(empName, employees){
  const employee = employees[empName.toLowerCase()];
  var treeData = [];
  if(employee){
    var treeObject = 
      {
           "key": empName,
          "label": empName,
          "designation": employee.designation
      }
    treeObject['nodes'] = [];
     readSubordinates(empName, employees).forEach((l1subordinate,l1index)=>{
          treeObject['nodes'].push(
            {
               "key":l1subordinate,
               "label": l1subordinate,
               "designation": employees[l1subordinate.toLowerCase()].designation
             }
          )
          treeObject['nodes'][l1index]['nodes'] =[];
            readSubordinates(l1subordinate, employees).forEach((l2subordinate,l2index)=>{
                treeObject['nodes'][l1index]['nodes'].push({
                    "key": l2subordinate,
                    "label":l2subordinate,
                    designation: employees[l2subordinate.toLowerCase()].designation
                  }
                )
                treeObject['nodes'][l1index]['nodes'][l2index]['nodes'] = [];
                readSubordinates(l2subordinate,employees).forEach((l3subordinate, l3index)=>{
                  treeObject['nodes'][l1index]['nodes'][l2index]['nodes'].push(
                    {
                      "key":l3subordinate,
                      "label": l3subordinate,
                      designation: employees[l3subordinate.toLowerCase()].designation
                    }
                  )
                })
            })
          })
    treeData.push(treeObject);
  }
  return treeData;
}

function readSubordinates(name, list){
  const employee = list[name.toLowerCase()];
  const subordinates = employee && employee['direct-subordinates'];
  if(subordinates && subordinates.length){
    return subordinates;
  }else{
    return [];
  }
}