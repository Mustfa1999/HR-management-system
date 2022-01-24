'use strict';

let Info = {
    ID: [1000, 1001, 1002, 1003, 1004, 1005, 1006],
    FullName: ["Ghazi Samer", "Lana Ali", "Tamara Ayoub", "Safi Walid", "Omar Zaid", "Rana Saleh", "Hadi Ahmad"],
    Department: ["Administration", "Finance", "Marketing", "Administration", "Development", "Development", "Finance"],
    Level: ["Senior", "Senior", "Senior", "Mid-Senior", "Senior", "Junior", "Mid-Senior"], 
}

function Employee(employeeId, fullName, department, level) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;       // Administration, Marketing, Development, Finance
    this.level = level;                 // Junior, Mid-Senior, Senior
    // this.imageURL = imageURL;
    this.salary = this.calculatingSalary(this.level);
}

Employee.prototype.calculatingSalary = function(myLevel) {
    let max;
    let min;
    if(myLevel == "Junior") {
        max = 1000;
        min = 500;
    } else if(myLevel == "Mid-Senior") {
        max = 1500;
        min = 1000;
    } else if(myLevel == "Senior") {
        max = 2000;
        min = 1500;
    }
    let initialSalary = Math.random() * (max - min) + min;
    let tax = initialSalary * 0.075;
    let netSalary = Math.floor(initialSalary - tax);
    return netSalary;
}

Employee.prototype.render = function() {
    document.write(`<tr> 
    <td> ${this.employeeId} </td> 
    <td> ${this.fullName} </td> 
    <td> ${this.department} </td> 
    <td> ${this.level} </td> 
    <td> ${this.salary} </td> 
    </tr>`)
}

const employee0 = new Employee(Info.ID[0], Info.FullName[0], Info.Department[0], Info.Level[0]); 
const employee1 = new Employee(Info.ID[1], Info.FullName[1], Info.Department[1], Info.Level[1]); 
const employee2 = new Employee(Info.ID[2], Info.FullName[2], Info.Department[2], Info.Level[2]); 
const employee3 = new Employee(Info.ID[3], Info.FullName[3], Info.Department[3], Info.Level[3]); 
const employee4 = new Employee(Info.ID[4], Info.FullName[4], Info.Department[4], Info.Level[4]); 
const employee5 = new Employee(Info.ID[5], Info.FullName[5], Info.Department[5], Info.Level[5]); 
const employee6 = new Employee(Info.ID[6], Info.FullName[6], Info.Department[6], Info.Level[6]); 

document.write(`<table>`)
document.write(`<tr> 
    <th> Employee ID </th> 
    <th> Full Name </th> 
    <th> Department </th> 
    <th> Level </th> 
    <th> Salary </th> 
    <th> Image </th> 
    </tr>`);
employee0.render();
employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
document.write(`</table>`)
