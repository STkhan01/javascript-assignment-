//q15 change guest list

let guest = ["shadab", "rashid", "omar", "hashir"];

let guest2 = guest.splice(0,0, "Ali asghar");

let invitation = guest.map(dinner => { 
    return `${dinner}: " you are invited for dinner tonight"..`
});

let final = invitation.join("\n");

console.log(final);

// q15 part 2


var guest3 = ["shadab", "rashid", "omar", "hashir"];

guest3.push("sana");

var newfinal= `${guest3[4]} : "she cannot cook" `;

console.log(newfinal);


// q15 part 3 replace the name who cant cook to the other person


 guest3.splice(4,1, "Affan");

 replacedfinal= `${guest3[4]} : "you are invited"`

 console.log(replacedfinal);

 // q15 part 4 make 2nd set of invitation

 var setofinvitation = guest3.map(dinnerfinal => {
    return `${dinnerfinal}: "you are invited to the dinner tonight".`
 })

 final2 = setofinvitation.join("\n")

 console.log(final2);







