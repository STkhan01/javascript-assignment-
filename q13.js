//q14 guest list

let guest = ["shadab", "rashid", "omar", "hashir"];

let invitation = guest.map(dinner => { 
    return `${dinner}: " you are invited for dinner tonight"..`
});

let final = invitation.join("\n");

console.log(final);