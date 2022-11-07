// q28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// part 1

//• If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

let age = 3;
 if (age < 2){
    console.log("the person is not a bay")
 }
 else {
   console.log("the person is a baby")
 };

 let age2 = 3.5;
 if (age2 <= 2 && age2 < 4){
    console.log("the person is not a toddler")
 }
 else{
    console.log("the person is a toddler")
 }

 let age3 = 10;
 if(age3 <= 4 && age3 < 13){
    console.log("the person is not a kid")
 }
 else{
    console.log("the peson is a kid")
 }

 let age4 = 18;
 if (age4 <= 13 && age4 < 20){
console.log("the person is not a teenager")
 }else{
    console.log("the person is a teenager")
 }
let age5 = 20;
if (age5 <= 20 && age5 < 65){
    console.log("the person is an adult")
}else{
    console.log("the person is not an adult")
}
let age6 = 65;
if (age6 == 65 || age > 65){
    console.log("the person is elder")
}
else{
    console.log("the person is not an elder")
}
