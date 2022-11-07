// q16 part 1 more new guest

var guest = ["hafsa", "afiya", "habib"];

var bigtable = guest.map(party => {
    return `${party}: i just found a bigger table for dinner... would you like to join?`

});

    atable=bigtable.join("\n");
    console.log(atable);

    // part 2 adding a person start of the array

    guest.unshift("farheen")
 console.log(guest);

    // add an element to the middl3

    guest.splice(2,0,"hassan");
    console.log(guest);

    //part 3 add element using element

    var partyy= guest.map(dinner2 => {
return `${dinner2} : now we are having a big table for dinner`

    })


console.log(partyy.join("\n"));

//q17 shrink guest

guest.pop()

console.log(guest);

var smalltable = guest.map((dinneroff => {
    return `${dinneroff} : " the dinnertable become small now "`
}))
console.log(smalltable.join("\n"));

// q17 part 2 

guest.pop();
guest.pop();


var a= (guest);
console.log(a);


// q17 part3 

var shrinktable = a.map((dinnerf => {
return `${dinnerf} : "we have only 2 space for dinner"`

}))

console.log(shrinktable.join("\n"));

//q17 part4

var removeguest = guest.pop()

rguest = `${removeguest} sorry i cannot invite you for dinner`

console.log(rguest);

var removeguest2 = guest.pop()
reguest = `${removeguest2} sorry i cannot invite you for dinner`

console.log(reguest);

// no guest available

console.log(guest); // no guest in the array now


