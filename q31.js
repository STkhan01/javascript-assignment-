// q36 shirts with function

function make_shirts(size, message){
console.log(`on the shirt ${size} n the massage will be on it is ${message}`)

}
make_shirts("'SM'" , "'time is precious'")
make_shirts("'L'" , "'do not waste your time'" )
make_shirts("'XL'", "'take your time'")

// q 37 

function large_shirt(size = "L", message = "'i love javascript'."){
console.log(`on the shirt ${size} n the massage will be on it is ${message}`)
}

large_shirt(),
large_shirt("'M"),
large_shirt("'SM'", "'we love Sir Zia'.")

