// q30

let usernames = ["admin","kanwal", "fozi", "rooma", "zohra"];

usernames.forEach((item) => {
  item === "admin"
    ? console.log(`Hello admin, would you like to see a status report?`)
    : console.log(`Hello ${item}, thank you for logging in again`);
});

//q31

let user2 = usernames.length
console.log(user2);
if(user2 < 1){
  console.log("we need to find some user")
};

usernames.pop();
usernames.pop();
usernames.pop();
usernames.pop();
usernames.pop();

console.log(usernames);

if (usernames.length < 1 ){
  console.log("we need to find some user")
};

