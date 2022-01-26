'use strict';
console.log("Hello");
function calcTotal(arr) {
    let total = 0;
    for (const i of arr) {
        total += i;
    }
    return total;
}

function calcAve(arr) {
    let total = calcTotal(arr);
    return parseFloat((total/arr.length).toFixed(3));
}

// retrive a list of employees objects
let employees = [];
for (let index = 0; index < window.localStorage.length; index++) {
    employees.push(JSON.parse(window.localStorage.getItem(`${1000+index}`)));
}

// build the database structure 
let departments = [
    {
        depName: "Administration",
        employeesNum: 0,
        salaries: [],
        aveSalary: 0,
        totalSalary: 0
    },
    {
        depName: "Development",
        employeesNum: 0,
        salaries: [],
        aveSalary: 0,
        totalSalary: 0
    },
    {
        depName: "Marketing",
        employeesNum: 0,
        salaries: [],
        aveSalary: 0,
        totalSalary: 0
    },
    {
        depName: "Finance",
        employeesNum: 0,
        salaries: [],
        aveSalary: 0,
        totalSalary: 0
    },
];

// fill the employeesNum and salaries values
for (const employee of employees) {
    switch(employee.departmentNew) {
        case("Administration"):
        departments[0].employeesNum += 1;
        departments[0].salaries.push(employee.salaryNew);
        break;
        case("Development"):
        departments[1].employeesNum += 1;
        departments[1].salaries.push(employee.salaryNew);
        break;
        case("Marketing"):
        departments[2].employeesNum += 1;
        departments[2].salaries.push(employee.salaryNew);
        break;
        case("Finance"):
        departments[3].employeesNum += 1;
        departments[3].salaries.push(employee.salaryNew);
        break;
    };
};

// fill the aveSalary and totalSalary values
for (let index = 0; index < 4; index++) {
    departments[index].aveSalary = calcAve(departments[index].salaries);
    departments[index].totalSalary = calcTotal(departments[index].salaries);
}

// display on the HTML page the td-cells
for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
        let element = document.getElementById(`${row}x${col}`);
        if (col == 0) {
            element.style = "background-color: #00ADB5; color: #222831;";
        } else {
            if (col == 1) {
                if (row == 0) {
                    element.textContent = departments[0].employeesNum;
                } else if (row == 1) {
                    element.textContent = departments[1].employeesNum;
                } else if (row == 2) {
                    element.textContent = departments[2].employeesNum;
                } else if (row == 3) {
                    element.textContent = departments[3].employeesNum;
                }
            } else if (col == 2) {
                if (row == 0) {
                    element.textContent = departments[0].totalSalary + " $";
                } else if (row == 1) {
                    element.textContent = departments[1].totalSalary + " $";
                } else if (row == 2) {
                    element.textContent = departments[2].totalSalary + " $";
                } else if (row == 3) {
                    element.textContent = departments[3].totalSalary + " $";
                }
            }if (col == 3) {
                if (row == 0) {
                    element.textContent = departments[0].aveSalary + " $";
                } else if (row == 1) {
                    element.textContent = departments[1].aveSalary + " $";
                } else if (row == 2) {
                    element.textContent = departments[2].aveSalary + " $";
                } else if (row == 3) {
                    element.textContent = departments[3].aveSalary + " $";
                }
            }
        }
    }
}

// display on the HTML page the total-cells
for (let id of ["employeesNum", "aveSalary", "totalSalary"]) {
    let total = 0;
    for (let index = 0; index < 4; index++) {
        total += departments[index][id];
    }
    let element = document.getElementById(id);
    element.textContent = parseFloat((total).toFixed(3));
    if (id != "employeesNum") {
        element.textContent += " $";
    }
}

