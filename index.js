// Write your solution in this file!
const employee = {
  name: "name",
  streetAdress: "streetAdress"
}

function updateEmployeeWithKeyAndValue(employee, name, value){
  const newEmployee = {...employee}
  newEmployee[name] = value
  return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
  const newEmployee = employee
  newEmployee[name] = value
  return newEmployee
}

function deleteFromEmployeeByKey(employee, key){
  const newEmployee = {...employee}
  delete newEmployee[key]
  return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key]
  return employee
}