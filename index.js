// Write your solution in this file!

const employee = {}

employee.name = "Sam"

function updateEmployeeWithKeyAndValue(obj,key,vaule){
const newObj = {...obj}

newObj[key] = vaule

return newObj
}
updateEmployeeWithKeyAndValue(employee,'streetAddress', '11 Broadway')

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
   obj[key] = value
    
    return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress','12 Broadway')

function deleteFromEmployeeByKey(obj, key){
const newObj = {...obj}

delete newObj[key]
return newObj
}
deleteFromEmployeeByKey(employee,'name')

function destructivelyDeleteFromEmployeeByKey(obj, key){
   const newEmployee ={...obj}
   delete obj[key]
return obj
}
destructivelyDeleteFromEmployeeByKey(employee,'name')