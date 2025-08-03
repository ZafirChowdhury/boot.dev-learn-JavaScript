/** Problem - 01 ( Divide the Asset ) */
var area = 2060;
console.log(area/2);

/** Problem - 02 ( Cycle or Laptop ) */
var money = 9999;

if (money >= 25000) {
    console.log("Laptop");
} else if (money >= 10000) {
    console.log("Cycle ");
} else {
    console.log("Chocolate");
}

/** Problem - 03 ( Medicine Planner ) */
var lastDay = 6;

for(var i = 1; i < lastDay+1; i++) {
    if (i % 3 === 0) {
        console.log(`${i} - medicine`);
    } else {
        console.log(`${i} - rest`);
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "slipdf.txt";

if (fileName.startsWith("#") 
    || fileName.includes(".pdf") 
        || fileName.includes(".docx")) {
            console.log("Store");
} else {
    console.log("Delete");
}

/** Problem 05 - PH Email Generator */
var student = {
    name: "jhankar", 
    roll: 1014, 
    department:"cse"
};

console.log(`${student.name}${student.roll}.${student.department}@ph.ac.bd`);

/** Problem 06 :  Current Salary ( Challenge Problem )  */
var startingSalary = 30000;
var experience = 40;

for (var y = 0; y < experience; y++) {
    startingSalary += (startingSalary * 0.05);
}

console.log(startingSalary.toFixed(2));
