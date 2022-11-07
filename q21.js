// //more conditional test

let my_name = "Seemab Tauseef Khan";
let married =  "yes";
let kids    = 2;
let siblings = "3";
let H_name = "Tauseef khan";
let my_edu = "Msc in biochem";
let H_edu = "MBA";
let H_job = "finance Asst.manager";
let my_mother = "Shazia Ashraf";
let my_father = "Ashraf tariq";
let b_name = "Ali haider";
let s_name = "sadaf tariq"
let kidsname = ["shafan","abdul bari"];

// string test
let stringtest = my_name === "Seemab Tauseef Khan"? true:false;
console.log(stringtest);

// case test

let casetest = H_name == "tauseef khan"? true: false;
console.log(casetest)

// numtest
let numerictest = kids !== 2 ? true: false;
console.log(numerictest);

let numtest =numerictest < 5 ? true: false;

console.log(numtest);

let numtest1 =numerictest > 5 ? true: false;
console.log(numtest1);

let numtest2 =numerictest >= 5 ? true: false;
console.log(numtest2);

let numtest3 =numerictest <= 5 ? true: false;
console.log(numtest3);

// using and or or
let logicaltest = numtest && numtest1 ? true: false;
console.log(logicaltest);
 
let logicaltest0 = numtest || numtest2 ? true: false;
console.log(logicaltest0);
 
// array

let arr = kidsname.includes("kashaf")? true: false;
console.log(arr);

let arr1 = !kidsname.includes("kashaf")? true: false;
console.log(arr1);