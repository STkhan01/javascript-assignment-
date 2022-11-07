//q 43

let magicians = ["ricky jay","mark wilson","pen n teller","lance burton"]
let greatMagicians = [];

function show_magicians(magiciansNames) {
  magiciansNames.map((item) => {
    console.log(item);
  });
}

function make_great(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    greatMagicians[i] = `"The Great ${magicians[i]}"`;
  }
}
make_great(magicians);

show_magicians(magicians);
show_magicians(greatMagicians);