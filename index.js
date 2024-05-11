// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  //Initializes empty array for user to input data
  const employees = [];
  //Tells browseer that whilst data is inputted run a loop until user selects no
  let addEmployee = true;

  // TODO: Get user input to create and return an array of employee objects
  //begins loop
  while (addEmployee) {
    const firstName = prompt('Enter employee first name:');
    const lastName = prompt('Enter employee last name:');
    let salary = prompt('Enter employee salary:');
    
    // Validate the salary input
    while (isNaN(parseFloat(salary))) {
        salary = prompt('Please enter a valid number for salary:');
    }
    
    employees.push({
        firstName: firstName,
        lastName: lastName,
        salary: parseFloat(salary)
    });

    const addMore = confirm('Do you want to add another employee?');
    //This is where if user selects no to add more then tells browswer not true and returns as false 
    if (!addMore) {
        addEmployee = false;
    }
}

return employees;
};






// Display the average salary
const displayAverageSalary = function(employeesArray) {
  //using employeesArray here refers (I believe) to the previous array generated when collecting employee data
  
  //Initializes a variable to track total salary of employees
  let totalSalary = 0
  //Calculates the total salary of all employees
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  //Calculates the average salary by taking total and dividing it by the length of employeesArray
  let averageSalary = totalSalary / employeesArray.length;

  //Then we need to console.log to display the average to the console
  console.log(`Average salary: $${averageSalary.toFixed(2)}`)
  //.toFixed(#) tells the browser the amount of decimals we would like to round to for our result.
  
  return averageSalary;
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //Seems the same as the previous task but a bit different in that instead of dividing to acquire an average we are selecting a randomly generated number

  
  let totalEmployees = 0

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
