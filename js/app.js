'use strict';

var uniqueID = 999;

let Info = {
    FullName: ["Ghazi Samer", "Lana Ali", "Tamara Ayoub", "Safi Walid", "Omar Zaid", "Rana Saleh", "Hadi Ahmad"],
    Department: ["Administration", "Finance", "Marketing", "Administration", "Development", "Development", "Finance"],
    Level: ["Senior", "Senior", "Senior", "Mid-Senior", "Senior", "Junior", "Mid-Senior"], 
    ImgURL: ["assets/Ghazi.jpg", "assets/Lana.jpg", "assets/Tamara.jpg", "assets/Safi.jpg", "assets/Omar.jpg", "assets/Rana.jpg", "assets/Hadi.jpg"],
}

function Employee(fullName, department, level, imgURL) {
    this.employeeId = this.IdGenerator(uniqueID);
    this.fullName = fullName;
    this.department = department;       // Administration, Marketing, Development, Finance
    this.level = level;                 // Junior, Mid-Senior, Senior
    this.imgURL = imgURL;
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

Employee.prototype.IdGenerator = function(myUniqueID) {
    let newId = myUniqueID + 1;
    uniqueID ++;
    return newId 
}

Employee.prototype.render = function() {
    let newCard = document.createElement("div");
    newCard.style = "border-radius: 10px; padding: 15px; margin:10px; width: 250px; height: 1fr; background-color: #222831; display: flex; align-items: center; flex-direction: column;";
    
    let newImg = document.createElement("img");
    newImg.style = "width: 200px; height: 200px; border-radius: 10px;";
    newImg.src = this.imgURL;
    newImg.alt = this.fullName;
    newCard.appendChild(newImg);
    
    let textInfo = document.createElement("p");
    textInfo.innerHTML = 
        `Name: ${this.fullName} <br>
         ID: ${this.employeeId} <br>
         Department: ${this.department} <br> 
         Level: ${this.level} <br>
         Salary: ${this.salary} <br> `;
    textInfo.style = "width: 200px; height: 100px; margin: 10px; color: white; font-weight: bold";
    newCard.appendChild(textInfo);

    let rightContainer = document.getElementById("cards");
    rightContainer.appendChild(newCard);
    


    let newCard2 = document.createElement("div");
    newCard2.style = "border-radius: 10px; padding: 15px; margin:10px; width: 170px; height: 1fr; background-color: #222831; display: flex; align-items: center; flex-direction: column;";
    
    let newImg2 = document.createElement("img");
    newImg2.style = "width: 150px; height: 150px; border-radius: 10px;";
    newImg2.src = this.imgURL;
    newImg2.alt = this.fullName;
    newCard2.appendChild(newImg2);

    let textInfo2 = document.createElement("p");
    textInfo2.innerHTML = 
        `Name: ${this.fullName} <br>
         ID: ${this.employeeId} <br>
         Department: ${this.department} <br> 
         Level: ${this.level} <br>
         Salary: ${this.salary} <br> `;
    textInfo2.style = "width: 150px; height: 100px; margin: 10px; color: white; font-weight: bold";
    newCard2.appendChild(textInfo2);
    
    let idSelection;
    switch(this.department) {
        case "Administration": idSelection = "Administration-Section";break;
        case "Marketing": idSelection = "Marketing-Section";break;
        case "Development": idSelection = "Development-Section";break;
        case "Finance": idSelection = "Finance-Section";break;
        }

    let depSec = document.getElementById(idSelection);
    depSec.appendChild(newCard2);
}

const employee0 = new Employee(Info.FullName[0], Info.Department[0], Info.Level[0], Info.ImgURL[0]); 
const employee1 = new Employee(Info.FullName[1], Info.Department[1], Info.Level[1], Info.ImgURL[1]);
const employee2 = new Employee(Info.FullName[2], Info.Department[2], Info.Level[2], Info.ImgURL[2]);
const employee3 = new Employee(Info.FullName[3], Info.Department[3], Info.Level[3], Info.ImgURL[3]);
const employee4 = new Employee(Info.FullName[4], Info.Department[4], Info.Level[4], Info.ImgURL[4]);
const employee5 = new Employee(Info.FullName[5], Info.Department[5], Info.Level[5], Info.ImgURL[5]);
const employee6 = new Employee(Info.FullName[6], Info.Department[6], Info.Level[6], Info.ImgURL[6]);

employee0.render();
employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();

let button = document.getElementById("myForm");
button.addEventListener("submit", buttonHandler);
function buttonHandler() { 
    let newEmployeeName = document.getElementById("Full-Name").value;
    let newEmployeeDepartment = document.getElementById("Department").value;
    let newEmployeeLevel = document.getElementById("Level").value;
    let newEmployeeImg = document.getElementById("Image-url").value;
    const newEmployee = new Employee(newEmployeeName, newEmployeeDepartment, newEmployeeLevel, newEmployeeImg);
    newEmployee.render();
    event.preventDefault();
 }; 

